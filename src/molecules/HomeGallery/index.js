"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeGallery = () => {
  return (
    <div>
      <div className="text-center mt-16 lg:mt-0">
        <h1 className="text-2xl font-semibold">Gallery</h1>
        <p className="md:text-lg text-sm py-2 px-3 lg:px-0">
          Delight Your Senses with Our Mouthwatering Food Gallery
        </p>
      </div>
      <div className="md:flex place-content-center mt-8">
        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0 "
        >
          <Image src={"/image/gallery-1.jpg"} height={280} width={280} alt="photo "  className="mx-auto lg:mx-0"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Savory Spinach Ravioli</h2>
              <p className="text-2xl font-bold">$14.99</p>
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0 "
        >
          <Image src={"/image/gallery-2.jpg"} height={280} width={280} alt="photo " className="mx-auto lg:mx-0"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Grilled Salmon Delight</h2>
              <p className="text-2xl font-bold">$16.99</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0"
        >
          <Image src={"/image/gallery-3.jpg"} height={280} width={280} alt="photo " className="mx-auto lg:mx-0"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Mushroom Truffle Risotto</h2>
              <p className="text-2xl font-bold">$16.99</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0"
        >
          <Image src={"/image/gallery-4.jpg"} height={280} width={280} alt="photo " className="mx-auto lg:mx-0"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Citrus Glazed Chicken</h2>
              <p className="text-2xl font-bold">$12.99</p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      <div className="md:flex place-content-center  hidden">
      <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0 bg-red-500 "
        >
          <Image src={"/image/gallery-5.jpg"} height={280} width={280} alt="photo "  className="h-full"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Vegetarian Pad Thai Bowl</h2>
              <p className="text-2xl font-bold">$13.99</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0"
        >
          <Image src={"/image/gallery-6.jpg"} height={280} width={280} alt="photo " />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Crispy Shrimp Tacos</h2>
              <p className="text-2xl font-bold">$15.99</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0"
        >
          <Image src={"/image/gallery-7.jpg"} height={280} width={280} alt="photo " className="h-full"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Pesto Penne Pasta</h2>
              <p className="text-2xl font-bold">$11.99</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ opacity: 0.8 }}
          className="relative overflow-hidden mx-auto lg:mx-0"
        >
          <Image src={"/image/gallery-8.jpg"} height={280} width={280} alt="photo " className="h-full"/>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white"
          >
            <div className="text-center">
              <h2 className="text-lg my-2" >Caprese Quinoa Salad</h2>
              <p className="text-2xl font-bold">$14.99</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeGallery;
