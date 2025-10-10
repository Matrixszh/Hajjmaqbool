import React from 'react';
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 

} from 'lucide-react';
import { Link } from "react-router-dom";
interface Policy {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MyPolicies: React.FC = () => {
  const policies: Policy[] = [
  {
    id: 1,
    name: "Travel Agent Application & Payment Policy",
    description: "Every pilgrim must register and pay directly through the Nusuk Hajj Portal. Travel agents cannot submit applications or handle payments on your behalf.",
    icon: Shield
  },
  {
    id: 2,
    name: "Travel Agent Support Services",
    description: "Travel agents can assist with package guidance, organize group support, help with account setup, travel logistics, language translation, and on-ground coordination during Hajj.",
    icon: Users
  },
  {
    id: 3,
    name: "Hajj Vaccination Requirement",
    description: "A valid Quadruple meningitis (ACYW) vaccine certificate is mandatory for adults and children over one year old, administered at least 10 days before arriving in Hajj areas.",
    icon: Award
  },
  {
    id: 4,
    name: "Nusuk Verification Timeline",
    description: "Verification can take a few days to several weeks early in registration, but often reduces to 24–48 hours later. Additional screening may apply to non-U.S. citizens or Green Card holders.",
    icon: Clock
  },
  {
    id: 5,
    name: "Hajj Package Pricing Policy",
    description: "Prices are set by Saudi operators and remain the same whether booked directly or through a trusted travel agent, who may provide added support without increasing the cost.",
    icon: CheckCircle
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-800 mb-4">
            Important <span className="italic font-light text-green-400">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are committed to these core principles that guide every aspect of our work and ensure exceptional results for our clients.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {policies.map((policy) => {
            const IconComponent = policy.icon;
            return (
              <div
                key={policy.id}
                className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-400 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                {/* Policy Name */}
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                  {policy.name}
                </h3>

                {/* Policy Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="pt-10 flex flex-justify justify-center">
                      <Link to="/projects">
                      <button className="text-sm px-[3] bg-gradient-to-b from-emerald-600 to-black border-white border-2 text-white hover:bg-none hover:bg-none rounded-full hover:text-green-400 hover:border-green-400   px-8 py-3 text-lg transition-all duration-300 ease-in-out">
                        Read More 
                        
                      </button>
                      </Link>
                    </div>
      </div>
    </section>
  );
};

export default MyPolicies;
