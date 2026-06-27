import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Nivle — Cloud Hosting That Scales With You',
    template: '%s | Nivle',
  },
  description:
    'Lightning-fast cloud hosting with NVMe SSD, global CDN, and 24/7 expert support. From personal sites to enterprise — Nivle scales with you.',
  keywords: [
    'cloud hosting',
    'web hosting',
    'NVMe SSD',
    'managed hosting',
    'VPS',
    'dedicated servers',
  ],
  openGraph: {
    title: 'Nivle — Cloud Hosting That Scales With You',
    description:
      'Lightning-fast cloud hosting with NVMe SSD, global CDN, and 24/7 expert support.',
    type: 'website',
    siteName: 'Nivle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivle — Cloud Hosting That Scales With You',
    description:
      'Lightning-fast cloud hosting with NVMe SSD, global CDN, and 24/7 expert support.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
