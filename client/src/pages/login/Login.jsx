import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

/**
 * Login component
 *
 * This component renders the login form and handles the login functionality
 * using the useLogin hook.
 */
const Login = () => {
    // Initialize state for login data
    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    });

    // Get the login function and loading state from the useLogin hook
    const { loading, login } = useLogin();

    /**
     * Handle form submission
     *
     * This function is called when the login form is submitted.
     * It prevents the default form submission behavior, calls the login function
     * with the login data, and displays an error toast if there is an error.
     *
     * @param {Event} e - The form submission event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(loginData);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        // Render the login form
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-md p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl text-center font-semibold text-black pb-4">
                    Login
                    <span className="pl-4 text-blue-600">
                        chat-app
                    </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Render the userName input field */}
                    <div className="mb-4 sm:mb-6 mt-2">
                        <input type="text" className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-md"
                            placeholder="UserName" name="userName" onChange={(e) => setLoginData({ ...loginData, userName: e.target.value })} />
                    </div>
                    {/* Render the password input field */}
                    <div>
                        <input type="password" className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-md"
                            placeholder="password" name="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    </div>
                    {/* Render the signup link */}
                    <Link to="/signup" className="text-sm text-black mt-3 cursor-pointer inline-block">
                        {"don't have an account ?"}
                        <span className="hover:underline hover:text-blue-800 pl-1">
                            Register
                        </span>
                    </Link>
                    {/* Render the login button */}
                    <div>
                        <button className="btn btn-block btn-primary btn-outline btn-md mt-4 pb-1 sm:mt-5 text-[1.25rem] !text-black hover:!text-white"
                            type="submit">
                            {loading ? <span className="loading loading-spinner loading-lg "></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
