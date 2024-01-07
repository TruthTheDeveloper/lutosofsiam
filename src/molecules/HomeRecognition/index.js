"use client";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";


const HomeRecognition = () => {
  const isWideEnough = useMediaQuery({ minWidth: 768 });
  return (
    <div className=" mt-44 md:mt-10 md:mb-14 lg:mt-8 z-20 ">
      <div className="my-8">
        <Slide triggerOnce>
          <h1 className="text-center lg:text-3xl text-xl font-semibold mt-12 ">
            Recognised & Trusted by
          </h1>
        </Slide>

        
        
          <div className="lg:flex justify-center hidden">
            <Fade
              className=" my-6  text-sm md:text-base "
              delay={1e3}
              cascade
              damping={1e-1}
              triggerOnce
            >
              Chef Saipin and Lotus of Siam have received several awards for
              their distinctive Northern Thai Cuisine
            </Fade>
          </div>
        
            <p
            className=" md:my-6 text-center  text-sm md:text-base block lg:hidden "
          >
            Chef Saipin and Lotus of Siam have received several awards for
            their distinctive Northern Thai Cuisine
          </p>
        
        

        {/* <div className="flex justify-center"><Fade className=" my-6  text-sm lg:text-base" triggerOnce delay={1e3} cascade damping={1e-1}>
            Chef Saipin and Lotus of Siam have received several awards for their distinctive Northern Thai Cuisine
            </Fade></div> */}
      </div>
      <div className="bg-green-500 md:rounded-xl h-[10rem] lg:w-[72%] mx-auto">
        <div className="flex justify-between pt-12 md:pt-0 lg:pt-6">
          {isWideEnough ? (
            <>
           
              <Image
                src="/image/network-1.png"
                sizes="100vw"
                height={250}
                width={250}
                objectFit="cover"
                alt="logo"
                className="mx-auto "
              />
              <Image
                src="/image/network-2.png"
                //   sizes="100vw"

                height={250}
                width={250}
                alt="logo"
                objectFit="cover"
                className="mx-auto "
              />
              <Image
                src="/image/network-3.png"
                //   sizes="100vw"

                height={250}
                width={250}
                alt="logo"
                objectFit="cover"
                className="mx-auto "
              />
              <Image
            src="/image/network-4.png"
            //   sizes="100vw"

            height={250}
            width={250}
            alt="logo"
            objectFit="cover"
            className="mx-auto "
          />
              {/* <Image
                src="/image/network-4.png"
                //   sizes="100vw"

                height={250}
                width={250}
                alt="logo"
                objectFit="cover"
                className="mx-auto "
              /> */}
            </>
          ) : (
            <>
              <Image
                src="/image/network-1.png"
                sizes="100vw"
                height={150}
                width={150}
                objectFit="cover"
                alt="logo"
                className="mx-auto "
              />
              <Image
                src="/image/network-2.png"
                //   sizes="100vw"

                height={150}
                width={150}
                alt="logo"
                objectFit="cover"
                className="mx-auto "
              />
              <Image
                src="/image/network-3.png"
                //   sizes="100vw"

                height={100}
                width={100}
                alt="logo"
                objectFit="cover"
                className="mx-auto "
              />
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default HomeRecognition;
