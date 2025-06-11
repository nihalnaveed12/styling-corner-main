import React, { useState, useRef } from "react";

const stats = [
  {
    id: 1,
    percentage: "26%",
    title: "Increase In New Clients",
    description:
      "Reach more customers and turn first-time visitors into loyal clients through the largest beauty and wellness platform.",
  },
  {
    id: 2,
    percentage: "89%",
    title: "Fewer No-Shows",
    description:
      "Secure bookings with advanced payments or deposits, reducing last-minute cancellations.",
  },
  {
    id: 3,
    percentage: "20%",
    title: "Boost In Sales",
    description:
      "Upsell effortlessly by offering add-on services during the online booking process.",
  },
  {
    id: 4,
    percentage: "290%",
    title: "More Tips",
    description:
      "Receive higher tips through Fresha's integrated payment system and customer satisfaction.",
  },
];

export default function StatsSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-sans text-black mb-4">
            Smarter Business.{" "}
            <span className="text-purple-600 italic font-serif">Proven Results</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Styling Corner empowers you to grow faster, serve better, and earn more. Here's what our partners are experiencing:
          </p>
        </div>

        {/* Stats Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex-shrink-0 w-80 min-w-[320px] bg-purple-100 rounded-2xl p-8 select-none transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-purple-200 shadow hover:shadow-xl"
            >
              <div className="mb-4">
                <h2 className="text-5xl font-bold text-black mb-2">{stat.percentage}</h2>
                <h3 className="text-xl font-semibold text-black leading-tight">{stat.title}</h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
