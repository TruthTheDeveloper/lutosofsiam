import Image from "next/image";
const HomeNews = () => {
  return (
    <div className="lg:h-[30rem] ">
      <div className="text-center  mt-12">
        <h1 className="text-2xl font-semibold">Latest News</h1>
        <p className="md:text-lg text-sm py-2"> Uncover the Freshest Updates and Insights</p>
      </div>

      <div className="md:flex justify-between mt-8 ">
        <div className="mx-auto lg:flex">
          <Image
            src="/image/news-1.jpeg"
            height={280}
            width={280}
            className="rounded-[5rem] mx-auto"
            alt="photo"
          />
          <div className="lg:w-72  px-2  lg:ml-6 text-center">
          <h2 className="my-4 bg-yellow-300 font-bold mx-auto w-48 text-center py-2 rounded-md mt-8">29th of december, 2023</h2>
          <p className="font-semibold text-xl ">At this time, only our Flamingo location is open. Now accepting; To-Go, Delivery & Dine-In.</p>
          </div>
        </div>

        <div className="mx-auto lg:flex mt-24 md:mt-0 lg:mt-0">
          <Image
            src="/image/new-2.png"
            height={280}
            width={280}
            className="rounded-[5rem] mx-auto"
            alt="photo"
          />
          <div className="lg:w-72  px-2 lg:ml-6 text-center">
          <h2 className="my-4 bg-yellow-300 font-bold w-48 mx-auto text-center py-2 rounded-md mt-8">29th of december, 2023</h2>
          <p className="font-semibold text-xl ">Sahara location is temporarily CLOSED, Now accepting walk-in reservations.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeNews;
