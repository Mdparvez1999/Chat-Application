import { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import toast from "react-hot-toast";

/**
 * Signup component
 * This component renders a signup form for users to create an account.
 * @returns {JSX.Element} The signup form
 */
const Signup = () => {
    // State to hold user input
    const [signup, setSignup] = useState({
        fullName: "", // Full name of the user
        userName: "", // Username of the user
        password: "", // Password of the user
        gender: "", // Gender of the user
    });

    /**
     * Handle change event for input fields
     * @param {Object} e - The event object
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignup({ ...signup, [name]: value });
    };

    // Custom hook to handle signup functionality
    const { loading, signUp } = useSignup();

    /**
     * Handle submit event for the form
     * @param {Object} e - The event object
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(signup);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        // Main container for the signup form
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-md p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl text-center font-semibold text-black pb-4">
                    SignUp
                    <span className="pl-4 text-blue-600">
                        Chat-App
                    </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Input field for full name */}
                    <div className="mt-4 mb-4">
                        <label className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-md flex items-center gap-2">
                            {/* Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <input type="text" className="w-full bg-transparent focus:outline-none" placeholder="FullName" name="fullName" onChange={handleChange} />
                        </label>
                    </div>
                    {/* Input field for username */}
                    <div className="mb-4">
                        <label className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-md flex items-center gap-2">
                            {/* Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <input type="text" className="w-full bg-transparent focus:outline-none" placeholder="UserName" name="userName" onChange={handleChange} />
                        </label>
                    </div>
                    {/* Input field for password */}
                    <div className="mb-4">
                        <label className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-md flex items-center gap-2">
                            {/* Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                            </svg>
                            <input type="password" className="w-full bg-transparent focus:outline-none" placeholder="password" name="password" onChange={handleChange} />
                        </label>
                    </div>
                    {/* Gender selection component */}
                    <div className="mb-4">
                        <GenderCheck handleChange={handleChange} />
                    </div>
                    {/* Link to login page */}
                    <Link to="/login" className="text-black text-sm mb-5 inline-block">
                        already have an account?
                        <span className="pl-1 hover:underline hover:text-blue-800">login</span>
                    </Link>
                    <div>
                        {/* Submit button */}
                        <button className="btn btn-primary btn-block btn-md btn-outline text-[1.25rem] !text-black hover:!text-white" disabled={loading} type="submit">
                            {loading ? <span className="loading loading-spinner loading-lg"></span> : "Sign up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
