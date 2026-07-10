// ── Navigation ──
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Exhibition {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  dateRange: string;
  description?: string;
  imageUrl?: string;
  tag: string;
  location: string;
}

export interface LeicaEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  price: string;
  description?: string;
}

export interface OpeningHoursEntry {
  days: string;
  hours: string;
  note?: string;
}

export interface Tour {
  nr: string;
  title: string;
  duration: string;
  description: string;
  price: string;
}

export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export interface Shop {
  title: string;
  description: string;
  hours: OpeningHoursEntry[];
  tag: string;
  href: string | null;
}

export interface Room {
  title: string;
  capacity: string;
  description: string;
}

export interface MenuDay {
  day: string;
  main: string;
  vegetarian: string;
  soup: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  title: string;
  lines: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  imageLabel: string;
  image: string;
}

export interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string | null }[];
}
