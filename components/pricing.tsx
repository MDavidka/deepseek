'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { hostingPlans, formatCurrency } from '@/lib/data';

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            No hidden fees, no surprise invoices. Choose the plan that fits your
            needs and scale when you&apos;re ready.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium transition-colors ${
              !yearly ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative w-12 h-6 rounded-full bg-secondary border border-border transition-colors hover:bg-secondary/80"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-0.5 w-5 h-5 rounded-full bg-primary shadow"
              animate={{ left: yearly ? 'calc(100% - 22px)' : '2px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              yearly ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Yearly
            <Badge variant="accent" className="ml-2 text-[10px] px-1.5 py-0">
              Save 20%
            </Badge>
          </span>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {hostingPlans.map((plan, i) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex"
              >
                <Card
                  className={`flex-1 flex flex-col relative transition-shadow duration-300 ${
                    isHighlighted
                      ? 'border-primary/50 glow bg-card/80'
                      : 'glass glass-hover'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={yearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                        >
                          <span className="text-4xl font-bold tracking-tight">
                            {formatCurrency(price)}
                          </span>
                          <span className="text-sm text-muted-foreground ml-1">
                            /mo
                          </span>
                        </motion.div>
                      </AnimatePresence>
                      {yearly && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Billed yearly — {formatCurrency(plan.yearlyPrice * 12)}/yr
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="block">
                      <Button
                        variant={isHighlighted ? 'default' : 'outline'}
                        className="w-full group"
                        size="lg"
                      >
                        {isHighlighted ? (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Start Free Trial
                          </>
                        ) : (
                          <>
                            Get Started
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
