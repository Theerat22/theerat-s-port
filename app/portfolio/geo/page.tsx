import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import Geoimg from "@/public/geo/phumirak.jpg";
import Image from 'next/image';
import Aircraft from "@/public/geo/aircraft.png";
import Pygmee from "@/public/geo/pygmee.png";

export default function geo() {
 const item = [
    { img: Geoimg , title: 'ภูมิลักษณ์ประเทศไทย'},
    { img: Aircraft , title: 'อุตสาหกรรมเครื่องบิน'},
    { img: Pygmee , title: 'ชนเผ่าปิ๊กมี่'}
 ]
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
            <h1 className="text-4xl text-center md:text-5xl font-semibold mb-4 lg:text-6xl ">
                ภูมิศาสตร์
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
            <div className="flex flex-col p-3 items-center text-center">
                <iframe
                    className="w-full aspect-video self-stretch md:min-h-96"
                    src="https://www.youtube.com/embed/hY6klSccx_8"
                    title="Product Overview Video"
                    aria-hidden="true"
                />
                <p className="mt-4 text-lg font-bold">เมืองไทยไม่ไปไม่รู้</p>
            </div>

            {item.map((item, index) => (
                <div className="flex flex-col p-3 items-center text-center" key={index}>
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={350}
                        height={150}
                    />
                    <p className="mt-4 text-lg font-bold">{item.title}</p>
                </div>
            ))}


        </div>

      </div>
      
    </>
  );
}