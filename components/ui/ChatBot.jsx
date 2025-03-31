"use client";
import { GiMagicHat } from "react-icons/gi";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
export default function Chatbot() {
  const [Open, setOpen] = useState(true);
  const op = () => setOpen(!Open);
  const [Input, setInput] = useState(" ");
  const [messages, setMessages] = useState([]);
  const chatRef = useRef();

  const API_KEY = "";

  if (!API_KEY) {
    console.log("key not found");
  }

  const prompt = ``;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!Input.trim()) return;
    const usermessage = { text: Input, sender: "user" };
    setMessages((prev) => [...prev, usermessage]);
    setInput("");
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemma-3-27b-it:free",
            messages: [
              {
                role: "user",
                content: [{ type: "text", text: prompt + Input }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botResponse =
        data?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't process your request.";
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to reach the server.", sender: "bot" },
      ]);
    }

  };

  const handleClearChat = () => setMessages([]);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

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
          <motion.main
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 100, scaleY: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed  flex flex-col p-2 bottom-24 right-11 w-64 h-96 justify-between  rounded-3xl bg-gray-900 "
          >
            <div className=" w-full h-full rounded-2xl bg-neutral-400 overflow-scroll scrollbar-hide">
              <div className="w-60 rounded-t-2xl h-10 fixed  bg-white p-1 text-xl font-bold border-b flex justify-between items-center">
                <p >🤖 ChatBot</p>
                <p className="text-[9px]">Powerd by Ashish</p>
              </div>
              <div className="w-full h-full py-5 px-2">
              <div ref={chatRef} className="p-4 h-[75vh] flex flex-col overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === "user" ? " chat chat-start chat-bubble-accent text-white ml-auto" : "chat-bubble-info  text-white"}`}
                style={{ maxWidth: "70%", animation: "fadeIn 0.5s" }}
              >
                {msg.text}
              </div>
            ))}
           
          </div>
              </div>
            </div>
            <div className="w-auto h-auto p-3 absolute bottom-3">
              <label className="input text-black">
                <input
                  value={Input}
                  onChange={(e) => setInput(e.target.value)}
                  className="text-black"
                  type="text"
                  placeholder="Chat with me"
                />
                <button
                onClick={handleSend}
                  type="submit"
                  className="label hover:scale-105 bg-blue-500 rounded-full cursor-pointer"
                >
                  🧩
                </button>
              </label>
            </div>
          </motion.main>
        </>
      )}
    </>
  );
}
