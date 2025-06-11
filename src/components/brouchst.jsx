import React from "react";
import { useState } from "react"
import { Calendar, Wallet, ChevronUp, ChevronDown } from "lucide-react"


function Brouchst() {
  return (
    <div className="bg-[#EADFF4] py-[92px]">
      <section className="">
        <div className="flex flex-col items-center max-w-[900px] mx-auto gap-6">
          <h1 className="text-[20px] text-secondary font-bold font-sans text-center xl:text-[58px] lg:text-[45px] sm:text-[30px] ">
            Alles, was du für eine erfolgreiche <br />{" "}
            <span className="text-primary italic font-serif">
              Unternehmensführung
            </span>{" "}
            brauchst
          </h1>

          <p className="text-para font-sans text-[16px] text-center">
            Mit Styling Corner wird die Benutzererfahrung für dein Team und
            deine Kunden einfacher, reibungsloser und effizienter – dank
            moderner Funktionen.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center pt-20">
          <div className="max-w-4xl w-full space-y-6 relative">
            <Card
              icon={<FlaskIcon />}
              title="Wachsen"
              description="Erhalte mehr Kunden über eine der führenden Plattformen der Beauty- und Wellnessbranche."
            />
            <Card
              icon={<Calendar className="h-12 w-12" />}
              title="Steuern"
              description="Behalte den Überblick über Buchungen, Einnahmen, Kundendaten, Standorte und Teammitglieder. Nutze umfassende Auswertungen um fundierte Entscheidungen für dein Business zu treffen."
              showArrows
            />
            <Card
              icon={<Wallet className="h-12 w-12" />}
              title="Bezahlt Werden"
              description="Erhalte deine Zahlungen schnell und unkompliziert dank moderner Zahlungsabwicklung. Nutze Anzeigen, um Ausfälle zu vermeiden, und gestalte den Bezahlprozess einfacher denn je."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brouchst;


function Card({
  icon,
  title,
  description,
  showArrows = false,
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative rounded-full p-3 transition-all duration-500 ease-out cursor-pointer shadow-xl ${
        isHovered
          ? "bg-gradient-to-r from-purple-700 to-purple-800 text-white transform scale-110 z-10"
          : "bg-white text-gray-800 hover:shadow-2xl"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformOrigin: "center center",
      }}
    >
      <div className="flex items-start gap-5 relative">
        <div
          className={`p-5 rounded-full transition-all duration-300 flex-shrink-0 ${
            isHovered ? "bg-white/20 backdrop-blur-sm" : "bg-gray-100"
          }`}
        >
          <div className={isHovered ? "text-white" : "text-purple-700"}>{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-xl mb-2 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed transition-colors duration-300 ${
              isHovered ? "text-white/95" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>

        
      </div>
    </div>
  )
}

// Custom Flask icon to match the reference image
function FlaskIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.31a2 2 0 0 0 .584 1.414L16 16.17V19a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.83l5.416-5.245A2 2 0 0 0 14 9.31V2" />
      <path d="M7 2h10" />
      <path d="M12 9v4" />
    </svg>
  )
}

