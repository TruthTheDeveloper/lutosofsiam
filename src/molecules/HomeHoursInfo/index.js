"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeHoursInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });
  return (
    <div className="px-4 md:px-0">
      <div
      ref={ref}
        className="md:flex lg:w-[60%] bg-[#F5F8FD] mx-auto mt-12 mb-12 rounded-xl md:rounded-[5rem]"
        animate={inView ? {
          scale: [0,0, 1],
          rotate: [0, 0, 360],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }:{}}
      >
        <Image
          src="/image/discover-7.png"
          //   sizes="100vw"

          height={560}
          width={600}
          alt="logo"
          className="lg:-ml-48 mx-auto lg:mx-0 "
        />

        <div className="  w-full 2xl:ml-12 text-center lg:text-left pb-8 px-2">
          <h1 className="lg:text-4xl text-4xl font-bold mt-24 lg:mb-6">
            OPENING HOURS
          </h1>
          <p className="font-semibold lg:text-xl my-14  text-base mt-4 lg:mt-0">
            Sahara Ave Location <br /> Temporarily Closed
          </p>
          <p className="font-semibold lg:text-lg   mb-4 text-base">
            Flamingo RD Location
          </p>
          <p className="mb-3 text-sm lg:text-base">
            <span className="text-green-600 font-semibold lg:text-lg">
              Sunday & Monday
            </span>
            12PM - 3:30PM . 5PM
          </p>
          <p className="mb-3 lg:text-base">
            <span className="text-green-600 font-semibold lg:text-lg">
              Tuesday - Thursday
            </span>
            . 5PM - 10PM
          </p>
          <p className="mb-3 lg:text-base">
            <span className="text-green-600 font-semibold lg:text-lg">Friday</span>
            12PM - 3:30PM - 5PM - 10PM
          </p>
          <p className="mb-3 lg:text-base">
            <span className="text-green-600 font-semibold lg:text-lg">
              Saturday
            </span>
            - 12PM - 10PM
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeHoursInfo;
