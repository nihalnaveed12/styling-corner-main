import { ArrowBigRight, ArrowRight } from "lucide-react";
import React, { useState } from "react";

function OnePlatform() {
  const Images = [
    {
      src: "/p1.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p2.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p3.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p1.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p2.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p3.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p1.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p2.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p3.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p1.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p2.jpg",
      name: "Salon",
      href: "/",
    },
    {
      src: "/p1.jpg",
      name: "Salon",
      href: "/",
    },
  ];

  return (
    <section>
      <div className="py-[98px]">
        <div className="flex flex-col items-center max-w-[900px] mx-auto gap-6">
          <h1 className="font-bold font-sans text-center text-secondary xl:text-[58px] lg:text-[45px] sm:text-[30px] text-[20px] ">
            One Platform.{"  "}
            <span className="font-serif italic text-primary">
              Total Control
            </span>
          </h1>

          <p className="text-para font-sans text-[18px] text-center line-clamp-3">
            Unlock your business's full potential with Styling Corner. From
            boosting sales and managing appointments to keeping clients coming
            back—our powerful tools help you grow with ease, so you can focus on
            delivering exceptional service.
          </p>

          <button className="bg-primary text-white w-[225px] h-[54px] shadow-xl ">
            Get Started Now
          </button>
        </div>

        <div className="pt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Images.map((image, index) => (
              <div
                className="overflow-hidden cursor-pointer shadow-lg relative rounded-xl group h-[330px] border-b-5 border-purple-700"
                key={index}
              >
                <div className="absolute inset-0 transition-all duration-500 ease-in-out">
                  <img
                    key={index}
                    src={image.src}
                    alt={`Platform Image ${index + 1}`}
                    className="h-[330px] rounded-xl shadow-lg object-cover r transition-all duration-500 ease-in-out group-hover:object-left"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 transition-opacity duration-300 ease-in-out group-hover:opacity-0 ">
                  <h3 className="text-white font-semibold text-center text-[20px] ">
                    {image.name}
                  </h3>
                </div>

                <div className="absolute  bottom-4 left-4 right-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  <div className="bg-purple-600 opacity-80  rounded-full px-4 py-3 flex items-center justify-between transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <h3 className="text-white font-semibold text-lg">Salon</h3>
                    <div className="bg-white rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnePlatform;
