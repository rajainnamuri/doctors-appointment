// import User from '../models/UserSchema.js'
// import Doctor from '../models/DoctorSchema.js'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'; 
// // import { message } from 'statuses';

// //***************************************************************kp
// //import express from 'express';
// const tokenVerify=require('../middlewares/tokenVerify.js')
// const expressAsyncHandler=require('express-async-handler')
// //***************************************************************kp


// // ***********************************************************************************kp
// //const app = express();
// //add body parser middleware
// app.use(exp.json());

// //create sample rest api(req handlers- routes)
// //route to get users(protected route)
// app.get("/users", tokenVerify,expressAsyncHandler(async (req, res) => {
//   //get usersCollection obj
//   const usersCollection = req.app.get("usersCollection");
//   //get users data from usersCollection of DB
//   let usersList = await usersCollection.fnd().toArray();
//   //send users data to client
//   res.send({ message: "users", payload: usersList });
// }));



// //route to send one user by id(protected route)
// app.get("/users/:email", tokenVerify,expressAsyncHandler(async(req, res) => {
//   //get usersCollection obj
//   const usersCollection = req.app.get("usersCollection");
//   //get id from url
//   const emailOfUrl=req.params.email;
//   //find user by id
//   let user=await usersCollection.findOne({email:{$eq:emailOfUrl}})
//   //send res
//   res.send({message:"one user",payload:user})
// }));

// //***********************************************************************************kp



// const generateToken = user=>{
//     return jwt.sign({id:user.id ,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
// }

// export const register =async(req,res)=>{

//     const {email,password,name,role,photo,gender,confirmpassword,contact,age,address,specialization,hospital,proof}=req.body

//     try{
//        let user=null; 
//        if(role==='patient'){
//         user=await User.findOne({email})
//     }
//     else if(role==='doctor'){
//       user=await Doctor.findOne({email})
//     }

//     //checking user existed or not
//     if(user){
//         return res.status(400).json({message:"user already exists"})
//     }

//     //hash password
//     const salt=await bcrypt.genSalt(7)
//     const hashpassword =await bcrypt.hash(password,salt)

//     if(role==='patient'){
//         user =new User({
//               name,
//               email,
//               password:hashpassword,
//               confirmpassword:hashpassword,
//               contact,
//               age,
//               photo,
//               address,
//               gender,
//               role
//         });
//     }

//     if(role==='doctor'){
//         user =new Doctor({
//             role,
//               name,
//               email,
//               password:hashpassword,
//               confirmpassword:hashpassword,
//               contact,
//               age,
//               gender,
//               specialization,
//               hospital,
//               proof,
//               photo
              
//         })
//     }

//     await user.save()

//     res.status(200).json({success:true,message:'user succesfully created'})

//     }

//     catch(err){
//     res.status(500).json({success:false,message:'Internal server error,try again'})
//     }
// };


// export const login =async(req,res)=>{

//     const {email,password} = req.body;

//     try{
//         let user = null

//         const patient = await User.findOne({email})
//         const doctor = await Doctor.findOne({email})

//         if(patient){
//             user = patient;
//         }
//         if(doctor){
//             user = doctor;
//         }

//         //not exist
//         if(!user){
//             return res.status(404).json({message: "User does not exist"})
//         }

//         //if found then we have to check the password
//         const CheckingPassword = await bcrypt.compare(password,user.password)

//         if(!CheckingPassword)
//         {
//             return res.status(400).json({status:false,message:"Invalid password" })
//         }

//         //if password is matched we generate an authentication token
//         const AuthToken = generateToken(user);

//         // const {password,role,appointments, ...rest} = user._doc
//          const { password: userPassword, role, appointments, ...rest } = user._doc;

//         res.status(200).json({status:true,message: "Login Success" , AuthToken , data:{ ...rest},role});
//     }
//     catch(err){
//         res.status(500).json({status:false,message:"Invalid Credintails Failed to Login"})
//     }
// }



import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import tokenVerify from '../middlewares/tokenVerify.js';
import express from 'express'

// Add body parser middleware
const app = express();
app.use(express.json());

// Route to get users (protected route)
app.get("/patients", tokenVerify, expressAsyncHandler(async (req, res) => {
  // Get usersCollection object
  const usersCollection = req.app.get('patientsCollection');
  // Get users data from usersCollection of DB
  let usersList = await usersCollection.find().toArray();
  // Send users data to client
  res.send({ message: "users", payload: usersList });
}));

// Route to send one user by email (protected route)
app.get("/patients/:email", tokenVerify, expressAsyncHandler(async (req, res) => {
  // Get usersCollection object
  const usersCollection = req.app.get("patientCollection");
  // Get email from URL
  const emailOfUrl = req.params.email;
  // Find user by email
  let user = await usersCollection.findOne({ email: { $eq: emailOfUrl } });
  // Send response
  res.send({ message: "one user", payload: user });
}));

const generateToken = user => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
}

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender, confirmpassword, contact, age, address, specialization, hospital, proof } = req.body;

  try {
    let user = null;
    if (role === 'patient') {
      user = await User.findOne({ email });
    } else if (role === 'doctor') {
      user = await Doctor.findOne({ email });
    }

    // Checking if user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(7);
    const hashpassword = await bcrypt.hash(password, salt);

    if (role === 'patient') {
      user = new User({
        name,
        email,
        password: hashpassword,
        confirmpassword: hashpassword,
        contact,
        age,
        photo,
        address,
        gender,
        role
      });
    }

    if (role === 'doctor') {
      user = new Doctor({
        role,
        name,
        email,
        password: hashpassword,
        confirmpassword: hashpassword,
        contact,
        age,
        gender,
        specialization,
        hospital,
        proof,
        photo
      });
    }

    await user.save();

    res.status(200).json({ success: true, message: 'User successfully created' });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal server error, try again' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    // If user does not exist
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ status: false, message: "Invalid password" });
    }

    // Generate authentication token
    const authToken = generateToken(user);

    const { password: userPassword, role, appointments, ...rest } = user._doc;

    res.status(200).json({ status: true, message: "Login Success", authToken, data: { ...rest }, role });
  } catch (err) {
    res.status(500).json({ status: false, message: "Invalid credentials, failed to login" });
  }
}
