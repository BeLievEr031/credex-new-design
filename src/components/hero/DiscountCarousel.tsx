
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const discountWords = [
  "छूट",
  "Discount",
  "Deals",
  "Descuento",
  "Rabais",
  "Rabatt",
  "Sconto",
  "تخفيض",
  "할인",
  "Скидка",
  "割引",
  "折扣",
  "Diskon"
];

const DiscountCarousel = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const discountWordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const discountCarouselInterval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % discountWords.length);
    }, 2000);

    return () => clearInterval(discountCarouselInterval);
  }, []);

  useEffect(() => {
    // Animate word change when currentWordIndex changes
    if (discountWordsRef.current) {
      gsap.fromTo(
        discountWordsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
      );
    }
  }, [currentWordIndex]);

  return (
    <div
      ref={discountWordsRef}
      className="mb-4 min-h-16 flex items-center justify-center"
    >
      <div
        key={currentWordIndex}
        className="text-2xl md:text-6xl py-4 font-bold bg-gradient-to-r from-yellow-200 to-lime-300 bg-clip-text text-transparent animate-word-fade"
      >
        {discountWords[currentWordIndex]}
      </div>
    </div>
  );
};

export default DiscountCarousel;
