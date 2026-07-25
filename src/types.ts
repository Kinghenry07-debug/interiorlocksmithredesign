export interface ServiceItem {
  id: string;
  title: string;
  category: 'commercial' | 'automotive' | 'residential' | 'safes' | 'keys' | 'access-control';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  imagePlaceholder: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  badge: string;
  text: string;
  location?: string;
  serviceCategory?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  onCallInfo: string;
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
}

export interface QuoteRequest {
  firstName: string;
  lastName: string;
  companyName?: string;
  phone: string;
  email: string;
  location: string;
  serviceType: string;
  urgency: 'emergency' | 'today' | 'scheduled';
  message: string;
}
