import User from "../models/UserSchema.js"

import BookingSchema from "../models/BookingSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";

export const updateUser = async(req,res)=>{
    const id = req.params.id

    try{
        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true,message:"Successfully updated",data:updateUser});
    }
    catch(err){
        res.status(500).json({success:false,message:"Failed  to update"});
    }
}


export const deleteUser = async(req,res)=>{
    const id = req.params.id

    try{
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully deleted",data:deleteUser});
    }
    catch(err){
        res.status(500).json({success:false,message:"Failed  to delete"});
    }
}

export const getSingleUser = async(req,res)=>{
    const id = req.params.id

    try{
        const user = await User.findById(id).select("-password");
        res.status(200).json({success:true,message:"User found",data:user});
    }
    catch(err){
        res.status(500).json({success:false,message:"NO user found"});
    }
}

export const getAllUser = async(req,res)=>{
    const id = req.params.id

    try{
        const users = await User.find({}).select("-password");
        res.status(200).json({success:true,message:"Users found",data:users});
    }
    catch(err){
        res.status(500).json({success:false,message:"NO user found"});
    }
}

export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try{
        const user =  await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false,message:'User not found'})
        }

        const {password, ...rest} = user._doc
        
        res.status(200).json({success:true,message:'Profile info is getting',data:{...rest}})
    }
    catch(err){
        res.status(500).json({success:false,message:"something went wrong,cannot get profile info"});
    }
}

export const getAppointments = async(req,res)=>{
    try{

        //retrieve appointments from booking
        const bookings = await Booking.find({user:req.userId})

        //extract doctor ids from appointment bookings
        const doctorIds = bookings.map(el=>el.doctor.id)

        //retrieve doctors using doctor id
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password') 

        res.status(200).json({success:true,message:'Appointments are getting ', data:doctors})
    }
    catch(err){

    }
}