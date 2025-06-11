import React from "react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Emma",
    location: "London, UK",
    title: "The Best Booking System",
    content:
      "Great experience, easy to book. Perfect for businesses and personal — no cash or cards needed!",
    rating: 5,
    avatar: "/test1.jpg",
  },
  {
    id: 2,
    name: "Liam",
    location: "New York, USA",
    title: "Easy To Use & Explore",
    content:
      "Finding templates made life so much easier than I expected. I love the customization options that I didn't know existed.",
    rating: 5,
    avatar: "/test1.jpg",
  },
  {
    id: 3,
    name: "Nathan",
    location: "Sydney, Australia",
    title: "Great For Finding Barbers",
    content:
      "I've been using Fresha for two years now and I love how easy finding the platform I've used. Highly recommend it!",
    rating: 5,
    avatar: "/test1.jpg",
  },
  {
    id: 4,
    name: "Sophia",
    location: "Edinburgh, UK",
    title: "My Go-To For Self-Care",
    content:
      "Fresha is my go-to app for massages and other self-care. I can easily find the best places near me — I love it!",
    rating: 5,
    avatar: "/test1.jpg",
  },
  {
    id: 5,
    name: "Marcus",
    location: "London, UK",
    title: "Seamless Experience",
    content:
      "The booking process is incredibly smooth and the reminder notifications are perfect. Highly recommend for busy professionals.",
    rating: 5,
    avatar: "/test1.jpg",
  },
];

function TrustPlat() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const StarRating = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-black fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {/* <span className="ml-1 text-sm font-medium text-black">{rating.toFixed(1)}</span> */}
      </div>
    );
  };
  return (
    <section>
      <div className="py-[92px]">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold font-sans text-secondary">
            The{" "}
            <span className="text-primary font-serif italic">
              Trusted Platform
            </span>{" "}
            for Beauty <br /> Professionals
          </h1>

          <div className="flex gap-10 items-center">
            <img src="/Line 1.png" alt="" className="h-2" />
            <span className=" text-para font-sans text-[16px] ">
              Earning the top spot in the industry takes more than just great
              software—it takes a commitment to excellence. <br /> Our powerful
              booking tools and seamless user experience have made us the
              preferred choice for salons and spas worldwide. <br /> Explore
              some of our amazing partners and see why they trust us to power
              their business.
            </span>
          </div>
        </div>

        <div className="w-full pt-12 ">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="flex gap-4 overflow-x-auto pb-10 scroll">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[280px] bg-white rounded-lg p-6 shadow-sm"
                  style={{ minWidth: "280px" }}
                >
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-3 mb-4">
                    
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 object-cover object-center h-12 rounded-full "
                      />
                    
                    <div>
                      <h3 className="font-medium text-black text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-black text-base mb-2">
                    {testimonial.title}
                  </h4>

                  {/* Content */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                    {testimonial.content}
                  </p>

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustPlat;
