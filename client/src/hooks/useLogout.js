import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
// import axiosInstance from "../axiosInstance/axiosInstance";
import toast from "react-hot-toast";

const useLogout = () => {

    const [loading, setLoading] = useState(false);

    const { setCurrentUser } = useAuthContext();

    const logOut = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include', // Include this if you're dealing with cookies
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("userData");

            setCurrentUser(null);

            toast.success(data.message)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return [loading, logOut]
}

export default useLogout 