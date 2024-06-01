import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustandStore/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return (() => {
            setSelectedConversation(null)
        })
    }, [setSelectedConversation])

    return (
        <div className="flex flex-col w-full">
            {!selectedConversation ? NoChatSelected() : (
                <>
                    <div className="bg-white px-4 py-4 text-xl font-semibold text-black border-b border-black">
                        <span>To : </span>
                        <span>{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

const NoChatSelected = () => {

    const { currentUser } = useAuthContext();
    return (
        <div className="flex h-full w-full items-center justify-center bg-white">
            <div className="px-4 text-center sm:text-lg md:text-3xl text-black font-semibold flex flex-col
                items-center gap-2 
            ">
                <p>welcome {currentUser?.fullName}</p>
                <p>select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

export default MessageContainer