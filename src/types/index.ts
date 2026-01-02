/**
 * Core TypeScript interfaces for Krishna Javvaji Portfolio
 */

export type ProjectCategory = 'research' | 'academic' | 'published' | 'course' | 'professional';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  technologies?: string;
  location?: string;
  slug: string;
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach?: string;
  awards?: string[];
  clients?: string[];
  education?: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    github?: string;
    twitter?: string;
  };
  portraitImage: string;
  skills?: Skill[];
  services?: Service[];
  testimonials?: Testimonial[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'data-engineering' | 'ml-ai' | 'devops' | 'consulting';
  message: string;
  timestamp: Date;
}
