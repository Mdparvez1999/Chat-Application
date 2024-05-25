import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female"]
        },
        profilePic: {
            type: String,
            default: ""
        },
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);