
import Navbar from "@/components/Navbar";
import React from "react";
import Image from 'next/image';
import KhaoSoi from "@/public/math/KhaoSoi.png";
export default function geo() {
 const item = [
    { img: KhaoSoi , title: 'ชิ้นงาน นักธุรกิจตัวน้อย'},


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
            <h1 className="text-3xl text-center md:text-4xl font-semibold mb-4 lg:text-6xl ">
                คณิตศาสตร์
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-1">

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