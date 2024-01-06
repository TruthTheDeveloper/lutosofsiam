"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Carattere } from "next/font/google";
import Lottie from "lottie-react";
import call from "./call.json";

const carattere = Carattere({ weight: "400", subsets: ["latin"] });
const HomePageHero = () => {
  return (
    <>
      <div className="relative">
    
        
        <div className=" fixed w-[5rem] h-[5rem] bottom-4 right-0  cursor-pointer z-40 ">
        <Lottie animationData={call} loop={true}  style={{ pointerEvents: "none" }}/>;
        </div>
        
     
        <h1 className="text-center text-lg sm:text-xl my-6 font-semibold text-green-600">
          Welcome to the
        </h1>
        <div className="">

    
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    ' Exquisite Taste of Goodness',
    1000,

  ]}
  cursor={false}
  wrapper="h1"
  speed={50}
  style={{ textAlign:"center" }}
  className={`${carattere.className} text-center w-full mx-auto text-4xl sm:text-6xl `}
  repeat={1}
/>
        
          
        {/* <h1 className={`${carattere.className} text-center  text-4xl sm:text-6xl`}>
          Exquisite Taste of Goodness
        </h1> */}
        </div>
        
        <div className="bg-green-600 sm:w-[220px] w-[160px] h-[44px] mx-auto mt-8 rounded-full  text-white cursor-pointer">
          <p className="text-center pt-3 text-sm sm:text-base">Make a reservation</p>
        </div>
      </div>
      <div className="relative mt-16 text-sm  w-full 2xl:w-[80%] mx-auto "> 
        <Image
          src="/image/dish.png"
          // sizes="100vw"
         
          height={1300}
          width={900}
          alt="logo"
          // objectFit="cover"
          className="mx-auto"
        />
        <div className="absolute lg:top-12 lg:left-44 2xl:left-96 top-0 sm:top-36 sm:left-28 left-2 "  data-aos-duration="900" data-aos= "zoom-in">
          <div className=" bg-white sm:h-[100px] h-[80px] text-center lg:w-[250px] sm:w-[200px] w-[130px] shadow-md rounded-2xl pt-2">
            <p className="sm:text-sm text-xs">An Ultimate</p>
            <p
              className={`${carattere.className} text-xl sm:text-3xl text-green-600 font-semibold`}
            >
              Thai Cuisine
            </p>
            <p className="sm:text-sm text-xs">experience</p>
          </div>
          <div
            className="  h-[12px] w-[12px] lg:ml-44 sm:ml-32 ml-24"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "16.6px solid white",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div> 

         <div className="absolute lg:top-80 lg:left-96   top-0 sm:top-16 sm:left-96 left-40" data-aos-duration="800" data-aos= "zoom-in">
          <div className=" bg-white sm:h-[100px] h-[80px] sm:w-[200px] text-center lg:w-[250px] w-[130px] pt-2 shadow-md rounded-2xl">
            <p className="sm:text-sm text-xs">Call Us at </p>
            <p
              className={`${carattere.className} text-xl sm:text-3xl text-green-600 font-semibold`}
            >
              123.46.789
            </p>
            <p className="sm:text-sm text-xs">experience</p>
          </div>
          <div
            className="  h-[12px] w-[12px] ml-8 lg:ml-44"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "16.6px solid white",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div>

        <div className="absolute top-28 right-4  lg:top-44 sm:top-72 sm:right-24 lg:right-44 2xl:right-80"  data-aos-duration="900" data-aos= "zoom-in" >
          <div className="bg-white sm:h-[100px] h-[80px] sm:w-[200px] text-center lg:w-[250px] w-[130px]  shadow-md rounded-2xl pt-2">
            <p className="sm:text-sm text-xs">An Ultimate</p>
            <p
              className={`${carattere.className} text-xl sm:text-3xl text-green-600 font-semibold`}
            >
              Oriental Cuisiney
            </p>
            <p className="sm:text-sm text-xs">experience</p>
          </div>
          <div
            className="  h-[12px] w-[12px] ml-12"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "16.6px solid white",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div>
        
        <div className="absolute bottom-24 left-4 lg:bottom-64 sm:bottom-48 sm:left-24 lg:right-24 2xl:left-80"  data-aos-duration="800" data-aos= "zoom-in">
          <div className=" bg-white sm:h-[100px] sm:w-[200px] h-[80px] text-center lg:w-[250px] w-[130px]  shadow-md rounded-2xl pt-2">
            <p className="sm:text-sm text-xs">An Ultimate</p>
            <p
              className={`${carattere.className} text-xl sm:text-3xl text-green-600 font-semibold`}
            >
              Orientaly Cuisine
            </p>
            <p className="sm:text-sm text-xs">experience</p>
          </div>
          <div
            className="  h-[12px] w-[12px] ml-24 sm:ml-36 lg:ml-48 "
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "16.6px solid white",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div>
        
        <div className="absolute bottom-4 right-16 lg:bottom-16 sm:bottom-36 sm:right-48 lg:right-96 2xl:right-[30rem] 2xl:bottom-32"  data-aos-duration="800" data-aos= "zoom-in">
          <div className=" bg-white sm:h-[100px] sm:w-[200px] lg:h-[100px] h-[80px] text-center lg:w-[250px] w-[130px] shadow-md rounded-2xl pt-2">
            <p className="sm:text-sm text-xs">An Ultimate</p>
            <p
              className={`${carattere.className} text-xl sm:text-3xl text-green-600 font-semibold`}
            >
              Oriental Cuisine
            </p>
            <p className="sm:text-sm text-xs">experience</p>
          </div>

          <div
            className="  h-[12px] w-[12px] ml-4 lg:ml-12"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "16.6px solid white",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div> 
      </div>
    </>
  );
};

export default HomePageHero;
