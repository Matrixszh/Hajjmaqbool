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
  question: "How can I avoid delays during Nusuk verification?",
  answer: "Ensure all documents are valid, clear, correctly uploaded, and match your identification. Check your Nusuk account regularly for updates.",
},
{
  question: "Do travel agents still play a role in Hajj?",
  answer: "Yes. They guide through account setup, compare packages, explain inclusions, manage communication, and provide on-ground support during Hajj.",
},
{
  question: "How to choose a reliable Hajj travel agent?",
  answer: "Verify that they are affiliated with an approved Nusuk Hajj Operator. Trusted U.S. partners include Manara Travel, Dar El Salaam Travel, and Adam Travel.",
},
{
  question: "How did the Hajj process in the U.S. change from 2019–2026?",
  answer: "2019: traditional agencies; 2020–2021: COVID cancellations; 2022: online via Motawif; 2023–2025: Nusuk portal with limited agency support; 2026: continued Nusuk portal with 5,000 U.S. visas.",
},
{
  question: "Can agents assist with technical issues during registration?",
  answer: "Yes. Agents can help with account setup, troubleshooting, and navigating the Nusuk system.",
},
{
  question: "What should pilgrims prepare in advance for Hajj 2026?",
  answer: "Passport, passport-sized photo, personal details, vaccination certificate, and travel logistics. Monitor package announcements starting March–April 2026.",
},

];

const FaqItem: React.FC<{ faq: FAQ; isExpanded: boolean; onToggle: () => void }> = ({ faq, isExpanded, onToggle }) => (
  <div className="">
    <button
      onClick={onToggle}
      className="border-b border-white w-full text-left text-white px-4 py-3 text-sm sm:text-base lg:text-lg font-regular  bg-transparent hover:bg-white hover:text-green-400 transition-all duration-300 focus:outline-none flex justify-between"
    >
            {faq.question}
            {isExpanded ?  <IoIosArrowUp />:<IoIosArrowDown /> }
    </button>
    {isExpanded && (
      <div className="px-4 py-3 text-sm text-black sm:text-base lg:text-lg bg-gray-100 ">
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
    <section className="bg-gradient-to-b from-emerald-950 to-black w-full py-12 ">
      <div className="justify-center items-center flex py-4">
        <h2 className="text-4xl font-medium">FAQs</h2>
      </div>
      <div className=" mx-auto">
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