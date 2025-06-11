const Card = ({ image, label }) => (
  <div className="relative group overflow-hidden rounded-2xl h-full cursor-pointer">
    <img
      src={image}
      alt={label}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out border-b-purple-600 border-b-4 rounded-2xl shadow-lg group-hover:shadow-xl"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
      <h3 className="text-white font-semibold text-lg">{label}</h3>
    </div>
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
  </div>
);

const PlatformGallerySection = () => {
  const topRowCards = [
    {
      image: "/gallery-1.jpg",
      label: "Salon",
    },
    {
      image: "/gallery-2.jpg",
      label: "Medizinisches Spa",
    },
    {
      image: "/gallery-3.jpg",
      label: "Spa & Sauna",
    },
    {
      image: "/gallery-4.jpg",
      label: "Massage",
    },
    {
      image: "/gallery-5.jpg",
      label: "Tattoo And Piercings",
    },
    {
      image: "/gallery-6.jpg",
      label: "Tanning Salon",
    },
    {
      image: "/gallery-7.jpg",
      label: "Pet Care",
    },
    {
      image: "/gallery-8.jpg",
      label: "Barber",
    },
  ];

  const bottomRowCards = [
    {
      image: "/gallery-5.jpg",
      label: "Tattoo And Piercings",
    },
    {
      image: "/gallery-6.jpg",
      label: "Tanning Salon",
    },
    {
      image: "/gallery-7.jpg",
      label: "Pet Care",
    },
    {
      image: "/gallery-8.jpg",
      label: "Barber",
    },
    {
      image: "/gallery-1.jpg",
      label: "Salon",
    },
    {
      image: "/gallery-2.jpg",
      label: "Medizinisches Spa",
    },
    {
      image: "/gallery-3.jpg",
      label: "Spa & Sauna",
    },
    {
      image: "/gallery-4.jpg",
      label: "Massage",
    },
  ];

  // Custom auto-scroll component since Swiper isn't available
  const AutoScrollRow = ({ cards, direction = "left", speed = 30 }) => {
    return (
      <div className="relative overflow-hidden h-full">
        <div
          className="flex h-full gap-4 w-max"
          style={{
            animation: `scroll-${direction} ${speed}s linear infinite`,
          }}
        >
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[420px] h-full">
              <Card image={card.image} label={card.label} />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="py-40 mb-40 px-8">
      <div className=" mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A Platform For{" "}
            <span className="text-purple-600 font-serif italic">Everyone</span>
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <div className="grid grid-rows-2 gap-4 h-[480px]">
            <AutoScrollRow cards={topRowCards} direction="left" speed={25} />
            <AutoScrollRow
              cards={bottomRowCards}
              direction="right"
              speed={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformGallerySection;
