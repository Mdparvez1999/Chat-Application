import jwt from "jsonwebtoken";

export const generateToken = async (userId, res) => {
    try {
        const token = await jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
    } catch (error) {
        console.log("error in generating token : ", error);
    }
};