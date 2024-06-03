/* eslint-disable no-useless-catch */
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook for handling user signup
 * @returns {Object} An object containing the loading state and the signUp function
 */
const useSignup = () => {
    // State to track the loading state of the signup process
    const [loading, setLoading] = useState(false);

    // Get the setCurrentUser function from the AuthContext
    const { setCurrentUser } = useAuthContext();

    // Get the navigate function from the React Router
    const navigate = useNavigate();

    /**
     * Async function to handle the signup process
     * @param {Object} signUpData - The user data for signup
     * @returns {Promise<void>} - Promise that resolves when the signup process is complete
     */
    const signUp = async (signUpData) => {
        try {
            // Set the loading state to true to show the loading indicator
            setLoading(true);

            // Validate the signup data
            const success = inputValidation(signUpData);

            // If the validation fails, return and do nothing
            if (!success) return;

            // Destructure the signup data
            const { fullName, userName, password, gender } = signUpData;

            // Create the payload to send to the server
            const payLoad = { fullName, userName, password, gender };

            // Make a POST request to the server to perform the signup
            const response = await fetch(`/api/auth/signup`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payLoad)
            });

            // Parse the response from the server
            const data = await response.json();

            // If there is an error from the server, throw an error
            if (data.error) {
                throw new Error(data.error);
            }

            // Save the user data to the local storage
            localStorage.setItem("userData", JSON.stringify(data.user));

            // Update the current user in the AuthContext
            setCurrentUser(data.user);

            // Show a success toast message
            toast.success(data.message);

            // Navigate to the home page
            navigate("/");
        } catch (error) {
            // If there is an error, show an error toast message
            console.log(error);
            toast.error(error.message)
        } finally {
            // Set the loading state to false to hide the loading indicator
            setLoading(false);
        }
    }

    // Return the loading state and the signUp function
    return { loading, signUp };
}

export default useSignup

/**
 * Validates the sign-up data.
 * 
 * @param {Object} signUpData - The user data for sign-up.
 * @param {string} signUpData.fullName - The full name of the user.
 * @param {string} signUpData.userName - The username of the user.
 * @param {string} signUpData.password - The password of the user.
 * @param {string} signUpData.gender - The gender of the user.
 * @returns {boolean} Returns true if the data is valid, otherwise false.
 */
const inputValidation = (signUpData) => {
    // Destructure the sign-up data
    const { fullName, userName, password, gender } = signUpData;

    // Check if any of the fields are empty
    if (!fullName || !userName || !password || !gender) {
        // Show an error toast message if any field is empty
        toast.error("Please fill all the fields");
        return false;
    }

    // Check if the password is less than 8 characters
    if (password.length < 8) {
        // Show an error toast message if the password is less than 8 characters
        toast.error("Password must be at least 6 characters");
        return false;
    }

    // Return true if the data is valid
    return true;
}
