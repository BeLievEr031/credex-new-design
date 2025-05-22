
import React from 'react';
import { Button } from "@/components/ui/button";
import LogoSrc from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img
              src={LogoSrc}
            />
          </div>
          <span className="text-xl font-extrabold text-white">Credex</span>
        </div>
        <Button className="bg-accent-action/70 backdrop-blur-sm text-white font-bold hover:bg-accent-action/80 border-white/20 px-6">
          Live Chat
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
