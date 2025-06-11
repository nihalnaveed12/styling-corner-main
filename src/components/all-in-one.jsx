import React from "react";

function AllInOne() {
  return (
    <section className="">
        <div className="flex lg:flex-row flex-col gap-4 py-[92px] justify-between">

      <div className="w-[50%]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold font-sans xl:text-[58px] lg:text-[45px] sm:text-[30px] text-[20px]  text-secondary">
            <span className="text-primary font-serif italic">All-in-One</span> System To <br /> Power Your Business
          </h1>

          <p className=" text-para font-sans xl:text-[16px] text-[14px]">
            The go-to choice for salons, spas, and wellness professionals—trusted and <br /> top-rated by the industry.
          </p>
        </div>

        <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] w-[480px]">
            <h2 className="xl:text-[20px] text-[18px] font-sans font-semibold">Effortless scheduling with no limits</h2>
            <p className="text-para xl:text-[16px] text-[14px]">Easily manage endless appointments, clients, and locations using a smart and intuitive calendar.</p>
            </div>
        </div>
       <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] w-[480px]">
            <h2 className="xl:text-[20px] text-[18px] font-sans font-semibold">Effortless scheduling with no limits</h2>
            <p className="text-para xl:text-[16px] text-[14px]">Easily manage endless appointments, clients, and locations using a smart and intuitive calendar.</p>
            </div>
        </div>
        <div className="pt-10">
            <div className="border-l-4 xl:px-6 px-2 border-[#6E00B7] xl:h-[75px] h-[50px] flex flex-col xl:w-[529px] w-[480px]">
            <h2 className="xl:text-[20px] text-[18px] font-sans font-semibold">Effortless scheduling with no limits</h2>
            <p className="text-para xl:text-[16px] text-[14px]">Easily manage endless appointments, clients, and locations using a smart and intuitive calendar.</p>
            </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center items-center">
          <img src="/Frame 112.png" alt="" className="h-[450px]"/>
          <img src="/Frame 36.png" alt="" className=""/>
      </div>
        </div>
    </section>
  );
}

export default AllInOne;
