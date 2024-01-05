"use client";
import Footer from "@/atoms/Footer";
import Navbar from "@/atoms/Navbar";
import {  useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageContainer = ({children}) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return(
        <main className="min-h-screen bg-white text-black ">
          <Navbar/>
          {children}
          <Footer/>
    </main>
    )
}

export default PageContainer;