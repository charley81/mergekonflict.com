import React from 'react';
import { navLinks } from '@/data/mockData';

interface NavbarProps {
  readonly className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <header className={`bg-brand-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-barely-gray ${className}`}>
      <div className="max-w-container-max mx-auto flex justify-between items-center px-6 py-4 w-full">
        <div className="text-2xl font-black tracking-widest text-brand-black">
          Merge Konflict
        </div>
        <nav className="hidden md:flex gap-8 font-bold tracking-tighter uppercase text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-black hover:text-bold-red transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="bg-bold-red text-brand-white px-[18px] py-[10.8px] rounded border-2 border-bold-red hover:bg-brand-white hover:text-bold-red transition-colors hidden md:block font-bold text-[12.6px]">
          Book Now
        </button>
        <button className="md:hidden text-brand-black">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
