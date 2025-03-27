"use client";
import Link from "next/link";
import Barmenu from "./Barmenu";
import Img from "@/image/logo-transparent-png.png";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { FaChevronRight } from "react-icons/fa";
export default function NabBar() {
  const [isOpen, setisOpen] = useState(false);
  const Cli = ()=> setisOpen(!isOpen);
  const Non = ()=> setisOpen(false);
  return (
    <>
      <main className="sticky top-0  flex justify-between min-w-screen z-20">
        <div className="navbar  flex text-white  w-full justify-between min-[341px]:gap-4 items-center backdrop-blur-3xl shadow-sm md:px-6">
          {/* leftside */}
          <div className="">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Img}  width={40} alt="Img" />
              <p className="hidden min-[414px]:block text-xl">INSTRAWAVE</p>
            </Link>
          </div>
          <div className="left flex gap-5 items-center md:px-6 md:shadow-lg">
            <div className="flex gap-2  md:gap-4 h-full justify-center items-center">
              <div className="dropdown dropdown-hover dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="text-nowrap text-sm cursor-pointer"
                >
                  Best Topics
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-black transition-all duration-1000 flex flex-col gap-2  text-sm  menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm"
                >
                  <li className="w-full text-center">
                    <a>Artificial Intelligence</a>
                  </li>
                  <li className="w-full text-center">
                    <a>Data Science</a>
                  </li>
                  <li className="w-full text-center">
                    <a>Finance</a>
                  </li>
                  <li className="w-full text-center">
                    <a>Business Administration</a>
                  </li>
                  <li className="w-full text-center">
                    <a>Cybersecurity</a>
                  </li>
                  <li className="w-full text-center">
                    <a>Computer Science</a>
                  </li>
                  <li className="w-full text-center dropdown dropdown-hover dropdown-end dropdown-left  md:dropdown-right flex">
                    <a className="py-2">
                      Veiw all topics
                      <FaChevronRight className=" md:rotate-0 rotate-180" />
                    </a>
                    <ul className="dropdown-content transition-all duration-1000 flex flex-col m-0 gap-2  text-sm  menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm">
                      <li className="w-full text-center">
                        <a>Artificial Intelligence</a>
                      </li>
                      <li className="w-full text-center">
                        <a>Data Science</a>
                      </li>
                      <li className="w-full text-center">
                        <a>Finance</a>
                      </li>
                      <li className="w-full text-center">
                        <a>Business Administration</a>
                      </li>
                      <li className="w-full text-center">
                        <a>Cybersecurity</a>
                      </li>
                      <li className="w-full text-center">
                        <a>Computer Science</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="min-[341px]:px-1">
                <li>
                  <Link href="/user">Gallery</Link>
                </li>
              </ul>
              <main className="md:flex h-full justify-center items-center hidden gap-4 px-2">
                <Link href="/user/Interships">Interships</Link>
                <Link href="/user/Courses">Courses</Link>
                <motion.button whileTap={{scale:0.8}} className="btn btn-active">Services</motion.button>
              </main>
              {/* mobile */}
              <main className="md:hidden flex flex-col min-[296px]:px-2">
                <button className="z-10" onClick={Cli}>
                  {isOpen? <Barmenu />:<Barmenu />}
                </button>
                {/* dropmenu */}
                {isOpen &&(
                  <motion.main className="mt-18 min-h-screen w-96 flex flex-col gap-3 absolute top-0 left-0 p-3 bg-black">
                    <Link href="/user/Interships">Interships</Link>
                    <Link href="/user/Courses">Courses</Link>
                  </motion.main>
                )}
              </main>
            </div>
          </div>
        </div>
      </main>
    </> 
  );
}
