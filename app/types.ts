export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  duration: string;
  role: string;
  features: string[];
  challenges: string[];
  metrics: string[];
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tag: string;
  description: string;
  bulletPoints: string[];
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'systems' | 'tools';
  proficiency: number; // 1 to 5 or %
  description: string;
}
