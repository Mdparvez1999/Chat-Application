import express from "express";
import { getAllUsers, getFilteredUsers } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

// router instance
const router = express.Router();

// get all users
router.get("/", auth, getAllUsers);

// get filtered users
router.get("/filter", auth, getFilteredUsers);

export default router;