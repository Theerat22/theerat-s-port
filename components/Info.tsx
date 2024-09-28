import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from '@headlessui/react';
import Sittha from "@/public/sittha.jpg";
import Link from "next/link";
import { MdPortrait } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
const Info = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-16">
      <div className="justify-center mt-20">
        <h1 className="text-5xl text-center md:text-6xl font-semibold mb-4 ">
          PORTFOLIO
        </h1>
      </div>
      <div className="flex justify-center mt-7">
        <Image
          src={Sittha}
          alt="Sittha"
          width={180}
          height={180}
          className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border 
            md:w-48 md:h-48 lg:w-64 lg:h-64"
        />
      </div>

      <div className="w-full mt-7 lg:w-2/3 space-y-3">
        <h2 className="text-4xl font-bold">Theeratdolchat Chatchai</h2>
        <h3 className="text-2xl mt-1 font-normal">(Sittha)</h3>
        <Link
          href="https://www.instagram.com/theeerat_?igsh=MTJ2emRuZ2R1N2lvNA%3D%3D&utm_source=qr"
          target="_blank"
          className="inline-flex items-center mt-2 text-gray-600 hover:text-gray-800"
        >
          <span>@theeerat_</span>
          <BsArrowUpRight className="ml-2 h-4" />
        </Link>
      </div>


      <div className="mt-20" id="personal">
        <h1 className="text-2xl font-bold mb-2">ข้อมูลส่วนตัว</h1>
        <p className="text-lg mb-1">ชื่อ : ม.ล.ธีรัตม์ดลฉัตร ฉัตรชัย</p>
        <p className="text-lg mb-1">ชื่อเล่น : สิทธา</p>
        <p className="text-lg mb-1">อายุ : 17 ปี</p>
        <p className="text-lg mb-1">แผนการเรียน : ศิลป์-ภาษาจีน</p>
        <p className="text-lg mb-1">วันเกิด : 25 กันยายน 2550</p>
        <p className="text-lg mb-1">สัญชาติ : ไทย</p>
        <p className="text-lg">งานอดิเรก : เขียนโปรแกรม ฟังเพลง เล่นกีตาร์</p>
      </div>

      <div className="mt-20" id="family">
        <h1 className="text-2xl font-bold mb-2">ข้อมูลครอบครัว</h1>
        <p className="text-lg mb-1">บิดา : ม.ร.ว.บวรฉัตร ฉัตรชัย</p>
        <p className="text-lg mb-1">มารดา : นางจีรนุช ฉัตรชัย ณ อยุธยา</p>
      </div>



      <div className="grid grid-cols-2 gap-2 text-center mt-20 ">
        <Link href="/portfolio" className="flex flex-col items-center transform hover:scale-110 transition duration-300">
            <div className="p-4 border rounded-full">
              <MdPortrait size={60} />
            </div>
            <p className="mt-4 text-lg">Portfolio</p>
        </Link>

        <Link href="/activities" className="flex flex-col items-center transform hover:scale-110 transition duration-300">
            <div className="p-4 border rounded-full">
              <HiUserGroup size={60} />
            </div>
            <p className="mt-4 text-lg">Activities</p>
        </Link>

      </div>

    </div>
  );
};

export default Info;
