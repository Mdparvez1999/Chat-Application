import express from "express";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";
import CORS from "cors";
import helmet from "helmet";
import compression from "compression";

import connectToDB from "./config/dbConfig.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import errorHandler from "./middlewares/errorHandler.middleware.js";

// env config
dotEnv.config();

// app instance
export const app = express();

// connect to database
connectToDB()

// cors
app.use(CORS({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

// helmet
app.use(helmet());

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// error handler
app.use("*", (req, res, next) => {
    return res.status(500).send("no route found");
});


// global error handler
app.use(errorHandler);