import React, { useState, useRef } from 'react';
import { upcomingEventsData } from '../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const UpcomingEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items per view: 1 on mobile, 2 on tablet, 4 on desktop
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, upcomingEventsData.length - 1);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, upcomingEventsData.length - 1);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <section className="w-full bg-[#fbfbfb] py-16 sm:py-24 border-t border-neutral-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-10 sm:mb-12">
          See Us At Our Upcoming Events!
        </h2>

        {/* Featured bar with Carousel Navigation */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-8">
          <span className="text-base sm:text-lg font-semibold tracking-wide text-neutral-800">
            Featured
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous events"
              className="w-9 h-9 rounded-full bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next events"
              className="w-9 h-9 rounded-full bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Events Carousel Slider */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* Grid slides: divide into chunks or horizontal flex */}
            {upcomingEventsData.map((event) => (
              <div
                key={event.id}
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3 flex flex-col"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  {/* Event Thumbnail Container */}
                  <a
                    href={event.link}
                    className="relative w-full aspect-square overflow-hidden bg-neutral-100 block"
                    aria-label={event.title}
                  >
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Date Badge like Squarespace Event date tag */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-md py-1.5 px-3 text-center border border-black/5 min-w-[50px]">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 leading-none">
                        {event.month}
                      </span>
                      <span className="block text-lg font-bold text-neutral-900 leading-tight">
                        {event.day}
                      </span>
                    </div>
                  </a>

                  {/* Event Details */}
                  <div className="p-5 flex flex-col flex-grow text-center">
                    {/* Formatted Date */}
                    <time className="text-xs font-medium text-neutral-500 mb-2 block">
                      {event.date}
                    </time>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-amber-800 transition-colors mb-2.5 leading-snug line-clamp-2">
                      <a href={event.link}>{event.title}</a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-4 text-justify">
                      {event.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="mt-auto pt-2">
                      <a
                        href={event.link}
                        className="inline-block text-xs font-semibold text-[#18181b] hover:text-amber-800 underline underline-offset-2 transition-colors"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Events Button */}
        <div className="mt-14 text-center">
          <a
            href="https://houserabbit.org/events"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md"
          >
            See All Events
          </a>
        </div>
      </div>
    </section>
  );
};
