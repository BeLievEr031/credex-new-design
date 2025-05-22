import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const UnderlineOnLoad = ({ text }) => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.4,
        });
    }, []);

    return (
        <div className="relative inline-block pb-3">
            <span className="text-accent-headline-accent">{text}</span>
            <svg
                className="absolute bottom-0 left-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                color='white'
            >
                <path
                    ref={pathRef}
                    d="M0,5 Q50,10 100,5"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default UnderlineOnLoad;
