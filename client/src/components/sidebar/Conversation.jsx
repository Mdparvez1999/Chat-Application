import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustandStore/useConversation"

const Conversation = ({ conversation, lastIndx }) => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div className={`flex items-center justify-center gap-4 rounded p-2 my-2 py-1 cursor-pointer
             hover:bg-sky-500 hover:text-white group
                ${isSelected ? "bg-sky-500 text-white" : null}
             `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} loading="lazy" alt="profile" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="font-bold text-lg text-black group-hover:text-white">{conversation.fullName}</p>
                </div>
            </div>

            {!lastIndx && <div className="divider py-0 my-0 h-1 px-10"></div>}
        </>
    )
}

export default Conversation