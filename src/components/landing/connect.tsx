import React from 'react';
import { socialLinks } from '@/data/mockData';

interface ConnectProps {
  readonly className?: string;
}

export const Connect: React.FC<ConnectProps> = ({ className = '' }) => {
  return (
    <section className={`w-full bg-[#F2EEEE] ${className}`}>
      <div className="max-w-container-max mx-auto px-6 flex flex-col items-center py-[192px]">
        <h3 className="text-[16px] font-semibold uppercase tracking-widest mb-8 text-text-muted">Connect</h3>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-bold-red text-white hover:bg-brand-white hover:text-bold-red transition-colors border-2 border-bold-red"
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
