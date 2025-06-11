import React, { useState, useEffect } from "react";

const PlatformGallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(images.length / 4)) % Math.ceil(images.length / 4)
    );
  };

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12 text-[58px]">
          <h2 className=" font-bold font-sans text-gray-900">
            A Platform For{" "}
            <span className="text-[#6E00B7] font-serif italic">Everyone</span>
          </h2>
        </div>

        {/* Image Gallery */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(images.length / 4) }).map(
              (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images
                      .slice(slideIndex * 4, slideIndex * 4 + 4)
                      .map((image, index) => (
                        <div
                          key={index}
                          className="relative group overflow-hidden rounded-xl"
                        >
                          <img
                            src={image}
                            alt={`Platform image ${slideIndex * 4 + index + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(images.length / 4) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformGallerySection;
