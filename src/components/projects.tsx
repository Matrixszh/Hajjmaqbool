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
      title: "What are the required vaccinations?",
      subtitle: "Required Vaccinations",
      description: "Certain vaccination requirements are in place for those planning to participate in Hajj or be within the Hajj areas, including adults and children aged one year or older. It is compulsory to possess a valid vaccination certificate showing that you have received the quadruple meningitis vaccine (ACYW) if you wish to attend Hajj or enter Hajj areas. This vaccine should have been administered at least ten days before your arrival in the Hajj areas. Acceptable vaccines include the Quadruple (ACYW) polysaccharide vaccine, which remains valid for up to three years after vaccination, and the Quadruple conjugate (ACYW) vaccine, which remains valid for up to five years after vaccination.",
      image: "/hajj253.jpg"
    },
    {
      id: 4,
      title: "How Long Does the Nusuk Verification Process Take?",
      subtitle: "The Nusuk Verification Process",
      description: "Once you submit your Hajj application through the Nusuk Hajj Portal, your account enters the “Under Verification” stage — a key step that can take anywhere from a few days to several weeks early in the registration period due to high volume and document checks, but often speeds up to 24–48 hours later on. U.S. Green Card holders or non-U.S. citizens may experience longer wait times because of additional screening. To avoid delays, ensure your passport, residency documents, and photo are valid, clear, and correctly uploaded, and that your personal details exactly match your identification. If your status remains under verification for some time, don’t worry — it means your application is still being reviewed. Check your Nusuk account regularly, as updates may appear without notifications, and stay informed through official channels, authorized travel agents, or trusted community groups. Once verified, you may gain instant access to book your package, so keep your preferred option and payment ready. May Allah make your verification smooth and accept your intention for Hajj.",
      image: "/hajj221.jpg"
    },
    
    {
      id: 5,
      title: "Do Travel Agents Still Play a Role in Hajj?",
      subtitle: "Travel Agents Role in Hajj",
      description: "Yes — but the role of travel agents in the Hajj process has changed significantly. With the introduction of the Nusuk Hajj Portal, traditional agent duties like handling applications, collecting payments, and issuing visas have been phased out. Today, U.S.-based travel agents must be affiliated with an approved Nusuk Hajj Operator in Saudi Arabia and typically serve as partners or subcontractors. While they can’t submit your application — every pilgrim must register personally through Nusuk — they can guide you through the process, help compare packages, explain inclusions like hotel locations and transportation, and assist with account setup or technical issues. Many also organize group orientations, manage communication channels, and provide on-ground support during the Days of Hajj. When choosing an agent, verify their affiliated **Nusuk Operator and clarify what support they’ll provide. Trusted U.S. partners include Manara Travel, Dar El Salaam Travel, and Adam Travel, Remember, agents earn commissions from Saudi operators, so pricing may vary. Ultimately, you’re responsible for completing your registration, uploading documents, and making payments on time. Travel agents can guide and support — but not replace — your personal effort. May Allah ease your journey and accept your intention for Hajj.",
      image: "/hajj3.jpg"
    },
    
    {
      id: 6,
      title: "What is the history of NUSUK ?",
      subtitle: "History of NUSUK",
      description: "From 2019 to 2026, the U.S. Hajj experience shifted from traditional agencies to digital platforms. In 2019, about 20,000 U.S. pilgrims traveled through agencies like Manara, Dar El Salaam, and Adam Travel. During 2020–2021, no non-Saudi pilgrims performed Hajj due to COVID-19. In 2022, Hajj moved online via the Motawif platform, with around 3,500 U.S. pilgrims participating independently, while only Manara Travel and Caravan 72** led group Hajj trips. The first year of Nusuk (2023 saw over 40,000 U.S. applications but only 4,000 completed Hajj — and Manara Travel was the only agency to organize a group. In 2024 more U.S. agencies joined through partnerships with Saudi operators, and about 8,000 Americans performed Hajj. By 2025 visa quotas for the U.S. were reduced, and around 5,000 pilgrims completed Hajj with stronger agency involvement. For 2026 the Saudi Ministry has confirmed the same 5,000-visa allotment for U.S. pilgrims.",
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
