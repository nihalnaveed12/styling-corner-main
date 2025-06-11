import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(); // First item is open by default

  const faqData = [
    {
      question: "Was Ist Die Styling Corner Plattform?",
      answer:
        "Unsere Plattform bietet ein System für vielseitige Online-Präsentationen. Wir sind Marken, die Qualität und den Service der verschiedenen Nutzer bieten. So bringt Sie ihrer Vision zu einem besseren Online-Auftritt. Unsere eigene Lösung sorgt für eine perfekte Marken-Welt.",
    },
    {
      question: "Wie Funktioniert Die Buchung Auf Der Plattform?",
      answer:
        "Die Buchung erfolgt über unser benutzerfreundliches Interface. Sie können Termine auswählen, Services buchen und Zahlungen sicher abwickeln. Unser System führt Sie durch jeden Schritt des Buchungsprozesses.",
    },
    {
      question: "Kann Ich Meinen Termin Ändern Oder Stornieren?",
      answer:
        "Ja, Sie können Ihre Termine bis zu 24 Stunden vor dem geplanten Termin kostenlos ändern oder stornieren. Über Ihr Kundenkonto haben Sie jederzeit Zugriff auf Ihre Buchungen und können diese verwalten.",
    },
    {
      question: "Gibt Es Exklusive Angebote Für App-Nutzer?",
      answer:
        "Absolut! App-Nutzer erhalten Zugang zu exklusiven Angeboten, frühen Buchungsmöglichkeiten und speziellen Rabatten. Laden Sie unsere App herunter, um von diesen Vorteilen zu profitieren.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="py-40 px-8 font-sans relative">
      <img
        src="/ellipse.png"
        alt="hello"
        className="w-auto h-auto absolute -top-82 bottom-40 right-0 mx-auto mb-12"
      />
      <img
        src="/ellipse-2.png"
        alt=""
        className="w-auto h-auto absolute -top-40 bottom-40 left-0 mx-auto mb-12"
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 text-[58px]">
          <h2 className="font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-[#6E00B7] italic font-serif">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-full flex shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${
                openItem === index ? "bg-white z-50" : " bg-background"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-12 py-6 text-left flex items-center justify-between z-10"
              >
                <div className="flex flex-col">
                  <span className="text-[20px] font-[900]  mr-4">
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-[26px] font-[900] text-gray-900 ml-5">
                      {item.question}
                    </span>
                  </span>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItem === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="pl-1 mt-3">
                        {" "}
                        {/* Align with question text */}
                        <p className="text-gray-600 leading-[100%] text-left text-[14px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-auto h-full my-auto">
                  {openItem === index ? (
                    <div className="w-14 h-14 bg-[#6E00B7] rounded-full flex items-center justify-center">
                      <ChevronDown
                        size={24}
                        className=" text-white transform rotate-180 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-[#5964D324] rounded-full flex items-center justify-center">
                      <ChevronDown
                        size={24}
                        className=" text-[#5F5959] transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
