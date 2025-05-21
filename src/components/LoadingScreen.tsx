
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(loadingRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 250);
      }
    });

    // Animate the progress bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    });

    // Animate the logo
    tl.to(logoRef.current, {
      scale: 1.2,
      duration: 0.5,
      ease: "back.out",
      yoyo: true,
      repeat: 1
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400 to-lime-300"
    >
      <div
        ref={logoRef}
        className="mb-6 flex items-center gap-2"
      >
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-lime-400 rounded-full animate-pulse"></div>
        </div>
        <span className="text-3xl font-bold text-black">Credex</span>
      </div>
      <div className="w-64 h-1 bg-black/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-0 bg-black rounded-full"
        ></div>
      </div>
      <p className="mt-4 text-black/70 font-medium">Loading SaaS Marketplace...</p>
    </div>
  );
};

export default LoadingScreen;
