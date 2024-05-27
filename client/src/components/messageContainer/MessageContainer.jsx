import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {

    const isChatSelected = true;

    return (
        <div className="flex flex-col w-full">
            {isChatSelected ? noChatSelected() : (
                <>
                    <div className="bg-slate-300 px-4 py-4 text-xl font-semibold text-black border-b border-slate-50">
                        <span>To : </span>
                        <span>Parvez</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

const noChatSelected = () => {
    return (
        <div className="flex h-full w-full items-center justify-center bg-slate-300">
            <div className="px-4 text-center sm:text-lg md:text-3xl text-black font-semibold flex flex-col
                items-center gap-2 
            ">
                <p>welcome john doe</p>
                <p>select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

export default MessageContainer