import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },  // Added confirm password
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },  // Changed to String for flexibility
  age: { type: Number },  // Added age
  gender: { type: String, enum: ["male", "female", "other"] },  // Added gender
  address: { type: String },  // Added address
  profilePicture: { type: String },  // Added profile picture
  role: {
    type: String,
    enum: ["patient", "admin"],
    default: "patient",
  },
  bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("User", UserSchema);
