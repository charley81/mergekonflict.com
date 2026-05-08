import React from 'react';
import { navLinks } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  readonly className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <header className={`bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border ${className}`}>
      <div className="max-w-container-max mx-auto flex justify-between items-center px-6 py-4 w-full">
        <a href="#" className="text-2xl font-black tracking-widest text-foreground hover:opacity-80 transition-opacity">
          Merge Konflict
        </a>
        <nav className="hidden md:flex gap-8 font-bold tracking-tighter uppercase text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden md:flex font-bold tracking-widest uppercase text-xs">
          <a href="#contact">Book Now</a>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

