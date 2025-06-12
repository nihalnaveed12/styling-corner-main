import React from "react";

export default function AppDownloadSection() {
  return (
    <div className="w-full bg-white py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[58px] font-sans font-bold text-gray-900 mb-4">
            Get The{" "}
            <span className="font-serif italic text-[#6E00B7]">
              Styling Corner App
            </span>
          </h1>
          <p className="text-gray-700 font-sans ">
            Discover and book beauty and wellness experiences near you –
            anytime, anywhere.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          {/* Left Section - Customer App */}
          <div className="flex flex-row-reverse items-center text-center lg:text-left">
            <div className="mb-8">
              <img
                src="/mobile-img.png"
                alt="Customer booking app interface"
                className="w-[236px] h-[316px] mx-auto lg:mx-0"
                width={1200}
                height={1200}
              />
            </div>
            <div className="max-w-sm">
              <h2 className="text-[38px] leading-[100%] font-sans font-[900] text-gray-900 mb-4">
                Booking App For Customers
              </h2>
              <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                Book beauty and wellness experiences near you
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <img
                  src="/apple.png"
                  alt="Download on App Store"
                  className="h-auto w-auto"
                />
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Business App */}
          <div className="flex flex-row-reverse items-center text-center lg:text-left">
            <div className="mb-8 relative">
              <img
                src="/mobile-img-2.png"
                alt="Business management app interface"
                className="w-[350px] h-[380px] mx-auto lg:mx-0 relative top-9"
                width={1000}
                height={1000}
              />
            </div>
            <div className="max-w-sm">
              <h2 className="text-[38px] leading-[100%] font-sans font-[900] text-gray-900 mb-4">
                Business App For Companies
              </h2>
              <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                Simple, flexible and powerful software for managing your
                business – even on the go
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <img
                  src="/apple.png"
                  alt="Download on App Store"
                  className="h--auto w-auto"
                />
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
