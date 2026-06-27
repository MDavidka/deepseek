import type { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Nivle team. We are here 24/7 to help with sales, support, or any questions you have.',
};

export default function ContactPage() {
  return <ContactContent />;
}
