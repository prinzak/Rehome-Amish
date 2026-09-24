/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { AboutMission } from './components/AboutMission';
import { RabbitOfTheMonth } from './components/RabbitOfTheMonth';
import { BannerSlideshow } from './components/BannerSlideshow';
import { LatestUpdates } from './components/LatestUpdates';
import { UpcomingEvents } from './components/UpcomingEvents';
import { SupportWork } from './components/SupportWork';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a] selection:bg-[#c99557] selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-neutral-900 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
      >
        Skip to Content
      </a>

      {/* Header with Navigation and Amish Homestead Wordmark */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow flex flex-col" role="main">
        {/* 1. Full-bleed Hero banner */}
        <Hero />

        {/* 2. Intro Title Section */}
        <IntroSection />

        {/* 3. Three Services Grid Cards */}
        <ServicesGrid />

        {/* 4. About & Mission Section with Pointed Chevron Divider */}
        <AboutMission />

        {/* 5. Rabbit of the Month / Adoption Spotlight */}
        <RabbitOfTheMonth />

        {/* 6. Services & Resources Banner Slideshow Carousel */}
        <BannerSlideshow />

        {/* 7. The Latest Updates Carousel / Grid (Dark theme) */}
        <LatestUpdates />

        {/* 8. See Us At Our Upcoming Events! Carousel */}
        <UpcomingEvents />

        {/* 9. Support Our Work Donation Spotlight */}
        <SupportWork />
      </main>

      {/* 10. Footer with Legal, Nonprofit, Address, Socials & Certifications */}
      <Footer />
    </div>
  );
}
