import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection2 from "@/components/HeroSection2";
import AboutSection from "@/components/AboutSection";
import ExpandableProjectsSection from "@/components/ExpandableProjectsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import Policy2 from "@/components/Policy2";
import BrandTagline from "@/components/BrandTagline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";
import EP2 from "@/components/EP2";
import Header1 from "@/components/Header";
import ParallaxZoomGallery from "@/components/ParallaxZoomGallery";
import Faqs2 from "@/components/Faqs2";
import { ExpandableCardDemo } from "@/components/Expandcard";
import Waves from "@/components/GradBlur";
import Faqs from "@/components/Faqs2";
import { motion } from "framer-motion";
const About = () => {



  return (
    <div className="min-h-screen">
      <Header1/>
      <HeroSection2 />
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
             

      <Policy2 />
      <Faqs/>
      <section className="py-20 bg-gradient-to-t from-emerald-950 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-white mb-6">
              Agencies We <span className="italic font-light text-green-400">Collaborate</span> With
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Our experienced leadership team brings together decades of construction expertise, engineering excellence, and proven project management skills to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                name: "Rawaf Mina",
                position: "Managing Director & CEO",
                image: "/Rawafmina.png",
                description: "Rawaf Mina is a pioneering startup dedicated to serving the guests of Allah with excellence. Since its establishment in Rajab 1444 AH, it has provided top-tier hospitality to over 350,000 pilgrims from diverse backgrounds. "
              },
              {
                name: "Ithraa Alkhair",
                position: "Director",
                image: "/akhter.jpg",
                description: "As Ithraa Alkhair, we are a distinguished and comprehensive Hajj company offering a range of services to the guests of the Merciful. We are committed to providing an exceptional and comfortable Hajj experience for pilgrims"
              },
              {
                name: "Abdul Lateef Jameel",
                position: "Director",
                image: "/alj-logo.png",
                description: "Mohammed Zaker provides valuable insights in construction planning and execution. His technical knowledge and attention to detail help ensure that every Amana project meets the highest engineering standards and exceeds client expectations."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                {/* Profile Image */}
                <motion.div
                  className="flex-shrink-0 relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-fill rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-green-400 italic text-lg mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {member.position}
                  </motion.p>

                  <motion.p
                    className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    {member.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ParallaxZoomGallery />
      <BrandTagline/>  
      <Footer />
    </div>
  );
};

export default About;
