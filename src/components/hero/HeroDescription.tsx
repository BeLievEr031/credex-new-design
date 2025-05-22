
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const HeroDescription = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(descriptionRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.4 // Delay to let the heading animate first
    });
  }, []);

  return (
    <div ref={descriptionRef} className="text-center max-w-2xl mx-auto mb-10 text-secondary-text-secondary/90 font-bold">
      <p className="text-lg md:text-xl">
        Connect buyers and sellers to exchange SaaS subscriptions credits at the best rates.
        Our secure platform ensures safe transactions with escrow protection and AI verification.
      </p>
    </div>
  );
};

export default HeroDescription;
