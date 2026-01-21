"use client";
import React from "react";


const AuroraBackground = () => {
  // Static colors for stable wizard appearance (Liliai Brand)
  const color1 = '#E69419'; // Liliai Orange
  const color2 = '#0073FF'; // Liliai Blue
  const color3 = '#ffffff'; // White/Neutral for balance

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        {/* Animated Gradient Blobs */}
        <div 
            className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob transition-colors duration-700"
            style={{ backgroundColor: color1 }}
        ></div>
        <div 
            className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000 transition-colors duration-700"
            style={{ backgroundColor: color2 }}
        ></div>
        <div 
            className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000 transition-colors duration-700"
            style={{ backgroundColor: color3 }}
        ></div>
        
        {/* Adds depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </div>
      
      {/* Subtle Grid Overlay over the gradient for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default AuroraBackground;
