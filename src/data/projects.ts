import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Inventory Anomaly Detection',
    category: 'professional',
    year: '2024',
    slug: 'inventory-anomaly-detection',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    description: 'Spearheaded the development of a real-time inventory anomaly detection system using Python and SQL on GCP Databricks. Implemented a two-stage modeling approach with rule-based engine and K-Means clustering, achieving 92% precision and 15% reduction in manual reconciliation efforts.',
    technologies: 'Python, SQL, GCP Databricks, Spark, MLflow, K-Means Clustering',
    location: 'Albertsons Companies Inc.',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
        alt: 'Inventory management dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop',
        alt: 'Data analytics visualization',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '2',
    title: 'GenAIOps Pipeline with Llama-3',
    category: 'professional',
    year: '2024',
    slug: 'genaiops-pipeline',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    description: 'Engineered a production-grade GenAIOps pipeline integrating Vertex AI and Llama-3 to automate root-cause analysis. Implemented prompt versioning and responsible AI checks to ensure model robustness and minimize hallucinations.',
    technologies: 'Vertex AI, Llama-3, GenAIOps, Python, Responsible AI, Prompt Engineering',
    location: 'Albertsons Companies Inc.',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
        alt: 'AI pipeline architecture',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'NLP Chatbot with Azure Cognitive Services',
    category: 'professional',
    year: '2023',
    slug: 'nlp-chatbot',
    coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    description: 'Designed and implemented an NLP-powered chatbot using Azure Cognitive Services, automating customer inquiries and reducing response times by 50%. Created custom intent classification model using TensorFlow and BERT achieving 92% accuracy.',
    technologies: 'Azure Cognitive Services, TensorFlow, BERT, Python, NLP, NLTK, SpaCy',
    location: 'Syntactech Inc.',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop',
        alt: 'Chatbot interface',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Computer Vision Research - Object Detection',
    category: 'research',
    year: '2023',
    slug: 'computer-vision-research',
    coverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    description: 'Conducted comprehensive research in computer vision using OpenCV and TensorFlow, achieving significant improvements in object detection and image classification tasks. Developed neural network architectures for sentiment analysis using Keras.',
    technologies: 'OpenCV, TensorFlow, Keras, scikit-learn, Apache Spark, AWS',
    location: 'UNC Charlotte',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
        alt: 'Computer vision visualization',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'Kafka Streaming Architecture',
    category: 'professional',
    year: '2021',
    slug: 'kafka-streaming',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    description: 'Engineered a Kafka-powered streaming architecture for real-time log ingestion at Wipro Technologies. Built scalable Spark SQL solutions for downstream analytics and designed SSIS pipelines achieving 20% increase in system performance.',
    technologies: 'Apache Kafka, Spark SQL, SSIS, MySQL, Hadoop HDFS, SAS',
    location: 'Medavie Bluecross | Wipro Technologies',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
        alt: 'Data streaming architecture',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Multimodal Analytics Engine',
    category: 'professional',
    year: '2024',
    slug: 'multimodal-analytics',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Built a multimodal analytics engine on Azure Cognitive Services capable of processing structured and unstructured data (text, images, logs), improving incident-classification reliability by 28%.',
    technologies: 'Azure Cognitive Services, Python, NLP, Computer Vision, MLOps',
    location: 'Syntactech Inc.',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        alt: 'Analytics dashboard',
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
