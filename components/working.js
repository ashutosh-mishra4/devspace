function HowItWorks() {
    return (
        <div className="flex bg-orange flex-col bg-wheat text-center border-b-2 border-black gap-8 justify-center items-center">
            <p className="text-3xl text-center font-black font-play mt-10">How it Works</p>
            <div className="bg-white border-2 w-80 h-10 flex items-center justify-center rounded">
                <p className="font-play text-xl">1. Sign up to the app</p>
            </div>
            <div className="bg-white border-2 p-10 w-80 h-10 flex items-center justify-center rounded">
                <p className="font-play text-xl">2. Select a keyword from <a>Keywords</a></p>
            </div>
            <div className="bg-white border-2 mb-10 w-80 h-10 flex items-center justify-center rounded">
                <p className="font-play text-xl">3. Enjoy your favorite spaces</p>
            </div>
        </div>
    )
}

export default HowItWorks