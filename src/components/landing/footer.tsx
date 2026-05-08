import React from 'react';

interface FooterProps {
  readonly className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full bg-foreground text-background/40 py-8 ${className}`}>
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8">
        <a href="#" className="text-lg font-bold text-background hover:opacity-80 transition-opacity">
          Merge Konflict
        </a>
        <div className="text-sm">
          © {new Date().getFullYear()} Merge Konflict. Designed and developed: Christopher Harley
        </div>
        <div className="flex gap-6">
          {/* Social links placeholder in footer if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
