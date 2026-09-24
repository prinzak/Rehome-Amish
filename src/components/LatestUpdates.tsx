import React from 'react';
import { articlesData } from '../data/siteData';

export const LatestUpdates: React.FC = () => {
  return (
    <section className="w-full bg-[#1c2226] text-white py-16 sm:py-24 border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-10 sm:mb-14">
          The Latest Updates
        </h2>

        {/* Subsection header */}
        <div className="flex items-center justify-between border-b border-neutral-700/60 pb-3 mb-8">
          <span className="text-lg sm:text-xl font-semibold tracking-wide text-neutral-200">
            Stories and Updates
          </span>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="flex flex-col bg-[#242b30] rounded-xl overflow-hidden border border-neutral-700/50 shadow-lg group hover:border-neutral-500 transition-all duration-300"
            >
              {/* Image Container with 1:1 square aspect ratio matching Squarespace summary item */}
              <a
                href={article.link}
                className="w-full aspect-square overflow-hidden bg-neutral-800 block relative"
                aria-label={article.title}
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Date */}
                <time
                  dateTime={article.datetime}
                  className="text-xs font-medium text-neutral-400 mb-2.5 block"
                >
                  {article.date}
                </time>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                  <a href={article.link}>{article.title}</a>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 line-clamp-5 text-justify sm:text-left">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto pt-2">
                  <a
                    href={article.link}
                    className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Articles Button */}
        <div className="mt-14 text-center">
          <a
            href="https://houserabbit.org/articles"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-white border-2 border-white rounded-full hover:bg-white hover:text-[#1c2226] transition-colors duration-200 shadow-md"
          >
            More Articles
          </a>
        </div>
      </div>
    </section>
  );
};
