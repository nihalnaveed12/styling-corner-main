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
        "Behalte den Überblick über Buchungen, Einnahmen, Kundendaten, Standorte und Teammitglieder. Nutze umfassende Auswertungen um fundierte Entscheidungen für dein Business zu treffen.",
    },
    {
      id: 1,
      icon: <Calendar className="h-8 w-8" />,
      title: "Steuern",
      description:
        "Behalte den Überblick über Buchungen, Einnahmen, Kundendaten, Standorte und Teammitglieder. Nutze umfassende Auswertungen um fundierte Entscheidungen für dein Business zu treffen.",
    },
    {
      id: 2,
      icon: <Wallet className="h-8 w-8" />,
      title: "Bezahlt Werden",
      description:
        "Erhalte deine Zahlungen schnell und unkompliziert dank moderner Zahlungsabwicklung. Nutze Anzeigen, um Ausfälle zu vermeiden, und gestalte den Bezahlprozess einfacher denn je.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-200 h-[800px] py-16">
      <section className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-[58px] font-bold text-[#070027] mb-6 leading-[99%] font-sans">
            Alles, Was Du Für Eine Erfolgreiche{" "}
            <span className="text-[#6E00B7] italic font-serif">
              Unternehmensführung
            </span>{" "}
            Brauchst
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Mit Styling Corner wird die Benutzererfahrung für dein Team und
            deine Kunden einfacher, reibungsloser und effizienter – dank
            moderner Funktionen.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="relative max-w-5xl mx-auto my-auto">
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
      "absolute w-full transition-all duration-500 ease-out cursor-pointer rounded-full overflow-hidden font-sans";

    if (isActive) {
      return `${baseStyles} bg-[#6E00B7] text-white shadow-2xl transform scale-105`;
    } else {
      return `${baseStyles} bg-white/80 backdrop-blur-sm text-gray-600 shadow-lg filter blur-[2px] hover:blur-[1px]`;
    }
  };

  const getTransform = () => {
    const offset = position - activePosition;
    return `translateY(${offset}px)`;
  };

  return (
    <div
      className={getCardStyles()}
      onClick={onClick}
      style={{
        zIndex: zIndex,
        transform: getTransform(),
        top: `${position * 120}px`,
      }}
    >
      <div className="px-4 py-4">
        <div className="flex items-start gap-6">
          {/* Icon */}
          {position === 1 && (
            <img
              src="/middle.png"
              alt="Middle Card Icon"
              className={`rounded-full flex-shrink-0 transition-all duration-300 my-auto w-auto h-auto`}
            />
          )}
          {position !== 1 && (
            <img
              src="/up-down.png"
              alt="Card Icon"
              className={`rounded-full flex-shrink-0 transition-all duration-300 my-auto w-auto h-auto`}
            />
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold text-2xl mb-3 transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-800"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-base font-light leading-relaxed transition-colors duration-300 ${
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
        <div className="absolute inset-0 border border-purple-200 rounded-2xl pointer-events-none" />
      )}
    </div>
  );
}

export default Brouchst;
