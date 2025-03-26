"use client";
import Link from "next/link";
import Barmenu from "./Barmenu";
import Img from '../image/logo-transparent-png.png'
import Image from "next/image";
import { useState } from "react";
export default function NabBar() {
  const [Open, setOpen] = useState(true);
  const DraOpen = ()=> setOpen(!Open)
 return (
    <>
      <main className="sticky top-0 flex justify-between min-w-screen z-20">
        <div className="navbar flex  w-full justify-between min-[341px]:gap-5 items-center backdrop-blur-3xl shadow-sm md:px-6">
          {/* leftside */}
          <div className="left flex gap-5 items-center md:backdrop-blur-xl md:px-6 md:shadow-lg">
            <div className="">
              <Link href="/" className="flex items-center gap-2 text-sm">
                <Image src={Img} height={40} width={40} />
               <p className=" hidden min-[414px]:block">INSTRAWAVE</p> 
              </Link>
            </div>
            <div className="flex gap-2  md:gap-4 h-full justify-center items-center">
              <div className="dropdown dropdown-hover dropdown-center">
                <div tabIndex={0} role="button" className="text-nowrap text-sm">
                  Best Topics
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content flex flex-col gap-2  text-sm  menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm"
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
                  <li className="w-full text-center dropdown dropdown-hover dropdown-end dropdown-right">
                    <a className="py-2">Veiw all topics</a>
                    <ul className="dropdown-content flex flex-col m-0 gap-2  text-sm  menu bg-base-100 z-1 w-34 rounded-xl h-auto p-2 shadow-sm">
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
              <ul className="menu menu-horizontal min-[341px]:px-1">
                <li>
                  <Link href="/user">Users</Link>
                </li>
              </ul>
            </div>
          </div>
         {/* rightside */}
     <div className="right px-4">
   <Barmenu/>


   
     </div>
        </div>
      </main>
    </>
  );
}
