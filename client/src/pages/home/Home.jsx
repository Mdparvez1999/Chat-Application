import SideBar from "../../components/sidebar/SideBar"
import MessageContainer from "../../components/messageContainer/MessageContainer"

const Home = () => {
    return (
        <div className="flex h-screen w-screen">
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home