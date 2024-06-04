import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    return (
        <>
            <div className="flex flex-col overflow-auto">
                {conversations?.map((conversation, index) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        lastIndx={index === conversations.length - 1}
                    />
                ))
                }
                {loading ? <span className="loading loading-spinner loading-lg"></span> : null}
            </div>
            <div className="divider px-10"></div>
        </>
    )
}

export default Conversations