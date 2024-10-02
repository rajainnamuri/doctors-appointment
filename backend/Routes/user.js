import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser,getUserProfile,getAppointments } from '../controllers/userController.js';
import { authenticate, restrict } from '../auth/VerifyToken.js';


const router = express.Router();

// Fetch a single user
router.get("/:id", authenticate, restrict(["patient"]), async (req, res) => {
  try {
    const user = await getSingleUser(req, res);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all users
router.get("/", authenticate, restrict(["admin"]), async (req, res) => {
  try {
    const users = await getAllUser(req, res);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user
router.put("/:id", authenticate, restrict(["patient"]), async (req, res) => {
  try {
    const updatedUser = await updateUser(req, res);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user
router.delete("/:id", authenticate, restrict(["patient"]), async (req, res) => {
  try {
    const deletedUser = await deleteUser(req, res);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("profile/me",authenticate,restrict(["patient"]), getUserProfile)
router.get("/appointments/my-appointments",authenticate,restrict(["patient"]), getAppointments)


export default router;
