"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const HomeFeatured = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isWideEnough = useMediaQuery({ minWidth: 1024 });

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  useEffect(() => {
    // Set isVisible to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(delay); // Cleanup the timeout on component unmount
  }, []);

  return (
    <div className="  ">
      {/* <Image
          src="/image/food-bg.png"
          // sizes="100vw"
          fill
          // height={1300}
          // width={900}
          alt="logo"
          // objectFit="cover"
          // className="mx-auto"
        /> */}

      <div className="text-center py-12  mb-12">
        <h1 className="lg:text-3xl text-lg py-4">Featured Dishes</h1>
        <h3 className="py-4 font-bold text-2xl lg:text-5xl">
          Nothern Thai Cusine
        </h3>
        <p className="text-xs md:text-sm px-16 lg:px-0">
          A unique experience of spices, herbs, and flavors only found in
          traditional Northern Thai culture
        </p>
      </div>
      <div className="md:flex justify-between   w-[100%] lg:w-[70%] mx-auto pt-10  ">
        {isWideEnough ? (
          <>
            <motion.div
              ref={ref}
              className=" bg-white h-[18rem] w-[17rem] mx-auto rounded-[3rem] border shadow-lg"
              initial={{ x: -300, y: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView ? { x: 20, y: 0, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/image/food-1.png"
                // sizes="100vw"
                height={160}
                width={160}
                alt="logo"
                // style={{border: "1px solid transparent"}}
                className="mx-auto  -mt-16"
              />

              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3 ">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4">
                  <button className="bg-green-600 text-white py-2  px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              className=" bg-white h-[18rem] w-[17rem] mx-auto rounded-[3rem] border shadow-lg"
              initial={{ x: -300, y: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView ? { x: 20, y: 0, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/image/food-2.png"
                //   sizes="100vw"

                height={150}
                width={150}
                alt="logo"
                className="mx-auto -mt-16"
              />
              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4 mt-5">
                  <button className="bg-green-600 text-white py-2 px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              className=" bg-white h-[18rem] w-[17rem] mx-auto rounded-[3rem] border shadow-lg"
              initial={{ x: -300, y: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView ? { x: 70, y: 0, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/image/food-3.png"
                //   sizes="100vw"

                height={140}
                width={140}
                alt="logo"
                className="mx-auto -mt-16"
              />
              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4 mt-7">
                  <button className="bg-green-600 text-white py-2 px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <div
              className=" bg-white h-[18rem] w-[17rem] mb-28 mx-auto rounded-[3rem] border shadow-lg"
            >
              <Image
                src="/image/food-1.png"
                // sizes="100vw"
                height={160}
                width={160}
                alt="logo"
                // style={{border: "1px solid transparent"}}
                className="mx-auto  -mt-16"
              />

              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3 ">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4">
                  <button className="bg-green-600 text-white py-2  px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </div>

            <div
              className=" bg-white h-[18rem] w-[17rem] mb-28 mx-auto rounded-[3rem] border shadow-lg"
              initial={{ x: -300, y: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView ? { x: 20, y: 0, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/image/food-2.png"
                //   sizes="100vw"

                height={150}
                width={150}
                alt="logo"
                className="mx-auto -mt-16"
              />
              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4 mt-5">
                  <button className="bg-green-600 text-white py-2 px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </div>

            <div
              className=" bg-white h-[18rem] w-[17rem] mx-auto rounded-[3rem] border shadow-lg"
              initial={{ x: -300, y: 0, opacity: 0, scale: 0.5 }}
              animate={
                inView ? { x: 70, y: 0, opacity: 1, scale: 1, rotate: 360 } : {}
              }
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/image/food-3.png"
                //   sizes="100vw"

                height={140}
                width={140}
                alt="logo"
                className="mx-auto -mt-16"
              />
              <div className="px-6">
                <p className="text-xs leading-5 text-gray-600 py-3">
                  Crispy duck served on a bed of egg noodles in a curry base
                  sauce, garnished with sliced red onions, lime and pickled
                  vegetables we got alot
                </p>
                <div className="text-center my-4 mt-7">
                  <button className="bg-green-600 text-white py-2 px-4 rounded-2xl ">
                    Order online
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <div className="bg-white h-[22.5rem] w-[17rem] rounded-md shadow-md">
            <Image
              src="/image/food-2.png"
              //   sizes="100vw"

              height={150}
              width={150}
              alt="logo"
              className="mx-auto pt-6"
            />
            <div className="px-6">
              <p className="text-xs leading-5 text-gray-600 py-3">
                Crispy duck served on a bed of egg noodles in a curry base
                sauce, garnished with sliced red onions, lime and pickled
                vegetables we got alot
              </p>
              <div className="text-center my-3">
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg ">
                  Order online
                </button>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default HomeFeatured;
