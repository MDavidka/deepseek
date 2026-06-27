import type { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Nivle. We are on a mission to make cloud hosting fast, simple, and accessible for everyone.',
};

export default function AboutPage() {
  return <AboutContent />;
}
