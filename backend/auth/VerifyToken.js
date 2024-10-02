// import jwt from "jsonwebtoken";
// import Doctor from '../models/DoctorSchema.js'
// import User from '../models/UserSchema.js'


// export const authenticate = async (req,res,next)=>{
    
//     //get token from header
//     const authToken = req.headers.authorizatioon 

//     //check token is exists
//     if(!authToken || !authToken.startsWith('Bearer '))
//     {
//         return res.status(401).json({success:false,message:'No token , authorization denied'})
//     }

//     try{
//         console.log(authToken);
//         const token = authToken.split(" ")[1];

//         //verify token 
//         const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
//         req.userId = decoded.id;
//         req.role = decoded.role;
        
//         next()
//     }
//     catch(err){
//         console.log(err); 
//         if(err.name === 'TokenExpiredError'){
//             return res.status(401).json({message:'Token is Expired'})
//         }
//         return res.status(401).json({success:false,message:'Invalid Token'})
//     }
// } 

// export const restrict = async(req,res,next)=>{
//     const userId = req.userId

//     let user;

//     const patient = await User.findById(userId)
//     const doctor = await Doctor.findById(doctorId)

//     if(patient){
//         user = patient;
//     }
//     if(doctor){
//         user = doctor
//     }

//     if(!roles.includes(user.role)){
//         return res.status(401).json({success:false,message:"You are not authorized"})
//     }

//     next();
// }






import jwt from "jsonwebtoken";
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    // Get token from header
    const authToken = req.headers.authorization; // Corrected typo

    // Check if token exists
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        console.log(authToken);
        const token = authToken.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        req.role = decoded.role;

        next();
    } catch (err) {
        console.log(err);
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' });
        }
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export const restrict = (roles) => {
    return async (req, res, next) => {
        const userId = req.userId;

        let user;

        try {
            const patient = await User.findById(userId);
            const doctor = await Doctor.findById(userId); // Corrected variable name

            if (patient) {
                user = patient;
            } else if (doctor) {
                user = doctor;
            }

            if (!user || !roles.includes(user.role)) {
                return res.status(401).json({ success: false, message: "You are not authorized" });
            }

            next();
        } catch (err) {
            res.status(500).json({ success: false, message: "Server error" });
        }
    };
};
