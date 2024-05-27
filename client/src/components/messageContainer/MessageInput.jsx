import { BsSend } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";


const MessageInput = () => {
    return (
        <div className="border-t-2 bg-slate-300">
            <form action="" className="px-4 my-3">
                <div className="w-full flex items-center relative">
                    <button className="" type="submit">
                        <FaPlus className="w-6 h-6 text-black" />
                    </button>
                    <input type="text" placeholder="send message"
                        className="input input-bordered border text-md rounded-lg ml-3
                        w-full p-2.5 text-black bg-white"
                    />
                    <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
                        <BsSend className="w-6 h-6 text-black" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MessageInput