import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
const Pricing = () => {
  return (
    <div
      main
      className="min-h-screen bg-[white] text-text-black w-full overflow-x-hidden"
    >
      <div className="h-16">
        <h1 className="text-lg mx-3 font-semibold py-4">Powered By TruthTheDeveloper</h1>
      </div>
      <div className="md:px-24  pt-28">
        <div className="text-6xl  mb-4 font-semibold text-[#111727] leading-12 px-4">
          <h1>We&apos;ve got a plan</h1>
          <h1 className="pt-4">thats&apos;s perfect for you</h1>
        </div>

        <div className="md:flex justify-between mt-24 ">
          <div className="border rounded-xl shadow-md w-[18rem] px-4 py-4 mx-auto md:mx-0">
            <div>
              <p className="font-semibold">Basic plan</p>
              <h1 className="text-3xl font-semibold my-4">$500</h1>
              <p className="text-sm opacity-90">
                Basic feature needed for your restaurant website
              </p>
              <button className="text-center text-white px-[5.2rem] md:px-[4.5rem] lg:px-[5.2rem] rounded-md my-4 py-2  bg-[#111727]">
                Contact Us
              </button>
            </div>

            <div className="opacity-90">
              <h1 className="text-sm">FEATURES</h1>
              <p className="text-sm">Everything your website needs to upstart</p>
              <div className="text-xs py-1 pt-3 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />
                <p>Interactive Menu System</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Reservation feature</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Online ordering</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>mobile responsive</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>3 month free hosting plan </p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>3 month free maintenance & update</p>
              </div>
            </div>
          </div>
          <div className="border rounded-xl shadow-md w-[18rem] px-4 py-4 bg-[#111727] text-white mx-auto md:mx-0 my-12 md:my-0">
            <div>
              <p className="font-semibold">Premium plan</p>
              <h1 className="text-3xl font-semibold my-4">$1000</h1>
              <p className="text-sm opacity-90">
                Elevate your website above normal
              </p>
              <button className="text-center text-black font-semibold px-[5.2rem] md:px-[4.5rem] lg:px-[5.2rem] rounded-md my-4 py-2 bg-white">
                Contact Us
              </button>
            </div>

            <div className="opacity-90">
              <h1 className="text-sm">FEATURES</h1>
              <p className="text-sm">Everything in our Basic plan plus</p>
              <div className="text-xs py-1 pt-3 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />
                <p>6 month free hosting</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>News letter integration</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Online Ordering (in-house cart system)</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Food Image gallery</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>A.I powered chatbot</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] text-black border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>6 month free maintenance & update</p>
              </div>
            </div>
          </div>
          <div className="border rounded-xl shadow-md w-[18rem] px-4 py-4 mx-auto md:mx-0">
            <div>
              <p className="font-semibold">Promotion plan</p>
              <h1 className="text-3xl font-semibold my-4">$3000</h1>
              <p className="text-sm opacity-90">
                Power up your website to drive sales
              </p>
              <button className="text-center text-white px-[5.2rem] md:px-[4.5rem] lg:px-[5.2rem] rounded-md my-2 py-2 bg-[#111727]">
                Contact Us
              </button>
            </div>

            <div className="opacity-90">
              <h1 className="text-sm">FEATURES</h1>
              <p className="text-sm">Everything in our premium plan plus</p>
              <div className="text-xs py-1 pt-3 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />
                <p>SEO Integration</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Bloging integration system</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Advance menu system</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Real time google map system</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Google analytic integration</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>dispatch service integration</p>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="border rounded-md w-[18rem]">
              <div>
                <p>Enterprise plan</p>
                <h1>$500</h1>
                <p>Basic feature needed for your restaurant website</p>
                <button>Contact Us</button>
              </div>

              <div>
                <h1>FEATURES</h1>
                <p>Everything in our free plan plus</p>
                <p>Acess to basic features</p>
                <p>Basic reporting and analytic</p>
                <p>Up to 10 individual users</p>
                <p>Basic chat and email support</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border rounded-xl shadow-md w-[18rem] px-4 py-4 my-8 mx-auto">
            <div>
              <p className="font-semibold">Enteprise plan</p>
              {/* <h1 className="text-3xl font-semibold my-4">$3000</h1> */}
              <p className="text-sm opacity-90">
                Power up your website to drive sales
              </p>
              <button className="text-center font-semibold  px-[5.2rem] rounded-md my-2 py-2 bg-[#B0FF12]">
                Contact Us
              </button>
            </div>

            <div className="opacity-90">
              <h1 className="text-sm">FEATURES</h1>
              <p className="text-sm">Everything in our premium plan plus</p>
              <div className="text-xs py-1 pt-3 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />
                <p>Staff managment system</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Inventory managment system</p>

              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Mobile app development</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Restuarant + hotel integration</p>
              </div>
              <div className="text-xs py-1 flex">
                <FaCheck className="bg-[#B0FF12] border-[#B0FF12] w-4 h-4 px-1 rounded-full mr-2" />

                <p>Special Request</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
