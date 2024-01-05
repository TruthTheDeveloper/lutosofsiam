"use client";
import Image from "next/image";
import { Carattere } from "next/font/google";
import { Fade, Slide } from "react-awesome-reveal";


const carattere = Carattere({ weight: "400", subsets: ["latin"] });

const HomeWine = () => {

  return (
    <div className=" pt-8 bg-white">
      <div className="text-center my-3">
        <Slide triggerOnce>
          <h1 className="lg:text-3xl text-xl  font-semibold">
            Explore a Symphony of Flavors
          </h1>
        </Slide>

        <div className="lg:flex justify-center hidden">
          <Fade
            className=" my-6  text-sm lg:text-base "
            delay={1e3}
            cascade
            damping={1e-1}
            triggerOnce
          >
            Indulge in Our Exquisite Selection of Over 300 Fine Wines
          </Fade>
        </div>

        <p className=" my-6 text-center  text-sm md:text-base lg:hidden block">
          Indulge in Our Exquisite Selection of Over 300 Fine Wines
        </p>
      </div>
      <div className="md:flex place-content-center ">
        <Image
          src="/image/wine-1.jpeg"
          //   sizes="100vw"

          height={360}
          width={360}
          alt="logo"
          className="mx-auto lg:mx-0 "
        />
        <div
          className={` h-[37rem] lg:w-[24rem] sm:w-[22.8rem] bg-black text-white text-center pt-36 mx-auto lg:mx-0 `}
        >
          <div className={`${carattere.className} px-4`}>
            <p className="text-2xl ">Over</p>
            <p className="text-[9rem] ">300</p>
            <p className="text-2xl">wine collections</p>
          </div>

          <div className="text-center mx-2">
            <button className="bg-green-600 text-sm lg:text-base text-white py-4 px-4 mt-8 rounded-lg">
              Make a reservation
            </button>
          </div>
        </div>
        <Image
          src="/image/wine-2.jpeg"
          //   sizes="100vw"

          height={360}
          width={360}
          alt="logo"
          className="mx-auto  lg:mx-0"
        />
      </div>
    </div>
  );
};

export default HomeWine;
