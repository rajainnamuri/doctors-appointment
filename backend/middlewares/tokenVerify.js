import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';

dotenv.config();

const tokenVerify = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;

    const user = await User.findById(decoded.id) || await Doctor.findById(decoded.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    req.user.role = user.role;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.status(403).send({ message: "Token expired. Please relogin to continue" });
    } else {
      res.status(403).send({ message: "Invalid token. Please relogin to continue" });
    }
  }
};

export default tokenVerify;
