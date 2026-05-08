import React from 'react';
import { socialLinks } from '@/data/mockData';

interface ConnectProps {
  readonly className?: string;
}

export const Connect: React.FC<ConnectProps> = ({ className = '' }) => {
  return (
    <section className={`w-full bg-muted ${className}`}>
      <div className="max-w-container-max mx-auto px-6 flex flex-col items-center py-[192px]">
        <h3 className="text-[16px] font-semibold uppercase tracking-widest mb-8 text-muted-foreground">Connect</h3>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-colors border-2 border-primary"
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
