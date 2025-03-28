import Image from "next/image";
import Img2 from "@/image/dev.png";
import IMg from "@/image/pro.jpg"
import { FaUserSecret } from "react-icons/fa";
import { PiUserFocusDuotone } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuMousePointerClick } from "react-icons/lu";

const features = [
    {
        Icon: FaUserSecret,
        title: "Anonymous Mock Interviews",
        description:
            "During mock interview we ensure that your identity is not revealed",
    },
    {
        Icon: PiUserFocusDuotone,
        title: "Personalized peer Matching",
        description:
            "Base on your availability experience education practice topics we match you with someone of equal expertise",
    },
    {
        Icon: HiOutlineLightBulb,
        title: "Complete Interview Questions",
        description:
            "Hints solutions and interviewing tips enable both you and your peer to interview each other like pros",
    },
    {
        Icon: LuMousePointerClick,
        title: "Interactive 1-on-1 Session",
        description:
            "Give mock interviews anytime with collaborate real-time code editor and inbuilt audio calling",
    },
];

export default function User() {
    return (
        <>
            <main className="min-h-screen min-w-screen flex justify-center items-center">
                <div className="main cabin-7 md:w-9/12 h-full m-3 p-4 flex flex-col gap-7 items-center justify-center shadow-sm shadow-black">
                    <h1 className="text-3xl md:text-5xl big-shoulders-stencil-tt text-cyan-800 ">
                        Mock interview
                    </h1>
                    <Image className="" src={Img2} alt="Img" width={500} />
                    <div className="w-full grid md:grid-cols-4  justify-evenly gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="cont flex md:bg-transparent bg-emerald-300 cursor-pointer flex-col items-center border border-cyan-300 p-1"
                            >
                                <feature.Icon className="md:block hidden w-full h-35 bg-red-300" />
                                <h1 className="md:text-xl text-[16px] font-bold px-2">{feature.title}</h1>
                                <p className="px-2 text-center md:text-start">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t text-xl text-info hover:text-blue-300 items-center w-full flex justify-center h-10">
                 <a href="#">Start for free Now</a> 
                    </div>
                </div>
            </main>
            <main className="min-h-auto min-w-screen flex justify-center p-8">
                <div className="main h-full md:w-9/12 flex flex-col gap-3 items-center justify-center">
                <h1 className="text-3xl font-bold tektur-GG">Video explanations</h1>
                <p>Understand the solutions and concepts much faster with video explanations. Created by our experts working at your dream companies these videos will make you more structured and confident with your reasoning</p>
                <Image className="md:w-full" src={IMg} width={500} alt="Imgg" />
                <div className="border-t text-xl text-primary hover:text-fuchsia-400 items-center w-full flex justify-center h-10">
                 <a href="#">Get Started Now !</a> 
             </div>
                </div>
            </main>
        </>
    );
}
