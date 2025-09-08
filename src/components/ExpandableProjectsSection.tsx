// src/components/ExpandableProjectsSection.tsx
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ShieldCheck,
  Wallet,
  Package,
  Ticket,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  // Tailwind color class (e.g., "text-emerald-400")
  iconClass?: string;
  // Optional explicit props
  iconSize?: number;       // default 48
  iconStroke?: number;     // default 1.75
  iconColor?: string;      // overrides class if provided (e.g., "#22c55e")
}

const ExpandableProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Registration Opens",
      category: "July 30 2025",
      description:
        "Registration Opened July 30 2025, please see Comprehensive Registration Tutorial",
      icon: CalendarDays,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 2,
      title: "Information Verification",
      category: "After registration",
      description: "Begins sometime after registration",
      icon: ShieldCheck,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 3,
      title: "E-Wallet Payment",
      category: "After Verification",
      description: "E-Wallet Payment Window Opens once verification is complete",
      icon: Wallet,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 4,
      title: "Package Release",
      category: "Feb 9",
      description: "Package Releases TBD, opened on Feb 9 FOR 2025",
      icon: Package,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 5,
      title: "Tickets",
      category: "After Payment Confirmation",
      description:
        "Hajj Visa and Airline Tickets Issued: After payment confirmation",
      icon: Ticket,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-emerald-950 to-black"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white mb-6">
            View Our Most Successful{" "}
            <span className="italic font-light text-green-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I have worked on multiple projects throughout my{" "}
            <span className="italic text-green-400">career</span> and have
            achieved clients that are always satisfied. These are some of my
            most decorated{" "}
            <span className="italic text-green-400">projects</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6 max-w-10xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const size = project.iconSize ?? 48;
            const stroke = project.iconStroke ?? 1.75;

            return (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-black via-emerald-800/20 to-transparent">
                    <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10 backdrop-blur">
                      <Icon
                        size={size}
                        strokeWidth={stroke}
                        className={project.iconClass ?? "text-green-400"}
                        color={project.iconColor}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-green-400 text-sm font-medium">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (optional) */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default ExpandableProjectsSection;
