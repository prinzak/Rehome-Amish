export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
  children?: {
    title: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export interface ServiceCard {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BannerSlide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  isExternal?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  datetime: string;
  excerpt: string;
  link: string;
  imageUrl: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  excerpt: string;
  link: string;
  imageUrl: string;
}
