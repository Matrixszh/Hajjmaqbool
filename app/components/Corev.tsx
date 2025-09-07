import React from 'react';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description: "We believe in doing the right thing, even when no one is watching. Our commitment to honesty, transparency, and ethical business practices forms the foundation of every relationship we build. We maintain open communication with clients, partners, and stakeholders, ensuring that trust is never compromised.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Excellence",
      description: "We set the highest standards for ourselves and strive to exceed them in every project. Excellence is not just about the final product – it's embedded in our processes, our attention to detail, our craftsmanship, and our relentless pursuit of perfection. We continuously invest in training, technology, and innovation to deliver superior results.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Innovation",
      description: "We embrace change and continuously seek new ways to improve our services and deliver better value to our clients. Innovation drives us to explore cutting-edge construction technologies, sustainable building methods, and creative design solutions that push the boundaries of what's possible in construction and real estate development.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Sustainability",
      description: "We recognize our responsibility to the environment and future generations. Our commitment to sustainability goes beyond compliance – we actively seek eco-friendly materials, energy-efficient designs, and construction practices that minimize environmental impact while maximizing long-term value and livability for our clients.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9a9 9 0 009-9"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Collaboration",
      description: "We believe that the best results come from working together. We foster a collaborative environment where ideas are shared freely, expertise is valued, and every team member contributes to our collective success. We extend this collaborative spirit to our relationships with clients, subcontractors, and partners.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen carefully to their needs, understand their vision, and work tirelessly to exceed their expectations. Customer satisfaction is not just our goal – it's our commitment. We measure our success by the satisfaction and loyalty of those we serve.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-800 mb-6">
            Our Core <span className="italic font-light text-blue-400">Values</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            These fundamental principles guide our actions, shape our culture, and define who we are as an organization. 
            They are the cornerstone of our success and the foundation of our relationships.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
