import React from 'react';
import { introServices } from '../data/siteData';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-10 sm:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {introServices.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center group"
            >
              {/* Image with 4:3 aspect ratio */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-neutral-100 mb-6 shadow-sm">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-[1.6rem] font-bold text-[#1a1a1a] mb-3 leading-snug">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-base text-neutral-600 mb-6 max-w-sm">
                {card.description}
              </p>

              {/* Action Button */}
              <div className="mt-auto pt-1">
                <a
                  href={card.buttonLink}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-sm"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
