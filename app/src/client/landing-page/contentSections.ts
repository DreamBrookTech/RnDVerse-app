import { DOCS_URL, BLOG_URL } from '../../shared/constants';
import daBoiAvatar from '../static/da-boi.png';
import avatarPlaceholder from '../static/avatar-placeholder.png';

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: DOCS_URL },
  { name: 'Blog', href: BLOG_URL },
];
export const features = [
  {
    name: 'Research Processing Unit (RPU)',
    description: 'Integrated Cyber-Physical R&D Operating System',
    icon: '🤝',
    href: DOCS_URL,
  },
  {
    name: 'PhDBot',
    description: 'Domain Expert for Scientific Research Planning and Analysis',
    icon: '🔐',
    href: DOCS_URL,
  },
  {
    name: 'CloudSpace',
    description: 'Integrated Open-Source Scientific SaaS Platform',
    icon: '🥞',
    href: DOCS_URL,
  },
  {
    name: 'ALFONSO',
    description: 'DePIN ecosystem for scientific RnD.',
    icon: '💸',
    href: DOCS_URL,
  },
];
export const testimonials = [
  {
    name: 'User #1',
    role: 'CEO',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "RnDVerse is a Pioneer in Metaverse for Scientific RnD application",
  },
  {
    name: 'User #2',
    role: 'Professor @ Ivy League Univ',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This platforms changes the way research is done.',
  },
  {
    name: 'User #3',
    role: 'Researcher @ Corporate ',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'RnDVerse helps me do 10x more productive with my team research and development task, in a fraction of the cost!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Roadmap for RnDVerse?',
    answer: 'Learn more from our page',
    href: 'https://rndverse.com',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DOCS_URL },
    { name: 'Blog', href: BLOG_URL },
  ],
  company: [
    { name: 'About', href: 'https://rndverse.com' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
