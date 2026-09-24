import React from 'react';

export const SupportWork: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with 50px rounded corners */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className="w-full max-w-[480px] aspect-[4/3] sm:aspect-square overflow-hidden shadow-lg border border-neutral-100"
              style={{ borderRadius: '50px' }}
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/66bd213251482915e63ab74e/693c4ce0-690e-4065-8a5b-1165a41b0c07/IMG_1822.jpeg?format=1000w"
                alt="Support Our Work rabbit"
                className="w-full h-full object-cover object-[50%_23%]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Support information */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4 text-center lg:text-left leading-tight">
              Support Our Work
            </h2>

            <p className="text-base sm:text-lg font-bold text-center lg:text-left text-[#1a1a1a] mb-4">
              Your contribution saves lives!
            </p>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              <p>
                For more than 35 years, we have had a global impact in the lives of rabbits in need and educated the public about these special animals and their unique care.
              </p>
              <p>
                With your support, vital resources like our website and essential community programs have helped countless rabbits, like our free Zoom classes, veterinary training initiative, rabbit essentials pantry, shelter assistance program, and the ongoing rescue work and low-cost medical services at our Bay Area facility.
              </p>
              <p>
                These national and regional programs have helped countless rabbits and are only possible because of donors like you.
              </p>
            </div>

            <div className="mt-8 pt-2 flex justify-center lg:justify-start">
              <a
                href="https://houserabbit.org/donate"
                className="inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
