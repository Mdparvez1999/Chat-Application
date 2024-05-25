import express from "express";
import { getAllMessages, sendMessage } from "../controllers/message.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

// router instance
const router = express.Router();

// send message
router.post("/send/:id", auth, sendMessage);

// get all message of a conversation
router.get("/:id", auth, getAllMessages);

export default router;
