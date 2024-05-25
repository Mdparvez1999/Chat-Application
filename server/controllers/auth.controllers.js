import { User } from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/authHelpers.js";
import { generateToken } from "../utils/genToken.js";

// signup controller
export const signUp = async (req, res, next) => {
    try {
        let { fullName, userName, password, gender, profilePic } = req.body;

        const existingUserName = await User.findOne({ userName });

        if (existingUserName) {
            return res.status(400).json({
                error: "username already exists"
            })
        };

        if (gender === "male") {
            profilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        } else {
            profilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        };

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic
        });

        // generate token and set cookie 
        generateToken(newUser._id, res);

        return res.status(201).json({
            message: "registration successful",
            user: {
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
            }
        });
    } catch (error) {
        console.log("error in signup controller : ", error);
    }
};

// login controller
export const logIn = async (req, res, next) => {
    try {
        const { userName, password } = req.body;

        const existingUser = await User.findOne({ userName });

        if (!existingUser) {
            return res.status(200).json({
                error: "user not found"
            })
        };

        const correctPassword = await comparePassword(password, existingUser.password);

        if (!correctPassword) {
            return res.status(404).json({
                error: "invalid username or password"
            })
        };

        // generate token and set cookie
        generateToken(existingUser._id, res);

        return res.status(200).json({
            message: "login successful",
            user: {
                _id: existingUser._id,
                fullName: existingUser.fullName,
                userName: existingUser.userName,
                gender: existingUser.gender,
                profilePic: existingUser.profilePic,
            }
        })

    } catch (error) {
        console.log("error in login : ", error);
    }
};

// logout controller
export const logOut = async (req, res, next) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            message: "logout successful"
        });
    } catch (error) {
        console.log("error in logout : ", error);
    }
};
