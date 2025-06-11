import React from "react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-20 px-8 font-sans">
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
    </div>
  );
};

export default CTASection;
