import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-luxury-darker flex items-center justify-center">
      <div className="text-center">
        {/* Company Name Animation */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-2 tracking-wider">
            <span className="inline-block animate-pulse">A</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.1s" }}>M</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>A</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.3s" }}>N</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.4s" }}>A</span>
          </h1>
          <p className="text-xl text-gray-400 tracking-widest uppercase">Construction</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mb-4">
          <div 
            className="h-full bg-gradient-to-r from-luxury-gold-light to-luxury-gold rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="text-sm text-gray-500 font-mono">
          {progress}%
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
