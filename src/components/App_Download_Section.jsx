import React from "react";

export default function AppDownloadSection() {
  return (
    <div className="w-full bg-white py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="md:text-[58px] text-[34px] leading-[40px] font-sans font-bold text-gray-900 mb-4 mx-10 md:mx-0">
            Get The{" "}
            <span className="font-serif italic text-[#6E00B7]">
              Styling Corner App
            </span>
          </h1>
          <p className="text-gray-700 font-sans md:block hidden">
            Discover and book beauty and wellness experiences near you –
            anytime, anywhere.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          {/* Left Section - Customer App */}
          <div className="flex lg:flex-row-reverse flex-col-reverse items-center text-center lg:text-left gap-7">
            <div className="mb-8">
              <img
                src="/mobile-img.png"
                alt="Customer booking app interface"
                className="lg:w-[236px] lg:h-[316px] w-auto h-auto mx-auto lg:mx-0"
                width={1200}
                height={1200}
              />
            </div>
            <div className="max-w-sm ">
              <h2 className="md:text-[38px] text-[28px] text-left leading-[100%] font-sans font-[900] text-gray-900 mb-4">
                Booking App For Customers
              </h2>
              <p className="text-gray-700 font-sans mb-6 leading-relaxed text-left mr-20 md:mr-0">
                Book beauty and wellness experiences near you
              </p>

              <div className="flex lg:flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">

              <div className="flex flex-row gap-3 lg:justify-start mb-10">

                <img
                  src="/apple.png"
                  alt="Download on App Store"
                  className="md:h-[50px] md:w-[145px] w-[165px] h-[62px]"
                />
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="md:h-[50px] md:w-[145px] w-[165px] h-[62px]"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Business App */}
          <div className="flex lg:flex-row-reverse flex-col-reverse items-center text-center lg:text-left">
            <div className="mb-8 relative">
              <img
                src="/mobile-img-2.png"
                alt="Business management app interface"
                className="lg:w-[350px] lg:h-[380px] w-auto h-auto mx-auto lg:mx-0 relative md:top-9"
                width={1000}
                height={1000}
              />
            </div>
            <div className="max-w-sm">
              <h2 className="md:text-[38px] text-[28px] text-left leading-[100%] font-sans font-[900] text-gray-900 mb-4">
                Business App For Companies
              </h2>
              <p className="text-gray-700 font-sans mb-6 leading-relaxed text-left mr-20 md:mr-0">
                Simple, flexible and powerful software for managing your
                business – even on the go
              </p>

              <div className="flex lg:flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">

              <div className="flex flex-row gap-3  lg:justify-start mb-10">

                <img
                  src="/apple.png"
                  alt="Download on App Store"
                  className="md:h-[50px] md:w-[145px] w-[165px] h-[62px]"
                />
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="md:h-[50px] md:w-[145px] w-[165px] h-[62px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}