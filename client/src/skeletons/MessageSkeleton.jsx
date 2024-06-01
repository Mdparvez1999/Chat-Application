/**
 * MessageSkeleton component renders a skeleton component for a message.
 * It consists of two sections: one for the sender and one for the message content.
 * The sender section includes an avatar and a name, while the message content section
 * consists of two lines of text.
 *
 * @return {JSX.Element} The rendered MessageSkeleton component.
 */
const MessageSkeleton = () => {
    return (
        // Use fragment to avoid adding extra div elements to the DOM
        <>
            {/* Container for the sender section */}
            <div className="flex gap-3 items-center">
                {/* Avatar skeleton */}
                <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                {/* Container for the sender name and message content */}
                <div className="flex flex-col gap-1">
                    {/* First line of message content */}
                    <div className="skeleton h-4 w-40"></div>
                    {/* Second line of message content */}
                    <div className="skeleton h-4 w-40"></div>
                </div>
            </div>
            {/* Container for the message content section */}
            <div className="flex gap-3 items-center justify-end">
                {/* Container for the message content */}
                <div className="flex flex-col gap-1">
                    {/* Message content */}
                    <div className="skeleton h-4 w-40"></div>
                </div>
                {/* Avatar skeleton */}
                <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
            </div>
        </>
    )
}

export default MessageSkeleton