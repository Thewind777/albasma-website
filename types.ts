export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    services: string;
    vision: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
  };
  vision: {
    title: string;
    description: string;
    points: string[];
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  features: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    getInTouch: string;
    sendMessage: string;
  };
  ai: {
    title: string;
    placeholder: string;
    disclaimer: string;
  }
}