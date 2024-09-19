import express from "express";
import cookieParser from "cookie-parser"; 
import cors from "cors"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import auth from "./Routes/auth.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
};

// Simple API route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Mongoose connection without deprecated options
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MONGO DATABASE IS CONNECTED');
  } catch (err) {
    console.error('MONGO DATABASE IS NOT CONNECTED:', err);
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/auh',auth) //domain/api/v1/auth/register

// Start the server and connect to the database
app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
