import Herofooter from "../HeroFooter"
import RightHero from "../RightHero"


const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row " style={{ height: `calc(100% - 120px)` }}  >
            <div className="mt-5 flex flex-col items-center justify-center gap-10 h-4/6 md:h-5/6 md:items-start font-primary md:w-2/3 " >
                <div className="w-full md:w-1/2 h-2/3 flex flex-col justify-center gap-0 ">
                    <h1 className=" font-semibold text-6xl md:text-7xl lg:text-8xl px-3 text-primary" >
                        Money Matters Made Easier
                    </h1>
                    <h4 className="p-3 opacity-70 " >
                        Welcome to cashbuddy! Your number one financial assistant
                    </h4>
                </div>
                <div className="w-full md:w-2/3  flex items-center px-3" >
                    <form action="" className="w-full flex gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="enter your email"
                            className="w-2/3 h-12 bg-slate-100 focus:outline-none p-2 "
                        />

                        <button type="submit" className="h-12 w-32 py-2 font-semibold text-white capitalize bg-green-900 flex items-center justify-center border border-black" >get started</button>
                    </form>
                </div>

                <Herofooter />
            </div>
            <RightHero />
        </div>
    )
}

export default Hero