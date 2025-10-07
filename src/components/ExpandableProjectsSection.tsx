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
      title: "Arrival in Saudi Arabia",
      category: "May 17 – May 21, 2026",
      description:
        "•	Most standard packages will have arrivals during this window.Some budget packages may arrive earlier to accommodate longer stays or cost-saving logistics.Premium or express packages may arrive slightly later, especially those designed for shorter 10-day experiences",
      icon: CalendarDays,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 2,
      title: "Core Days of Hajj (Manasik)",
      category: "May 25 – May 29/30, 2026",
      description: "These are the sacred days of the pilgrimage, including:8th Dhul Hijjah (May 25) – Arrival at Mina9th Dhul Hijjah (May 26) – Day of Arafah (most important day of Hajj)10th Dhul Hijjah (May 27) – Eid Al-Adha, Tawaf, and Rami (stoning)11th–13th Dhul Hijjah (May 28–30) – Continued stoning of the Jamarat and other rites",
      icon: ShieldCheck,
      iconClass: "text-green-400",
      iconStroke: 1.75,
    },
    {
      id: 3,
      title: "Departure / Return Home",
      category: "Earliest Departures Begin: May 30, 2026",
      description: "Most pilgrims will begin returning home after completing Tawaf al-Wada (Farewell Tawaf), which typically occurs between May 30 – June 2, depending on their package and flight availability.Some longer-duration packages may return even later if they include extended stays in Medinah or other cities.",
      icon: Wallet,
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
           Estimated Timeline for {" "}
            <span className="italic font-light text-green-400">Hajj 2026</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
             Only use the{" "}
            <span className="italic text-green-400">official Nusuk portal</span> for registration and payment. Any other route risks your Hajj and your{" "}
            <span className="italic text-green-400"> personal safety</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-10xl mx-auto">
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
