import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl  font-medium mb-6">
          Contact Us For To Start Your <em className="italic text-text-4xl font-light text-green-400 mb-6">Dream</em>
        </h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
           If you hold a second passport (like Pakistani), you may also explore the Pakistani Route for Hajj. Working with a reputable travel agent who specializes in dual nationals can ease the process.

        </p>
        <Link to="/contact">
        <Button 
  size="lg"
  variant="outline"
  className="bg-gradient-to-r from-[#081E43] to-black border-white text-white hover:bg-none hover:bg-white/30 rounded-full hover:text-white px-8 py-3 text-lg transition-all duration-300 ease-in-out"
>
  Contact Us
</Button>
</Link>

      </div>
    </section>
  );
};

export default ContactCTA;
