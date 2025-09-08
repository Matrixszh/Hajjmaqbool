import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top paragraph section */}
        <div className="mb-16">
          <p className="text-3xl text-gray-800 leading-relaxed text-justify max-w-5xl">
            If you are a U.S. passport holder looking to perform Hajj in 2026{" "}
            <span className="text-gray-500">it’s essential to understand that the</span>{" "}
            <span className="italic">only official and secure method</span>{" "}
            <span className="text-gray-500"> to apply is through the </span>{" "}
            <span className="font-medium text-gray-800">Nusuk Hajj Portal — not the mobile app.</span>
          </p>
        </div>

        {/* Main content section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image */}
          

          {/* Right side - Content */}
          <div className="pt-8">
            <h2 className="text-4xl font-medium text-gray-800 mb-2">
              Why Chose Us
            </h2>
            <p className="text-xl italic text-green-400 mb-8">
              Hajjaatul Islam
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              From 2019s pre‑COVID period with roughly 20,000 U.S. pilgrims traveling via traditional agencies, through the 2020–2021 suspension for U.S. pilgrims, to 2022s Motawif rollout (~3,500 U.S. pilgrims, no U.S. firms on the ground), 2023s Nusuk 1.0 (40,000+ U.S. applicants, ~4,000 completed Hajj, simultaneous payment+package selection under Saudi logistics with one U.S. agency coordination), 2024s Nusuk 2.0 (e‑wallet required before package selection, smoother yet still glitchy, ~8,000 U.S. pilgrims via multiple U.S. agencies with Saudi operators), and 2025s Nusuk 3.0 (notably improved stability, clearer timelines, ~5,000 U.S. pilgrims, and a separate high‑end Kidana Hajj tier via Dar El Salam adding ~1,200 Western quotas without drawing from countries main quotas), the trend shows a rapid transition from agency‑centric models to a centralized portal with iterative system enhancements but continued capacity constraints and evolving premium options.
            </p>
             
            

            
          </div>
          <div>
            <img
              src="/Wrw.jpg"
              alt="Modern luxury house exterior"
              className="w-full h-[83vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
