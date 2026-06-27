'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/hosting', label: 'Hosting' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:bg-primary/50 transition-colors" />
              <Cloud className="relative w-7 h-7 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nivle
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-foreground bg-white/[0.05]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/hosting">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-foreground bg-white/[0.05]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3 px-4">
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" className="w-full" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/hosting" className="flex-1">
                  <Button className="w-full" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
