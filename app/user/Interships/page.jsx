"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import Data from "@/json/Interships.json";
import { BsFillLightningChargeFill } from "react-icons/bs";
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
              <div className="logo"></div>
              <h1>Get Internships Jobs preparation traning Free !</h1>
              <h2 className="text-[12px] font-extralight">
                By enrolling the tranings at Flat 80% OFF !
              </h2>
              <div className="flex gap-3 w-full p-4">
                <p className="flex">
                  <BsFillLightningChargeFill />
                </p>
                <p className="flex"></p>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-scroll p-1 ">
            {Data.map((con) => {
              return (
                <div className="w-full h-auto p-1" key={con.id}>
                  <div className="card w-full h-auto md:h-56 sahdow-2xl">
                    <div className="logo">{con.logo}</div>
                    <h1>{con.title}</h1>
                    <h2>{con.description}</h2>
                  </div>
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
        Second Page Content
      </motion.div>
    </>
  );
}
