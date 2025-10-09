import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Can a travel agent submit my Hajj application?",
    answer: "No. Only you can submit your application through the Nusuk Hajj Portal. Agents cannot submit on your behalf.",
  },
  {
    question: "Can travel agents pay for my Hajj package?",
    answer: "No. All payments must go through Nusuk directly.",
  },
  {
    question: "How can travel agents help after application submission?",
    answer: "They can organize guided groups, offer prep sessions, assist with travel logistics, provide language translation, and support during Hajj days.",
  },
  {
    question: "What documents should I prepare for Hajj 2026?",
    answer: "Valid passport, passport-sized photo, and travel details. Ensure your passport is valid at least six months beyond Hajj.",
  },
  {
    question: "When should I look out for package announcements?",
    answer: "Package announcements and registration openings may start as early as March–April 2026.",
  },
  {
    question: "Do Hajj packages cost more through a travel agent?",
    answer: "No. Prices are standardized by Saudi operators. Travel agents may provide extra guidance, but costs remain the same.",
  },
];



const FaqItem: React.FC<{ faq: FAQ; isExpanded: boolean; onToggle: () => void }> = ({ faq, isExpanded, onToggle }) => (
  <div className="">
    <button
      onClick={onToggle}
      className="border-t w-full text-left text-black px-4 py-3 text-sm sm:text-base lg:text-lg font-medium  bg-transparent hover:bg-gradient-to-b from-emerald-600 to-black hover:text-white transition-all duration-300 focus:outline-none flex justify-between"
    >
            {faq.question}
            {isExpanded ?  <IoIosArrowUp />:<IoIosArrowDown /> }
    </button>
    {isExpanded && (
      <div className="px-4 py-3 text-sm text-black sm:text-base lg:text-lg mt-2 bg-gray-100 ">
        {faq.answer}
      </div>
    )}
  </div>
);

export default function Faqs() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-12 ">
      <div className=" border mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isExpanded={expanded === index}
            onToggle={() => toggleAnswer(index)}
          />
        ))}
      </div>
    </section>
  );
}