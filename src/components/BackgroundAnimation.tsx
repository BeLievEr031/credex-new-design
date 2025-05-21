
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const circles = svgRef.current.querySelectorAll('.floating-circle');
    const squares = svgRef.current.querySelectorAll('.floating-square');
    
    // Assign random mouse movement factors to each element
    circles.forEach((circle) => {
      circle.setAttribute('data-mouse-x', ((Math.random() * 0.03) + 0.01).toString());
      circle.setAttribute('data-mouse-y', ((Math.random() * 0.03) + 0.01).toString());
    });
    
    squares.forEach((square) => {
      square.setAttribute('data-mouse-x', ((Math.random() * 0.04) + 0.02).toString());
      square.setAttribute('data-mouse-y', ((Math.random() * 0.04) + 0.02).toString());
    });
    
    // Animate circles
    circles.forEach((circle) => {
      const x = Math.random() * 30 - 15;
      const y = Math.random() * 30 - 15;
      const duration = 3 + Math.random() * 5;
      
      gsap.to(circle, {
        x: x,
        y: y,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });
    
    // Animate squares
    squares.forEach((square) => {
      const rotation = Math.random() * 60 - 30;
      const duration = 4 + Math.random() * 4;
      
      gsap.to(square, {
        rotation: rotation,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });
    
    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      gsap.utils.toArray<SVGElement>('.floating-circle, .floating-square').forEach((el) => {
        const xFactor = parseFloat(el.getAttribute('data-mouse-x') || '0.02');
        const yFactor = parseFloat(el.getAttribute('data-mouse-y') || '0.02');
        
        gsap.to(el, {
          x: `+=${(mouseX - window.innerWidth / 2) * xFactor}`,
          y: `+=${(mouseY - window.innerHeight / 2) * yFactor}`,
          duration: 1,
          overwrite: 'auto',
          ease: "power2.out"
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circles */}
        <circle className="floating-circle" cx="200" cy="150" r="40" fill="rgba(255, 255, 255, 0.05)" />
        <circle className="floating-circle" cx="1200" cy="250" r="60" fill="rgba(255, 255, 255, 0.03)" />
        <circle className="floating-circle" cx="300" cy="700" r="45" fill="rgba(255, 255, 255, 0.04)" />
        <circle className="floating-circle" cx="1100" cy="650" r="55" fill="rgba(255, 255, 255, 0.03)" />
        <circle className="floating-circle" cx="600" cy="300" r="30" fill="rgba(255, 255, 255, 0.05)" />
        <circle className="floating-circle" cx="900" cy="400" r="20" fill="rgba(255, 255, 255, 0.03)" />
        
        {/* Squares */}
        <rect className="floating-square" x="150" y="500" width="50" height="50" fill="rgba(255, 255, 255, 0.03)" />
        <rect className="floating-square" x="1000" y="150" width="40" height="40" fill="rgba(255, 255, 255, 0.04)" />
        <rect className="floating-square" x="400" y="250" width="30" height="30" fill="rgba(255, 255, 255, 0.03)" />
        <rect className="floating-square" x="850" y="750" width="45" height="45" fill="rgba(255, 255, 255, 0.05)" />
        
        {/* SaaS related SVG elements */}
        <path className="floating-square" d="M700 500 L750 500 L750 550 L700 550 Z" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" fill="none" />
        <path className="floating-circle" d="M800 600 C800 577.9 817.9 560 840 560 C862.1 560 880 577.9 880 600 C880 622.1 862.1 640 840 640 C817.9 640 800 622.1 800 600 Z" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" fill="none" />
        
        {/* Cloud-like shapes for SaaS */}
        <path className="floating-circle" d="M500 400 Q530 370 560 400 T620 400 Q650 370 680 400 T740 400 Q770 420 740 440 T680 440 Q650 470 620 440 T560 440 Q530 470 500 440 T440 440 Q410 420 440 400 Z" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="2" fill="none" />
        
        {/* Digital cloud icon */}
        <path className="floating-square" d="M650 200 Q680 180 710 200 Q740 170 770 200 Q790 180 810 200 Q830 220 810 240 Q830 260 810 280 Q790 300 770 280 Q740 310 710 280 Q680 300 650 280 Q630 260 650 240 Q630 220 650 200 Z" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" fill="none" />
        
        {/* Connection lines representing SaaS network */}
        <line className="floating-circle" x1="400" y1="400" x2="500" y2="450" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <line className="floating-circle" x1="550" y1="500" x2="650" y2="550" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <line className="floating-circle" x1="700" y1="400" x2="800" y2="350" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <line className="floating-circle" x1="850" y1="300" x2="950" y2="350" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
