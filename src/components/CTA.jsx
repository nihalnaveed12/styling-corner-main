import React from "react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r relative from-purple-600 via-purple-700 to-purple-800 py-20 px-8 font-sans">
      <div className=" mx-auto text-center">
        <h2 className="text-[58px] font-bold font-sans text-white mb-4">
          Ready To <span className="font-serif">Grow?</span>
        </h2>
        <p className="text-[14px] text-white mb-8 max-w-2xl mx-auto">
          Join the Styling Corner network and take your business to the next
          level.
        </p>

        <button className="bg-white font-sans py-4 px-20 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-xl transform hover:scale-105">
          Start Now
        </button>
      </div>

       <div className="absolute bottom-20 md:left-[15%] left-60  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-74 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
       <div className="absolute bottom-0 left-0  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-24 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
       <div className="absolute bottom-0 right-[40%]  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-46 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
       <div className="absolute top-0 right-0  z-[12]">
        <img src="/Ellipse 21.png" alt="" className="opacity-20 blur-xl w-60 shadow-2xl inset-8 inset-ring-orange-500 rounded-full border-none outline-none shadow-[#D2998D]" />
      </div>
    </div>
  );
};

export default CTASection;
