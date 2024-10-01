
import Navbar from "@/components/Navbar";
import React from "react";
import Image from 'next/image';
import Moo from "@/public/cooking/Moo.png";
import Cabonara from "@/public/cooking/Cabonara.png";

export default function geo() {
 const item = [
    { img: Cabonara , title: 'ประกอบอาหาร สปาเก็ตตี้คาโบนาร่า'},
    { img: Moo , title: 'ประกอบอาหาร หมูโสร่ง'},
 ]
  return (
    <>
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
            <h1 className="text-3xl text-center md:text-4xl font-semibold mb-4 lg:text-5xl ">
                สร้างสรรค์งานฝีมือ
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">

            {item.map((item, index) => (
                <div className="flex flex-col p-3 items-center text-center" key={index}>
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={350}
                        height={150}
                        layout="responsive"
                    />
                    <p className="mt-4 text-lg font-bold">{item.title}</p>
                </div>
            ))}


        </div>

      </div>
      
    </>
  );
}