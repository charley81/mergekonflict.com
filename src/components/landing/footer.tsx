import React from 'react';

interface FooterProps {
  readonly className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full bg-brand-black text-brand-white/40 py-8 ${className}`}>
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8">
        <div className="text-lg font-bold text-brand-white">Merge Konflict</div>
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
