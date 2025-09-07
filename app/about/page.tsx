'use client'
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import Navigation from "@/app/components/Navigation";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import ParallaxZoomGallery from "@/app/components/ParallaxZoomGallery";
import ExpandablePropertyCards from "@/app/components/ExpandablePropertyCards";
import { motion } from "framer-motion";
import BrandTagline from "@/app/components/BrandTagline";

import Header from "@/app/components/Header";
import { Section } from "lucide-react";
import DM from "@/app/components/DM";
import Policy from "@/app/components/Policy";
import Link from 'next/link';



const About = () => {


  return (
    <div className="min-h-screen bg-luxury-darker">
      <Header />
      
      {/* Hero Section */}
      <section
        className=""
        
      >
        <DM/>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-white">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-black text-4xl font-medium mb-8 ">
            A podcast with<br />
            masterminds at work<br />
            delve into the secrets<br />
            of success
          </h2>

          {/* Description Text */}
          <p className="px-10 text-gray-800 text-lg  mb-8 max-w-3xl text-center md:text-center">
            Join <strong>Abdullah Ghaffar</strong> as he engages with the brightest minds in the real estate 
            industry! Discover actionable tips, inspiring stories, and insider knowledge from top performers 
            and experts in real estate investing and raising capital.
          </p>
          <Button 
  size="lg"
  variant="outline"
  className="bg-gradient-to-r from-[#081E43] to-black border-white text-white hover:bg-none hover:bg-white/30 rounded-full hover:text-white px-8 py-3 text-lg transition-all duration-300 ease-in-out"
>
  Contact Us
</Button>
          </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              View Our <span className="italic font-light text-blue-400">brilliant</span> Crew
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              I have worked on multiple projects throughout my <span className="italic text-blue-400">career</span> and have achieved clients that are always satisfied. These are some of my most decorated <span className="italic text-blue-400">projects</span>
            </p>
          </div>

          <div className="space-y-12">
            {[1, 2, 3].map((index) => (
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
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa63f3642a8bc4a8c9609cfc52c05fe4c%2F4978a19705064b44a0b145ecf2e2c55c?format=webp&width=800"
                    alt="Team member"
                    className="w-48 h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Name of the Person
                  </motion.h3>
                  <motion.p
                    className="text-blue-400 italic text-lg mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    designation
                  </motion.p>

                  <motion.p
                    className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    this podcast offer you an insight about the host Abdullah and his struggles to achieve what is now by measures the most immaculate forma of success . this podcast offer you an insight about the host Abdullah and his struggles to achieve what is now by measures the most immaculate forma of success
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Zoom Gallery */}
  
      <ParallaxZoomGallery />
      {/* Spacing Section */}
      <section className="h-20 bg-white"></section>

      {/* Expandable Property Cards */}
      <ExpandablePropertyCards />

      {/* Quote Section */}
       <BrandTagline />
              <Policy/>

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
                       src="/logo.png" // Replace with your logo path
                       alt="Company Logo"
                       className="w-50 h-50 object-contain"
                     />
                   </div>
                   <Link href="/contact">
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

export default About;
