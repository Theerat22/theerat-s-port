import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";

export default function geo() {

  return (
    <>
      <Head>
        <title>Theerat's Port</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Portfolio", path: "#" },
          {
            name: "Activities",
            path: "#activities",
          },
        ]}
      />
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="justify-center mt-20">
            <h1 className="text-3xl text-center md:text-4xl font-semibold mb-4 lg:text-6xl ">
                ดนตรีสากล
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-1">

            <div className="flex flex-col p-3 items-center text-center">
                <iframe
                    className="w-full aspect-video self-stretch md:min-h-96"
                    src="https://www.youtube.com/embed/LLtXb00gfvo"
                    title="Product Overview Video"
                    aria-hidden="true"
                />
                <p className="mt-4 text-lg font-bold">เพลง โกหก - tattoo colour</p>
            </div>

        </div>

      </div>
      
    </>
  );
}