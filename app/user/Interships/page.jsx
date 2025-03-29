"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import Data from "@/json/Interships.json";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import Link from "next/link";
export default function Intership() {
  const [isSecondPage, setIsSecondPage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position windoww
      setIsSecondPage(window.scroll > window.innerHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="text-white min-w-screen min-h-screen flex justify-center p-6">
        {/* Left Panel */}
        <motion.div
          className={`w-140 md:block hidden h-screen bg-gray-200 p-8 pt-14 transition-all duration-500 ${
            isSecondPage ? "relative" : "sticky top-0"
          }`}
        >
          <fieldset className="fieldset mt-14 w-xs bg-base-200 border border-base-300 p-4 rounded">
            <legend className="fieldset-legend">Filter</legend>

            <label className="fieldset-label">Profile</label>
            <input
              type="text"
              className="input text-black"
              placeholder="e.g kndsabiyd"
            />

            <label className="fieldset-label">Location</label>
            <input
              type="text"
              className="input text-black"
              placeholder="e.g Chamba"
            />
            <label className="fieldset-label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Work from home
            </label>
            <label className="fieldset-label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Part-time
            </label>
            <label className="fieldset-label flex flex-col">
              Desired minimum monthly stipend (₹)
              <input type="range" min="1" max="100" className="range" />
              <label className="fieldset-label text-sm font-extralight">
                0k——2k———4k———5k———8k———10k
              </label>
            </label>

            <label className="fieldset-label">Keyword search</label>
            <label className="input">
              <input
                className="text-black"
                type="text"
                placeholder="e.g chamba,design etc."
              />
              <span className="label text-white bg-blue-500 rounded-full">
                <CiSearch />
              </span>
            </label>
          </fieldset>
        </motion.div>

        {/* Right Panel */}
        <div
          id="right-panel"
          className="right w-full h-auto flex flex-col items-center text-black md:h-[200vh] bg-gray-300 p-4"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">9533 Total Internships</h1>
            <p className="text-[12px] font-light">
              Latest Summer Internships in India
            </p>
          </div>
          <div className="w-full h-auto p-1">
            <div className="card w-full h-auto md:h-56 shadow-2xl flex items-center">
              <div className="logo w-full flex justify-end absolute">
                <img
                  className=" h-24"
                  src="https://png.pngtree.com/png-clipart/20230529/original/pngtree-special-offer-tag-shape-free-vector-png-image_9173639.png"
                  alt="img"
                />
              </div>
              <h1 className="font-bold text-xl p-3">
                Get Internships Jobs preparation traning Free !
              </h1>
              <h2 className="text-[12px] font-extralight">
                By enrolling the tranings at Flat 80% OFF !
              </h2>
              <div className="flex gap-3 flex-col w-full p-4">
                <div className="flex gap-0.5">
                  <BsFillLightningChargeFill />
                  <p className="text-[11px] flex gap-0.5">
                    Coupon:
                    <a className="font-bold" href="">
                      COLLEGE!2
                    </a>
                  </p>
                  <IoIosTimer />
                  <p className="text-[11px] flex gap-0.5">
                    Offer end in
                    <a className="font-bold" href="">
                      3 days
                    </a>
                  </p>
                </div>
                <p className="flex text-sm">
                  Choose for web dev,JavaScript,Data Science, Marketing & more
                </p>
              </div>
              <div className=" w-full h-full flex justify-between items-start p-4">
                <p className="badge badge-sm">Goverment Certificition</p>
                <Link className=" btn btn-link" href="#">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-scroll scrollbar-hide p-1 ">
            {Data.map((con) => {
              return (
                <div className="md:w-110  w-auto h-auto p-4" key={con.id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card w-auto h-auto shadow-2xl flex flex-col  items-center p-6 md:p-4"
                  >
                    <div className="w-full flex absolute justify-end">
                      {" "}
                      <img src={con.logo} width={50} height={40} alt="Img" />
                    </div>
                    <h1 className="text-xl font-bold">{con.title}</h1>
                    <h2 className="text-[11px] font-extralight">
                      {con.subtitle}
                    </h2>
                    <div className="flex gap-3 flex-col w-full p-4">
                      <div className="flex md:flex-row flex-col gap-0.5">
                        <div className="flex gap-1.5">
                          <BsFillLightningChargeFill />
                          <p className="text-[11px] flex gap-0.5">
                            Coupon:
                            <a className="font-bold" href="">
                              COLLEGE!2
                            </a>
                          </p>
                        </div>
                        <div>
                          <div className="flex gap-1.5">
                          <IoIosTimer />
                          <p className="text-[11px] flex gap-0.5">
                            Offer end in
                            <a className="font-bold" href="">
                              {con.time_remaining}
                            </a>
                          </p>
                          </div>
                          
                        </div>
                      </div>
                      <p className="flex text-sm">{con.description}</p>
                      <p className="text-sm font-bold">For: {con.time}</p>
                      <p className="text-[11px] font-extralight">
                        Place → {con.place}
                      </p>
                    </div>
                    <div className=" w-full h-full flex  text-[11px] md:text-sm flex-col items-start px-3">
                      <div className="w-full h-full flex  text-[11px] md:text-sm  items-start justify-between">
                        <p className="badge badge-sm">{con.badge}</p>
                        <Link className=" btn btn-link" href="#">
                          Enroll Now
                        </Link>
                      </div>
                      <p className="text-sm">{con.salary}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <motion.div
        className="min-w-screen min-h-screen flex justify-center items-center text-black text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSecondPage ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Second Pagemm
      </motion.div>
    </>
  );
}
