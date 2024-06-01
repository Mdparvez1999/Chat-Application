import tryCatch from "../custom/tryCatch.js";
import { User } from "../models/user.model.js";

/*
* This function retrieves all the users except the currently logged in user
* It uses the User model's find method to do this
* The second argument to the find method is an object that specifies the fields
* that should be included in the response
* The first key in this object is "_id" and the value is an object that specifies
* that the value of _id should not be the same as the currently logged in user's id
* The third argument to the find method is an options object and the key "lean" is set to true
* This means that the find method will return an array of lean documents instead of an array of Mongoose documents
* The lean documents will not have any of the methods or getters of the Mongoose documents, but they will still have all the data
*/
export const getAllUsers = tryCatch(async (req, res, next) => {
    // get the id of the currently logged in user
    const userId = req.user._id;

    // use the find method of the User model to get all users except the currently logged in user
    const users = await User.find({ _id: { $ne: userId } }).select("-password").lean();

    // if no users are found, return an empty array
    if (!users || users.length === 0) {
        return res.status(200).json([])
    };

    // return a json response with a success message and the array of users
    return res.status(200).json({
        message: "successful",
        users
    });
});

export const getFilteredUsers = tryCatch(async (req, res, next) => {
    const userId = req.user._id;

    const search = req.query.search;

    const filteredUsers = await User.find({
        _id: { $ne: userId },
        fullName: { $regex: search, $options: "i" }
    }).select("-password").lean();

    if (!filteredUsers || filteredUsers.length === 0) {
        return res.status(200).json([])
    };

    return res.status(200).json({
        message: "successful",
        filteredUsers
    });
}
)

