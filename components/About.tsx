'use client';
import { motion } from 'motion/react';
import { TiltImage } from '@/components/ui/tilt-image';
import { assetPath } from '@/lib/asset-path';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">About <span className="text-primary">Me</span></h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-lg text-dark/80 leading-relaxed max-w-4xl mx-auto"
        >
            <div className="relative group w-56 sm:w-64 md:w-80 float-none mx-auto mb-8 md:float-left md:mr-10 md:mb-6 lg:mr-12">
                <div className="absolute inset-0 bg-gradient-custom rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
                <TiltImage 
                    src={assetPath('/profile-picture.png')} 
                    alt="Sly Picture" 
                />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-6 text-dark flex items-center md:items-start justify-center md:justify-start gap-2 pt-2">
              Hello!
            </h3>
            
            <p className="mb-6">
              I am <strong className="text-primary font-bold">Sly</strong>, an 18-year-old creative and detail-oriented aspiring digital support professional passionate about helping individuals, businesses, and brands grow through effective communication, organization, and online presence management.
            </p>
            <p className="mb-6">
              While I am still building professional experience, I am a fast learner who adapts easily to new tools, environments, and responsibilities. I am eager to continuously improve my skills and grow through every opportunity and project I take on.
            </p>
            
            <div className="clear-both" />
            
            <p className="mb-8 border-l-4 border-accent pl-6 py-2 text-dark italic font-medium">
              &quot;This portfolio reflects my creativity, communication skills, and willingness to learn. I believe that dedication, adaptability, and passion matter just as much as experience.&quot;
            </p>
        </motion.div>
      </div>
    </section>
  );
}
