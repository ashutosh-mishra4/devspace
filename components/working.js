//Component of how it works section
function HowItWorks() {
    return (
        <div className="bg-orange">
            <p className="text-3xl py-8 text-center font-black font-play">How it Works</p>
            <div className="flex font-play flex-col pb-10 text-center md:flex-row border-b-2 border-black gap-8 md:gap-4 lg:gap-10 justify-center items-center">
                <div className="bg-white lg:hover:-translate-y-2 lg:hover:scale-110 border-2 w-72 px-4 md:p-24 md:px-4 h-52 md:h-40 md:w-60 lg:w-72 flex flex-col items-center justify-center rounded">
                    <p className="font-black text-2xl py-2">1. Select a keyword</p>
                    <p>Select a keyword from <a>keywords</a> to see the current live and scheduled spaces of that keyword</p>
                </div>
                <div className="bg-white border-2 md:p-24 p-10 w-72 h-52 md:px-4 lg:hover:-translate-y-2 lg:hover:scale-110 flex flex-col md:h-40 md:w-60 lg:w-72 items-center justify-center rounded">
                    <p className="font-black text-2xl py-2 md:px-0">2. Sign up</p>
                    <p className="text-md">Sign up to the app with your socials to checkout our library of tech spaces</p>
                </div>
                <div className="bg-white border-2 w-72 px-14 h-52 md:p-24 md:px-2 flex flex-col md:h-40 md:w-60 lg:hover:-translate-y-2 lg:hover:scale-110 lg:w-72 items-center justify-center rounded">
                    <p className="font-black text-2xl py-2">3. Enjoy</p>
                    <p>Get access to the awesome live and scheduled spaces. Join it live or set your reminder</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks