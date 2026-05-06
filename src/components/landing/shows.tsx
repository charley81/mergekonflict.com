import React from 'react';
import { shows } from '@/data/mockData';

interface ShowsProps {
  readonly className?: string;
}

export const Shows: React.FC<ShowsProps> = ({ className = '' }) => {
  return (
    <section id="shows" className={`w-full bg-brand-white ${className}`}>
      <div className="max-w-container-max mx-auto px-6 py-[192px]">
        <div className="flex justify-between items-end mb-12 border-barely-gray">
          <h2 className="text-[25.2px] font-bold uppercase text-brand-black">Upcoming Shows</h2>
        </div>
        <div className="flex flex-col">
          {shows.map((show, index) => {
            const Content = (
              <>
                <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full md:w-auto">
                  <span className="text-[16px] font-semibold w-32 text-brand-black">{show.date}</span>
                  <span className="text-[20px] font-bold w-48 underline text-bold-red">{show.venue}</span>
                  <span className="text-[12.6px] mt-1 md:mt-0 text-text-muted">{show.time}</span>
                </div>
                {show.href && (
                  <span className="material-symbols-outlined text-bold-red opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                )}
              </>
            );

            return show.href ? (
              <a
                key={index}
                href={show.href}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-barely-gray hover:bg-lighter-gray transition-colors px-4 group"
              >
                {Content}
              </a>
            ) : (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-barely-gray hover:bg-lighter-gray transition-colors px-4 group"
              >
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shows;
