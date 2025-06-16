import React from "react";

function AllInOne() {
  return (
    <section className="">
        <div className="flex lg:flex-row flex-col gap-10 py-[92px] justify-between">

      <div className="md:w-[50%]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold font-sans  xl:text-[58px] sm:text-[45px] text-[32px]  text-secondary">
            <span className="text-primary font-serif italic">All-in-One</span> System To <br /> Power Your Business
          </h1>

          <p className=" text-para font-sans xl:text-[16px] sm:text-[14px] text-[12px]">
            The go-to choice for salons, spas, and wellness professionals—trusted <br /> and top-rated by the industry.
          </p>
        </div>

        <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
            <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">Effortless scheduling with no limits</h2>
            <p className="text-para  xl:text-[16px] sm:text-[14px] text-[12px]">Easily manage endless appointments, clients, and locations using a smart and intuitive calendar.</p>
            </div>
        </div>
       <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
            <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">Deeper customer insights at your fingertips</h2>
            <p className="text-para  xl:text-[16px] sm:text-[14px] text-[12px]">View detailed client profiles including visit trends, service preferences, payment choices, favorite channels, and total value over time.</p>
        </div>
        </div>
        <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] sm:w-[480px]">
            <h2 className="xl:text-[20px] sm:text-[18px] text-[14px] font-sans font-semibold">Smooth operations, stronger brand presence</h2>
            <p className="text-para  xl:text-[16px] sm:text-[14px] text-[12px]">Streamline your workflow, reduce manual tasks, and deliver a seamless experience that elevates your brand.</p>
            </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center items-center">
          <img src="/Frame 112.png" alt="" className="lg:h-[450px] md:h-[400px] sm:h-[350px] h-[250px]"/>
          <img src="/Frame 36.png" alt="" className="lg:h-[500px] md:h-[450px] sm:h-[400px] h-[320px] "/>
      </div>
        </div>
    </section>
  );
}

export default AllInOne;
