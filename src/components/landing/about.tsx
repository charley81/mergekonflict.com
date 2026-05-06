import React from 'react';
import { aboutData } from '@/data/mockData';

interface AboutProps {
  readonly className?: string;
}

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`w-full bg-brand-white ${className}`}>
      <div className="max-w-container-max mx-auto px-6 py-[192px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 h-[600px] bg-lighter-gray rounded overflow-hidden relative">
            <img
              alt={aboutData.image.alt}
              className="w-full h-full object-cover filter grayscale contrast-125"
              src={aboutData.image.src}
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-[25.2px] font-bold uppercase mb-8 text-brand-black">{aboutData.title}</h2>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-[12.6px] mb-6 max-w-2xl leading-relaxed text-brand-black">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
