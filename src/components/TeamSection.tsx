import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TeamSection = () => {
  


  return (
    <section id="team" className="py-20 bg-gradient-to-b from-emerald-950 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Architectural Image */}
          <div className="relative">
            <img 
              src="/hajj2.jpg"
              alt="Architectural ceiling structure"
              className="w-full h-[50vh] object-cover min-h-[400px]"
            />
          </div>
          
          {/* Right side - Content */}
          <div className=" p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-medium text-white mb-4">
              Everything you need to know about  <span className="italic font-light">Hajj</span> travel agents, and Nusuk guidance .
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
               Prepare for Hajj with confidence by understanding travel agents’ roles, vaccination requirements, and the Nusuk verification process. Our comprehensive FAQs guide you step-by-step to ensure a smooth and fulfilling pilgrimage experience.
            </p>
            <div className="flex flex-justify">
              <Link to="/projects">
              <button className="text-sm px-[3] bg-gradient-to-b from-emerald-600 to-black border-white border-2 text-white hover:bg-none hover:bg-none rounded-full hover:text-green-400 hover:border-green-400   px-8 py-3 text-lg transition-all duration-300 ease-in-out">
                Read More 
                
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;