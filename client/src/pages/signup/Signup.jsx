import GenderCheck from "./GenderCheck"

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full p-6 bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-[#d9d9d9]">
                <h1 className="text-2xl text-center font-semibold text-black">
                    SignUp
                    <span className="pl-4 text-blue-600">
                        Chat-App
                    </span>
                </h1>
                <form action="">
                    <div className="mt-4 mb-4">
                        <label className="input input-bordered flex items-center gap-2 bg-white text-black border-1 border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <input type="text" className="grow" placeholder="FullName" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 bg-white text-black border-1 border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <input type="text" className="grow" placeholder="UserName" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 bg-white text-black border-1 border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" placeholder="password" />
                        </label>
                    </div>
                    <div className="">
                        <GenderCheck />
                    </div>
                    <a href="" className="text-black text-sm mb-5 inline-block pl-1 ">
                        already have an account?
                        <span className="pl-1 hover:underline hover:text-blue-800">login</span>
                    </a>
                    <div>
                        <button className="btn btn-primary btn-block btn-sm btn-outline text-[1.1rem] !text-black hover:!text-white">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup