import Link from 'next/link';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: [
    { href: '/hosting', label: 'Web Hosting' },
    { href: '/hosting', label: 'VPS Hosting' },
    { href: '/hosting', label: 'Dedicated Servers' },
    { href: '/hosting', label: 'WordPress Hosting' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'Careers' },
  ],
  support: [
    { href: '/contact', label: 'Help Center' },
    { href: '/contact', label: 'Documentation' },
    { href: '/contact', label: 'System Status' },
    { href: '/contact', label: 'Report Abuse' },
  ],
  legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Acceptable Use' },
    { href: '#', label: 'GDPR' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cloud className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">Nivle</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Lightning-fast cloud hosting engineered for speed, security, and
              reliability. From startups to enterprises — we scale with you.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nivle. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
