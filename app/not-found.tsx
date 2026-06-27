import Link from 'next/link';
import { ArrowLeft, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Cloud className="w-16 h-16 text-primary/40 mx-auto mb-6" />
        <h1 className="text-6xl font-bold tracking-tight mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This page drifted into the cloud. Let&apos;s get you back on solid ground.
        </p>
        <Link href="/">
          <Button size="lg" className="group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
