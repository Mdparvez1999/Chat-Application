import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {

    const [onlineUsers, setOnlineUsers] = useState([]);
    const { currentUser } = useAuthContext();
    const socketRef = useRef(null);

    useEffect(() => {
        if (currentUser) {
            const socket = io("https://chat-application-be3b.onrender.com/", {
                query: {
                    userId: currentUser._id
                },
            });

            socketRef.current = socket;

            socket?.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            });

            return () => socket.close();
        } else {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            }
        }
    }, [currentUser]);

    return (
        <SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}