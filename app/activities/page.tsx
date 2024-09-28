import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from 'next/image';
import Ai1 from "@/public/activities/ai1.jpg";
import Ai2 from "@/public/activities/ai2.jpg";
import Swi1 from "@/public/activities/swi1.jpg";
import Swi2 from "@/public/activities/swi2.jpg";
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
      <div className="lg:min-h-screen px-5 sm:px-10 md:px-20 lg:px-40 mx-auto max-w-[75rem]">
        <div className="text-center mt-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10">
                Activities
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10">

            <div className="flex flex-col p-5 items-center text-center">
                <p className="mt-6 text-2xl font-bold">โครงการ AI Builders</p>
                <div className="flex flex-col mt-7 justify-center items-center lg:flex-row gap-8">
                    <Image
                        src={Ai1}
                        alt="Ai Builders"
                        width={250}
                        height={150}
                        className="w-full lg:w-1/2 rounded-lg"
                    />
                    <Image
                        src={Ai2}
                        alt="Ai Builders"
                        width={500}
                        height={350}
                        className="w-full lg:w-1/2 rounded-lg"
                    />
                </div>
                <p className="mt-4 text-lg font-normal">
                    เข้าร่วม โครงการ AI Builders ครั้งที่ 4 จัดโดย สถาบันวิจัยปัญญาประดิษฐ์ประเทศไทย
                </p>
            </div>

            <div className="flex flex-col p-5 items-center text-center">
                <p className="mt-6 text-2xl font-bold">Swift Coding Club Thailand - iOS Developer Bootcamp</p>
                <div className="flex flex-col mt-7 justify-center items-center lg:flex-row gap-8">
                    <Image
                        src={Swi1}
                        alt="SwiftUI"
                        width={250}
                        height={150}
                        className="w-full lg:w-1/2 rounded-lg"
                    />
                    <Image
                        src={Swi2}
                        alt="SwiftUI"
                        width={500}
                        height={350}
                        className="w-full lg:w-1/2 rounded-lg"
                    />
                </div>
                
                <p className="mt-4 text-lg font-normal leading-relaxed sm:leading-normal">
                    เข้าร่วม iOS Developer Bootcamp โดย Swift Coding Club TH ร่วมกับ ภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย
                </p>
            </div>

        </div>
      </div>
    </>
  );
}
