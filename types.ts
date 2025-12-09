export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features?: string[];
  imageAlt: string;
}

export interface DifferentiatorItem {
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  label: string;
  content: string[];
  link?: {
    text: string;
    url: string;
  };
}