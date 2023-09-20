/* eslint-disable react/prop-types */

const Herofooter = () => {
    return (
        <div className='w-full flex justify-around ' >
            <Text text="3X" desc='faster than our competition' />
            <Text text='-15%' desc='for first time subscribers' />

        </div>
    )
}

export default Herofooter



export function Text({ text, desc }) {
    return (
        <div className="w-1/2 flex flex-col" >
            <h1 className="px-2 font-semibold text-4xl md:text-6xl lg-text-8xl text-primary " >
                {text}
            </h1>
            <p className="text-sm opacity-60  p-2 " >
                {desc}
            </p>
        </div>
    )
}