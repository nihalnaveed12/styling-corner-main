import { Video } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="hero py-[92px]">
      <div className="">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold font-sans text-center text-secondary">
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
        <div className="relative">
          <img src="/Group 50.png" alt="" className="  " />
          <div className="absolute bottom-20 w-[250px] -right-30 h-[500px]">
            <img src="/Frame 36.png" alt="" className="" />
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col gap-20">
        <p className="text-center font-sans text-[18px]">
          Rated 5 Stars ★★★★★ Trusted and loved by users on Capterra
        </p>

        <div className="max-w-[1100px] mx-auto flex justify-center gap-40">
          <div className="">
            <h2 className="text-[38px] font-sans font-semibold">130,000+</h2>
            <p className="text-[18px] font-sans">Partner Companies</p>
          </div>
          <div className="">
            <h2 className="text-[38px] font-sans font-semibold">450,000+</h2>
            <p className="text-[18px] font-sans text-center">450,000+</p>
          </div>
          <div className="">
            <h2 className="text-[38px] font-sans font-semibold">130,000+</h2>
            <p className="text-[18px] font-sans">Partner Companies</p>
          </div>
          <div className="">
            <h2 className="text-[38px] font-sans font-semibold">130,000+</h2>
            <p className="text-[18px] font-sans text-center">Partner Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
