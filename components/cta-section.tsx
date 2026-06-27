'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.15),transparent_50%)]" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl border border-primary/20" />

          <div className="relative z-10 px-6 py-16 lg:py-20 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Ready to
              <span className="gradient-text"> launch</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Join thousands of developers and businesses who trust Nivle.
              Start free, scale when you&apos;re ready — no strings attached.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hosting">
                <Button size="xl" className="group">
                  <Zap className="mr-2 w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required · 30-day free trial · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
