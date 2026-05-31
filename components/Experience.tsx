'use client';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    "Social media content creation and posting",
    "Caption writing and engagement support",
    "Basic graphic design (Canva)",
    "Administrative tasks (email, files, scheduling)",
    "Communication support and client coordination",
    "Research and data organization tasks",
    "Basic video editing for short-form content",
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">Practice <span className="text-primary">Experience</span></h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-secondary relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Briefcase className="w-32 h-32 text-primary" />
           </div>
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                2 Years Experience
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-2">Digital Support & Online Assistance</h3>
              <p className="text-primary-light font-medium mb-8">Freelance / Practice Experience</p>

              <div className="grid md:grid-cols-2 gap-4">
                {experiences.map((exp, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-secondary hover:border-primary-light hover:shadow-sm transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-dark/80 text-sm md:text-base font-medium">{exp}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-secondary/50 flex items-start gap-3">
                 <span className="text-2xl">📌</span>
                 <div>
                    <h4 className="font-bold text-dark">Focus</h4>
                    <p className="text-dark/70 text-sm">Helping with online presence, organization, and digital tasks for individuals and small projects.</p>
                 </div>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
