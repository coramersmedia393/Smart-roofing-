
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'res-roofing',
    title: 'Residential Roofing',
    description: 'Protect your family and investment with our high-quality residential roofing solutions, from asphalt shingles to designer tiles.',
    icon: 'fa-house-chimney',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'com-roofing',
    title: 'Commercial Roofing',
    description: 'Heavy-duty roofing systems designed for commercial buildings, focusing on longevity, energy efficiency, and structural integrity.',
    icon: 'fa-building',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    description: 'Fast, reliable leak repairs and storm damage restoration. We tackle minor issues before they become major expenses.',
    icon: 'fa-hammer',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'inspections',
    title: 'Roof Inspections',
    description: 'Comprehensive diagnostic inspections using advanced thermal imaging to detect hidden vulnerabilities.',
    icon: 'fa-magnifying-glass',
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'gutters',
    title: 'Gutters & Drainage',
    description: 'Complete gutter installation and maintenance to ensure water moves away from your foundation safely.',
    icon: 'fa-droplet',
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'solar',
    title: 'Solar Integration',
    description: 'Combine sustainable energy with premium roofing. We install solar-ready systems and integrated shingles.',
    icon: 'fa-sun',
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Smart Roofing replaced our old cedar shake roof with modern architectural shingles. The team was professional, clean, and finished ahead of schedule.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Property Manager',
    content: 'Managing multiple commercial buildings, I need a roofer I can trust. Smart Roofing is my go-to for all repairs and new installations.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=mark'
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Real Estate Agent',
    content: 'I always recommend Smart Roofing to my clients. Their inspection reports are thorough and their workmanship is consistently top-tier.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];
