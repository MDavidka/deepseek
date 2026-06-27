'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Cloud,
  RefreshCw,
  Headphones,
  Gauge,
} from 'lucide-react';
import { features } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Cloud,
  RefreshCw,
  Headphones,
  Gauge,
};

export function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Everything you need to
            <br />
            <span className="gradient-text">run at scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Purpose-built infrastructure that handles traffic spikes, keeps data
            safe, and loads your content in milliseconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass glass-hover rounded-xl p-6 lg:p-8 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
