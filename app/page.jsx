import Data from "@/json/Home.json";
import Image from "next/image";
import Img from '@/image/BBimg.jpg'
import Card3d from "@/components/ui/Card3d";
export default function Home() {
  return (
    <>
      <main className="min-w-screen h-auto flex justify-center">
        <div className="hero h-auto pt-8 text-neutral-content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              unoptimized
              loading="lazy"
              width={500}
              height={500}
              alt="Img"
              src={Img}
              className="max-w-sm rounded-lg w-full h-120 shadow-2xl"
            />
            <div>
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold px-4 md:pe-4 ps-3 poppins-extralight-italic">
                {Data.heading}
              </h1>
              <p className="py-6 md:px-3 poppins-regular">{Data.contant}</p>
              <button className="btn md:mx-3 hover:bg-neutral-300 transition-all duration-700 hover:scale-105 hover:translate-x-1.5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="min-h-screen min-w-screen flex justify-center items-center">
      <Card3d btn="Join now" card="Change prop" dis="yoyo yo" back="Back Side" hover="Hover to flip!" backdis=" Back content goes here. This is visible after hovering." />
      </main>
    </>
  );
}
