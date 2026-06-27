'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { CTASection } from '@/components/cta-section';

export function BlogContent() {
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
              Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Insights &
              <span className="gradient-text"> guides</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Deep dives into hosting, performance, security, and building for
              the modern web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass glass-hover rounded-xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary/20">
                    Nivle
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-[10px]">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-medium text-primary flex items-center gap-1 hover:underline"
                    >
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
