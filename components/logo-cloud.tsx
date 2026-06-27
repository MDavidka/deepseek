'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Stripe', width: 100 },
  { name: 'Vercel', width: 90 },
  { name: 'Notion', width: 100 },
  { name: 'Linear', width: 95 },
  { name: 'Figma', width: 85 },
  { name: 'GitHub', width: 90 },
];

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
            >
              <div
                className="h-7 bg-current opacity-30 rounded"
                style={{ width: logo.width }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
