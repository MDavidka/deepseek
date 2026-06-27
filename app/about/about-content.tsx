'use client';

import { motion } from 'framer-motion';
import { Cloud, Heart, Rocket, Target, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/cta-section';

const stats = [
  { value: '150K+', label: 'Customers worldwide' },
  { value: '45+', label: 'Edge locations' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '2019', label: 'Founded' },
];

const values = [
  {
    icon: Rocket,
    title: 'Speed Above All',
    description:
      'We obsess over milliseconds. Every part of our stack — from NVMe storage to edge caching — is optimized for raw speed.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'Our support team responds in under 5 minutes on average. We treat every customer like they are our only customer.',
  },
  {
    icon: Target,
    title: 'Radical Transparency',
    description:
      'No hidden fees, no surprise invoices, no dark patterns. What you see is what you pay — always.',
  },
  {
    icon: Users,
    title: 'Built for Developers',
    description:
      'We build tools that developers love: Git integration, staging environments, API access, and one-click deploys.',
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="accent" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              We believe hosting should be
              <span className="gradient-text"> fast, simple, and fair</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nivle was born from frustration — slow servers, confusing pricing,
              and support that took days. We set out to build the hosting company
              we always wanted to use.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What
              <span className="gradient-text"> drives us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass glass-hover rounded-xl p-6"
              >
                <v.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold mb-1.5">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
