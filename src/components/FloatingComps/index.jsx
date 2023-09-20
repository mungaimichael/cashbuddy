
const FloatingComps = () => {
    return (
        <div className="mt-12 h-full md:mt-0 w-full md:2/3 md:h-5/6  flex flex-col items-center justify-evenly " >
            <Testimonoal />
            <Analytics />
            <AmountPaid />
        </div>
    )
}

export default FloatingComps



export const Testimonoal = () => {
    return (
        <div className=" h-20 w-5/6 md:h-36 bg-primary text-white rounded-lg " >
            <header className=" h-20 w-full  flex items-center justify-evenly" >
                <span className="  w-1/6 h-5/6 flex items-center justify-center " >

                    <img
                        src="/vite.svg"
                        alt=""
                        className="w-6 md:w-12 "
                    />
                </span>
                <div className="font-primary w-1/3 ">
                    <h1 className=" text-xs font-semibold md:text-lg " >
                        John Doe
                    </h1>
                    <p className="text-white opacity-70 text-xs md:text-lg" >
                        Online
                    </p>
                </div>
                <div className="font-primary">
                    <h1 className="font-semibold opacity-40 text-md  " >
                        3mn ago
                    </h1>
                </div>
            </header>
            <div className="hidden w-full pl-5 md:flex justify-around items-center font-primary ">
                <p className=" w-full md:w-5/6   md:text-md " >
                    Gifting users a banking expirience that is second to none
                </p>
                <p className="w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center text-white ">4</p>
            </div>
        </div>
    )
}


export const Analytics = () => {
    return (
        <div className="w-5/6 h-20 bg-primary  rounded-xl flex flex-row-reverse  items-center " >

            <div className="w-5/6"></div>
            <div className="bg-primary w-1/6 h-5/6 flex items-center justify-center ml-3 rounded-full ">
                <span className="text-xl text-white font-bold" >45$</span>
            </div>
        </div>
    )
}

export const AmountPaid = () => {
    return (
        <div className="w-5/6  h-20 md:h-1/2 bg-primary rounded-lg " >

            amout paid
        </div>
    )
}
