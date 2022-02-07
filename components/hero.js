import React from "react";
import Image from "next/image";

function hero() {
  return (
    <section className="bg-sky-700">
      <h1 className="text-4xl font-bold text-center mx-4">
        Find your next{" "}
        <span className="underline decoration-pink-500">tech space</span>
      </h1>
      <p className="text-center text-lg mx-4">Get reminded for your favorite Twitter spaces on tech, programming, and development in 3 simple steps</p>
      {/* <Image src="/Technologies.svg" height={1867} width={1761} /> */}
    </section>
  );
}

export default hero;
