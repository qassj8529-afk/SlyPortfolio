'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { TextDrawLink } from '@/components/ui/draw-random-underline';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-display font-bold text-xl tracking-tight text-primary">
          SLY.
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark/80">
          <TextDrawLink href="#about" text="About" />
          <TextDrawLink href="#experience" text="Experience" />
          <TextDrawLink href="#services" text="Services" />
          <TextDrawLink href="#tools" text="Tools" />
        </div>
        <Link href="#contact" className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-all shadow-sm">
          Hire Me
        </Link>
      </div>
    </motion.nav>
  );
}
