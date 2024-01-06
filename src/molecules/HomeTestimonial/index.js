"use client";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const HomeTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const next = () => {
    if (currentSlide === 2) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(2);
      return;
    }
    setCurrentSlide((prev) => prev - 1);
  };


  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
    <div className="mx-8 mt-14 lg:mt-0 pt-14">
      <h1 className="text-center text-2xl my-3 lg:mt-16 font-semibold">
        Testimonials
      </h1>
      <p className="text-sm md:text-base mb-16 text-center px-2 lg:px-0">
        Hear What Our Clients Have to Say in Their Own Words.
      </p>
      <div>
        <Image
          src="/image/quote.png"
          //   sizes="100vw"

          height={150}
          width={150}
          alt="logo"
          className="mx-auto bg-white"
        />
      </div>
      <Carousel selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true} 
        swipeScrollTolerance={50}>
        <div>
          <p className="mx-auto text-center lg:w-[30%] pt-12 py-4 px-4 text-sm lg:text-base">
            It was the best Thai meal I had ever eaten. I went back for the next
            four or five meals in a row, and I almost cried when I had to get on
            a plane back to New York.
          </p>
          <p className="text-center font-semibold my-3 ">
            Micheal b jordan -{" "}
            <span className="text-green-500 text-sm mx-3">Food network</span>
          </p>
        </div>
        <div>
          <p className="mx-auto text-center lg:w-[30%] pt-12 py-4 px-4 text-sm lg:text-base">
            It was the best Thai meal I had ever eaten. I went back for the next
            four or five meals in a row, and I almost cried when I had to get on
            a plane back to New York.
          </p>
          <p className="text-center font-semibold my-3">
            Will I Am -{" "}
            <span className="text-green-500 text-sm mx-3">Food network</span>
          </p>
        </div>
        <div>
          <p className="mx-auto text-center lg:w-[30%] pt-12 py-4 px-4 text-sm lg:text-base">
            It was the best Thai meal I had ever eaten. I went back for the next
            four or five meals in a row, and I almost cried when I had to get on
            a plane back to New York.
          </p>
          <p className="text-center font-semibold my-3 ">
            Micheal Jackson -{" "}
            <span className="text-green-500 text-sm mx-3">Food network</span>
          </p>
        </div>
      </Carousel>

      <div>
        <div className="flex place-content-center   mx-4">
          <div className=" border border-gray-400  w-12 h-12 rounded-full cursor-pointer" onClick={() => prev()}>
            <HiChevronLeft className="text-4xl cursor-pointer text-center mt-1" />
          </div>
          <div className="border border-gray-400  w-12 h-12 rounded-full mx-4" onClick={() => next()}>
            <HiChevronRight className="text-4xl cursor-pointer text-center mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
