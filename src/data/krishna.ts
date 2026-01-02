import type { PhotographerInfo } from '@/types';
import krishnaProfileImg from '@/assets/krishna-profile.png';

export interface KrishnaInfo extends Omit<PhotographerInfo, 'awards' | 'clients' | 'education' | 'approach'> {
  title: string;
  skills: Array<{ name: string; percentage: number }>;
  services: Array<{ title: string; description: string; icon: string }>;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
  certifications: string[];
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    gpa: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
}

export const krishnaInfo: KrishnaInfo = {
  name: 'Krishna Hemanth Javvaji',
  title: 'ML Engineer II',
  tagline: 'AI/ML Engineer & Data Enthusiast',
  heroIntroduction: 'Strategic AI/ML Engineer with 5+ years of experience architecting end-to-end Azure and cloud-native ML pipelines. Expert in automating the full model lifecycle, implementing Responsible AI governance, and deploying scalable LLM solutions.',
  biography: `Strategic AI/ML Engineer with 5+ years of experience architecting end-to-end Azure and cloud-native ML pipelines. Expert in automating the full model lifecycle, implementing Responsible AI governance, and deploying scalable LLM solutions.

Proven track record of bridging Data Science and Engineering to deliver measurable financial benefits and operational efficiency. Hands-on experience in building and maintaining Agentic AI pipelines, exploring the application of LLMs for enhanced data insights, and collaborating with cross-functional teams to deliver impactful solutions aligned with business objectives.

Currently working at Albertsons Companies Inc. as an AI/ML Engineer II, where I spearhead the development of real-time inventory anomaly detection systems and production-grade GenAIOps pipelines integrating Vertex AI and Llama-3.

My technical expertise spans Python, TensorFlow, PyTorch, Azure Machine Learning, Databricks, and cloud platforms including GCP, Azure, and AWS. I'm passionate about leveraging cutting-edge AI technologies to solve complex business problems and drive innovation.`,
  location: 'Plano, TX',
  email: 'hemanth.javvaji@gmail.com',
  phone: '+1 (980) 680-4541',
  availability: 'Open to new opportunities',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/krishna-javvaji',
    github: 'https://github.com/krishna-javvaji'
  },
  portraitImage: krishnaProfileImg,
  
  skills: [
    { name: 'Python & ML Frameworks', percentage: 95 },
    { name: 'Generative AI & LLMs', percentage: 90 },
    { name: 'Cloud Platforms (Azure, GCP, AWS)', percentage: 90 },
    { name: 'MLOps & Data Engineering', percentage: 85 },
    { name: 'NLP & Deep Learning', percentage: 85 },
    { name: 'SQL & NoSQL Databases', percentage: 80 },
  ],
  
  services: [
    {
      title: 'AI/ML Solutions',
      description: 'End-to-end ML pipeline development, from data ingestion to model deployment. Expertise in TensorFlow, PyTorch, and cloud-native solutions.',
      icon: 'brain'
    },
    {
      title: 'GenAI & LLM Integration',
      description: 'Building production-grade GenAIOps pipelines with Vertex AI, Azure OpenAI, Langchain, and RAG architectures for enterprise applications.',
      icon: 'sparkles'
    },
    {
      title: 'MLOps & DevOps',
      description: 'Implementing MLflow, CI/CD pipelines, Docker, Kubernetes, and automated workflows for scalable, reproducible ML deployments.',
      icon: 'settings'
    }
  ],
  
  certifications: [
    'Databricks Certified Generative AI Engineer Associate - Sep 2024',
    'Microsoft Certified: Azure AI Fundamentals - May 2024',
    'Introduction to Generative AI Studio – Google - Aug 2023'
  ],
  
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of North Carolina at Charlotte',
      location: 'Charlotte, NC',
      period: 'Jan 2022 - May 2023',
      gpa: '3.8'
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'KL University',
      location: 'Vijayawada, India',
      period: 'Jul 2015 - May 2019',
      gpa: '3.4'
    }
  ],
  
  experience: [
    {
      title: 'AI/ML Engineer II',
      company: 'Albertsons Companies Inc.',
      period: 'Oct 2024 – Present',
      highlights: [
        'Spearheaded real-time inventory anomaly detection system with 92% precision using Python and SQL on GCP Databricks',
        'Engineered production-grade GenAIOps pipeline integrating Vertex AI and Llama-3 for automated root-cause analysis',
        'Optimized Databricks ingestion pipelines, reducing compute costs and data latency by 45%',
        'Established enterprise-wide MLOps standards with MLflow for full artifact tracking and compliance'
      ]
    },
    {
      title: 'AI/ML Intern',
      company: 'Syntactech Inc.',
      period: 'Sep 2023 – Sep 2024',
      highlights: [
        'Engineered event-driven MLOps solution using Azure Machine Learning and Azure Event Grid',
        'Designed NLP chatbot using Azure Cognitive Services, reducing response times by 50%',
        'Created custom intent classification model with BERT achieving 92% accuracy',
        'Built multimodal analytics engine improving incident-classification reliability by 28%'
      ]
    },
    {
      title: 'ML Research Assistant',
      company: 'UNC Charlotte',
      period: 'Apr 2022 – May 2023',
      highlights: [
        'Conducted computer vision research using OpenCV and TensorFlow for object detection',
        'Developed neural network architectures for sentiment analysis using Keras and TensorFlow',
        'Utilized Apache Spark for large-scale data processing and ML workflows'
      ]
    },
    {
      title: 'Database Engineer',
      company: 'Medavie Bluecross | Wipro Technologies',
      period: 'Jul 2019 - Dec 2021',
      highlights: [
        'Designed SSIS pipelines achieving 20% increase in system performance',
        'Optimized MySQL databases with 25% reduction in query response times',
        'Engineered Kafka-powered streaming architecture for real-time log ingestion',
        'Built scalable Spark SQL solutions for downstream analytics'
      ]
    }
  ],
  
  testimonials: [
    {
      quote: "Krishna's expertise in building production-grade ML pipelines at Albertsons was exceptional. His inventory anomaly detection system achieved 92% precision and his work on optimizing Databricks pipelines saved us 45% in compute costs. A true asset to any data engineering team.",
      name: 'Technical Lead',
      role: 'Albertsons Companies Inc.'
    },
    {
      quote: "During his time at Wipro, Krishna led our data warehousing and DevOps team of 10 engineers with remarkable efficiency. His practical problem-solving approach and ability to design scalable ETL pipelines improved our system performance by 20%. He consistently delivered beyond expectations.",
      name: 'Team Lead',
      role: 'Data Engineer, Wipro Technologies'
    },
    {
      quote: "Krishna's work on our NLP chatbot using Azure Cognitive Services reduced customer response times by 50%. His custom intent classification model with BERT achieved 92% accuracy. His ability to bridge AI research with practical business applications is outstanding.",
      name: 'AI Solutions Architect',
      role: 'Syntactech Inc.'
    }
  ]
};

// Re-export as photographerInfo for compatibility
export const photographerInfo = krishnaInfo;
