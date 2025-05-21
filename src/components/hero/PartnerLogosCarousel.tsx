
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import PartnerLogo from '../PartnerLogo';

const logos = [
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122261d52223d188d89e6d_AWS-Logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c659f4afc2432d33831_OpenAI_Logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122261750964670150d0c1_anthropic_BIG.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122261463101e19dc78451_supabase-seeklogo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122261ccb28aab65e5e267_posthog-icon-seeklogo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c6511bde0a1efd0148c_Slack_Technologies_Logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c6534824af44ee859bd_Notion-logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c65158b885c5be45f91_Zoom_Communications_Logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c65f8e2ece8bdc07721_Google_Cloud_logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c6503741bcf56f4a28f_Microsoft%20Azure.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c658896ce3f2e17e82d_Google_Gemini_logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68131b820cd46bae1f1b65a4_Salesforce.com_logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c652a799fc28e9192e4_Creative_Cloud.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c652b224653972e1b5f_Canva_Logo.svg",
  "https://cdn.prod.website-files.com/680f8f424673cd96bef24b1b/68122c656512feac6294d87b_Atlassian-logo.svg"
];


const PartnerLogosCarousel = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate partner logos
    gsap.from(partnersRef.current, {
      y: 15,
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
      delay: 1.2 // Delay to let other elements animate first
    });
  }, []);

  return (
    <div className="w-full overflow-hidden mb-8">
      <h3 className="text-center text-xl font-medium text-white/80 mb-6">Trusted by leading SaaS companies</h3>
      <div ref={partnersRef} className="flex overflow-hidden whitespace-nowrap relative w-11/12 mx-auto">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {
            [...logos, ...logos].map((src, index) => {
              return <img key={index} src={src} className='max-w-20 rounded-none filter object-contain' />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosCarousel;
