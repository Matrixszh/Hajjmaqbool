import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const projects = [
    {
      id: 1,
      title: "Can a travel agent help with your Hajj application?",
      subtitle: "Travel Agents And Their Role",
      description: "Here’s the truth: no travel agent can submit your application, create your Nusuk account, accept payment on your behalf, or issue or facilitate your Hajj visa. However, they can still be very helpful after your application is accepted. Some licensed travel agencies organize guided group packages, offer in-person prep sessions or webinars, help with packing lists, travel logistics, and on-the-ground coordination, and assist with language translation, emergency support, and group movement planning during the days of Hajj. These groups can greatly improve your comfort and clarity—especially for first-time pilgrims—but your entire application and payment must still go through Nusuk directly. Start preparing your passport, passport-sized photo, and travel details well in advance, ensuring your passport is valid at least six months beyond the expected Hajj date. Keep an eye out for package announcements and registration openings as early as March–April 2026. In summary, Hajj 2026 begins with you—your account, your application, and your intention. Use travel groups for support, not as a substitute for your own responsibility. May Allah grant you an accepted Hajj and ease throughout the process.",
      image: "/hajj1.jpg"
    },
    {
      id: 2,
      title: "Do Hajj packages cost more through a travel agent?",
      subtitle: "Hajj Packages Cost",
      description: "No — the price is the same whether you book your package directly through the Nusuk Hajj Portal or through a registered travel agent affiliated with a Nusuk Hajj Operator. All packages on the Nusuk platform are standardized and published by official Saudi-based operators, meaning prices are set by those operators and not inflated by travel agents. While the cost doesn’t change, booking through a travel agent can offer added benefits. Verified agents typically receive a commission from the Saudi operator for each package sold, giving them a strong incentive to support you since your satisfaction and successful Hajj reflect on their reputation. In return, good agents often provide personalized guidance before, during, and after the application process, organized group support through WhatsApp or Telegram updates, on-the-ground coordination with local guides, group leaders, and transportation help, as well as faster access to information when the Nusuk system experiences delays or confusion. The bottom line: you’ll pay the same price but may receive more personalized service and group support. If you’re confident navigating the Nusuk system yourself, direct booking is perfectly fine — but if you prefer experienced guidance and comfort during your journey, working with a trusted travel agent can enhance your overall Hajj experience at no additional cost.",
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
                    className="pt-[30vh] w-full h-[120vh] rounded-lg shadow-lg"
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

                  <p className="text-xl text-gray-700 leading-relaxed mb-8 text-justify">
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
