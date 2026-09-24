export type ArticleCategory = 'News & Updates' | 'Community' | 'Care & Behavior' | 'Medical';

export interface ArchiveArticle {
  title: string;
  published: string;
  category: ArticleCategory;
  href: string;
}

const update = (path: string) => `https://houserabbit.org/updates/${path}`;

export const articleCategories: ArticleCategory[] = [
  'News & Updates',
  'Community',
  'Care & Behavior',
  'Medical',
];

// Article headlines, dates and categories are indexed here; each link opens its original source.
export const articleArchive: ArchiveArticle[] = [
  // News and updates
  { title: '4th of July Hours', published: 'June 23, 2026', category: 'News & Updates', href: update('2026-july-4') },
  { title: '2025 Holiday Hours', published: 'October 17, 2025', category: 'News & Updates', href: update('2025-holiday-hours') },
  { title: 'Why You Should Microchip Your Rabbit', published: 'August 15, 2025', category: 'News & Updates', href: update('2025-microchip') },
  { title: 'August is Make A Will Month', published: 'August 1, 2025', category: 'News & Updates', href: update('2025-make-a-will-month') },
  { title: 'Throw a summer party for your rabbit', published: 'July 30, 2025', category: 'News & Updates', href: update('2025-throw-a-summer-party') },
  { title: 'Closed For 4th of July', published: 'May 30, 2025', category: 'News & Updates', href: update('4th-of-july-2025') },
  { title: 'Honoring Our Medical Team on World Veterinary Day', published: 'April 25, 2025', category: 'News & Updates', href: update('world-veterinary-day-2025') },
  { title: 'World Spay Day 2025', published: 'February 25, 2025', category: 'News & Updates', href: update('world-spay-day-2025') },
  { title: 'National Pet Vaccination Month', published: 'February 13, 2025', category: 'News & Updates', href: update('national-pet-vaccination-month') },
  { title: 'National Pet Poison Prevention Week', published: 'February 13, 2025', category: 'News & Updates', href: update('national-pet-poison-prevention-week') },
  { title: 'Breaking: Fantastic News! PETCO Stops Selling Rabbits', published: 'September 24, 2024', category: 'News & Updates', href: update('breaking-fantastic-news-petco-stops-selling-rabbits') },
  { title: 'HRS is hiring!', published: 'August 1, 2024', category: 'News & Updates', href: update('get-out-there-n9t2h-7tlgd') },

  // Community stories
  { title: 'Here’s why fostering matters', published: 'August 6, 2026', category: 'Community', href: update('august-2026-fostering') },
  { title: 'California AB 1382 - Preventing the Sale Gene-Edited Pets', published: 'July 23, 2026', category: 'Community', href: update('ca-ab1382') },
  { title: 'Why I Didn’t Keep the Foster Bunny I Fell in Love With', published: 'June 5, 2026', category: 'Community', href: update('2026-june-fostering') },
  { title: '2025 Impact Report', published: 'December 29, 2025', category: 'Community', href: update('2025-impact-report') },
  { title: 'Why Fostering is a Win-Win-Win for Every Lifestyle, for Every Season', published: 'December 18, 2025', category: 'Community', href: update('2025-december-fostering') },
  { title: 'When One Bunny Becomes Two', published: 'November 13, 2025', category: 'Community', href: update('2025-salwen-bunnies') },
  { title: 'Support HRS for Giving Tuesday!', published: 'November 4, 2025', category: 'Community', href: update('2025-giving-tuesday') },
  { title: 'Help HRS Finish 2025 Strong!', published: 'October 21, 2025', category: 'Community', href: update('2025-year-end-giving') },
  { title: 'Let Bunnies Fly campaign: keep the momentum going!', published: 'September 26, 2025', category: 'Community', href: update('2025-september-let-bunnies-fly') },
  { title: 'House Rabbit Society Welcomes Newest Board Member', published: 'September 16, 2025', category: 'Community', href: update('2025-new-board') },
  { title: 'Your support makes this work possible', published: 'September 12, 2025', category: 'Community', href: update('2025-august-support') },
  { title: 'Caring For a Rabbit On a Budget', published: 'September 3, 2025', category: 'Community', href: update('2025-caring-rabbit-budget') },
  { title: 'Let bunnies fly!', published: 'September 1, 2025', category: 'Community', href: update('2025-august-let-bunnies-fly') },
  { title: 'Your generosity makes a big difference to us', published: 'August 28, 2025', category: 'Community', href: update('2025-august-generosity') },
  { title: 'Rabbits like Paulie, Anchovy, and Snow need you', published: 'August 4, 2025', category: 'Community', href: update('2025-clear-the-shelters') },
  { title: 'Our new multilingual educational resources', published: 'July 16, 2025', category: 'Community', href: update('summer-2025-multilingual-resources') },
  { title: 'Your support is needed today!', published: 'July 8, 2025', category: 'Community', href: update('summer-2025-match') },
  { title: '2-week fosters needed this summer', published: 'June 18, 2025', category: 'Community', href: update('june-2025-foster') },
  { title: 'Celebrate National Adopt a Shelter Pet Day with HRS', published: 'April 30, 2025', category: 'Community', href: update('shelter-pet-day-2025') },
  { title: 'You’re invited: HRS spring open house', published: 'April 9, 2025', category: 'Community', href: update('open-house-2025') },
  { title: 'Rabbits are environmentally friendly pets', published: 'April 8, 2025', category: 'Community', href: update('earth-day-2025') },
  { title: 'Help spread the word about rabbits & Easter', published: 'April 1, 2025', category: 'Community', href: update('easter-2025') },
  { title: 'Thank you for being Simone’s valentine', published: 'March 6, 2025', category: 'Community', href: update('special-needs-rabbit-highlight-simone') },
  { title: '2024 Impact Report', published: 'February 6, 2025', category: 'Community', href: update('2024-impact-report') },
  { title: 'HRS is hitting the road!', published: 'May 1, 2024', category: 'Community', href: update('new-hope-in-old-appalachia-lly88-9rlkk') },
  { title: '35 Years of Leaps & Bounds', published: 'September 6, 2023', category: 'Community', href: update('35-years-of-leaps-amp-bounds') },
  { title: 'HRS at Rich City Day!', published: 'June 15, 2023', category: 'Community', href: update('why-deserts-matter-too-maymt-89dw5') },

  // Care and behavior
  { title: 'Can You House Rabbits and Guinea Pigs Together?', published: 'November 3, 2025', category: 'Care & Behavior', href: update('prepare-for-petsitters-dhy65') },
  { title: 'How to Prepare your Home for Pet Sitters', published: 'October 30, 2025', category: 'Care & Behavior', href: update('prepare-for-petsitters') },
  { title: 'Quality of Life', published: 'October 16, 2025', category: 'Care & Behavior', href: update('quality-of-life') },
  { title: 'DIY Bumpers', published: 'October 16, 2025', category: 'Care & Behavior', href: update('diy-bumpers') },
  { title: 'DIY Low Entry Litter Box', published: 'October 16, 2025', category: 'Care & Behavior', href: update('uibnaqx9xgrxygsugz8dqak8uip1tx') },
  { title: 'Rabbit Lingo', published: 'May 3, 2025', category: 'Care & Behavior', href: update('rabbit-lingo') },
  { title: 'Will Work For Food', published: 'December 1, 2022', category: 'Care & Behavior', href: update('will-work-for-food') },
  { title: 'Household Plants and Rabbits', published: 'December 1, 2021', category: 'Care & Behavior', href: update('household-plants-and-rabbits') },
  { title: 'The Art of Rabbit Proofing', published: 'August 1, 2021', category: 'Care & Behavior', href: update('the-art-of-rabbit-proofing') },
  { title: 'To Bun or Not to Bun', published: 'December 12, 2020', category: 'Care & Behavior', href: update('to-bun-or-not-to-bun') },
  { title: 'Improvising a Rabbit Emergency Bed', published: 'December 1, 2020', category: 'Care & Behavior', href: update('rabbit-emergency-bed') },
  { title: 'Four Ways to Protect Your Pets During an Emergency', published: 'December 1, 2019', category: 'Care & Behavior', href: update('four-ways-to-protect-your-pets-during-an-emergency') },
  { title: 'You Can’t Judge A Bunny By His Bite', published: 'December 1, 2019', category: 'Care & Behavior', href: update('cant-judge-a-bunny-by-his-bite') },

  // Medical stories
  { title: 'A heartfelt thank you', published: 'August 18, 2026', category: 'Medical', href: update('august-2026-veterinary-training-initiative') },
  { title: 'Protect Your Rabbit This Holiday Season', published: 'October 20, 2025', category: 'Medical', href: update('october-2025-vaccination') },
  { title: 'Quality of Life', published: 'October 16, 2025', category: 'Medical', href: update('quality-of-life') },
  { title: 'Inside Our Veterinary Training Program', published: 'June 17, 2025', category: 'Medical', href: update('june-2025-veterinary-training-initiative') },
  { title: 'Honoring Our Medical Team on World Veterinary Day', published: 'April 25, 2025', category: 'Medical', href: update('world-veterinary-day-2025') },
  { title: 'World Spay Day 2025', published: 'February 25, 2025', category: 'Medical', href: update('world-spay-day-2025') },
  { title: 'National Pet Vaccination Month', published: 'February 13, 2025', category: 'Medical', href: update('national-pet-vaccination-month') },
  { title: 'National Pet Poison Prevention Week', published: 'February 13, 2025', category: 'Medical', href: update('national-pet-poison-prevention-week') },
  { title: 'Steps When Your Rabbit is Sick', published: 'December 21, 2020', category: 'Medical', href: update('tf2kb9rk6zvza4h999dr8jr64cnbum') },
  { title: 'Prepare an Emergency Kit', published: 'December 18, 2020', category: 'Medical', href: update('prepare-an-emergency-kit') },
  { title: 'Bladder Sludge', published: 'June 10, 2020', category: 'Medical', href: update('bladder-sludge') },
];
