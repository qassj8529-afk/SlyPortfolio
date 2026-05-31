'use client';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function WhyHireMe() {
    const reasons = [
        "Fast learner",
        "Adaptable to new tools and systems",
        "Strong communication skills",
        "Organized and detail-oriented",
        "Willing to improve and grow"
    ];

    return (
        <section className="py-24 px-6 bg-secondary/40 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            
             <div className="max-w-4xl mx-auto">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-white rounded-[2rem] p-8 md:p-16 border border-secondary shadow-sm"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-8">Why Hire <span className="text-primary">Me?</span></h2>
                            <ul className="space-y-4">
                                {reasons.map((reason, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 text-lg font-medium text-dark/80"
                                    >
                                        <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                                        {reason}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-custom p-[2px] rounded-3xl shrink-0">
                            <div className="bg-white p-8 rounded-[22px] h-full flex items-center justify-center text-center">
                                <p className="text-xl md:text-2xl font-display font-bold text-dark/90 italic leading-snug">
                                    "I may not have years of experience, but I bring <span className="text-primary">dedication</span>, <span className="text-primary-light">creativity</span>, and <span className="text-accent">consistency</span> to every task."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
             </div>
        </section>
    )
}
