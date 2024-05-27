import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <div className="flex items-center gap-2 pl-4">
            <div className="text-black w-full">
                <input type="text" placeholder="search.." className="input input-bordered w-full max-w-xs bg-white border-1 border-black" />
            </div>
            <div className="p-4">
                <button className="btn btn-circle text-white border-none !bg-sky-500 hover:scale-110 transform transition-transform duration-300">
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button>
            </div>
        </div>
    )
}

export default SearchInput