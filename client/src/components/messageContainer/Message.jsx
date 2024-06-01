import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustandStore/useConversation";
import { extractTime } from "../../utils/extractTime"

const Message = ({ message }) => {
    const { currentUser } = useAuthContext();

    const { selectedConversation } = useConversation();

    const fromSender = message.senderId === currentUser._id ? true : false;

    const formattedTime = extractTime(message.createdAt);

    const shakeClass = message.shouldShake ? "shake" : ""

    const senderObject = {
        chatClassName: fromSender ? 'chat-end' : 'chat-start',
        messageBackground: fromSender ? "bg-sky-500 text-black" : "",
        profilePic: fromSender ? currentUser.profilePic : selectedConversation.profilePic,
    };

    return (
        <div className="">
            <div className={`chat ${senderObject.chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component"
                            src={`${senderObject.profilePic}`}
                        />
                    </div>
                </div>
                <div className={`chat-bubble ${senderObject.messageBackground} ${shakeClass}`}>{message.message}</div>
                <div className="chat-footer opacity-50">
                    {formattedTime}
                </div>
            </div>
        </div >
    )
}

export default Message