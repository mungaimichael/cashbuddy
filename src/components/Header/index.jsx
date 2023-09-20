
const Header = () => {
    return (
        <header className="flex w-full justify-between items-center"  >
            <div className="p-3" >
                <img src="/logo.svg" alt="logo" className="w-10 h-20 " />
            </div>
            <ul className=" hidden md:w-1/3  md:flex justify-center gap-10 font-primary" >
                <li className="text-xl capitalize " >
                    service
                </li>
                <li className="text-xl capitalize group hover:underline-offset-4  " >
                    <button>
                        Payments <span  ><img className="w-6 inline group-hover:underline-black" src="/down.svg" alt="" /></span>
                    </button>
                </li>
                <li className="text-xl capitalize" >
                    blog
                </li>
            </ul>

            <div className="hidden w-1/3 relative md:flex items-center gap-10 " >
                <img
                    src="/search.svg"
                    alt=""

                    className="w-6 absolute left-1 "

                />
                <input
                    placeholder="Search"
                    type="text"
                    className="pl-12 text-xl focus:outline-none"
                />

                <img
                    className="w-10"
                    src="/burger.svg" alt="" />
            </div>

        </header>
    )
}

export default Header