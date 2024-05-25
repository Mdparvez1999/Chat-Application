import express from "express";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";

import connectToDB from "./config/dbConfig.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

// env config
dotEnv.config();

// app instance
export const app = express();

// connect to database
connectToDB()

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.get("/", (req, res, next) => {
    res.send("hello world!!!")
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
