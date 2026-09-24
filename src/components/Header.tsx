import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { navigationItems } from '../data/siteData';
import { SearchModal } from './SearchModal';
import { ChevronDown, ChevronRight, ArrowLeft, X, Search } from 'lucide-react';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState<NavItem | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveFolder(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        id="header"
        className="w-full bg-[#18181b] text-white sticky top-0 z-40 shadow-md border-b border-white/10"
      >
        {/* Announcement Bar */}
        {announcementVisible && (
          <div className="bg-[#27272a] text-[#f4f4f5] border-b border-white/10 py-2 px-4 text-xs sm:text-sm text-center font-normal transition-all relative">
            <div className="max-w-7xl mx-auto flex items-center justify-center pr-8 sm:pr-0">
              <a
                href="https://houserabbit.org/adoptables"
                className="hover:underline underline-offset-4 decoration-[#c99557] font-normal"
              >
                <span className="font-semibold text-[#f8fafc]">March Adoption Promo:</span> Double the Bun, Double the Fun! Special perks for bonded pair adoptions this month.
              </a>
            </div>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Main Header Inner */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
          {/* Logo / Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-95"
            aria-label="Amish Homestead Home"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navigationItems.map((item) => {
              if (item.title === 'Search') {
                return (
                  <button
                    key={item.title}
                    onClick={() => setSearchModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-md hover:bg-white/5"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4 text-white/80" />
                    <span>Search</span>
                  </button>
                );
              }

              if (item.children) {
                const isOpen = openDropdown === item.title;
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-md hover:bg-white/5"
                      aria-expanded={isOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 top-full pt-1.5 w-64 z-50 animate-fadeIn">
                        <div className="bg-[#1f1f23] border border-white/10 rounded-lg shadow-2xl py-2 px-1 backdrop-blur-md">
                          {item.children.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              target={subItem.isExternal ? '_blank' : undefined}
                              rel={subItem.isExternal ? 'noreferrer' : undefined}
                              className="block px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-white/10 rounded-md transition-colors leading-snug"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noreferrer' : undefined}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {item.title}
                </a>
              );
            })}
          </nav>

          {/* Header Actions (Desktop CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="xl:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="https://houserabbit.org/donate"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-white border-2 border-white rounded-full hover:bg-white hover:text-[#18181b] transition-all duration-200 shadow-sm"
            >
              Donate!
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="sm:hidden p-2 text-white/80 hover:text-white"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span
                  className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`w-6 h-[2px] bg-white transition-opacity duration-200 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Folder Drill-Down */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-[var(--header-top,80px)] z-50 bg-[#18181b] text-white overflow-y-auto pb-16">
            <div className="p-6">
              {!activeFolder ? (
                // Root Menu Level
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    if (item.title === 'Search') {
                      return (
                        <button
                          key={item.title}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setSearchModalOpen(true);
                          }}
                          className="w-full flex items-center justify-between py-3 text-lg font-medium text-white border-b border-white/10"
                        >
                          <span className="flex items-center gap-2">
                            <Search className="w-5 h-5 text-neutral-400" />
                            Search
                          </span>
                        </button>
                      );
                    }

                    if (item.children) {
                      return (
                        <button
                          key={item.title}
                          onClick={() => setActiveFolder(item)}
                          className="w-full flex items-center justify-between py-3 text-lg font-medium text-white border-b border-white/10 text-left group"
                        >
                          <span>{item.title}</span>
                          <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform" />
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noreferrer' : undefined}
                        className="block py-3 text-lg font-medium text-white border-b border-white/10"
                      >
                        {item.title}
                      </a>
                    );
                  })}

                  <div className="pt-6">
                    <a
                      href="https://houserabbit.org/donate"
                      className="block w-full text-center py-3.5 text-base font-semibold text-[#18181b] bg-white rounded-full shadow hover:bg-neutral-100 transition-colors"
                    >
                      Donate!
                    </a>
                  </div>
                </div>
              ) : (
                // Subfolder Level
                <div className="space-y-2 animate-fadeIn">
                  <button
                    onClick={() => setActiveFolder(null)}
                    className="flex items-center gap-2 py-2 text-sm uppercase tracking-wider text-amber-400 font-semibold mb-3 focus:outline-none"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Menu</span>
                  </button>

                  <h3 className="text-xl font-bold text-white pb-2 border-b border-white/20">
                    {activeFolder.title}
                  </h3>

                  <div className="pt-2 space-y-1">
                    {activeFolder.children?.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        target={subItem.isExternal ? '_blank' : undefined}
                        rel={subItem.isExternal ? 'noreferrer' : undefined}
                        className="block py-3 text-base text-neutral-200 hover:text-white border-b border-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};
