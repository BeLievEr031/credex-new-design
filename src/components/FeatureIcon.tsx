
import React from 'react';

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, title, className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="mb-2 text-4xl">{icon}</div>
      <p className="text-xs text-center max-w-[100px] font-bold text-white">{title}</p>
    </div>
  );
};

export default FeatureIcon;
