'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Upgrades take effect instantly, and you only pay the prorated difference. No downtime during transitions.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans. All payments are processed securely via Stripe.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes — every plan comes with a 30-day money-back guarantee. If you are not completely satisfied within the first 30 days, we will refund your payment in full, no questions asked.',
  },
  {
    q: 'Can I host multiple websites on one plan?',
    a: 'Yes! The Professional plan supports up to 10 websites, and the Enterprise plan supports unlimited websites. Each site gets its own control panel and isolated resources.',
  },
  {
    q: 'Do you help with website migration?',
    a: 'We offer free migration assistance for all plans. Our support team will handle the entire migration process for you — just open a ticket after signing up and we will take care of the rest.',
  },
  {
    q: 'What kind of support do you provide?',
    a: 'All plans include 24/7 support via live chat and ticketing. Professional and Enterprise plans include priority support with faster response times and phone support.',
  },
];

export function HostingFAQ() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked
            <span className="gradient-text"> questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
