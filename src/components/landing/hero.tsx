import React from 'react';

interface HeroProps {
  readonly className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center text-center ${className}`}>
      <img
        alt="DJ performing live"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1uJtggKZ-119nW6GBDVMNY-H22sVwcZw9vSkTGRVnQDhk3sjZSGhTP5uk0UqVRqeoLIoQdHzF6KsHe9XcLN9crBZ9qE8WPLDfsdKzYf-NrFjfmWRbE1_Bd__I3PCjroEZr5q92Jyktg_RorzAipebSxCHEc615ZqigZYrZJFBaSEPeb3BT3EJsVusjXQXApO7Ixi5YGMyu3Qjaf3E2uFLVz2f3IR9nyfjmIeg_GmwP0SZj2CHDqBzz7pqjq1a7odo5pxg32G9PA"
      />
      <div className="absolute inset-0 bg-brand-black opacity-50"></div>
      <h1 className="relative z-10 font-black text-[min(15vw,185.4px)] md:text-[185.4px] text-brand-white uppercase break-words w-full leading-[0.85] tracking-tighter px-6">
        MERGE<br />KONFLICT
      </h1>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <a href="#shows" className="text-brand-white/60 hover:text-brand-white transition-colors">
          <span className="material-symbols-outlined text-5xl">keyboard_double_arrow_down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
