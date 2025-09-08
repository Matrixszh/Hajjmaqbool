import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white mb-6">
            Our <span className="italic font-light text-green-400">Vision</span> & <span className="italic font-light text-green-400">Mission</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Guided by our vision for the future and driven by our mission to excel, we build more than structures – we create lasting legacies.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="space-y-16">
          {/* Vision Card */}
          <div className="bg-gray-700 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-medium text-white mb-4">Our Vision</h3>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-200 leading-relaxed text-center text-xl mb-6">
                "To be the most trusted and innovative construction company in the region, transforming skylines and creating sustainable communities that enhance quality of life for generations to come."
              </p>
              
              <p className="text-gray-300 leading-relaxed text-center text-lg">
                We envision a future where Amana Construction stands as a beacon of excellence in the construction industry, 
                recognized not only for our architectural marvels but also for our unwavering commitment to sustainability, 
                innovation, and community development. Our vision extends beyond building structures – we aim to build dreams, 
                foster communities, and create spaces where people thrive. We see ourselves as pioneers in green construction 
                practices, setting new benchmarks for environmental responsibility while delivering projects that stand as 
                testaments to our craftsmanship and attention to detail. Through strategic partnerships, cutting-edge technology, 
                and a team of passionate professionals, we strive to expand our footprint across regional markets, leaving a 
                positive impact wherever we build.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-700 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-medium text-white mb-4">Our Mission</h3>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-200 leading-relaxed text-center text-xl mb-6">
                "To deliver exceptional construction and real estate solutions that exceed client expectations through innovative 
                design, superior craftsmanship, and sustainable building practices, while fostering long-term relationships built 
                on trust, integrity, and mutual success."
              </p>
              
              <p className="text-gray-300 leading-relaxed text-center text-lg">
                Our mission drives every decision we make and every project we undertake. We are committed to transforming our 
                clients' visions into reality by combining traditional construction expertise with modern innovation. We believe 
                that every brick we lay tells a story of dedication, precision, and care. Our approach goes beyond mere construction – 
                we are partners in our clients' journey, providing comprehensive solutions from initial concept to final handover. 
                We prioritize safety, quality, and timely delivery while maintaining cost-effectiveness without compromising on 
                excellence. Our mission encompasses not just building structures, but building relationships, building trust, and 
                building a sustainable future. We are dedicated to continuous improvement, embracing new technologies, and nurturing 
                talent to ensure we remain at the forefront of the construction industry. Through ethical business practices, 
                environmental stewardship, and community engagement, we aim to create value for all stakeholders while contributing 
                positively to society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
