import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'; 

export const register =async(req,res)=>{

    const {email,password,name,role,photo,gender,confirmpassword,contact,age,address,specialization,hospital,proof}=req.body

    try{
       let user=null 
    if(role==='patient'){
        user=await User.findOne({email})
    }
    else if(role==='doctor'){
      user=await Doctor.findOne({email})
    }

    if(user){
        return res.status(400).json({message:"user already exists"})
    }

    const salt=await bcyrpt.genSalt(10)
    const hashpassword =await bcyrpt.hash(password,salt)

    if(role==='patient'){
        user =new User({
              name,
              email,
              password:hashpassword,
              confirmpassword:hashpassword,
              contact,
              age,
              address,
              gender,
              role
        })
    }

    if(role==='doctor'){
        user =new Doctor({
            role,
              name,
              email,
              password:hashpassword,
              confirmpassword:hashpassword,
              contact,
              age,
              gender,
              specialization,
              hospital,
              proof
              
        })
    }

    await user.save()

    res.status(200).json({success:true,message:'user succesfully created'})

    }

    catch(err){
    res.status(500).json({success:false,message:'Internal server error,try again'})
    }
};


export const login =async(req,res)=>{
    try{

    }
    catch(err){

    }
}