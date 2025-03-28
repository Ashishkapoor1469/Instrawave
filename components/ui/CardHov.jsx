import { IoIosArrowRoundDown } from "react-icons/io";
export default function CardHov(props) {
  return (
    <>
      <div className="div h-70 w-auto md:w-110 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div className={props.className}></div>
        <button className="text-[0.8em] p-4 absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500 flex">
          <span className="relative  before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
            {props.cov}
          </span>
          <IoIosArrowRoundDown  />
        </button>
        <h1 className="z-20 font-bold font-Poppin p-4 group-hover:text-white duration-500 text-[1.4em]">
          {props.head}
        </h1>
        <p className="text-secondary-foreground p-4 group-hover:text-white">{props.dis}</p>
      </div>
    </>
  );
}
