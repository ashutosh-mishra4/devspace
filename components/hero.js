import React from "react";
import Link from 'next/link'
import Image from "next/image";

function hero() {
  return (
    // Hero section
    <section className="bg-dark-background">
    
    {/* Hero section for mobiles */}
    <div className="bg-green-300 border-b-2 pt-10 border-background divide-solid md:hidden">
      <h1 className="text-4xl font-bold text-center pt-10 font-cursive text-wheat">
        DevSpaces
      </h1>
      <div className="max-w-full flex justify-center">
        <Image
          className="mx-auto"
          src="/image.png"
          // layout="responsive"
          width={300}
          height={300}
        />
      </div>
      <p className="text-center text-xl sm:px-44 text-white px-10 font-play">Find live and scheduled Twitter spaces on tech, programming, and development</p>
      <div className="flex justify-center">
        <button className="bg-wheat font-play font-black text-lg px-24 py-4 my-5 rounded transition ease-in-out delay-150 hover:bg-orange duration-75">Get Started</button>
      </div>
    </div>

    {/* Hero Section for tablets and other big screens */}
    <div className="hidden md:flex flex-row pt-12">
      <div className="bg-green-300 border-b-2 border-background divide-solid">
        <h1 className="text-4xl lg:text-5xl lg:text-6xl xl:text-7xl xl:pt-28 lg:pt-22 lg:pt-24 font-bold text-center pt-10 font-cursive text-wheat">
          DevSpaces
        </h1>
        <p className="text-center text-xl lg:text-2xl lg:px-28 xl:px-32 text-white lg:py-12 py-6 px-10 font-play">Find live and scheduled Twitter spaces on tech, programming, and development</p>
        <div className="flex justify-center">
          <button className="bg-wheat font-play font-black text-lg px-24 py-4 my-5 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange duration-200">
            <Link href="#topics">
              <a>
                Get Started
              </a>
            </Link>
          </button>
        </div>
      </div>
      <div className="max-w-full flex px-10 lg:hidden">
        <Image
          className="mx-auto"
          src="/image.png"
          // layout="responsive"
          width={600}
          height={600}
        />
      </div>
      <div className="max-w-full hidden px-10 lg:flex">
        <Image
          className="mx-auto"
          src="/image.png"
          // layout="responsive"
          width={900}
          height={900}
        />
      </div>
    </div>
    </section>
  );
}

export default hero;
