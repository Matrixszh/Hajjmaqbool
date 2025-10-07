"use client";

import React from "react";
import { CardBody, CardContainer, CardItem  } from "@/components/ui/3d-card";

// Card data array
const cardData = [
  {
    title: "Submission",
    description: "•	Submitting your Hajj application",
    image: "/submit.jpg",
  },
  {
    title: "Payment",
    description: "•	Selecting and paying for your Hajj package",
    image: "/payment.jpg",


  },
  {
    title: "Receiving",
    description: "•	Receiving your Hajj visa",
    image: "/aproved.jpg",
  }
];

// Individual Card Component with Fixed Sizing
function SingleCard({ 
  title, 
  description, 
  image, 
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <CardContainer 
      className="inter-var w-full" 
      containerClassName="py-8 px-2"
    >
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-b from-emerald-950 to-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm mx-auto h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="240"
            width="400"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          

        </div>
      </CardBody>
    </CardContainer>
  );
}

// Main Component with Proper Spacing
export function ThreeDCardDemo() {
  return (
    <div className="w-full min-h-screen bg-white py-12 px-4">
      {/* Header Section */}
    <div className="items-center justify-center  ">
      <h2 className="items-center justify-center flex text-4xl font-medium text-gray-800 mb-6">
           How To Apply For{" "}
            <span className="italic font-light text-green-400">Hajj</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
             Applications cannot be submitted {" "}
            <span className="italic text-green-400">by travel agents</span> family members, or any third party. Every pilgrim must create and complete {" "}
            <span className="italic text-green-400"> their own account.</span>
          </p>
    </div>

      {/* Cards Grid with Proper Spacing */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {cardData.map((card, index) => (
            <div key={index} className="w-full">
              <SingleCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}

    </div>
  );
}
