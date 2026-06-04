'use client';
import { motion } from 'motion/react';
import { MapPin, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[85vh] justify-center relative overflow-hidden">
      
      {/* 21st.dev style animated background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      {/* Decorative floating blurred spots */}
      <motion.div 
        animate={{ 
            x: [0, 30, -20, 0], 
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1] 
        }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10 mix-blend-multiply" 
      />
      <motion.div 
        animate={{ 
            x: [0, -40, 20, 0], 
            y: [0, 40, -10, 0],
            scale: [1, 1.2, 0.8, 1] 
        }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl -z-10 mix-blend-multiply" 
      />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-dark mb-6"
      >
        Hi, I'm <span className="text-gradient">Sly</span> 👋
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-medium text-dark/70 mb-8 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-secondary shadow-lg shadow-primary/5"
      >
        <span>Social Media Manager</span>
        <span className="hidden md:inline text-accent font-bold">•</span>
        <span>Virtual Assistant</span>
        <span className="hidden md:inline text-accent font-bold">•</span>
        <span>Communication Support</span>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl text-dark/60 max-w-2xl mb-12 leading-relaxed font-medium"
      >
        "I help individuals and businesses stay organized, visible, and efficient online."
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-dark/70"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-xl border border-secondary">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Based in the Philippines (GMT+8)</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-xl border border-secondary">
          <Globe className="w-4 h-4 text-primary" />
          <span>Open to international clients</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-xl border border-secondary">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Fast learner | Adaptable | Detail-oriented</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
      >
        <Link 
          href="#contact" 
          className="group relative px-8 py-4 rounded-full bg-dark text-white font-medium hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center justify-center gap-2">
             Hire Me
          </span>
        </Link>
        <Link 
          href="#services" 
          className="px-8 py-4 rounded-full bg-white text-dark border border-secondary font-medium hover:border-primary transition-all w-full sm:w-auto group hover:shadow-md hover:-translate-y-1"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
