import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import AppError from "../custom/AppError.js";
import tryCatch from "../custom/tryCatch.js";

export const auth = tryCatch(async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        const msg = "Unauthorized-token not found";
        const err = new AppError(msg, 401);

        return next(err);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
        const msg = "Unauthorized-token not verified";
        const err = new AppError(msg, 401);

        return next(err);
    };

    const user = await User.findById(verified.userId).select("-password");

    if (!user) {
        const msg = "Unauthorized-user not found";
        const err = new AppError(msg, 401);

        return next(err);
    };

    req.user = user;

    next();
});