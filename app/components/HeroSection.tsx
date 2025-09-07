import { Button } from "@/app/components/ui/button";
import heroImage from "@/public/amanahome.jpg";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-luxury-darker/60"></div>
      </div>

      {/* Content */}
      <div className="lg:px-6  mx-6 text-center relative z-10">
        <h1 className="px-10 text-hero font-bold text-white mb-6 leading-tight">
          WHERE <span className="italic font-light">(ideas)</span> BECOME
          <br />
          STRUCTURE
        </h1>
        
        <p className="px-10 text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed lg:text-xl">
          Finding a home or building one isn't just about keys and contracts—it's about starting the doors 
          on a life that's specifically sustainable and make memories happen.
        </p>

        <div className="flex px-[15vh] lg:px-12 py-3 flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact">
<Button 
  size="lg"
  variant="outline"
  className="bg-white/30 border-white text-white hover:bg-white hover:text-luxury-darker  text-lg rounded-full"
>
  Contact Us
</Button>
</Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
