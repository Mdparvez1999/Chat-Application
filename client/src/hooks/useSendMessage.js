import { useState } from "react"
import useConversation from ".././zustandStore/useConversation"
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState();

    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            if (data.error) throw new Error(data.error);

            setMessages([...messages, data.newMessage]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage