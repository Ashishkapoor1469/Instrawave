"use client";
import Link from "next/link";
import Img from "@/image/logo-transparent-png.png";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { motion } from "motion/react";
import NavContent from "./Navcontent";
import Theme from "./Theme";
import { FaChevronRight } from "react-icons/fa";

export default function NabBar() {
  const [isOpen, setIsOpen] = useState(false);
  const Non = () => setIsOpen(false);

  const topics = [
    "Artificial Intelligence",
    "Data Science",
    "Finance",
    "Business Administration",
    "Cybersecurity",
    "Computer Science",
  ];

  const topics2 = [
    "Artifi",
    "Data Science",
    "Finance",
    "Business Administration",
    "Cybersecurity",
    "Computer Science",
  ];

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Interships', href: '/user/Interships' },
    { name: 'Gallery', href: '/user/Gallary' },
    { name: 'Courses', href: '/user/Courses' },
  ];


  return (
    <>
      <main className="sticky top-0 flex justify-between min-w-screen z-20">
        <div className="navbar flex text-black w-full justify-between min-[341px]:gap-4 items-center backdrop-blur-3xl shadow-sm md:px-6">
          {/* leftside */}
          <div className="">
            <Link href="/" className="flex items-center gap-2 z-30">
              <Image src={Img} width={40} alt="Img" />
              <p className="text-sm min-[317]:text-xl">INSTRAWAVE</p>
            </Link>
          </div>
          <div className="left md:flex hidden gap-5 items-center md:px-6 md:shadow-lg">
            <div className="flex gap-2 md:gap-4 h-full justify-center items-center">
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
                  className="dropdown-content text-black transition-all duration-1000 flex flex-col gap-2 text-sm menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm"
                >
                  {topics.map((topic, index) => (
                    <motion.li whileHover={{scale:1.05}} whileTap={{scale:0.95}} key={index} className="w-full text-center">
                      <a>{topic}</a>
                    </motion.li>
                  ))}
                  <li className="w-full text-center dropdown dropdown-hover dropdown-end dropdown-left md:dropdown-right flex">
                    <a className="py-2">
                      View all topics
                      <FaChevronRight className="-rotate-45" />
                    </a>
                    <ul className="dropdown-content transition-all duration-1000 flex flex-col m-0 gap-2 text-sm menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm">
                      {topics2.map((topic, index) => (
                        <motion.li whileHover={{scale:1.05}} whileTap={{scale:0.95}} key={index} className="w-full text-center">
                          <a>{topic}</a>
                        </motion.li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="min-[341px]:px-1 hover:text-blue-500">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link href="/user/Gallery">Gallery</Link>
                </motion.li>
              </ul>
              <main className="md:flex h-full justify-center items-center hidden gap-4 px-2">
               <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="list-none"><Link className="hover:text-blue-500" href="/user/Interships">Interships</Link></motion.li> 
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="list-none"><Link className="hover:text-blue-500" href="/user/Courses">Courses</Link></motion.li>
                <motion.button
                 whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="btn btn-neutral"
                >
                  Services
                </motion.button>
                <Theme/>
              </main>
            </div>
          </div>
          {/* mobile */}
          <div className="md:hidden flex gap-3 items-center min-[296px]:px-2">
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="btn btn-active btn-sm mt-1"
            >
              Services
            </motion.button>
            
            <button className="z-20 text-neutral-600 swap swap-rotate" onClick={()=> setIsOpen(!isOpen)}>
            <input type="checkbox" />
            {isOpen ? <motion.div whileTap={{scale:0.2}} transition={{duration:0.1}}><X className="font-extralight" size={28} /></motion.div>: <motion.div whileTap={{scaleY:0}} transition={{duration:0.3}}><Menu className="font-extralight" size={28} /></motion.div>}
           </button>
          </div>
          {/* dropmenu */}
          {isOpen && <>
            <motion.div
          initial={{ opacity: 0,scaleY:0}}
          animate={{ opacity: 1, scaleY:1}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full h-screen rounded-e-2xl bg-[#F6F6F6] flex flex-col  mt-14 p-4 shadow-md z-10"
        >
          <ul className="space-y-6 text-[16px]">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block text-[#11181C] hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
     <NavContent/>
        </motion.div>
          </>}
        </div>
      </main>
    </>
  );
}