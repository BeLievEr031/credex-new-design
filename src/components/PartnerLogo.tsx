
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PartnerLogoProps {
  src: string;
  alt: string;
  className?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, className }) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;
    
    // Create a GSAP context for this component
    const ctx = gsap.context(() => {
      // Set up hover animation
      logoRef.current?.addEventListener('mouseenter', () => {
        gsap.to(logoRef.current, {
          scale: 1.1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      logoRef.current?.addEventListener('mouseleave', () => {
        gsap.to(logoRef.current, {
          scale: 1,
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.in"
        });
      });

      // Initial subtle pulse animation
      gsap.fromTo(
        logoRef.current,
        { scale: 1 },
        {
          scale: 1.03,
          repeat: -1,
          yoyo: true,
          duration: gsap.utils.random(2, 3),
          ease: "sine.inOut"
        }
      );
    }, logoRef);

    // Clean up
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={logoRef} 
      className={`opacity-70 hover:opacity-100 transition-opacity ${className} px-6 cursor-pointer`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="h-6 md:h-8 object-contain filter brightness-0 invert hover:drop-shadow-glow" 
      />
    </div>
  );
};

export default PartnerLogo;
