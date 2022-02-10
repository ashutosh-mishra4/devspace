import React from "react";
import Image from "next/image";

function hero() {
  return (
    <section className="bg-background">
    <div className="bg-green-300 border-b-2 border-t-2 border-black">
      <h1 className="text-4xl font-bold text-center px-16 pt-10 font-cursive text-wheat">
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
      <p className="text-center text-xl text-white px-10 font-play">Find and save upcoming Twitter spaces on tech, programming, and development</p>
      <div className="flex justify-center">
        <button className="bg-wheat font-play font-black text-lg px-24 py-4 my-5 rounded">Get Started</button>
      </div>
    </div>
    </section>
  );
}

export default hero;
