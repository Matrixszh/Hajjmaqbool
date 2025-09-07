import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: number;
  title: string;
  type: string;
  image: string;
  
}

export default function ExpandablePropertyCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const properties: Property[] = [
    {
      id: 1,
      title: "Skyline Business Tower",
      type: "commercial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      
    },
    {
      id: 2,
      title: "Heritage Luxury Residences",
      type: "residential",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop",
      
    },
    {
      id: 3,
      title: "Innovation Tech Campus",
      type: "commercial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
     
    }
  ];

  const handleCardClick = (propertyId: number) => {
    if (window.innerWidth <= 768) { // Mobile tap interaction
      setExpandedCard(expandedCard === propertyId ? null : propertyId);
    }
  };

  const handleMouseEnter = (propertyId: number) => {
    if (window.innerWidth > 768) { // Desktop hover interaction
      setExpandedCard(propertyId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) { // Desktop hover interaction
      setExpandedCard(null);
    }
  };

  return (
    <section className="relative">
      {properties.map((property, index) => (
        <div key={property.id} className="relative">
          {/* White divider line */}
          {index > 0 && (
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white z-10"></div>
          )}
          
          <motion.div
            className={`relative bg-cover bg-center cursor-pointer overflow-hidden ${
              expandedCard === property.id ? 'h-auto min-h-96 md:h-96' : 'h-96'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('${property.image}')`
            }}
           
          >
          

            {/* Default content */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-center z-20"
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: expandedCard === property.id ? 0 : 1,
                scale: expandedCard === property.id ? 0.9 : 1
              }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{property.title}</h3>
                <p className="text-xl text-gray-300 italic">{property.type}</p>
              </div>
            </motion.div>

            {/* Expanded content */}
            

            {/* Interaction hint for mobile */}
          </motion.div>
        </div>
      ))}
      
      {/* Bottom white line */}
      <div className="h-[2px] bg-white"></div>
    </section>
  );
}
