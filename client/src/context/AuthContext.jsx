import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

/**
 * useAuthContext is a custom hook that returns the current user and a function
 * to update the user from the AuthContext.
 * @returns {Object} - An object containing the current user and a function to update it.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    /**
     * The useContext hook returns the value of the AuthContext.
     * The value is an object containing the current user and a function to update it.
     * @type {Object}
     */
    return useContext(AuthContext);
}

/**
 * AuthContextProvider is a React component that wraps the application and provides
 * the current user and a function to update the user to all its descendants.
 * @param {Object} props - An object containing the children of the component.
 * @param {ReactNode} props.children - The children of the component.
 * @returns {JSX.Element} - The AuthContextProvider component.
 */
export const AuthContextProvider = ({ children }) => {
    // Retrieve the user data from the local storage and parse it as JSON.
    const userData = JSON.parse(localStorage.getItem("userData"));
    // Define the initial state of the current user as the parsed user data or null.
    const [currentUser, setCurrentUser] = useState(userData || null);

    // Return the AuthContextProvider component that wraps the children components
    // and provides the current user and the function to update the user to all its descendants.
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

