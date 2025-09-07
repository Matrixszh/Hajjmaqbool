import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  


  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Architectural Image */}
          <div className="relative">
            <img 
              src="/hero-image.jpg"
              alt="Architectural ceiling structure"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="bg-gray-900 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-medium text-white mb-4">
              Can't get <span className="italic font-light">enough</span> and want the full tour?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              View all of our past work here
            </p>
            <div className="flex flex-justify">
              <a href="/contact">
              <button className="text-sm px-[3] bg-gradient-to-r from-[#081E43] to-black border-black border-2 text-white hover:bg-none hover:bg-none rounded-full hover:text-white hover:border-white   px-8 py-3 text-lg transition-all duration-300 ease-in-out">
                Get In Touch 
                
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
