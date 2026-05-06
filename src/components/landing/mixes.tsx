import React from 'react';
import { mixes } from '@/data/mockData';

interface MixesProps {
  readonly className?: string;
}

export const Mixes: React.FC<MixesProps> = ({ className = '' }) => {
  return (
    <section id="mixes" className={`w-full bg-[#F2EEEE] ${className}`}>
      <div className="max-w-container-max mx-auto px-6 py-[192px]">
        <h2 className="text-[25.2px] font-bold uppercase mb-12 text-brand-black">Latest Mixes</h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {mixes.map((mix, index) => (
            <div
              key={index}
              className="bg-brand-white border border-barely-gray rounded p-6 shadow-[0_2px_8px_rgba(25,23,22,0.06)] hover:shadow-[0_8px_24px_rgba(25,23,22,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
            >
              <button className="w-16 h-16 shrink-0 bg-bold-red rounded-full flex items-center justify-center text-brand-white relative z-10 hover:scale-105 transition-transform shadow-lg">
                <span className="material-symbols-outlined text-3xl fill-1">play_arrow</span>
              </button>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-4">
                  <h3 className="text-[20px] font-bold uppercase tracking-tight text-brand-black">{mix.title}</h3>
                  <p className="text-[11px] mt-1 md:mt-0 font-bold uppercase tracking-widest text-text-muted">{mix.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] font-medium min-w-[48px] text-brand-black">00:00</span>
                  <div className="flex-1 h-2 bg-lighter-gray rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-bold-red"
                      style={{ width: `${mix.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[12px] font-medium min-w-[48px] text-right text-brand-black">{mix.duration}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex mt-6 justify-center">
            <a href="#" className="text-[12px] font-bold uppercase tracking-widest hover:underline transition-all underline text-bold-red">
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
