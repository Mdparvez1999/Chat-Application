import bcrypt from "bcrypt";

// hash password
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log("error in hashing password : ", error.message);
    }
};

// compare password
export const comparePassword = async (password, dbPassword) => {
    try {
        return await bcrypt.compare(password, dbPassword);
    } catch (error) {
        console.log("error in comparing password", error.message);
    }
}