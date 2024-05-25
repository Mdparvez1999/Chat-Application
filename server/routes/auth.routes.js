import express from "express";
import { logIn, logOut, signUp } from "../controllers/auth.controllers.js";

// router instance
const router = express.Router();

// signup route
router.post("/signup", signUp);

// login route
router.post("/login", logIn);

// logout route
router.post("/logout", logOut);

export default router;