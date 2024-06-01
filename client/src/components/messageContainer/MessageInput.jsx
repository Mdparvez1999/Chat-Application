import { BsSend } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import toast from "react-hot-toast";


const MessageInput = () => {

    const [message, setMessage] = useState("");

    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!message) throw new Error("Please enter a message");

            await sendMessage(message);
            setMessage("");
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="border-t-2 bg-slate-300 mt-auto">
            <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
                <div className="w-full flex items-center relative">
                    <button className="" type="submit">
                        <FaPlus className="w-6 h-6 text-black" />
                    </button>
                    <input type="text" placeholder="send message" name="message"
                        className="input input-bordered border text-md rounded-lg ml-3
                        w-full p-2.5 text-black bg-white"
                        value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
                        {loading ? <span className="loading loading-spinner loading-lg"></span> : <BsSend className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MessageInput