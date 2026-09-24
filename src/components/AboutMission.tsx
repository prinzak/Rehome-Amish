import React from 'react';

export const AboutMission: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fbfbfb] pt-16 pb-20 sm:pt-20 sm:pb-28 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 leading-snug">
          Promoting rabbit welfare and education since 1988
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed sm:leading-loose text-justify sm:text-center mb-10 font-normal">
          Since 1988, House Rabbit Society, its supporters, small staff, local chapters, licensed educators, and volunteers have been advocating for the care and well-being of rabbits. As one of the oldest and largest rabbit rescue networks in the world, we are volunteer founded and led with national and international chapters and a main facility located in the San Francisco Bay Area. We provide lifesaving services to thousands of rabbits each year, including adoption and low-cost community programs. Our facility not only helps Bay Area rabbits, but also develops resources to help other rabbit rescues, municipal shelters and rabbit veterinarians around the world.
        </p>

        {/* Learn More Button */}
        <div>
          <a
            href="https://houserabbit.org/mission"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Pointed SVG Section Divider pointing down */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none transform translate-y-[98%] z-10">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-[#fbfbfb] fill-current"
        >
          <path d="M0,0 L600,60 L1200,0 L1200,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
};
