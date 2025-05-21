
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Button } from "@/components/ui/button";

const CtaButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate buttons
    gsap.from(buttonsRef.current?.children || [], {
      scale: 0.8,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.0 // Delay to let other elements animate first
    });

    // Create hover effects for buttons
    gsap.utils.toArray<HTMLElement>(".cta-button").forEach(button => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: "power1.out"
        });
      });
      
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power1.in"
        });
      });
    });
  }, []);

  return (
    <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 mb-16">
      <Button className="cta-button bg-gradient-to-r from-lime-500 to-lime-400 text-white hover:from-lime-600 hover:to-lime-500 text-lg px-8 py-6 shadow-lg">
        I'm a Buyer
      </Button>
      <Button variant="outline" className="cta-button bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 shadow-lg">
        I'm a Seller
      </Button>
    </div>
  );
};

export default CtaButtons;
