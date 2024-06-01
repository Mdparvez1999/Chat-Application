import AppError from "../custom/AppError.js";
import tryCatch from "../custom/tryCatch.js";
import { User } from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/authHelpers.js";
import { generateToken } from "../utils/genToken.js";

// signup controller
export const signUp = tryCatch(async (req, res, next) => {
    let { fullName, userName, password, gender, profilePic } = req.body;

    const existingUserName = await User.findOne({ userName });

    if (existingUserName) {
        const msg = "username already exists";
        const err = new AppError(msg, 400);
        return next(err);
    };

    if (gender === "male") {
        profilePic = `https://avatar.iran.liara.run/public/boy?username=${fullName}`
    } else {
        profilePic = `https://avatar.iran.liara.run/public/girl?username=${fullName}`
    };

    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) {
        const msg = "try again later";
        const err = new AppError(msg, 500);
        return next(err);
    };

    const newUser = await User.create({
        fullName,
        userName,
        password: hashedPassword,
        gender,
        profilePic
    });

    // generate token and set cookie 
    await generateToken(newUser._id, res);

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
})

// login controller
export const logIn = tryCatch(async (req, res, next) => {

    const { userName, password } = req.body;

    const existingUser = await User.findOne({ userName });

    if (!existingUser) {
        const msg = "user not found";
        const err = new AppError(msg, 404);
        return next(err);
    };

    const correctPassword = await comparePassword(password, existingUser.password);

    if (!correctPassword) {
        const msg = "invalid username or password";
        const err = new AppError(msg, 400);
        return next(err);
    };

    // generate token and set cookie
    await generateToken(existingUser._id, res);

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
});

// logout controller
export const logOut = tryCatch(async (req, res, next) => {
    res.clearCookie("jwt");
    return res.status(200).json({
        message: "logout successful"
    });
});
