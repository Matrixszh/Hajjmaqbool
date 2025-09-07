const AboutSection = () => {
  const projects = [
    {
      id: 1,
      title: "Taher Heights",
      subtitle: "Mixed-Use Development",
      description: "A landmark mixed-use development that seamlessly blends residential comfort with commercial excellence. This project showcases modern architectural innovation while maintaining environmental sustainability. Completed in 2023, it stands as a testament to our commitment to quality construction and urban planning.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Vizion Harmony",
      subtitle: "Luxury Residential Complex",
      description: "An elegant residential complex designed for modern families seeking luxury and comfort. Features state-of-the-art amenities and premium finishes throughout. This project demonstrates our expertise in creating living spaces that balance aesthetics with functionality, completed with meticulous attention to detail.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Falcon Apartments",
      subtitle: "Premium Housing Solution",
      description: "Premium apartment complex offering unparalleled living experiences with modern amenities and sustainable design principles integrated throughout the development. Our team delivered this project with focus on energy efficiency and contemporary architectural design that meets international standards.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Harithavanam",
      subtitle: "Urban Development Project",
      description: "A visionary urban development project that transforms the city skyline. This ambitious project represents the future of urban living with smart city features and innovative infrastructure solutions. Our engineering excellence created a sustainable community hub for modern lifestyles.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Golden Gateway",
      subtitle: "Commercial Complex",
      description: "A prestigious commercial complex designed to accommodate modern business needs with cutting-edge facilities and strategic location advantages. This project showcases our capability in delivering large-scale commercial developments with superior build quality and architectural excellence.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Emerald Gardens",
      subtitle: "Garden City Residences",
      description: "Beautiful garden city residences that blend nature with modern living. This eco-friendly development features landscaped gardens, sustainable building materials, and energy-efficient systems. Our commitment to environmental responsibility is evident in every aspect of this green living project.",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c5ca2b6b?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Crystal Towers",
      subtitle: "High-Rise Residential",
      description: "Soaring high-rise residential towers offering panoramic city views and luxury amenities. This vertical living solution maximizes space efficiency while providing residents with premium facilities including sky lounges, fitness centers, and rooftop gardens for an elevated lifestyle experience.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Sunrise Villa Park",
      subtitle: "Independent Villa Community",
      description: "Exclusive villa community designed for discerning homeowners who value privacy and luxury. Each villa is crafted with attention to architectural detail, premium materials, and custom features. This gated community offers resort-style amenities and beautifully landscaped common areas.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Metro Junction Mall",
      subtitle: "Retail & Entertainment Hub",
      description: "A comprehensive retail and entertainment destination featuring modern shopping facilities, dining options, and entertainment venues. This project demonstrates our expertise in creating commercial spaces that serve as community gathering points while driving economic growth in the region.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Heritage Courtyard",
      subtitle: "Cultural Heritage Project",
      description: "A thoughtfully designed cultural heritage project that preserves historical significance while incorporating modern functionality. This development showcases our ability to work with heritage constraints while delivering contemporary facilities that respect and enhance the cultural landscape.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop"
    },
    {
      id: 11,
      title: "Tech Park Central",
      subtitle: "IT Campus Development",
      description: "State-of-the-art IT campus designed to accommodate modern technology companies with flexible workspace solutions, advanced infrastructure, and sustainable building practices. This project demonstrates our expertise in creating environments that foster innovation and productivity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    },
    {
      id: 12,
      title: "Oceanview Residences",
      subtitle: "Waterfront Living",
      description: "Luxurious waterfront residences offering spectacular ocean views and premium coastal living amenities. This project showcases our ability to work with challenging coastal environments while delivering homes that maximize natural beauty and provide superior comfort for residents.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    },
    {
      id: 13,
      title: "Innovation Hub",
      subtitle: "Mixed-Use Innovation Center",
      description: "A forward-thinking innovation center combining office spaces, research facilities, and collaborative areas designed to foster creativity and technological advancement. This project represents our commitment to creating environments that support the future of work and innovation.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Projects Section */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-16 items-start ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Image */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`pt-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-4xl font-medium text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xl italic text-gray-600 mb-8">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
