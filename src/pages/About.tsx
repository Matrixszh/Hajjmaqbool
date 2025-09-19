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
import AskAdditionalQuestions from "@/components/AskAdditionalQuestions";

const About = () => {



  return (
    <div className="min-h-screen">
      <Header1/>
      <HeroSection2 />
      <Policy2 />
      <Faqs2 />
      <ParallaxZoomGallery />
      <TeamSection />      
      <AskAdditionalQuestions />
      <Faqs2 />
      <Footer />
    </div>
  );
};

export default About;
