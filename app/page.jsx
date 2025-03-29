"use client";
import Data from "@/json/Home.json";
import Image from "next/image";
import Img from "@/image/BBimg.jpg";
import CardHov from "@/components/ui/CardHov";
import { PiShootingStarThin } from "react-icons/pi";
import Slide from "@/components/ui/Todu";
import Card3d from "@/components/ui/Card3d";
import User from "./user/page";
import Card2 from "@/components/ui/Card2";
export default function Home() {
  return (
    <>
      <main className="min-w-screen h-auto flex justify-center">
        <div className="hero h-auto pt-8">
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
              <p className="py-6 px-3 text-sm poppins-regular">
                {Data.contant}
              </p>
              <button className="btn bg-cyan-400  mx-3 hover:bg-neutral-300 transition-all duration-700 hover:scale-105 hover:translate-x-1.5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="min-h-auto p-4 min-w-screen flex flex-col  items-center justify-center flex-wrap">
        <h1 className="text-6xl p-4 py-10 tektur-GG">Our programs</h1>
        <div className=" min-h-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap gap-10">
          <CardHov
            cov="Click here"
            dis="Explore various internship opportunities to kickstart your career."
            head="New internships"
            className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[2000%] duration-500 z-[-1] op"
          />
          <CardHov
            cov="Click here"
            dis="Discover new courses to enhance your skills and knowledge."
            head="New Courses"
            className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#0040ff] group-hover:scale-[2000%] duration-500 z-[-1] op"
          />
          <CardHov
            cov="Click here"
            dis="Learn about placement opportunities and secure your dream job."
            head="Placements"
            className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#0dff00] group-hover:scale-[2000%] duration-500 z-[-1] op"
          />
          <CardHov
            cov="Click here"
            dis="Learn more about tech skill and boost your career."
            head="Tech skills"
            className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#202124] group-hover:scale-[2000%] duration-500 z-[-1] op"
          />
        </div>
      </main>
      <main className="min-h-screen min-w-screen flex flex-col gap-8 items-center py-16 p-10">
        <div className="flex flex-col md:flex-row items-center">
          <PiShootingStarThin className="size-20" />
          <div>
            <h1 className="text-[18px] sm:text-2xl md:text-4xl">
              What makes InterviewBit No. 1
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl">
              Resource for tech interview preparation
            </p>
          </div>
        </div>
        <Slide
          className="btn btn-active "
          class="md:w-150 h-96"
          cls="card text-center poppins-regular border border-e-0 border-s-0 border-b-0 rounded flex flex-col items-center gap-4 p-4 "
        />
        <div className="flex gap-4 justify-center flex-wrap">
          <Card3d
            dis="Access a wide range of services including courses, mentorship, and career guidance."
            card="Services"
            back="New Programs"
            backdis="Explore our latest offerings designed to help you succeed."
            hover="Learn more"
            cls2="absolute w-full h-full rounded-xl bg-sky-500 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]"
            cls1="absolute w-full h-full rounded-3xl bg-neutral-900 p-6 text-white [backface-visibility:hidden]"
            emo="📓"
            emo2="👍"
            btn="Know more"
          />
          <Card3d
            dis="Enhance your skills with interactive learning modules and expert guidance."
            card="Skill Development"
            back="Interactive Learning"
            backdis="Engage in hands-on projects and real-world scenarios."
            hover="Discover"
            cls2="absolute w-full h-full rounded-xl bg-green-500 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]"
            cls1="absolute w-full h-full rounded-3xl bg-gray-800 p-6 text-white [backface-visibility:hidden]"
            emo="🧩"
            emo2="🖐️"
            btn="Know more"
          />
          <Card3d
            dis="Prepare for your dream job with our comprehensive placement support."
            card="Career Support"
            back="Placement Assistance"
            backdis="Get guidance and resources to ace your interviews."
            hover="Explore"
            cls2="absolute w-full h-full rounded-xl bg-lime-500 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]"
            cls1="absolute w-full h-full rounded-3xl bg-cyan-900  p-6 text-white [backface-visibility:hidden]"
            emo="📃"
            emo2="🤝"
            btn="Know more"
          />
        </div>
      </main>
      <User/>
      <main className="min-w-screen min-h-96 flex justify-center items-center">
<Card2 head="Get intership now !" head2="Learn More" />
      </main>
    </>
  );
}
