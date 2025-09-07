'use client'
import { useState } from "react";
import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ExpandableProjectsSection from "@/app/components/ExpandableProjectsSection";
import TeamSection from "@/app/components/TeamSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import ShowcaseGallery from "@/app/components/ShowcaseGallery";
import ContactCTA from "@/app/components/ContactCTA";
import BrandTagline from "@/app/components/BrandTagline";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import EP2 from "@/app/components/EP2";
import Header1 from "@/app/components/Header";
import ParallaxZoomGallery from "@/app/components/ParallaxZoomGallery";
import MissionVision from "@/app/components/Mission";
import CoreValues from "@/app/components/Corev";

const MV = () => {



  return (
    <div className="min-h-screen">
      <Header1/>
      <HeroSection />
      <MissionVision />
      <BrandTagline />
      <CoreValues/>
      <Footer />
    </div>
  );
};

export default MV;
