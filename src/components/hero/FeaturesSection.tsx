
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import FeatureIcon from '../FeatureIcon';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import BannerImg from "../../assets/bannerimg.png"
const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate features
    gsap.from(featuresRef.current?.children || [], {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.7 // Delay to let the heading and description animate first
    });

    // Create a subtle floating animation for feature icons
    gsap.to(".feature-icon", {
      y: "-5px",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });
  }, []);

  return (
    <div ref={featuresRef} className="flex flex-wrap justify-center gap-12 mb-10">
      <img src={BannerImg} className='w-1/5' />
    </div>
  );
};

export default FeaturesSection;
