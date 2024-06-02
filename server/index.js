import express from "express";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";
import CORS from "cors";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

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

// helmet with default configuration
app.use(helmet());

// helmet with CSP configuration
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'", "https://chat-application-kp3g.onrender.com"],
        imgSrc: ["'self'", "data:", "https://avatar.iran.liara.run"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
    }
}))

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "../client/dist")));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// error handler
app.use("*", (req, res, next) => {
    return res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


// global error handler
app.use(errorHandler);