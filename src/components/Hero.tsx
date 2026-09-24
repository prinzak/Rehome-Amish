import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#18181b] min-h-[380px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://images.squarespace-cdn.com/content/v1/66bd213251482915e63ab74e/3d9a1ff4-f25f-4dc9-b001-9db7f815b336/CauliflowerFoster10CR.jpg?format=1000w"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/66bd213251482915e63ab74e/3d9a1ff4-f25f-4dc9-b001-9db7f815b336/CauliflowerFoster10CR.jpg?format=2500w"
            alt="Cauliflower the rabbit"
            className="w-full h-full object-cover object-[51.17%_90.15%] select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Subtle Overlay to match Squarespace 0.15 opacity overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>
    </section>
  );
};
