import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Waves from "@/components/GradBlur";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [passportFront, setPassportFront] = useState<File | null>(null);
  const [passportBack, setPassportBack] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'back') => {
    if (e.target.files && e.target.files[0]) {
      type === 'front'
        ? setPassportFront(e.target.files[0])
        : setPassportBack(e.target.files[0]);
    }
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (passportFront) formDataToSend.append('passportFront', passportFront);
    if (passportBack) formDataToSend.append('passportBack', passportBack);

    // Ensure this hits your Vercel deployment
    const res = await fetch(`${window.location.origin}/api/send-email`, {
  method: "POST",
  body: formDataToSend,
});

    if (res.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-luxury-darker">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative mt-[10vh] h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-luxury-darker/80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-hero font-bold text-white mb-6 leading-tight">
            GET IN <span className="italic text-white font-light">(touch)</span> WITH
            <br />
            US TODAY
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed lg:text-xl">
            Finding a home or building one isn't just about keys and contracts—it's about starting the doors 
            on a life that's specifically sustainable and make memories happen.
          </p>
        </div>
      </section>
      <Waves
        lineColor="#6a6767"
        backgroundColor=""
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Send us a <span className="italic font-light text-green-400">Message</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-semibold">Error sending message!</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg text-gray-800 placeholder:text-gray-500 focus:border-green-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-4 px-4"
                  />
                </div>
                <div>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number" 
                    type="tel"
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg text-gray-800 placeholder:text-gray-500 focus:border-green-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-4 px-4"
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    type="email"
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg text-gray-800 placeholder:text-gray-500 focus:border-green-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-4 px-4"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Project Description / Message" 
                    rows={5}
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg text-gray-800 placeholder:text-gray-500 focus:border-green-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-4 px-4 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Front</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'front')}
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg py-2 px-4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Back</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'back')}
                    required
                    className="bg-white border-gray-300 border-2 rounded-lg py-2 px-4"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-3 rounded-full shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-4xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Every <span className="text-green-400 italic">brick</span> we lay tells a story — of trust, vision, and a future <span className="text-green-400 italic">built</span> to last.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-white font-bold mb-4">Let's Talk</h4>
              <p className="text-gray-400 text-sm">
                We'd love to hear from you. Call us at
              </p>
              <div className="flex justify-center items-center mt-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Company Logo"
                    className="w-50 h-50 object-contain"
                  />
                </div>
                <Link to="/contact">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6">
                    Let's Connect
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">t</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
