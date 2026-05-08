import React from 'react';
import { mixes } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface MixesProps {
  readonly className?: string;
}

export const Mixes: React.FC<MixesProps> = ({ className = '' }) => {
  return (
    <section id="mixes" className={`w-full bg-muted ${className}`}>
      <div className="max-w-container-max mx-auto px-6 py-[192px]">
        <h2 className="text-[25.2px] font-bold uppercase mb-12 text-foreground">Latest Mixes</h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {mixes.map((mix, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded p-6 shadow-[0_2px_8px_rgba(25,23,22,0.06)] hover:shadow-[0_8px_24px_rgba(25,23,22,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
            >
              <Button size="icon" className="size-16 shrink-0 rounded-full shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl fill-1">play_arrow</span>
              </Button>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-4">
                  <h3 className="text-[20px] font-bold uppercase tracking-tight text-foreground">{mix.title}</h3>
                  <p className="text-[11px] mt-1 md:mt-0 font-bold uppercase tracking-widest text-muted-foreground">{mix.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] font-medium min-w-[48px] text-foreground">00:00</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${mix.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[12px] font-medium min-w-[48px] text-right text-foreground">{mix.duration}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex mt-6 justify-center">
            <Button variant="link" asChild className="text-primary font-bold uppercase tracking-widest hover:underline transition-all">
              <a href="#">View All</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
