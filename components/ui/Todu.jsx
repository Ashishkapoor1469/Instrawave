"use client"
import { useState } from "react"
import Data from "@/json/SlideData.json"
export default function Slide(props){
    const [currentIndex, setcurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < Data.length - 1) {
            setcurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
            setcurrentIndex(currentIndex - 1);
        }
      };
    
      const handleRestart = () => {
        setcurrentIndex(0);
      };
    return(
        <>
         <div className={props.class}>
      <div id="navigation" className="text-center flex gap-2 justify-evenly">
        <button 
          data-testid="button-restart" 
          className={props.className}
          onClick={handleRestart}
          disabled={currentIndex === 0} 
        >
          Restart
        </button>
        <button 
          data-testid="button-prev" 
          className={props.className}
          onClick={handlePrev}
          disabled={currentIndex === 0} 
        >
          Prev
        </button>
        <button 
          data-testid="button-next" 
          className={props.className}
          onClick={handleNext}
          disabled={currentIndex === Data.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className={props.cls}>
        <h1 data-testid="title" className="text-3xl">{Data[currentIndex].title}</h1>
        <p className="h-56 md:h-full overflow-scroll overflow-x-hidden scroll-auto scrollbar-hide" data-testid="text">{Data[currentIndex].text}</p>
        <a className="btn btn-link w-32" href={Data[currentIndex].link}>Click here to Know</a>
      </div>
    </div>
 </>
    )
}