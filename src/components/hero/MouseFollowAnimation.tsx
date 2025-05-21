
import React, { useEffect } from 'react';
import gsap from 'gsap';

const MouseFollowAnimation = () => {
  useEffect(() => {
    // Set up mouse follow animation for SVG elements
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      gsap.utils.toArray<SVGElement>(".floating-circle, .floating-square").forEach((el) => {
        const xFactor = parseFloat(el.getAttribute("data-mouse-x") || "0.02");
        const yFactor = parseFloat(el.getAttribute("data-mouse-y") || "0.02");
        
        gsap.to(el, {
          x: (mouseX - window.innerWidth / 2) * xFactor,
          y: (mouseY - window.innerHeight / 2) * yFactor,
          duration: 1,
          ease: "power2.out"
        });
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything, it just adds event listeners
};

export default MouseFollowAnimation;
