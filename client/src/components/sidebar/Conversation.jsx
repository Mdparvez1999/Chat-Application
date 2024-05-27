const Conversation = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 rounded p-2 my-2 py-1 cursor-pointer
             hover:bg-sky-500 hover:text-white group"
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="font-bold text-lg text-black group-hover:text-white">Parvez</p>
                </div>
            </div>
            <div className="divider py-0 my-0 h-1 px-10"></div>
        </>
    )
}

export default Conversation