import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top paragraph section */}
        <div className="mb-16">
          <p className="text-3xl text-gray-800 leading-relaxed text-justify max-w-5xl">
            Finding a home or building one isn't just about keys and contracts—it's{" "}
            <span className="text-gray-500">about setting the scene for all those</span>{" "}
            <span className="italic">unforgettable moments</span>{" "}
            <span className="text-gray-500">with family and friends. Let's get you the perfect place to</span>{" "}
            <span className="font-medium text-gray-800">make memories happen.</span>
          </p>
        </div>

        {/* Main content section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image */}
          <div>
            <img
              src="/Wrw.jpg"
              alt="Modern luxury house exterior"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="pt-8">
            <h2 className="text-4xl font-medium text-gray-800 mb-2">
              Who We Are
            </h2>
            <p className="text-xl italic text-gray-600 mb-8">
              Amana construction (Pvt) Ltd.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              Established in 2015, is a leading real estate and contracting company known for delivering high-quality, technology-driven solutions. We prioritize integrity, ethics, and innovation to achieve industry excellence. Our services cover civil, industrial (oil & gas), and electro-mechanical construction, including LSTK and LSPB projects.
            </p>
             
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#081E43] mb-2">20+</div>
                <p className="text-gray-600 text-sm uppercase tracking-wide">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#081E43] mb-2">5000+</div>
                <p className="text-gray-600 text-sm uppercase tracking-wide">Happy Families</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
