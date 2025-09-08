import React from 'react';
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle 
} from 'lucide-react';

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
      name: "Quality Assurance",
      description: "We ensure the highest standards of quality in every project through rigorous testing, premium materials, and expert craftsmanship that stands the test of time.",
      icon: Shield
    },
    {
      id: 2,
      name: "Timely Delivery",
      description: "We commit to delivering all projects on schedule through efficient project management, proper planning, and dedicated resource allocation to meet deadlines.",
      icon: Clock
    },
    {
      id: 3,
      name: "Customer Satisfaction",
      description: "Our clients' satisfaction is our top priority. We maintain open communication, address concerns promptly, and ensure complete satisfaction with every project.",
      icon: Users
    },
    {
      id: 4,
      name: "Professional Excellence",
      description: "We maintain the highest level of professionalism through continuous training, industry best practices, and adherence to international construction standards.",
      icon: Award
    },
    {
      id: 5,
      name: "Transparent Process",
      description: "We believe in complete transparency throughout the construction process, providing regular updates, clear documentation, and honest communication at every stage.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-800 mb-4">
            Our <span className="italic font-light text-green-400">Policies</span>
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
      </div>
    </section>
  );
};

export default MyPolicies;
