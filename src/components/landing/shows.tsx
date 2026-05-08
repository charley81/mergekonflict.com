import React from 'react'
import { shows } from '@/data/mockData'

interface ShowsProps {
  readonly className?: string
}

export const Shows: React.FC<ShowsProps> = ({ className = '' }) => {
  return (
    <section id="shows" className={`w-full bg-background ${className}`}>
      <div className="max-w-container-max mx-auto px-6 py-[192px]">
        <div className="flex justify-between items-end mb-12 border-border">
          <h2 className="text-[25.2px] font-bold uppercase text-foreground">
            Upcoming Shows
          </h2>
        </div>
        <div className="flex flex-col">
          {shows.map((show, index) => (
            <a
              key={index}
              href={show.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-border hover:bg-muted transition-colors px-4 group"
            >
              <div className="flex flex-col md:flex-row gap-2 md:gap-12 w-full md:w-auto">
                <span className="text-[16px] font-semibold w-32 text-foreground">
                  {show.date}
                </span>
                <span className="text-[20px] font-bold w-48 underline text-primary">
                  {show.venue}
                </span>
                <span className="text-[12.6px] mt-1 md:mt-0 text-muted-foreground">
                  {show.time}
                </span>
              </div>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shows
