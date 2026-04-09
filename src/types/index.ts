export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  image: string;
  technologies: string[];
  link: string;
  features: string[];
  featuresEn: string[];
  color: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  features: string[];
  featuresEn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  contentEn: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  labelEn: string;
}
