import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Random testimonial of a happy customer that enjoyed the service and would definitely recommend it to her friends and colleagues in the near future. She absolutely loved the service that was provided and looks forward to doing business again.",
    name: "Name of the customer"
  },
  {
    id: 2,
    text: "Random testimonial of a happy customer that enjoyed the service and would definitely recommend it to her friends and colleagues in the near future. She absolutely loved the service that was provided.",
    name: "Name of the customer"
  },
  {
    id: 3,
    text: "Another testimonial from a satisfied customer who experienced exceptional service and would highly recommend our services to anyone looking for quality work and professional results.",
    name: "Name of the customer"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-6">
            Outcomes That Need No <em className="italic font-light text-green-400">Introduction</em>
          </h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            With 20 years in real estate and car rentals, I'm proud to have teamed up 
            with talented pros to create spaces people love and experiences that keep 
            them moving. From vibrant communities to memorable journeys, it's all 
            about making life a little richer.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((index, position) => {
                const testimonial = testimonials[index];
                const isCenter = position === 1;

                return (
                  <motion.div
                    key={`${testimonial.id}-${position}`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20
                    }}
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1 : 0.9,
                      y: 0,
                      filter: isCenter ? "blur(0px)" : "blur(1px)"
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: -20
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className={isCenter ? "z-10" : "z-0"}
                  >
                    <Card
                      className={`${
                        isCenter
                          ? 'bg-black/80 border-gray-600 w-96'
                          : 'bg-black/40 border-gray-700 w-80'
                      } backdrop-blur-sm`}
                    >
                      <CardContent className="p-6">
                        <motion.p
                          className="text-white/90 mb-6 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          "{testimonial.text}"
                        </motion.p>
                        <motion.p
                          className="text-white font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          {testimonial.name}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
