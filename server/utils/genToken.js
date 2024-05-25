import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, "usqsxD9nXb3UyrrbXlijNDYX1Vy1q/xtsYncryja1KA=", { expiresIn: '1d' });

        res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
        })
    } catch (error) {
        console.log("error in generating token : ", error);
    }
};