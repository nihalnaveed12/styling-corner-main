import React from "react";
import { useState } from "react";
import { Calendar, Wallet, TrendingUp } from "lucide-react";

function Brouchst() {
  const [activeCard, setActiveCard] = useState(1); // Middle card active by default

  const cards = [
    {
      id: 0,
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Wachsen",
      description:
        "Behalte den Überblick über Buchungen, Einnahmen, Kundendaten, Standorte und Teammitglieder. Nutze umfassende Auswertungen um fundierte Entscheidungen.",
    },
    {
      id: 1,
      icon: <Calendar className="h-8 w-8" />,
      title: "Steuern",
      description:
        "Behalte den Überblick über Buchungen, Einnahmen, Kundendaten, Standorte und Teammitglieder. Nutze umfassende Auswertungen um fundierte Entscheidungenn.",
    },
    {
      id: 2,
      icon: <Wallet className="h-8 w-8" />,
      title: "Bezahlt Werden",
      description:
        "Erhalte deine Zahlungen schnell und unkompliziert dank moderner Zahlungsabwicklung. Nutze Anzeigen, um Ausfälle zu vermeiden, und gestalte den.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-200 min-h-[800px] lg:h-[800px] py-8 lg:py-16">
      <section className="max-w-4xl mx-auto sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-[58px] font-bold text-[#070027] mb-4 lg:mb-6 leading-tight lg:leading-[99%] font-sans">
            Alles, Was Du Für Eine Erfolgreiche{" "}
            <span className="text-[#6E00B7] italic font-serif">
              Unternehmensführung
            </span>{" "}
            Brauchst
          </h1>
          <p className="text-gray-600 text-[16px] sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Mit Styling Corner wird die Benutzererfahrung für dein Team und
            deine Kunden einfacher, reibungsloser und effizienter – dank
            moderner Funktionen.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="relative max-w-5xl mx-auto my-auto">
          <div className="relative h-[400px] sm:h-[450px] lg:h-[360px]">
            {cards.map((card, index) => (
              <Card
                key={index}
                {...card}
                isActive={activeCard === card.id}
                onClick={() => setActiveCard(card.id)}
                zIndex={cards.length - Math.abs(activeCard - card.id)}
                position={card.id}
                activePosition={activeCard}
              />
            ))}
          </div>
        </div>

        {/* Decorative image - hidden on smaller screens */}
        <div className="absolute right-4 lg:right-10 -bottom-70 hidden lg:block">
          <img src="/Group 46.png" alt="" />
        </div>
      </section>
    </div>
  );
}

function Card({
  icon,
  title,
  description,
  isActive,
  onClick,
  zIndex,
  position,
  activePosition,
}) {
  const getCardStyles = () => {
    const baseStyles =
      "absolute w-full transition-all duration-500 ease-out cursor-pointer rounded-full lg:rounded-full overflow-hidden font-sans";

    if (isActive) {
      return `${baseStyles} bg-[#6E00B7] text-white shadow-2xl transform scale-100 lg:scale-105`;
    } else {
      return `${baseStyles} bg-white/80 backdrop-blur-sm text-gray-600 shadow-lg filter blur-[1px] lg:blur-[2px] hover:blur-0 hover:blur-[1px]`;
    }
  };

  const getTransform = () => {
    const offset = position - activePosition;
    // Different spacing for mobile vs desktop
    const spacing = window.innerWidth >= 1024 ? 120 : 100;
    return `translateY(${offset}px)`;
  };

  return (
    <div
      className={getCardStyles()}
      onClick={onClick}
      style={{
        zIndex: zIndex,
        transform: getTransform(),
        top:
          window.innerWidth >= 1024
            ? `${position * 120}px`
            : window.innerWidth >= 640
            ? `${position * 100}px`
            : `${position * 80}px`,
      }}
    >
      <div className="px-2 py-3 sm:px-4 sm:py-4">
        <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
          {/* Icon */}
          {position === 1 && (
            <img
              src="/middle.png"
              alt="Middle Card Icon"
              className={`rounded-full flex-shrink-0 transition-all duration-300 my-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto`}
            />
          )}
          {position !== 1 && (
            <img
              src="/up-down.png"
              alt="Card Icon"
              className={`rounded-full flex-shrink-0 transition-all duration-300 my-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto`}
            />
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold  sm:text-xl lg:text-2xl mb-2 lg:mb-3 transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-800"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-xs sm:text-base font-light leading-tight transition-colors duration-300 ${
                isActive ? "text-white/95" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle border for inactive cards */}
      {!isActive && (
        <div className="absolute inset-0 border border-purple-200 rounded-2xl lg:rounded-2xl pointer-events-none" />
      )}
    </div>
  );
}

export default Brouchst;
