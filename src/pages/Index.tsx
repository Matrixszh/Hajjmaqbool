import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpandableProjectsSection from "@/components/ExpandableProjectsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import ContactCTA from "@/components/ContactCTA";
import BrandTagline from "@/components/BrandTagline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";
import EP2 from "@/components/EP2";
import Header1 from "@/components/Header";
import ParallaxZoomGallery from "@/components/ParallaxZoomGallery";
import Faqs from "@/components/Faqs";

const Index = () => {



  return (
    <div className="min-h-screen">
      <Header1/>
      <HeroSection />
      <AboutSection />
      <ExpandableProjectsSection />
      <ParallaxZoomGallery />
      <TeamSection />      
      <BrandTagline />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Index;
