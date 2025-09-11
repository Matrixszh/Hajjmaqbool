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
    question: "What services do you offer?",
    answer: "We offer a range of automotive repair and maintenance services including engine repairs, brake service, oil changes, and more.",
  },
  {
    question: "How can I schedule an appointment?",
    answer: "You can schedule an appointment by calling us directly or using the online booking system on our website.",
  },
  {
    question: "Do you offer any warranties on your services?",
    answer: "Yes, we offer warranties on most of our services. Please ask for details when you bring your vehicle in.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cash, credit/debit cards, and electronic transfers.",
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