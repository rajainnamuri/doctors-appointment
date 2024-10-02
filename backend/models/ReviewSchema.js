import mongoose from "mongoose";
import DoctorSchema from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/,function(next){
  this.popular({
    path:'user',
    select:'name photo'
  })

  next();
});

reviewSchema.statics.calcAverageRatings = async function(doctotId){
  //this points to a current review
  const stats = await this.aggregate([
    {$match:{doctor:doctotId}},
    {$group:{_id:'$doctor',numOfRating:{$sum:1},avgRating:{$avg:'$rating'}}}

  ])

  //console.log(stats)

  await Doctor.findByIdAndUpdate(doctotId,{
    totalRating:  stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  })
}

reviewSchema.post('save',function(){
  this.constructor.calcAverageRatings(this.doctor);
})
export default mongoose.model("Review", reviewSchema);
