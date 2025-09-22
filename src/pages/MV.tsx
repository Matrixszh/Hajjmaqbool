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
import MissionVision from "@/components/Mission";
import CoreValues from "@/components/Corev";
import Waves from "@/components/GradBlur";
const MV = () => {



  return (
    <div className="min-h-screen">
      <Header1/>
      <HeroSection />
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
      <MissionVision />
      <BrandTagline />
      <CoreValues/>
      <Footer />
      
    </div>
    
  );
};

export default MV;
