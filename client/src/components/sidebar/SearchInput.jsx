// import { useState } from "react";
// import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    //     const [search, setSearch] = useState("");
    //     const handleSubmit = async () => {
    //         try {
    //             // await getFilteredConversations(search)
    //         } catch (error) {
    //             toast.error(error.message);
    //         }
    //     };

    return (
        <div className="flex items-center gap-2 pl-4">
            <div className="text-black w-full">
                <input type="text" placeholder="search.." className="input input-bordered w-full max-w-xs
                 bg-white border-1 border-black"
                />
            </div>
            <div className="p-4">
                <button className="btn btn-circle text-white border-none !bg-sky-500 hover:scale-110 transform transition-transform duration-300">
                    {/* {loading ? <span className="loading loading-spinner loading-lg"></span> : */}
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button>
            </div>
        </div>
    )
}

export default SearchInput