import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                error: "Unauthorized-token not found"
            })
        }

        const verified = jwt.verify(token, 'usqsxD9nXb3UyrrbXlijNDYX1Vy1q/xtsYncryja1KA=');

        if (!verified) {
            return res.status(401).json({
                error: "Unauthorized-token not verified"
            })
        };

        const user = await User.findById(verified.userId).select("-password");

        if (!user) {
            return res.status(401).json({
                error: "Unauthorized-user not found"
            })
        };

        req.user = user;

        next();
    } catch (error) {
        console.log("error in auth middleware : ", error);
    }
};