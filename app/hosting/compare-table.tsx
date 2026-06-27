'use client';

import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const rows = [
  { feature: 'Websites', starter: '1', pro: '10', enterprise: 'Unlimited' },
  { feature: 'SSD Storage', starter: '10 GB', pro: '50 GB', enterprise: '200 GB' },
  { feature: 'Bandwidth', starter: 'Unmetered', pro: 'Unmetered', enterprise: 'Unmetered' },
  { feature: 'Free SSL', starter: true, pro: true, enterprise: true },
  { feature: 'Email Accounts', starter: '1', pro: '50', enterprise: 'Unlimited' },
  { feature: 'Free Domain', starter: false, pro: '1 year', enterprise: 'Lifetime' },
  { feature: 'Daily Backups', starter: false, pro: true, enterprise: true },
  { feature: 'Staging', starter: false, pro: true, enterprise: true },
  { feature: 'Dedicated IP', starter: false, pro: false, enterprise: true },
  { feature: 'Priority Support', starter: false, pro: true, enterprise: true },
  { feature: 'Security Suite', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
  { feature: 'Uptime SLA', starter: '99.9%', pro: '99.9%', enterprise: '99.99%' },
];

function renderValue(value: string | boolean) {
  if (value === true) return <Check className="w-4 h-4 text-green-500 mx-auto" />;
  if (value === false) return <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function CompareTable() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Full feature
            <span className="gradient-text"> comparison</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">
                    Starter
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold bg-primary/[0.03]">
                    <span className="flex items-center justify-center gap-2">
                      Professional
                      <Badge variant="accent" className="text-[10px] px-1.5 py-0">
                        Popular
                      </Badge>
                    </span>
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/30 last:border-0 transition-colors hover:bg-white/[0.01] ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                    }`}
                  >
                    <td className="py-3.5 px-6 text-sm text-muted-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {renderValue(row.starter)}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-primary/[0.02]">
                      {renderValue(row.pro)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {renderValue(row.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
