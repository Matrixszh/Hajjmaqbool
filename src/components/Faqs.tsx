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
    question: "What challenges did pilgrims face when using the Nusuk platform directly?",
    answer: "Pilgrims reported technical glitches, limited availability of packages, and payment processing issues, which created frustration and uncertainty during the booking process.",
  },
  {
    question: "Why did Saudi companies reintroduce travel agents into the Hajj process?",
    answer: "Saudi companies struggled with the logistics of managing large groups of pilgrims on their own. To address these challenges, they brought back experienced travel agents to guide pilgrims and ensure smoother journeys.",
  },
  {
    question: "What risks do pilgrims face if they book their Hajj packages directly through Nusuk?",
    answer: "When pilgrims book directly through Nusuk, agents are not compensated to look after them, which can leave pilgrims without the dedicated support and guidance they need during Hajj.",
  },
  {
    question: "How does booking through a travel agent improve the Hajj experience?",
    answer: "Booking through a travel agent ensures that the agent is financially motivated to support you, offering personalized care, guidance, and accountability throughout your pilgrimage.",
  },
  {
    question: "What personalized services do travel agents provide during Hajj?",
    answer: "Travel agents understand the unique needs of pilgrims from their region, provide tailored advice, and assist with accommodations, transportation, and other logistical challenges.",
  },
  {
    question: "Why is it highly recommended to book Hajj through an authorized travel agent?",
    answer: "An experienced, authorized travel agent guarantees that you will have dedicated support, on-the-ground expertise, and peace of mind, ensuring your journey is as smooth and spiritually fulfilling as possible.",
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