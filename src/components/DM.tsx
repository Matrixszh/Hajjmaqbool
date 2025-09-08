import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DirectorsMessage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Profile */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ather Ahmed - Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">Ather Ahmed</h2>
              <p className="text-green-400 text-lg font-medium">Managing Director</p>
              <p className="text-gray-400 mt-2">Amana Constructions Pvt. Ltd.</p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              className="space-y-2 text-gray-300 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>• 30+ Years of Construction Experience</p>
              <p>• 22 Years International Experience</p>
              <p>• Former Projects Director at ETE</p>
              <p>• Civil Engineer by Profession</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Message */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-green-400 text-6xl font-serif mb-4">"</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                Director's <span className="text-green-400">Message</span>
              </h1>
            </motion.div>

            {/* Message Content */}
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p>
                At Amana Constructions, we believe that every brick we lay carries a 
                promise—a promise of quality, trust, and lasting value.
              </p>
              
              <p>
                My journey began with humble roots as a civil engineer and grew 
                through more than 30 years of experience in diverse projects across 
                residential, commercial, industrial, and infrastructure sectors. Having 
                spent 22 years abroad, I had the privilege of leading landmark projects 
                with esteemed global organizations, learning the importance of 
                discipline, integrity, and innovation in construction.
              </p>
              
              <p>
                When I took charge as Projects Director at Eastern Trading & 
                Contracting Co. (ETC) in 2000, the company had a turnover of 12 million 
                Saudi Riyals and 35 employees. In just a decade, with a passionate 
                team and a vision for growth, we scaled it to 1.3 billion Riyals with over 
                6,000 employees. These experiences shaped my belief that success is 
                built on trust, values, and relentless pursuit of excellence.
              </p>
              
              <p>
                With this foundation, I established Amana Constructions Pvt. Ltd. in 
                2015. Since then, our mission has been clear: to deliver high-quality 
                homes and property solutions that enrich lives. Under my leadership, 
                Amana has grown to become a trusted name in Hyderabad's real estate 
                and construction sector, with projects that blend traditional values with 
                modern innovation.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button 
                size="lg"
                className="bg-green-400 text-black hover:bg-green-300 rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Our Vision
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      
    </section>
  );
};

export default DirectorsMessage;
