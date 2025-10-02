import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const projects = [
    {
      id: 1,
      title: "What challenges did pilgrims face when using the Nusuk platform directly?",
      subtitle: "The Shift to Nusuk",
      description: "Traditionally, local travel agents managed Hajj trips. With the launch of the Nusuk platform by the Saudi government, Saudi-based companies took direct control, intending to simplify the process. However, technical glitches, limited packages, and payment issues caused frustration.",
      image: "/hajj1.jpg"
    },
    {
      id: 2,
      title: "Why did Saudi companies reintroduce travel agents into the Hajj process?",
      subtitle: "The Return of Travel Agents",
      description: "Saudi companies struggled with logistics and eventually brought back experienced travel agents to guide and support pilgrims. Now, agents are paid by Saudi companies rather than directly by pilgrims.",
      image: "/hajj3.jpg"
    },
    {
      id: 3,
      title: "What risks do pilgrims face if they book their Hajj packages directly through Nusuk?",
      subtitle: "The Pitfalls of Booking Directly",
      description: "Pilgrims booking directly through Nusuk are assigned to Saudi companies, but agents don’t get paid to look after them. This can leave direct-booking pilgrims without proper support or guidance.",
      image: "/hajj253.jpg"
    },
    {
      id: 4,
      title: "What are the key benefits of booking Hajj through a travel agent instead of directly through Nusuk?",
      subtitle: "The Case for Agent-Led Bookings",
      description: "Booking through an agent ensures dedicated guidance, personalized service, and accountability, as agents are motivated and compensated to look after pilgrims. This makes the journey smoother and less stressful.",
      image: "/hajj221.jpg"
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
                    className="w-full h-[50vh] rounded-lg shadow-lg"
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
