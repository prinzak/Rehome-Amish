import React, { useState, useEffect, useRef } from 'react';
import { bannerSlides } from '../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BannerSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = bannerSlides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-900 min-h-[550px] sm:min-h-[620px] lg:min-h-[720px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Services and Resources Slideshow"
    >
      {/* Background Slides */}
      {bannerSlides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.title + index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Soft dark vignette so text is always legible */}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        );
      })}

      {/* Floating Card Container (Positioned top-left like original Squarespace auto-layout) */}
      <div className="relative z-20 max-w-[1500px] h-full min-h-[550px] sm:min-h-[620px] lg:min-h-[720px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-start py-14">
        <div className="w-full max-w-[480px] bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/40 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#1a1a1a] mb-4 leading-tight">
            {currentSlide.title}
          </h2>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8">
            {currentSlide.description}
          </p>

          <div>
            <a
              href={currentSlide.buttonLink}
              target={currentSlide.isExternal ? '_blank' : undefined}
              rel={currentSlide.isExternal ? 'noreferrer' : undefined}
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md"
            >
              {currentSlide.buttonText}
            </a>
          </div>

          {/* Indicator text */}
          <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500 font-medium">
            <span>
              {currentIndex + 1} of {bannerSlides.length}
            </span>
            <div className="flex gap-1.5">
              {bannerSlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex
                      ? 'w-6 bg-[#18181b]'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Left / Right Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 sm:left-8 z-30 flex items-center">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-lg flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 sm:right-8 z-30 flex items-center">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-lg flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
