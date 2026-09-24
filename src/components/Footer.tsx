import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#18181b] py-10 text-white sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 sm:px-8 md:flex-row">
        <a href="/" aria-label="Amish Homestead home" className="transition-opacity hover:opacity-80">
          <BrandLogo />
        </a>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-neutral-300">
          <a href="/" className="transition hover:text-white">Home</a>
          <a href="/articles" className="transition hover:text-white">Stories and Updates</a>
          <a href="https://houserabbit.org/care" target="_blank" rel="noreferrer" className="transition hover:text-white">Rabbit Care Resources</a>
        </nav>
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Amish Homestead</p>
      </div>
    </footer>
  );
};
