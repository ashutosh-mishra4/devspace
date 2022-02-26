function HowItWorks() {
    return (
        <div className="bg-orange">
            <p className="text-3xl py-8 text-center font-black font-play">How it Works</p>
            <div className="flex font-play flex-col text-center md:flex-row border-b-2 border-black gap-8 justify-center items-center">
                <div className="bg-white border-2 w-80 px-14 h-48 flex flex-col items-center justify-center rounded">
                    <p className="font-black text-2xl py-2">1. Sign up</p>
                    <p>Sign up to the app with your socials to checkout our library of tech spaces </p>
                </div>
                <div className="bg-white border-2 p-10 w-80 h-48 flex flex-col items-center justify-center rounded">
                    <p className="font-black text-2xl py-2">2. Select a keyword</p>
                    <p className="text-md">Select a keyword from <a>keywords</a> to see the current live and scheduled spaces of that keyword</p>
                </div>
                <div className="bg-white border-2 mb-10 w-80 px-14 h-48 flex flex-col items-center justify-center rounded">
                    <p className="font-black text-2xl py-2">3. Enjoy</p>
                    <p>Get access to the awesome live and scheduled spaces. Join it live or set your reminder</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks