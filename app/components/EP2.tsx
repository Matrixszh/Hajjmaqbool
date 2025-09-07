import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Taher Heights",
      category: "Residential & Commercial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1600585154208-c599f5a9b4b8?w=600&h=400&fit=crop",
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

  const handleProjectClick = (projectId: number) => {
    if (window.innerWidth <= 768) { // Mobile tap interaction
      setExpandedProject(expandedProject === projectId ? null : projectId);
    }
  };

  const handleMouseEnter = (projectId: number) => {
    if (window.innerWidth > 768) { // Desktop hover interaction
      setExpandedProject(projectId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) { // Desktop hover interaction
      setExpandedProject(null);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-black mb-6">
            Where We<span className="italic font-light text-blue-400"> Excel</span>
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed">
            We deliver quality construction <span className="italic text-blue-400"> solutions</span> across residential, commercial, and infrastructure <span className="italic text-blue-400">projects</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
             
              

              <motion.div
                className="relative cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  scaleX: expandedProject && expandedProject !== project.id ? 0.7 : 1,
                  filter: expandedProject && expandedProject !== project.id ? "blur(4px) brightness(0.4)" : "blur(0px) brightness(1)"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-white">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: expandedProject === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />


                  {/* Mobile tap indicator */}
                  <div className="absolute top-4 right-4 md:hidden">
                    <motion.div
                      animate={{
                        scale: expandedProject === project.id ? 0 : 1,
                        opacity: expandedProject === project.id ? 0 : 0.7
                      }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                    >
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                        <path d="M7 14l5-5 5 5z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Text Content Below Image */}
                <div className="p-6 bg-white min-h-[200px] flex flex-col">
                  {/* Default Content */}
                  <motion.div
                    animate={{
                      opacity: expandedProject === project.id ? 0 : 1,
                      y: expandedProject === project.id ? -20 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-black flex-1"
                      >
                        <motion.h3
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-xl font-bold mb-2"
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="text-blue-400 text-sm mb-3"
                        >
                          {project.category}
                        </motion.p>

                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="text-gray-800 text-xs leading-relaxed mb-4"
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="grid grid-cols-1 gap-2 text-xs"
                        >
                          <div className="flex justify-between">
                            <span className="text-blue-400 font-semibold">Area:</span>
                            <span className="text-black">{project.details.area}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-400 font-semibold">Location:</span>
                            <span className="text-black">{project.details.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-400 font-semibold">Completed:</span>
                            <span className="text-black">{project.details.completion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-400 font-semibold">Client:</span>
                            <span className="text-black">{project.details.client}</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
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
          


        </motion.div>
      </div>
    </section>
  );
};

export default ExpandableProjectsSection;
