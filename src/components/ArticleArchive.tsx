import React, { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Search } from 'lucide-react';
import { articleArchive, articleCategories, ArticleCategory } from '../data/articleArchive';

const sections: { category: ArticleCategory; heading: string; intro: string }[] = [
  { category: 'News & Updates', heading: 'Latest News and Updates', intro: 'Announcements, new resources, and recent stories from the rabbit community.' },
  { category: 'Community', heading: 'Rabbit Community Stories', intro: 'Rescue, adoption, foster, education, and the people helping rabbits.' },
  { category: 'Care & Behavior', heading: 'Rabbit Care and Behavior', intro: 'Everyday guidance and stories about living well with rabbits.' },
  { category: 'Medical', heading: 'Rabbit Health and Medical Stories', intro: 'Health education and veterinary care stories. For an individual rabbit’s health, consult a rabbit-experienced veterinarian.' },
];

export const ArticleArchive: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'All stories'>('All stories');
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const matchingArticles = useMemo(() => articleArchive.filter((article) => {
    const matchesCategory = activeCategory === 'All stories' || article.category === activeCategory;
    const matchesQuery = !normalizedQuery || `${article.title} ${article.category} ${article.published}`.toLocaleLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  }), [activeCategory, normalizedQuery]);

  const counts = useMemo(() => Object.fromEntries(
    ['All stories', ...articleCategories].map((category) => [
      category,
      category === 'All stories' ? articleArchive.length : articleArchive.filter((item) => item.category === category).length,
    ]),
  ) as Record<string, number>, []);

  return (
    <main id="main-content" className="flex-grow bg-[#f7f5f1] text-[#25231f]">
      <header className="relative overflow-hidden bg-[#232a27] text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <img src="https://images.squarespace-cdn.com/content/v1/66bd213251482915e63ab74e/3d9a1ff4-f25f-4dc9-b001-9db7f815b336/CauliflowerFoster10CR.jpg?format=1500w" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <a href="/" className="mb-7 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">Home <span aria-hidden="true">/</span> Stories</a>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#dfbd8c]">Learn, share, and care</p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">Stories, care guides, and updates</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">A growing library of rabbit care advice, health information, community stories, and news for people who want to give rabbits a safer, happier life.</p>
          <a href="#archive" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d8b687] px-6 py-3 text-sm font-semibold text-[#25231f] transition hover:bg-white">Explore the library <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section id="archive" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#927449]">Browse the library</p>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">Find a story or topic</h2>
          </div>
          <label className="flex w-full items-center gap-3 rounded-full border border-[#ded8cd] bg-white px-5 py-3 shadow-sm focus-within:border-[#98774e] lg:max-w-sm">
            <Search className="h-5 w-5 shrink-0 text-[#827a6c]" aria-hidden="true" />
            <span className="sr-only">Search stories</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search stories and topics" className="w-full bg-transparent text-sm text-[#25231f] outline-none placeholder:text-[#938b7e]" />
          </label>
        </div>

        <div className="mb-12 flex gap-2 overflow-x-auto pb-2" aria-label="Filter stories by category">
          {(['All stories', ...articleCategories] as const).map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${activeCategory === category ? 'border-[#282e2a] bg-[#282e2a] text-white' : 'border-[#d9d2c6] bg-white text-[#4e4a42] hover:border-[#927449]'}`}>
              {category} <span className="ml-1 text-xs opacity-70">{counts[category]}</span>
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {sections.map((section) => {
            const stories = matchingArticles.filter((article) => article.category === section.category);
            if (!stories.length) return null;
            return (
              <section key={section.category} aria-labelledby={`heading-${section.category.replace(/[^a-z]+/gi, '-').toLowerCase()}`}>
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#ded8cd] pb-4">
                  <div>
                    <h2 id={`heading-${section.category.replace(/[^a-z]+/gi, '-').toLowerCase()}`} className="font-serif text-2xl font-medium sm:text-3xl">{section.heading}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6c665b]">{section.intro}</p>
                  </div>
                  <span className="hidden shrink-0 text-sm text-[#827a6c] sm:inline">{stories.length} stories</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {stories.map((story) => (
                    <article key={`${story.category}-${story.title}`} className="group flex min-h-36 flex-col justify-between rounded-2xl border border-[#e5dfd5] bg-white p-5 shadow-[0_2px_10px_rgba(36,32,24,0.03)] transition hover:-translate-y-0.5 hover:border-[#c9b18f] hover:shadow-md sm:p-6">
                      <div>
                        <div className="mb-4 flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.12em] text-[#887d6c]">
                          <span>{story.category}</span>
                          <time>{story.published}</time>
                        </div>
                        <h3 className="font-serif text-xl leading-snug text-[#292720]">{story.title}</h3>
                      </div>
                      <a href={story.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#795e3d] transition group-hover:text-[#3e3120]">
                        Read the story <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {matchingArticles.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#c9c0b2] bg-white px-6 py-14 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-[#927449]" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl">No matching stories</h2>
            <p className="mt-2 text-sm text-[#6c665b]">Try another title or choose a different category.</p>
          </div>
        )}

        <aside className="mt-16 rounded-3xl bg-[#e9e3d8] px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#795e3d]">Keep exploring</p>
          <h2 className="mt-3 max-w-2xl font-serif text-2xl font-medium sm:text-3xl">Looking for a specific rabbit-care topic?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5e594f]">Browse the full House Rabbit Society archive for additional articles and resources. The stories above are organized by the same broad themes to make browsing easier.</p>
          <a href="https://houserabbit.org/articles" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2a302c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#455047]">Visit the source article archive <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </aside>
      </section>
    </main>
  );
};
