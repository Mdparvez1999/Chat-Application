import { useEffect, useState } from "react";
import useConversation from "../zustandStore/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);

    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/message/${selectedConversation._id}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const data = await response.json();

                if (data.error) throw new Error(data.error);

                setMessages(data.messages || []);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages }
}

export default useGetMessages