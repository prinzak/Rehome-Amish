import React from 'react';

interface BrandLogoProps {
  className?: string;
  isMobile?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isMobile = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isMobile ? "w-8 h-8" : "w-10 h-10"}
        >
          {/* Subtle warm architectural roof / homestead contour */}
          <path
            d="M6 24L24 9L42 24"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Rabbit silhouette nestled under the roof */}
          <path
            d="M17 37C17 32 19 28 22 25C20.5 22 19 16 22 15C24.5 14 26 18 26 21C27.5 17 30 15 32 16C33.5 17 32.5 22 30.5 25C34 28 35 32 35 37H17Z"
            fill="#ffffff"
          />
          {/* Clean ground line */}
          <path
            d="M10 40H38"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={`font-semibold tracking-[0.18em] uppercase text-white leading-tight font-sans ${
            isMobile ? "text-base tracking-wider" : "text-xl tracking-[0.2em]"
          }`}
          style={{ letterSpacing: '0.16em' }}
        >
          Amish Homestead
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.28em] text-[#d4d4d8] font-normal mt-0.5 leading-none ${
            isMobile ? "hidden sm:block" : ""
          }`}
        >
          Rabbit Care & Sanctuary
        </span>
      </div>
    </div>
  );
};
