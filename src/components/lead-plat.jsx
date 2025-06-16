import React from "react";

function LeadPlat() {
  return (
    <section className="">
      <div className="flex lg:flex-row flex-col-reverse gap-10 py-[92px] justify-between">
        <div className="flex gap-6 justify-center items-center">
          <img src="/frame.png" alt="" className="lg:h-[500px] md:h-[450px] sm:h-[400px] h-[320px]" />
          <img
            src="/Frame 113.png"
            alt=""
            className="lg:h-[450px] md:h-[400px] sm:h-[350px] h-[250px]"
          />
        </div>
        <div className="md:w-[50%] flex flex-col justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold font-sans xl:text-[58px] sm:text-[45px] text-[32px]  text-secondary">
              <span className="text-primary font-serif italic">
                The Leading Platform{" "}
              </span>{" "}
              <br /> To Grow Your Beauty Business
            </h1>

            <p className=" text-para font-sans xl:text-[16px] sm:text-[14px] text-[12px]">
              Showcase your services and connect with new clients through the
              most trusted <br /> beauty and wellness marketplace.
            </p>
          </div>

          <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
              <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">
               Get Discovered Online
              </h2>
              <p className="text-para xl:text-[16px] sm:text-[14px] text-[12px]">
                List your business on Styling Corner to boost your visibility and attract more bookings.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
              <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">
              Reach Thousands Daily
              </h2>
              <p className="text-para xl:text-[16px] sm:text-[14px] text-[12px]">
               Connect with people actively searching for their next salon, spa, or wellness appointment.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
              <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">
                Let Clients Book Anytime
              </h2>
              <p className="text-para xl:text-[16px] sm:text-[14px] text-[12px]">
                Free up your schedule while your clients book appointments on their own — 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadPlat;
