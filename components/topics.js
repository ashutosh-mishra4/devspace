import Link from 'next/link'

// Component to display all the spaces related keywords card
function topics() {
    return (
        <div className=" bg-white font-play text-center pb-16" id="topics"> 
            <p className="text-3xl py-10 font-black">Select your Keyword</p>
            <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">        
    
                {/*Card for Tech Keyword*/}
                <div className="font-play bg-dark-background border-2 rounded-2xl">
                    <img src="/tech.jpg" className="w-72 h-48 rounded-2xl object-cover"/>
                    <p className="text-white text-4xl mt-4 px-4 font-black">Tech</p>
                    <p className="text-white w-72 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Tech' keyword</p>
                    <Link href="/tech">
                        <a><button className="bg-wheat font-play font-black text-xl m-4 px-12 py-4 my-5 rounded">Select Keyword</button></a>
                    </Link>
                </div>

                {/*Card for Web Keyword*/}
                <div className="font-play bg-dark-background rounded-2xl border-2">
                    <img src="/web.jpg" className="w-72 h-48 rounded-2xl object-cover"/>
                    <p className="text-white text-4xl mt-4 px-4 font-black">Web</p>
                    <p className="text-white w-72 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Web' keyword</p>
                    <Link href="/web">
                        <a><button className="bg-wheat font-play font-black text-xl m-4 px-12 py-4 my-5 rounded">Select Keyword</button></a>
                    </Link>
                </div>

                {/*Card for Dev Keyword*/}
                <div className="font-play bg-dark-background rounded-2xl border-2">
                    <img src="/dev.jpg" className="w-72 h-48 rounded-2xl object-cover"/>
                    <p className="text-white text-4xl mt-4 px-4 font-black">Dev</p>
                    <p className="text-white w-72 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Dev' keyword</p>
                    <Link href="/dev">
                        <a><button className="bg-wheat font-play font-black text-xl m-4 px-12 py-4 my-5 rounded">Select Keyword</button></a>
                    </Link>
                </div>

                {/*Card for Developer Keyword*/}
                <div className="font-play bg-dark-background rounded-2xl border-2">
                    <img src="/developer.jpg" className="w-72 h-48 rounded-2xl object-cover"/>
                    <p className="text-white text-4xl mt-4 px-4 font-black ">Developer</p>
                    <p className="text-white w-72 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Developer' keyword</p>
                    <Link href="/developer">
                        <a><button className="bg-wheat font-play font-black text-xl m-4 px-12 py-4 my-5 rounded">Select Keyword</button></a>
                    </Link>
                </div>

                {/*Card for Programming Keyword*/}
                <div className="font-play bg-dark-background rounded-2xl border-2">
                    <img src="/programming.jpg" className="w-72 h-48 rounded-2xl object-cover"/>
                    <p className="text-white text-4xl mt-4 px-4 font-black">Programming</p>
                    <p className="text-white w-72 mt-4 px-4">This page will show all the live and scheduled Twitter spaces with 'Programming' keyword</p>
                    <Link href="programming">
                        <a><button className="bg-wheat font-play font-black text-xl m-4 px-12 py-4 my-5 rounded">Select Keyword</button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default topics