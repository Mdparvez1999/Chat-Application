import Conversations from "./Conversations"
import Logout from "./Logout"
import SearchInput from "./SearchInput"

const SideBar = () => {
    return (
        <div className="h-full min-w-80 border-r border-slate-500 p-3 flex flex-col">
            <SearchInput />
            <div className="divider px-10"></div>
            <Conversations />
            <Logout />
        </div>
    )
}

export default SideBar