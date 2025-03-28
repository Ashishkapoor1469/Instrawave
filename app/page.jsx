import Data from "@/json/Home.json";
import Image from "next/image";
import Img from "@/image/BBimg.jpg";
import CardHov from "@/components/ui/CardHov";
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
          cov="Hello Guys"
          dis="Explore various internship opportunities to kickstart your career."
          head="New internships"
          className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[2000%] duration-500 z-[-1] op"
        />
        <CardHov
          cov="Hello Guys"
          dis="Discover new courses to enhance your skills and knowledge."
          head="New Courses"
          className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#0040ff] group-hover:scale-[2000%] duration-500 z-[-1] op"
        />
        <CardHov
          cov="Hello Guys"
          dis="Learn about placement opportunities and secure your dream job."
          head="Placements"
          className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#0dff00] group-hover:scale-[2000%] duration-500 z-[-1] op"
        />
         <CardHov
          cov="Hello Guys"
          dis="Learn about placement opportunities and secure your dream job."
          head="Placements"
          className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#ffe666] group-hover:scale-[2000%] duration-500 z-[-1] op"
        />
        </div>
      </main>
      <main className="min-h-screen min-w-screen">

      </main>
    </>
  );
}
