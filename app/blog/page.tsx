import type { Metadata } from 'next';
import { BlogContent } from './blog-content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, guides, and news from the Nivle team. Learn about hosting, web performance, security, and more.',
};

export default function BlogPage() {
  return <BlogContent />;
}
