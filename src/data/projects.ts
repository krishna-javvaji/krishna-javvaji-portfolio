import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Twitter Sentiment Analysis',
    category: 'research',
    year: '2024',
    slug: 'twitter-sentiment-analysis',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    description: 'A comprehensive research project analyzing sentiment patterns in Twitter data using Natural Language Processing and Machine Learning techniques. Built scalable data pipelines to process millions of tweets in real-time.',
    technologies: 'Python, NLP, TensorFlow, Apache Spark',
    location: 'Academic Research',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
        alt: 'Twitter data visualization',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop',
        alt: 'Sentiment analysis dashboard',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '2',
    title: 'Beach Run',
    category: 'academic',
    year: '2023',
    slug: 'beach-run',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'An academic project focused on building data-driven applications with real-time analytics and user interaction tracking.',
    technologies: 'Python, Flask, PostgreSQL, React',
    location: 'University Project',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        alt: 'Application dashboard',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Smart Campus Network Simulation',
    category: 'published',
    year: '2023',
    slug: 'smart-campus-network',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Published research paper on simulating and optimizing smart campus network infrastructure. Implemented IoT data collection and analysis pipelines for campus-wide monitoring.',
    technologies: 'Cisco Packet Tracer, Python, IoT, Network Analysis',
    location: 'Published Paper',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
        alt: 'Network topology diagram',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Azure Fundamentals',
    category: 'course',
    year: '2023',
    slug: 'azure-fundamentals',
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    description: 'Comprehensive course project demonstrating proficiency in Microsoft Azure cloud services, including data storage, processing, and deployment strategies.',
    technologies: 'Microsoft Azure, Azure Data Factory, Azure SQL, PowerBI',
    location: 'Certification Project',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=800&fit=crop',
        alt: 'Azure architecture diagram',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
