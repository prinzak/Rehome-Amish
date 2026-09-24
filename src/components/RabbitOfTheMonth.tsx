import React from 'react';

export const RabbitOfTheMonth: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with 50px rounded corners & caption */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[460px] aspect-square overflow-hidden shadow-lg border border-neutral-100" style={{ borderRadius: '50px' }}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/66bd213251482915e63ab74e/d6ca4fee-6d7d-4f4b-98b6-a7e5528d712b/c8047cf743c1ddebb4e81060408384c7.jpg?format=750w"
                alt="Thing 1 and Thing 2 rabbits"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-center text-base sm:text-lg font-bold text-[#1a1a1a]">
              Thing 1 &amp; Thing 2 are our rabbits of the month for September!
            </p>
          </div>

          {/* Right Column: Bring Home Your New Best Friend */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-6 text-center lg:text-left leading-tight">
              Bring Home Your New Best Friend
            </h3>

            <div className="space-y-4 text-neutral-700 text-base sm:text-[1.05rem] leading-relaxed text-justify sm:text-left">
              <p>
                Each rabbit who comes to HRS was transferred from an animal shelter, whether because they were sick or hurt, because they were scared, or because the shelter simply had too many rabbits.
              </p>
              <p>
                HRS is able to save their lives thanks to people like you who choose to adopt!
              </p>
              <p>
                Learn more about our adoptable rabbits and get started on your journey of finding the perfect furry friend for you and your family.
              </p>
            </div>

            <div className="mt-8 pt-2 flex justify-center lg:justify-start">
              <a
                href="https://houserabbit.org/adoptables"
                className="inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-semibold tracking-wide text-white bg-[#18181b] hover:bg-neutral-800 rounded-full transition-colors duration-200 shadow-md"
              >
                Meet our adoptable rabbits
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
