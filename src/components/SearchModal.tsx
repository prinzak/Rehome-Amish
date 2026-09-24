import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, ExternalLink, ArrowRight, Calendar, BookOpen, HeartHandshake } from 'lucide-react';
import { articlesData, upcomingEventsData, bannerSlides, introServices, navigationItems } from '../data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  // Aggregate searchable items
  const matchingArticles = query
    ? articlesData.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.date.toLowerCase().includes(query)
      )
    : [];

  const matchingEvents = query
    ? upcomingEventsData.filter(
        (e) =>
          e.title.toLowerCase().includes(query) ||
          e.excerpt.toLowerCase().includes(query) ||
          e.date.toLowerCase().includes(query)
      )
    : [];

  const matchingServices = query
    ? [...introServices, ...bannerSlides].filter(
        (s, idx, self) =>
          self.findIndex((item) => item.title === s.title) === idx &&
          (s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query))
      )
    : [];

  const flatNavItems: { title: string; href: string; parent?: string }[] = [];
  navigationItems.forEach((nav) => {
    if (nav.children) {
      nav.children.forEach((c) => {
        flatNavItems.push({ title: c.title, href: c.href, parent: nav.title });
      });
    } else {
      flatNavItems.push({ title: nav.title, href: nav.href });
    }
  });

  const matchingNav = query
    ? flatNavItems.filter((n) => n.title.toLowerCase().includes(query))
    : [];

  const totalResults =
    matchingArticles.length +
    matchingEvents.length +
    matchingServices.length +
    matchingNav.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200 transition-all transform scale-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-100 gap-3 bg-neutral-50">
          <SearchIcon className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="search"
            className="w-full bg-transparent text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            placeholder="Search programs, care advice, adoption, events, or articles..."
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-neutral-400 hover:text-neutral-700 font-medium px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="py-8 text-center">
              <p className="text-sm text-neutral-500 mb-3">
                Quick search across all services, resources, articles, and upcoming events.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Adopt', 'Foster', 'Classes', 'Grooming', 'Medical', 'Pantry', 'Hop Shop'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSearchTerm(topic)}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-10 text-center">
              <p className="text-base font-medium text-neutral-800">No direct matches found for "{searchTerm}"</p>
              <p className="text-sm text-neutral-500 mt-1 mb-4">
                You can browse the official House Rabbit Society search index or browse all categories.
              </p>
              <a
                href={`https://houserabbit.org/search?q=${encodeURIComponent(searchTerm)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 hover:text-amber-900 underline"
              >
                Search on houserabbit.org <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Navigation matches */}
          {matchingNav.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Pages & Programs ({matchingNav.length})
              </h4>
              <div className="space-y-1">
                {matchingNav.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-100 group transition-colors"
                  >
                    <div>
                      <span className="text-sm font-medium text-neutral-900 group-hover:text-amber-800">
                        {item.title}
                      </span>
                      {item.parent && (
                        <span className="ml-2 text-xs text-neutral-400">in {item.parent}</span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-600 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Services matches */}
          {matchingServices.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5" /> Services & Resources ({matchingServices.length})
              </h4>
              <div className="space-y-1.5">
                {matchingServices.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.buttonLink}
                    className="block p-2.5 rounded-lg border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
                  >
                    <div className="text-sm font-semibold text-neutral-900">{s.title}</div>
                    <div className="text-xs text-neutral-600 mt-0.5 line-clamp-1">{s.description}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Articles matches */}
          {matchingArticles.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Articles & Updates ({matchingArticles.length})
              </h4>
              <div className="space-y-2">
                {matchingArticles.map((a) => (
                  <a
                    key={a.id}
                    href={a.link}
                    className="block p-2.5 rounded-lg border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
                  >
                    <div className="text-xs text-neutral-400">{a.date}</div>
                    <div className="text-sm font-semibold text-neutral-900 hover:text-amber-800 mt-0.5">
                      {a.title}
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 line-clamp-2">{a.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Events matches */}
          {matchingEvents.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Upcoming Events ({matchingEvents.length})
              </h4>
              <div className="space-y-2">
                {matchingEvents.map((e) => (
                  <a
                    key={e.id}
                    href={e.link}
                    className="block p-2.5 rounded-lg border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
                  >
                    <div className="text-xs text-amber-700 font-medium">{e.date}</div>
                    <div className="text-sm font-semibold text-neutral-900 mt-0.5">{e.title}</div>
                    <p className="text-xs text-neutral-600 mt-1 line-clamp-2">{e.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100/70 border-t border-neutral-200 text-xs text-neutral-500">
          <span>Press ESC to close</span>
          <a
            href="https://houserabbit.org/search"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-neutral-700 hover:text-neutral-950 font-medium"
          >
            Full HRS Search Portal <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
