import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },  // Added confirm password
  name: { type: String, required: true },
  phone: { type: Number, required: true },  // Made contact number required
  age: { type: Number },  // Added age
  gender: { type: String, enum: ["male", "female", "other"] },  // Added gender
  photo: { type: String },  // Profile picture
  ticketPrice: { type: Number },
  role: {
    type: String,
    enum: ["doctor"],
    default: "doctor",
  },
  specialization: { type: String, required: true },  // Added specialization
  hospitalName: { type: String, required: true },  // Added hospital name
  proof: { type: String },  // Added proof (certificate)

  // Additional fields for doctors
  qualifications: { type: Array },
  experiences: { type: Array },
  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: { type: Number, default: 0 },
  totalRating: { type: Number, default: 0 },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("Doctor", DoctorSchema);
