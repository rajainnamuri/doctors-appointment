import express from "express"

import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor, getDoctorProfile} from '../controllers/doctorController.js';

import {authenticate,restrict} from  '../auth/VerifyToken.js'

import reviewRouter from './review.js';

const router = express.Router();

//nested router
router.use("/:doctor/reviews",reviewRouter);

router.get("/:id",getSingleDoctor);
router.get("/",getAllDoctor);
router.get("/:id",authenticate,restrict(["doctor"]),updateDoctor);
router.get("/:id",authenticate,restrict(["doctor"]),deleteDoctor);

router.get('/profile/me',authenticate,restrict(['doctor']),getDoctorProfile)

export default router;