
import React, { useRef } from 'react';
import HeroHeading from './hero/HeroHeading';
import HeroDescription from './hero/HeroDescription';
import FeaturesSection from './hero/FeaturesSection';
import CtaButtons from './hero/CtaButtons';
import PartnerLogosCarousel from './hero/PartnerLogosCarousel';
import MouseFollowAnimation from './hero/MouseFollowAnimation';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-600 via-purple-500 to-blue-400 overflow-hidden"
    >
      {/* Mouse Follow Animation (no visual component, just event listeners) */}
      <MouseFollowAnimation />

      {/* Main Hero Content */}
      <HeroHeading />

      {/* Description */}
      <HeroDescription />

      {/* Features */}
      <FeaturesSection />

      {/* CTA Buttons */}
      <CtaButtons />

      {/* Partner Logos Carousel */}
      <PartnerLogosCarousel />

      {/* Footer message */}
      <div className="text-center text-secondary-text-secondary text-sm mt-4">
        <p>© 2025 Credex. The safest marketplace for SaaS subscriptions.</p>
      </div>
    </div>
  );
};

export default Hero;
