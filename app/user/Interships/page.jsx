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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        className="text-white min-w-screen min-h-screen flex justify-center p-2.5 md:p-6"
      >
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
          className="right w-full h-auto flex flex-col items-center text-black bg-gray-300 md:p-4"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">9533 Total Internships</h1>
            <p className="text-[12px] font-light">
              Latest Summer Internships in India
            </p>
          </div>
          <div className="w-full h-auto p-1">
            <div className="card w-auto h-auto shadow-2xl flex flex-col  items-center p-6 md:p-4">
              <div className="logo w-full flex justify-end absolute">
                <img
                  className=" h-24"
                  src="https://png.pngtree.com/png-clipart/20230529/original/pngtree-special-offer-tag-shape-free-vector-png-image_9173639.png"
                  alt="img"
                />
              </div>
              <h1 className="font-bold md:text-xl text-sm p-3">
                Get Internships Jobs preparation traning Free !
              </h1>
              <h2 className="text-[12px] font-extralight">
                By enrolling the tranings at Flat 80% OFF !
              </h2>
              <div className="flex gap-3 flex-col w-full p-4">
                <div className="flex md:flex-row flex-col">
                  <div className="flex gap-0.5">
                    <BsFillLightningChargeFill />
                    <p className="text-[10px] flex gap-0.5">
                      Coupon:
                      <a className="font-bold" href="">
                        COLLEGE!2
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-0.5">
                    {" "}
                    <IoIosTimer />
                    <p className="text-[10px] flex gap-0.5">
                      Offer end in
                      <a className="font-bold" href="">
                        3 days
                      </a>
                    </p>
                  </div>
                </div>
                <p className="flex md:text-sm text-[11px]">
                  Choose for web dev,JavaScript,Data Science, Marketing & more
                </p>
              </div>
              <div className=" w-full h-full flex justify-between items-start p-4">
                <p className="badge badge-sm text-[11px] text-nowrap">Goverment Certificition</p>
                <Link className="btn btn-link btn-sm" href="#">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-1 ">
            {Data.map((con) => {
              return (
                <div className="w-auto h-auto md:p-4" key={con.id}>
                  <div className="card w-auto h-auto shadow-2xl flex flex-col  items-center p-6 md:p-4">
                    <div className="w-full flex absolute justify-end">
                      <img
                        className="mix-blend-color-burn me-2"
                        src={con.logo}
                        width={40}
                        height={40}
                        alt="Img"
                      />
                    </div>
                    <h1 className="md:text-xl text-sm font-bold">{con.title}</h1>
                    <h2 className="text-[12px] font-extralight">
                      {con.subtitle}
                    </h2>
                    <div className="flex gap-3 flex-col w-full p-4">
                      <div className="flex md:flex-row flex-col gap-0.5">
                        <div className="flex gap-1.5">
                          <BsFillLightningChargeFill />
                          <p className="text-[10px] flex gap-0.5">
                            Coupon:
                            <a className="font-bold" href="">
                              COLLEGE!2
                            </a>
                          </p>
                        </div>
                        <div>
                          <div className="flex gap-1.5">
                            <IoIosTimer />
                            <p className="text-[10px] flex gap-0.5">
                              Offer end in
                              <a className="font-bold" href="">
                                {con.time_remaining}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="flex md:text-sm text-[11px]">{con.description}</p>
                      <p className="md:text-sm text-[12px] font-bold">For: {con.time}</p>
                      <p className="text-[11px] font-extralight">
                        Place → {con.place}
                      </p>
                    </div>
                    <div className=" w-full h-full flex  text-[11px] md:text-sm flex-col items-start px-3">
                      <div className="w-full h-full flex  text-[11px] md:text-sm  items-start justify-between">
                        <p className="badge badge-sm text-[11px]">{con.badge}</p>
                        <Link className=" btn btn-link btn-sm" href="#">
                          Enroll Now
                        </Link>
                      </div>
                      <p className="text-sm">{con.salary}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.main>

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
