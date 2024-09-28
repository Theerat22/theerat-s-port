
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Mixue from "@/public/language/mixue.jpg";
export default function geo() {

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
                ภาษาต่างประเทศ
            </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-1">

            <div className="flex flex-col p-3 items-center text-center">
                <iframe
                    className="w-full aspect-video self-stretch md:min-h-96"
                    src="https://www.youtube.com/embed/J3b9I0tGSYA"
                    title="Short Film"
                    aria-hidden="true"
                />
                <p className="mt-4 text-lg font-bold">English Short Film</p>
            </div>
            <div className="flex flex-col p-3 items-center text-center">
                <iframe
                    className="w-full aspect-video self-stretch md:min-h-96"
                    src="https://www.youtube.com/embed/iQ0k9J3A8H0"
                    title="My Role Model"
                    aria-hidden="true"
                />
                <p className="mt-4 text-lg font-bold">My Role Model</p>
            </div>
            <div className="flex flex-col p-3 items-center text-center" >
                    <Image
                        src={Mixue}
                        alt="Mixue"
                        width={350}
                        height={150}
                        layout="responsive"
                    />
                    <p className="mt-4 text-lg font-bold">กิจกรรม วันไหว้บ๊ะจ่าง</p>
            </div>


        </div>

      </div>
      
    </>
  );
}