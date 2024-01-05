"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeTestAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(delay); // Cleanup the timeout on component unmount
  }, []);

  return (
    <motion.div className="h-[10rem] lg:flex overflow-hidden"
      animate={{ x: isVisible ? 1300 : -300 }}
      transition={{ staggerChildren: 0.5, delayChildren: 0.5, duration: 6, ease: "linear", repeat: Infinity }}
    >
      <motion.div
        className="bg-red-500 w-[10rem] h-[10rem] mx-2"
        initial={{ x: -300 }}
        exit={{ x: 1600 }}
      />

      <motion.div
        className="bg-blue-500 w-[10rem] h-[10rem] mx-2"
        initial={{ x: -625 }}
        exit={{ x: 1600 }}
      />

      <motion.div
        className="bg-green-500 w-[10rem] h-[10rem] mx-2"
        initial={{ x: -950 }}
        exit={{ x: 1600 }}
      />
    </motion.div>
  );
}

export default HomeTestAnimation;
