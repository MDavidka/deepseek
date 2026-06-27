'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

const contactCards = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team in real-time. Average response time: under 2 minutes.',
    action: 'Start Chat',
    available: true,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email and we will respond within 1 hour during business hours.',
    action: 'hello@nivle.com',
    available: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us for urgent matters. Available for Professional and Enterprise customers.',
    action: '+1 (555) 123-4567',
    available: true,
  },
];

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <Badge variant="accent" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              We are here to
              <span className="gradient-text"> help</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need sales advice, technical support, or just want to
              say hello — our team is ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Left: Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="glass glass-hover rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{card.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {card.description}
                      </p>
                      <p className="text-sm font-medium text-primary mt-2">
                        {card.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  24/7 Support · M-F 9-6 Sales
                </div>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-6 lg:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We will get back to you within a few hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic</Label>
                      <Select>
                        <SelectTrigger id="topic">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="migration">Migration Help</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
