"use client"
import { motion } from "motion/react"
export default function NavTop(){
    return(
        <>
    <main className=" min-w-screen h-8  flex bg-black text-white overflow-x-hidden">
       <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:25,repeat:Infinity,ease:"linear"}} className='text-sm flex shrink-0 gap-4 items-center text-nowrap'>
        <p className=''>🚀 Welcome to the Future of Tech! |</p>
        <p className=''>💻 Coding is Life |</p>
        <p className=''>🔥 Keep Learning, Keep Growing! |</p>
        <p className=''>⚡ JavaScript Enthusiast Here!</p>
        <p className=''>😂 Why did the developer break up? Too many bugs! | </p>
       <p className=''>💡 Keep Calm and Debug On | </p>
       <p className=''>🚀 I paused my game to be here!</p>
       <p className=''>🚀 Welcome to the Future of Tech! |</p>
        <p className=''>💻 Coding is Life |</p>
        <p className=''>🔥 Keep Learning, Keep Growing! |</p>
        <p className=''>⚡ JavaScript Enthusiast Here!</p>
        <p className=''>😂 Why did the developer break up? Too many bugs! | </p>
       <p className=''>💡 Keep Calm and Debug On | </p>
       <p className=''>🚀 I paused my game to be here!</p>
       </motion.div>
       <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:25,repeat:Infinity,ease:"linear"}} className='text-sm flex shrink-0 gap-4  items-center text-nowrap'>
        <p className=''>🚀 Welcome to the Future of Tech! |</p>
        <p className=''>💻 Coding is Life |</p>
        <p className=''>🔥 Keep Learning, Keep Growing! |</p>
        <p className=''>⚡ JavaScript Enthusiast Here!</p>
        <p className=''>😂 Why did the developer break up? Too many bugs! | </p>
       <p className=''>💡 Keep Calm and Debug On | </p>
       <p className=''>🚀 I paused my game to be here!</p>
       <p className=''>🚀 Welcome to the Future of Tech! |</p>
        <p className=''>💻 Coding is Life |</p>
        <p className=''>🔥 Keep Learning, Keep Growing! |</p>
        <p className=''>⚡ JavaScript Enthusiast Here!</p>
        <p className=''>😂 Why did the developer break up? Too many bugs! | </p>
       <p className=''>💡 Keep Calm and Debug On | </p>
       <p className=''>🚀 I paused my game to be here!</p>
       </motion.div>
    </main>
        </>
    )
}