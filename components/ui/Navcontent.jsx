"use client"
import { motion } from "motion/react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
export default function NavContent(){
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
  return(
  <>
      <div className="dropdown  dropdown-start py-5">
                <div
                  tabIndex={0}
                  role="button"
                  className="text-nowrap text-sm cursor-pointer flex items-center text-black"
                >
                  Best Topics<HiOutlineChevronDoubleDown className="mt-1 size-3"/>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-black transition-all duration-1000 flex flex-col gap-2 text-sm menu bg-base-100 z-1 w-45 rounded-xl h-auto p-2 shadow-sm"
                >
                  {topics.map((topic, index) => (
                    <motion.li  whileTap={{scale:0.95}} key={index} className="w-full text-center">
                      <a>{topic}</a>
                    </motion.li>
                  ))}
                  <li className="w-full text-center dropdown dropdown-hover dropdown-end dropdown-right flex">
                    <a className="py-2">
                      View all topics
                      <HiOutlineChevronDoubleDown className="md:rotate-0 rotate-180" />
                    </a>
                    <ul className="dropdown-content transition-all duration-1000 flex flex-col m-0 gap-2 text-sm menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm">
                      {topics2.map((topic, index) => (
                        <motion.li  whileTap={{scale:0.95}} key={index} className="w-full text-center">
                          <a>{topic}</a>
                        </motion.li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
  </>
    );
} 