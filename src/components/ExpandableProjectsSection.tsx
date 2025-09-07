import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: {
    area: string;
    location: string;
    completion: string;
    client: string;
  };
}

const ExpandableProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Taher Heights",
      category: "Residential & Commercial",
      image: "/Th.jpg",
      description: "A landmark mixed-use development that seamlessly blends residential comfort with commercial excellence. This project showcases modern architectural innovation while maintaining environmental sustainability.",
      details: {
        area: "450,000 sq ft",
        location: "Prime City Center",
        completion: "2023",
        client: "Taher Development Group"
      }
    },
    {
      id: 2,
      title: "Vizion Harmony",
      category: "Residential",
      image: "/interior-1.jpg",
      description: "An elegant residential complex designed for modern families seeking luxury and comfort. Features state-of-the-art amenities and premium finishes throughout.",
      details: {
        area: "280,000 sq ft",
        location: "Residential District",
        completion: "2024",
        client: "Harmony Living"
      }
    },
    {
      id: 3,
      title: "Falcon Apartments",
      category: "Residential Complex",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop",
      description: "Premium apartment complex offering unparalleled living experiences with modern amenities and sustainable design principles integrated throughout the development.",
      details: {
        area: "320,000 sq ft",
        location: "Suburban Heights",
        completion: "2024",
        client: "Falcon Properties"
      }
    },
    {
      id: 4,
      title: "Harithavanam",
      category: "Urban Development",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      description: "A visionary urban development project that transforms the city skyline. This ambitious project represents the future of urban living with smart city features.",
      details: {
        area: "1,200,000 sq ft",
        location: "Metropolitan Area",
        completion: "2025",
        client: "City Development Authority"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white mb-6">
            View Our Most Successful <span className="italic font-light text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I have worked on multiple projects throughout my <span className="italic text-blue-400">career</span> and 
            have achieved clients that are always satisfied. These are some of my most decorated <span className="italic text-blue-400">projects</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Basic Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-medium">{project.category}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-gray-700">
                    <span className="text-blue-400 font-semibold">Area:</span>
                    <span className="text-white">{project.details.area}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-700">
                    <span className="text-blue-400 font-semibold">Location:</span>
                    <span className="text-white">{project.details.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-700">
                    <span className="text-blue-400 font-semibold">Completed:</span>
                    <span className="text-white">{project.details.completion}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-blue-400 font-semibold">Client:</span>
                    <span className="text-white">{project.details.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Add your CTA content here if needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpandableProjectsSection;
