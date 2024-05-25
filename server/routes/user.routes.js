import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

// router instance
const router = express.Router();

// get all users
router.get("/", auth, getAllUsers);

export default router;