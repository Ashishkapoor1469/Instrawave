"use client"; // Add this line if using Next.js App Router

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MouseFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
  className="fixed top-0 left-0 w-6 h-6 bg-green-500 rounded-full pointer-events-none mix-blend-difference"
  style={{ zIndex: 9999 }} 
  animate={{ x: mousePosition.x, y: mousePosition.y }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}
/>
  );
};

export default MouseFollow;
