import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Custom hook for handling user login
const useLogin = () => {
    // State to track the loading state of the login process
    const [loading, setLoading] = useState(false);

    // Get the setCurrentUser function from the AuthContext
    const { setCurrentUser } = useAuthContext();

    // Get the navigate function from the React Router
    const navigate = useNavigate();

    // Asynchronous function to handle the login process
    const login = async (loginData) => {
        // Set the loading state to true to show the loading indicator
        setLoading(true);

        try {
            // Validate the login data
            const success = inputValidation(loginData);

            // If the validation fails, return and do nothing
            if (!success) return;

            // Destructure the login data
            const { userName, password } = loginData;

            // Create the payload to send to the server
            const payLoad = { userName, password };

            // Make a POST request to the server to perform the login
            const response = await fetch(`/api/auth/login`, {
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
            navigate("/")
        } catch (error) {
            // If there is an error, show an error toast message
            console.log(error);
            toast.error(error.message || "An unexpected error occurred")
        } finally {
            // Set the loading state to false to hide the loading indicator
            setLoading(false)
        }
    }

    // Return the loading state and the login function
    return { loading, login };
}

export default useLogin

/**
 * Function to validate the login data
 *
 * This function takes in the login data object and checks if the userName and password
 * properties are not empty. If either of them is empty, it displays an error toast
 * message and returns false. Otherwise, it returns true.
 *
 * @param {Object} loginData - The login data object containing userName and password
 * @returns {boolean} - True if the login data is valid, false otherwise
 */
const inputValidation = (loginData) => {
    // Destructure the userName and password properties from the loginData object
    const { userName, password } = loginData;

    // Check if either the userName or password is empty
    if (!userName || !password) {
        // If either is empty, display an error toast message
        toast.error("All fields are required");
        // And return false to indicate that the login data is not valid
        return false;
    }
    // If both are not empty, return true to indicate that the login data is valid
    return true;
}
