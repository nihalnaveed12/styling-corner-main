import { Video } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="hero relative sm:py-[98px] py-[90px] ">
      <div className="">
        <div className="flex flex-col gap-6 px-7">
          <h1 className="font-[900] font-sans text-center text-secondary sm:text-[64px] text-[44px] leading-[100%]">
            Smart Solutions for Modern <br />
            <span className="font-serif italic text-primary">
              Salons & Spas
            </span>
          </h1>
          <p className="text-center text-sm font-sans">
            Simple, flexible and powerful booking software for your business.
          </p>

          <div className="flex justify-center gap-4 pb-10">
            <button className="bg-primary text-white sm:w-[225px] w-[150px] text-[12px] sm:h-[54px]">
              Get Started Now
            </button>
            <button className="bg-white border-2 border-secondary px-1 sm:text-lg text-[12px] sm:w-[225px] w-[150px] h-[36px] sm:h-[54px] flex items-center justify-center gap-2">
              <Video size={16} className="h-3 w-3 sm:h-4 sm:w-4" />
              Watch Introduction
            </button>
          </div>
        </div>
      </div>

      <div className="flex relative max-w-7xl items-center mx-auto lg:pr-40 md:pr-30 sm:pr-20 pr-10">
        <div className="relative z-[15]">
          <img src="/Group 50.png" alt="" className=" sm:w-full w-[90%]" />
        </div>
          <div className="absolute z-[20] xl:top-24  lg:top-20 md:top-[10%] right-10">
            <img
              src="/Frame 36.png"
              alt=""
              className="object-cover xl:h-[500px] lg:h-[420px] md:h-[350px] sm:h-[260px] mobile-hero"
            />
          </div>
      </div>

      <div className="text-white flex flex-col sm:gap-20 gap-14">
        <p className="text-center font-sans text-[14px] pt-10 px-4 sm:text-[18px]">
          Rated 5 Stars ★★★★★ Trusted and loved by users on Capterra
        </p>

        <div className="max-w-[1100px] z-[20] mx-auto px-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center xl:gap-36 gap-26">
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] text-center font-sans font-semibold">
              130,000+
            </h2>
            <p className="xl:text-[18px] text-[14px] text-center  font-sans">
              Partner Companies
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] text-center font-sans font-semibold">
              450,000+
            </h2>
            <p className="xl:text-[18px] text-[14px] font-sans text-center">
              450,000+
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] text-center font-sans font-semibold">
              1 Billion+
            </h2>
            <p className="xl:text-[18px] text-[14px] text-center font-sans">
              Stylish and professionals
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] text-center font-sans font-semibold">
              120+
            </h2>
            <p className="xl:text-[18px] text-[14px] font-sans text-center">
              Countries
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-90  z-[10]">
        <img src="/Ellipse 24.png" alt="" className="opacity-20 blur-xl " />
      </div>

      <div className="absolute bottom-0  z-[10]">
        <img
          src="/Ellipse 24.png"
          alt=""
          className="opacity-20 blur-2xl w-50 "
        />
      </div>
      <div className="absolute bottom-20 md:left-[25%] left-60  z-[12]">
        <img
          src="/Ellipse 21.png"
          alt=""
          className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]"
        />
      </div>
      <div className="absolute bottom-50 md:right-[20%]  right-60  z-[12]">
        <img
          src="/Ellipse 21.png"
          alt=""
          className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]"
        />
      </div>
      <div className="absolute bottom-0 -right-0 z-[12]">
        <img
          src="/Ellipse 21.png"
          alt=""
          className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]"
        />
      </div>
      <div className="absolute bottom-40 right-[40%] z-[12]">
        <img
          src="/Ellipse 26.png"
          alt=""
          className="opacity-25 blur-xl shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]"
        />
      </div>
      <div className="absolute bottom-[30%] right-0 z-[12]">
        <img
          src="/Ellipse 26.png"
          alt=""
          className="opacity-15 blur-xl shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]"
        />
      </div>
    </div>
  );
}

export default Hero;
