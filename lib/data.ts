export interface HostingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export const hostingPlans: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for personal sites and small projects just getting started.',
    monthlyPrice: 5.99,
    yearlyPrice: 4.99,
    features: [
      '1 Website',
      '10 GB SSD Storage',
      'Unmetered Bandwidth',
      'Free SSL Certificate',
      '24/7 Support',
      '1 Email Account',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Built for growing businesses and high-traffic content sites.',
    monthlyPrice: 14.99,
    yearlyPrice: 11.99,
    highlighted: true,
    badge: 'Most Popular',
    features: [
      '10 Websites',
      '50 GB SSD Storage',
      'Unmetered Bandwidth',
      'Free SSL Certificate',
      '24/7 Priority Support',
      'Free Domain (1 year)',
      '50 Email Accounts',
      'Daily Backups',
      'Staging Environment',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large-scale applications requiring maximum power and control.',
    monthlyPrice: 39.99,
    yearlyPrice: 34.99,
    features: [
      'Unlimited Websites',
      '200 GB SSD Storage',
      'Unmetered Bandwidth',
      'Free SSL Certificate',
      '24/7 VIP Support',
      'Free Domain (lifetime)',
      'Unlimited Email Accounts',
      'Real-time Backups',
      'Staging Environment',
      'Dedicated IP',
      'Advanced Security Suite',
      '99.99% Uptime SLA',
    ],
  },
];

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'NVMe SSD storage and LiteSpeed servers deliver page loads in under 200ms globally.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'DDoS protection, WAF, malware scanning, and automatic SSL keep your data safe 24/7.',
  },
  {
    icon: 'Cloud',
    title: 'Global CDN',
    description: '45+ edge locations worldwide ensure your content reaches visitors at the speed of light.',
  },
  {
    icon: 'RefreshCw',
    title: 'Daily Backups',
    description: 'Automated daily backups with one-click restore. Your data is always recoverable.',
  },
  {
    icon: 'Headphones',
    title: '24/7 Expert Support',
    description: 'Our hosting engineers are available around the clock via chat, email, and phone.',
  },
  {
    icon: 'Gauge',
    title: '99.9% Uptime',
    description: 'Redundant infrastructure and proactive monitoring keep your sites online, always.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Lumina Digital',
    avatar: '/avatars/sarah.jpg',
    content: 'Switching to Nivle was the best decision for our agency. Our clients\' sites load 3x faster and the support team is incredible — they respond in minutes, not hours.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    role: 'CTO',
    company: 'ScaleUp SaaS',
    avatar: '/avatars/marcus.jpg',
    content: 'We migrated 50+ applications to Nivle without a hitch. The staging environments and one-click deploy have transformed our workflow. Enterprise-grade at startup-friendly pricing.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Developer',
    company: 'Freelance',
    avatar: '/avatars/emily.jpg',
    content: 'As a solo dev, I need hosting that just works. Nivle gives me everything — Git integration, SSL, backups — without the complexity. My go-to for every project.',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-ssd-storage-matters',
    title: 'Why NVMe SSD Storage Matters for Your Website in 2025',
    excerpt: 'Discover how NVMe technology reduces latency and improves SEO rankings through faster page speeds.',
    author: 'Alex Turner',
    date: '2025-01-15',
    category: 'Performance',
    readTime: '6 min read',
    image: '/blog/ssd-storage.jpg',
  },
  {
    id: '2',
    slug: 'choosing-hosting-plan',
    title: 'How to Choose the Right Hosting Plan: A Complete Guide',
    excerpt: 'Navigate the hosting landscape with confidence. We break down what each tier actually means.',
    author: 'Priya Sharma',
    date: '2025-01-10',
    category: 'Guides',
    readTime: '8 min read',
    image: '/blog/hosting-guide.jpg',
  },
  {
    id: '3',
    slug: 'securing-wordpress-2025',
    title: 'Securing Your WordPress Site: The 2025 Security Checklist',
    excerpt: 'From WAF rules to plugin hardening — the definitive guide to locking down your WordPress install.',
    author: 'Alex Turner',
    date: '2025-01-05',
    category: 'Security',
    readTime: '10 min read',
    image: '/blog/wordpress-security.jpg',
  },
];
