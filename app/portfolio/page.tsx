// import { useEffect } from "react";
// import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import IconGrid from "@/components/Card";

export default function Port() {

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
        <div className="justify-center mt-24">
            <h1 className="text-5xl text-center md:text-6xl font-semibold mb-4 lg:text-7xl ">
                SUBJECTS
            </h1>
        </div>
        <div className="w-full flex justify-center">
          <IconGrid />
        </div>
      </div>
      
    </>
  );
}