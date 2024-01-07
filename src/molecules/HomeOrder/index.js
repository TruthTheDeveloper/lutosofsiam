"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const HomeOrder = () => {
  return (
    <div className="relative h-[30rem] md:h-[100vh] my-12">
      <div className="text-center my-8">
      <Slide triggerOnce>
        <h1 className="lg:text-3xl text-xl  font-semibold">Boss Since 1999</h1>
        </Slide>
        <div className="lg:flex justify-center hidden">
        <Fade
            className=" my-6  text-sm lg:text-base "
            delay={1e3}
            cascade
            damping={1e-1}
            triggerOnce
          >
          Embodying Culinary Mastery for Decades
          </Fade>
        </div>
        <p className=" my-6 text-center  text-sm md:text-base lg:hidden block">
          Embodying Culinary Mastery for Decades
        </p>
      </div>
      <div className="absolute h-full  w-full">
        <Image
          src="/image/order.jpg"
          fill
          sizes="100vw"
          //   height={1300}
          //   width={900}
          alt="logo"
          objectFit="cover"
          className="mx-auto"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="flex items-center justify-center  h-full" >
            <div data-aos="zoom-in" data-aos-once>
              <h1 className="text-white text-6xl font-semibold  ">Let&apos;s Eat</h1>
              <motion.button
            initial={{scale:1}}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }} className="text-white text-xl  md:text-2xl font-medium bg-green-500 text-center w-full mt-8 py-3 rounded-full">
                Order Online
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOrder;
