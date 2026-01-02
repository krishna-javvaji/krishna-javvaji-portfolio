import type { PhotographerInfo } from '@/types';
import krishnaProfileImg from '@/assets/krishna-profile.png';

export interface KrishnaInfo extends Omit<PhotographerInfo, 'awards' | 'clients' | 'education' | 'approach'> {
  skills: Array<{ name: string; percentage: number }>;
  services: Array<{ title: string; description: string; icon: string }>;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    link?: string;
  }>;
}

export const krishnaInfo: KrishnaInfo = {
  name: 'Krishna Javvaji',
  tagline: 'Data Enthusiast',
  heroIntroduction: 'As a passionate Data Engineer and Technology Enthusiast, I\'m on a mission to harness the power of data to transform industries and drive innovation.',
  biography: `As a passionate Data Engineer and Technology Enthusiast, I'm on a mission to harness the power of data to transform industries and drive innovation.

What I Bring to the Table:

Data Whisperer: I specialize in turning data into actionable intelligence, driving informed decision-making for organizations.

Tech Alchemist: I bridge the gap between business needs and technology solutions, ensuring alignment and success.

Innovation Evangelist: I'm passionate about staying at the forefront of emerging technologies and trends, always ready to lead and adapt.

My Vision:
I envision a future where data-driven strategies empower businesses to reach new heights, and I'm committed to making that vision a reality. Together, let's explore the limitless possibilities of data and technology!

Let's Connect and Innovate:
I believe in the power of collaboration. Whether you're a fellow data enthusiast, a tech visionary, or someone looking to embark on a data-driven journey, let's connect and explore how we can create positive change together.`,
  location: 'United States',
  email: 'krishnajavvaji@example.com',
  phone: '+1 (555) 000-0000',
  availability: 'Open to new opportunities',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/krishna-javvaji',
    github: 'https://github.com/krishna-javvaji'
  },
  portraitImage: krishnaProfileImg,
  
  skills: [
    { name: 'Data Engineering', percentage: 90 },
    { name: 'AI & Machine Learning', percentage: 80 },
    { name: 'ETL', percentage: 75 },
    { name: 'Scripting', percentage: 80 },
  ],
  
  services: [
    {
      title: 'Database Design',
      description: 'Your Database Management needs taken care as per your requirement!',
      icon: 'database'
    },
    {
      title: 'DevOps',
      description: 'SDLC development Operations including end to end testing with pipelining',
      icon: 'settings'
    },
    {
      title: 'Machine Learning & AI',
      description: 'Integrate your business with AI-Chatbots and advanced Algorithms for Business Developments',
      icon: 'brain'
    }
  ],
  
  testimonials: [
    {
      quote: "I work with Krishna on Data Processing Projects. He is an expert in Collaborative work. I know that he are good at doing tasks the require Technical Prowess. I want to recommend him for this job.",
      name: 'Aditya Mulagalpalli',
      role: 'Mechantronics Engineer'
    },
    {
      quote: "I worked with Krishna when I was with Wipro. We were a team of about 10 people who were in charge of Data Warehousing and DevOps for an Insurance company. He led the team and made sure all members worked as a cohesive unit to achieve our goals. Your practical approach to problem-solving was a great asset to our team.",
      name: 'Swathi Geerlakunta',
      role: 'Data Engineer'
    },
    {
      quote: "I have seen him resolving conflicts and handle many difficult situations for the last few years with remarkable patience and admirable tact. He loves people; works hard and always lifts the spirits of those around him. I believe these are the characteristics and qualities represent all that is good for the company.",
      name: 'Rupesh Vemuleti',
      role: 'Project Teammate'
    }
  ],
  
  projects: [
    {
      id: '1',
      title: 'Twitter Sentiment Analysis',
      category: 'Research Project',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    },
    {
      id: '2',
      title: 'Beach Run',
      category: 'Academic Project',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      id: '3',
      title: 'Smart Campus Network Simulation',
      category: 'Published Paper',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    },
    {
      id: '4',
      title: 'Azure Fundamentals',
      category: 'Course Project',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
    }
  ]
};

// Re-export as photographerInfo for compatibility
export const photographerInfo = krishnaInfo;
