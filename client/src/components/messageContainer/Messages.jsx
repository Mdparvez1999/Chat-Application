import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { loading, messages } = useGetMessages();

    useListenMessages();

    const contatinerRef = useRef();

    useEffect(() => {
        if (contatinerRef.current) {
            contatinerRef.current.scrollTop = contatinerRef.current.scrollHeight
        }
    }, [loading, messages]);

    return (
        <div className="px-4 overflow-auto bg-white h-full" ref={contatinerRef}>
            {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

            {!loading && messages?.length === 0 && (<p className="text-center text-black mt-8 text-2xl">
                send a message to start the conversation
            </p>)}

            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    )
}

export default Messages