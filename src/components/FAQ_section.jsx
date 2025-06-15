import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(0); // First item is open by default

  const faqData = [
    {
      question: "Was Ist Die Styling Corner Plattform?",
      answer:
        "Unsere Plattform bietet dir Zugang zu echten Erfahrungsberichten, die dir helfen, die Qualität und den Service der verschiedenen Salons besser einzuschätzen. Genieße Sicherheit, dass dein Termin zu einem positiven Erlebnis wird!",
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
    <div className="md:py-40 py-12 md:px-8 px-4 font-sans relative">
      <img
        src="/ellipse.png"
        alt="hello"
        className="w-auto h-auto absolute -top-82 bottom-40 right-0 mx-auto mb-12"
        draggable="false"
      />
      <img
        src="/ellipse-2.png"
        alt=""
        className="w-auto h-auto absolute -top-40 bottom-40 left-0 mx-auto mb-12"
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:text-[58px] text-[28px] leading-[32px] md:leading-[67px]">
          <h2 className="font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-[#6E00B7] italic font-serif">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`md:rounded-full rounded-2xl flex shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${
                openItem === index ? "bg-white z-50" : " bg-background"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full md:px-12 px-4 md:py-6 py-5 text-left flex items-center justify-between z-10"
              >
                <div className="flex flex-col flex-1">
                  <span className="md:text-[20px] text-[14px] font-[900] md:mr-4 mr-2">
                    {String(index + 1).padStart(2, "0")}
                    <span className="md:text-[26px] text-[16px] leading-[120%] md:leading-[100%] font-[900] text-gray-900 md:ml-5 ml-3  md:inline mt-1 md:mt-0">
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
                    <div className="md:px-8 px-0 pb-6 md:pb-6">
                      <div className="md:pl-1 pl-0 mt-3">
                        <p className="text-gray-600 leading-[140%] md:leading-[100%] text-left text-[12px] md:text-[14px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-auto h-full my-auto ml-3">
                  {openItem === index ? (
                    <div className="md:w-14 md:h-14 w-10 h-10 bg-[#6E00B7] rounded-full flex items-center justify-center">
                      <ChevronDown
                        size={20}
                        className="md:w-6 md:h-6 w-4 h-4 text-white transform rotate-180 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="md:w-14 md:h-14 w-10 h-10 bg-[#5964D324] rounded-full flex items-center justify-center">
                      <ChevronDown
                        size={20}
                        className="md:w-6 md:h-6 w-4 h-4 text-[#5F5959] transition-transform duration-300"
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
