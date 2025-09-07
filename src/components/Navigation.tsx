"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isSiteNavActive, setIsSiteNavActive] = useState(false);
  const [isSocialMediaActive, setIsSocialMediaActive] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showBlueDash, setShowBlueDash] = useState(false);

  const siteNavigationRef = useRef(null);
  const socialMediaRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Page loader
  useEffect(() => {
    if (typeof document !== "undefined") {
      const handleLoad = () => {
        setIsPageLoaded(true);
      };

      if (document.readyState === "complete") {
        setIsPageLoaded(true);
        document.body.style.overflowY = "scroll";
      } else {
        window.addEventListener("load", handleLoad);
      }

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  // Equalizer animation
  useEffect(() => {
    const randomBetween = (range: number[]): number => {
      const min = range[0];
      const max = range[1];
      return min < 0
        ? min + Math.random() * (Math.abs(min) + max)
        : min + Math.random() * max;
    };

    let animationInterval: NodeJS.Timeout;



    return () => {
      clearInterval(animationInterval);
    };
  }, []);



  const handleHamburgerClick = () => {
    if (!isSiteNavActive) {
      // Show blue dash animation when opening
      setShowBlueDash(true);
      setTimeout(() => {
        setShowBlueDash(false);
        setIsSiteNavActive(true);
        document.body.classList.add("overflow-hidden");
      }, 400);
    } else {
      // Close navigation
      setIsSiteNavActive(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleFollowUsClick = () => {
    setIsSocialMediaActive(!isSocialMediaActive);
    document.body.classList.toggle("overflow-hidden");
  };



  return (
    <>
      <div className={isPageLoaded ? "page-loaded" : ""}>
        {/* Blue Dash Animation */}
        <AnimatePresence>
          {showBlueDash && (
            <div className="fixed inset-0 z-[60] pointer-events-none">
              {/* Main blue dash */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                  x: [0, 0, 0, window.innerWidth * 0.8]
                }}
                transition={{
                  duration: 0.4,
                  times: [0, 0.2, 0.6, 1],
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-0 w-32 h-1 bg-blue-400 origin-left"
              />
              {/* Secondary dash */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 0.8, 0.8, 0],
                  x: [0, 0, 0, window.innerWidth * 0.6]
                }}
                transition={{
                  duration: 0.3,
                  times: [0, 0.25, 0.65, 1],
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="absolute top-1/2 left-0 w-24 h-0.5 bg-blue-300 origin-left mt-3"
              />
              {/* Third dash */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0],
                  x: [0, 0, 0, window.innerWidth * 0.4]
                }}
                transition={{
                  duration: 0.2,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-1/2 left-0 w-16 h-0.5 bg-blue-200 origin-left -mt-3"
              />
            </div>
          )}
        </AnimatePresence>

        {/* Site Navigation */}
        <nav
          className={`fixed inset-0 z-50 bg-luxury-darker transition-transform duration-500 ${
            isSiteNavActive ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={siteNavigationRef}
        >
          <div className="absolute inset-0 bg-luxury-darker/95"></div>
          {/* Close button */}
          <button
            className="absolute top-8 left-8 text-white hover:text-luxury-gold transition-colors z-20"
            onClick={handleHamburgerClick}
          >
            <div className="w-6 h-6 relative">
              <div className="absolute w-6 h-0.5 bg-current top-1/2 left-0 transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute w-6 h-0.5 bg-current top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></div>
            </div>
          </button>
          <div className="relative z-10 flex h-full items-center justify-center">
            <ul className="space-y-8 text-center">
              <li>
                <a
                  href="/"
                  className="block text-4xl font-light text-white hover:text-luxury-gold transition-colors"
                  onClick={handleHamburgerClick}
                >
                  HOME
                </a>
                <small className="block text-luxury-gray mt-2">First page</small>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-4xl font-light text-white hover:text-luxury-gold transition-colors"
                  onClick={handleHamburgerClick}
                >
                  ABOUT
                </a>
                <small className="block text-luxury-gray mt-2">All About Us</small>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="block text-4xl font-light text-white hover:text-luxury-gold transition-colors"
                  onClick={handleHamburgerClick}
                >
                  CONTACT
                </a>
                <small className="block text-luxury-gray mt-2">Say hello</small>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social Media */}
        <div
          className={`fixed inset-0 z-50 bg-luxury-darker transition-transform duration-500 ${
            isSocialMediaActive ? "translate-y-0" : "-translate-y-full"
          }`}
          ref={socialMediaRef}
        >
          <div className="absolute inset-0 bg-luxury-darker/95"></div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center">
              <h5 className="text-2xl text-white mb-8">Social Share</h5>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-white hover:text-luxury-gold transition-colors text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-luxury-gold transition-colors text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-luxury-gold transition-colors text-2xl">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-luxury-gold transition-colors text-2xl">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <main className="relative">
          {/* Left Side */}
          <aside className="absolute left-0 top-0 z-40 flex h-screen w-20 flex-col items-center justify-between bg-luxury-darker py-8">
            <div className="logo">
              <a href="#home">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Structure Logo" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </a>
            </div>

            <div
              className="hamburger cursor-pointer"
              ref={hamburgerRef}
              onClick={handleHamburgerClick}
            >
              <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
                isSiteNavActive ? "rotate-45 translate-y-1.5" : ""
              }`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${
                isSiteNavActive ? "opacity-0" : "opacity-100"
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isSiteNavActive ? "-rotate-45 -translate-y-1.5" : ""
              }`}></div>
            </div>

            <div className="flex flex-col items-center space-y-8">
              


            </div>
          </aside>


        </main>
      </div>
    </>
  );
};

export default Navigation;
