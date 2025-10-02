import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top paragraph section */}
        <div className="mb-16">
<p className="text-3xl text-gray-800 leading-relaxed text-justify max-w-5xl">
  The Nusuk Hajj Assistance Committee is a
  <span className="text-gray-500"> dedicated non-profit organization</span>
  {" "}committed to supporting and guiding pilgrims throughout their Hajj journey within the Nusuk system.
  <span className="italic">
    {" "}Our mission is to provide clear, accurate, and timely assistance{" "}
  </span>
  to those embarking on this sacred pilgrimage,
  <span className="font-medium text-gray-800">
    {" "}ensuring a smooth and spiritually fulfilling experience.
  </span>
</p>


        </div>

        {/* Main content section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image */}
          

          {/* Right side - Content */}
          <div className="pt-8">
            <h2 className="text-4xl font-medium text-gray-800 mb-2">
             About Us
            </h2>
            <p className="text-xl italic text-green-400 mb-8">
              Nusuk Hajj Assistance Committee
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
The Nusuk Hajj Assistance team comprises some of the most experienced professionals in the Hajj sector—individuals who have deep knowledge of the Nusuk platform, the Ministry of Hajj and Umrah, and the various authorized Saudi service providers involved in the Hajj process. With this strong network and first-hand expertise, we are uniquely positioned to address the challenges that pilgrims often encounter—from application issues and travel logistics to on-ground support in the Kingdom.
We understand the complexities of the Nusuk system and the concerns that many pilgrims, especially those traveling from abroad, may have. Whether it's understanding eligibility, booking services, navigating the platform, or resolving unforeseen problems, we’re here to help at every step.
Headquartered in Jeddah, Saudi Arabia, with a satellite office located in Dearborn, Michigan (USA), we serve as a reliable bridge between international pilgrims and the Saudi Hajj authorities. Our local presence in both regions allows us to provide personalized assistance before, during, and after the pilgrimage.
At the Nusuk Hajj Assistance Committee, we are more than just an advisory body—we are a committed partner in your Hajj journey. Our goal is to ensure that every pilgrim receives the support, clarity, and peace of mind needed to focus on the spiritual essence of Hajj.
            </p>
             
            

            
          </div>
          <div>
            <img
              src="/about.jpg"
              alt="Modern luxury house exterior"
              className="w-full h-[110vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
