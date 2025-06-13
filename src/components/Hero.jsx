import { Video } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="hero relative py-[98px]">
      <div className="">
        <div className="flex flex-col gap-6">
          <h1 className="font-[900] font-sans text-center text-secondary text-[64px] leading-[100%]">
            Smart Solutions for Modern <br />
            <span className="font-serif italic text-primary">
              Salons & Spas
            </span>
          </h1>
          <p className="text-center font-sans">
            Simple, flexible and powerful booking software for your business.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white w-[225px] h-[54px]">
              Get Started Now
            </button>
            <button className="bg-white border-2 border-secondary w-[225px] h-[54px] flex items-center justify-center gap-2">
              <Video size={16} />
              Watch Introduction
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-6xl mx-auto pr-40">
        <div className="relative z-[15]">
          <img src="/Group 50.png" alt="" className="  " />
          <div className="absolute bottom-20 w-[250px] lg:h-[500px] md:h-[400px] h-[300px] -right-30 ">
            <img src="/Frame 36.png" alt="" className="lg:h-full md:h-[400px] h-[300px]" />
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col gap-20">
        <p className="text-center font-sans text-[18px]">
          Rated 5 Stars ★★★★★ Trusted and loved by users on Capterra
        </p>

        <div className="max-w-[1100px] mx-auto px-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center xl:gap-36 gap-26">
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] font-sans font-semibold">
              130,000+
            </h2>
            <p className="xl:text-[18px] text-[14px]  font-sans">
              Partner Companies
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] font-sans font-semibold">
              450,000+
            </h2>
            <p className="xl:text-[18px] text-[14px] font-sans text-center">
              450,000+
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] font-sans font-semibold">
              130,000+
            </h2>
            <p className="xl:text-[18px] text-[14px] font-sans">
              Partner Companies
            </p>
          </div>
          <div className="">
            <h2 className="xl:text-[38px] text-[32px] font-sans font-semibold">
              130,000+
            </h2>
            <p className="xl:text-[18px] text-[14px] font-sans text-center">
              Partner Companies
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-90  z-[10]">
        <img src="/Ellipse 24.png" alt="" className="opacity-20 blur-xl " />
      </div>

      <div className="absolute bottom-0  z-[10]">
        <img src="/Ellipse 24.png" alt="" className="opacity-20 blur-xl w-42 " />
      </div>
     <div className="absolute bottom-20 md:left-[25%] left-60  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
      <div className="absolute bottom-50 md:right-[20%]  right-60  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
      <div className="absolute bottom-0 -right-0 z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
      

    </div>
  );
}

export default Hero;
