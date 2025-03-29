"use client";
import { GiMagicHat } from "react-icons/gi";
import { useState } from "react";
export default function Chatbot() {
  const [Open, setOpen] = useState(false);
  const op = () => setOpen(!Open);
  const [Input, setInput] = useState(" ");
  const [Message, setMessage] = useState(" ");

  const handleClick = async(e)=>{
    e.preventDefault();
    try {
        const usermessage = {text:Input,sender:"user"};
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);
        
    } catch (error) {
        
    }
  }

  return (
    <>
      <button
        onClick={op}
        className="h-auto w-auto flex flex-col fixed bottom-3 md:right-11 right-6 items-center justify-center text-black cursor-pointer"
      >
        <GiMagicHat className="text-5xl" />
        <p className="text-sm font-bold bg-gradient-to-l from-blue-400 via-green-600 to-red-500 text-transparent bg-clip-text">
          Chat with me
        </p>
      </button>
      {Open ? (
        <></>
      ) : (
        <>
          <main className="fixed  flex flex-col p-4 bottom-24 right-11 w-64 h-96 justify-between  rounded-3xl bg-neutral-500 ">
            <div className=" w-full h-full bg-neutral-400 overflow-scroll scrollbar-hide">

            </div>
            <div className="w-auto h-auto p-3 absolute bottom-3">
              <label className="input">
                <input
                  className="text-black"
                  type="text"
                  placeholder="Chat with me"
                />
                <span onClick={handleClick} className="label text-white bg-blue-500 rounded-full cursor-pointer">
                  🧩
                </span>
              </label>
            </div>
          </main>
        </>
      )}
    </>
  );
}
