import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-luxury-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-luxury-darker mb-4">
            Contact Us For To Start Your Next
          </h2>
          <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
            Every structure we bring tells a story — of trust, vision, and a future built to last.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-luxury">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-luxury-darker mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-luxury-gray/30" />
                  <Input placeholder="Last Name" className="border-luxury-gray/30" />
                </div>
                <Input placeholder="Email Address" type="email" className="border-luxury-gray/30" />
                <Input placeholder="Phone Number" type="tel" className="border-luxury-gray/30" />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="border-luxury-gray/30"
                />
                <Button 
                  size="lg" 
                  className="w-full bg-luxury-gold text-luxury-darker hover:bg-luxury-gold-light"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-luxury-darker mb-6">Visit Our Office</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-luxury-darker mb-2">Address</h4>
                  <p className="text-luxury-gray">
                    123 Architecture Boulevard<br />
                    Design District, NY 10001
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-darker mb-2">Phone</h4>
                  <p className="text-luxury-gray">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-darker mb-2">Email</h4>
                  <p className="text-luxury-gray">hello@structure.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-darker mb-2">Office Hours</h4>
                  <p className="text-luxury-gray">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-luxury-darker text-white">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">Ready to Start?</h4>
                <p className="text-white/80 mb-4">
                  Schedule a consultation with our expert team to discuss your vision.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-darker"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
