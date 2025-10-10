import { Button } from "@/components/ui/button";
import heroImage from "/hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative  h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-luxury-darker/80"></div>
      </div>

      {/* Content */}
      <div className="lg:px-6  mx-6 text-center relative z-10">
        <h1 className="px-10 text-hero font-bold text-white mb-6 leading-tight">
          NUSUK HAJJ ASSISTANCE
          <br />
          COUNSEL
        </h1>
        
        <p className="px-10 text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed lg:text-xl">
          The Prophet ﷺ said, "One who comes to this House for Hajj and avoids all lewdness and sins, he returns as he was on the day his mother gave birth to him." (Bukhari & Muslim)
        </p>

        <div className="flex px-[15vh] lg:px-12 py-3 flex-col sm:flex-row gap-4 justify-center">
<Link to="/projects">
<Button 
  size="lg"
  variant="outline"
  className="bg-white/30 border-white text-white hover:bg-white hover:text-luxury-darker  text-lg rounded-xl"
>
  Read Before Planning For Hajj
</Button>
</Link>
    
        </div>
        <div className="mt-2 px-4">
          
          <div className="flex justify-center items-center gap-12">
            <img
              src="/NusukHajj.svg"
              alt="Collaborator 1 Logo"
              className="h-8 lg:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/hajjlogo.png"
              alt="Collaborator 2 Logo"
              className="h-8 lg:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          </div>
    
      </div>
    

    </section>
  );
};

export default HeroSection;
