"use client";
import Data from "@/json/Gallery.json";
import { motion } from "motion/react";

export default function Gallery() {
  return (
    <>
      <main className="min-h-auto min-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 auto-rows-[150px]">
          {Data.map((item, index) => (
            <motion.div
              key={index}
              className={`w-full border-2 border-black rounded-xl flex items-center justify-center text-white text-2xl font-bold ${
                index % 5 === 0
                  ? "row-span-2"
                  : index % 3 === 0
                  ? "row-span-3"
                  : "row-span-1"
              }`}
              whileTap={{ scale: 0.9, rotate: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img
                src={item.image}
                alt={item.title || "Gallery Image"}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}