import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
    const [loading, logOut] = useLogout()

    const handleLogout = async () => {
        await logOut()
    }
    return (
        <div className="mt-auto">
            <button disabled={loading} >
                {loading ? <span className="loading loading-spinner loading-lg"></span> :
                    <BiLogOut className="h-8 w-8 text-black cursor-pointer" onClick={handleLogout} />}
            </button>
        </div>
    )
}

export default Logout