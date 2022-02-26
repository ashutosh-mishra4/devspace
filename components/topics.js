// Component to display all the spaces related keywords card
function topics() {
    return (
        <div className="flex bg-white flex-col gap-6 justify-center font-play items-center">
        <p className="text-3xl mt-10 font-black">Select your Keyword</p>
        
        {/*Card for Tech Keyword*/}
        <div className="font-play bg-dark-background border-2 rounded-2xl">
            <img src="/tech.jpg" className="w-80 h-48 rounded-2xl object-cover"/>
            <p className="text-white text-4xl mt-4 px-4 font-black">Tech</p>
            <p className="text-white w-80 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Tech' keyword</p>
            <button className="bg-wheat font-play font-black text-xl m-4 px-24 py-4 my-5 rounded">Visit Now</button>
        </div>

        {/*Card for Web Keyword*/}
        <div className="font-play bg-dark-background rounded-2xl border-2">
            <img src="/web.jpg" className="w-80 h-48 rounded-2xl object-cover"/>
            <p className="text-white text-4xl mt-4 px-4 font-black">Web</p>
            <p className="text-white w-80 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Web' keyword</p>
            <button className="bg-wheat font-play font-black text-xl m-4 px-24 py-4 my-5 rounded">Visit Now</button>
        </div>

        {/*Card for Dev Keyword*/}
        <div className="font-play bg-dark-background rounded-2xl border-2">
            <img src="/dev.jpg" className="w-80 h-48 rounded-2xl object-cover"/>
            <p className="text-white text-4xl mt-4 px-4 font-black">Dev</p>
            <p className="text-white w-80 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Dev' keyword</p>
            <button className="bg-wheat font-play font-black text-xl m-4 px-24 py-4 my-5 rounded">Visit Now</button>
        </div>

        {/*Card for Developer Keyword*/}
        <div className="font-play bg-dark-background rounded-2xl border-2">
            <img src="/developer.jpg" className="w-80 h-48 rounded-2xl object-cover"/>
            <p className="text-white text-4xl mt-4 px-4 font-black ">Developer</p>
            <p className="text-white w-80 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Developer' keyword</p>
            <button className="bg-wheat font-play font-black text-xl m-4 px-24 py-4 my-5 rounded">Visit Now</button>
        </div>

        {/*Card for Programming Keyword*/}
        <div className="font-play bg-dark-background rounded-2xl border-2 mb-10">
            <img src="/programming.jpg" className="w-80 h-48 rounded-2xl object-cover"/>
            <p className="text-white text-4xl mt-4 px-4 font-black">Programming</p>
            <p className="text-white w-80 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Programming' keyword</p>
            <button className="bg-wheat font-play font-black text-xl m-4 px-24 py-4 my-5 rounded">Visit Now</button>
        </div>
    </div>
    )
}

export default topics