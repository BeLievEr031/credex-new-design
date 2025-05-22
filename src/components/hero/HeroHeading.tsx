
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import DiscountCarousel from './DiscountCarousel';
import UnderlineOnLoad from './UnderlineAnimation';

const HeroHeading = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate heading elements
    tl.from(headingRef.current?.children || [], {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  return (
    <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-8 mt-20">
      <DiscountCarousel />
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 space-y-1">
        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Marketplace for</span><br />
        <UnderlineOnLoad text={"SaaS Platforms"} />
      </h1>
    </div>
  );
};

export default HeroHeading;
