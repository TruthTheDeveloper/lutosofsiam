import Image from "next/image";
import { HiPhone } from "react-icons/hi2";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:h-[30rem] bg-black  mt-12 ">
      <div className="lg:flex justify-between pt-8 lg:pt-0">
      <div className="text-white  basis-1/3 mx-auto ">
        <Image
          src="/image/logo-footer.png"
          //   sizes="100vw"

          height={200}
          width={200}
          alt="logo"
          className=" m-12 mx-auto"
        />
        <p className=" text-center">620 E Flamingo Rd</p>
        <p className=" text-center ">Las Vegas, Nevada 89119</p>
        <p className=" text-center py-2">
          Open for Takeout, Delivery & Dine-In
        </p>
        <p className=" text-center underline">
          Now accepting walk-in reservations
        </p>
        <p className=" text-center py-2">Beer, Wine and Sake Available</p>
        <p className=" text-center ">Full Bar Avaliable</p>
      </div>
      <div className="basis-1/3 mx-auto ">
        <div className="text-white mt-24 ">
          <p className=" text-center text-xl font-semibold mb-8">
            GET IN TOUCH
          </p>
          <HiPhone className="text-4xl mx-auto" />
          <p className=" text-center py-2 font-semibold">Call Us At:</p>
          <p className=" text-center mt-">7027353033</p>
          <div className="flex text-center place-content-center my-4 ">
            <FaTwitter className="text-4xl " />
            <p className=" text-center py-2 mx-4">Tweet Us</p>
          </div>
          <div className="flex place-content-center my-4">
            <FaFacebookF className="text-4xl mx-4" />
            <p className=" text-center ">Find Us on Facebook</p>
          </div>
          <div className="flex place-content-center">
            <FaInstagram className="text-4xl mx-4" />
            <p className=" text-center py-2">Follow us on Instagram</p>
          </div>
        </div>
      </div>
      <div className="basis-1/3 mx-auto">
        <div className="text-white mt-24 ">
          <p className=" text-center text-xl font-semibold mb-12">
            LATEST NEWS
          </p>
          <div className="lg:w-96 mx-auto">
          <p className=" text-center ">
            At this time, only our Flamingo location is open. Now accepting;
            To-Go, Delivery & Dine-In.
          </p>
          <p className=" text-center py-2">
            Sahara location is temporarily CLOSED
          </p>
          <p className=" text-center">Now accepting walk-in reservations</p>
          <p className=" text-center py-2">
            Now accepting walk-in reservations.We look forward to your visit!
          </p>
          </div>
        </div>
      </div>
      </div>
      <div className="lg:flex text-center lg:text-left justify-between text-white py-16 bg-black lg:px-24">
        <p>@copyright 2023 | lutos of siam</p>
        <p>Privacy Policy  |  Terms and Conditions  |  Accessibility</p>
      </div>
    </div>
  );
};

export default Footer;
