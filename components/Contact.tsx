'use client';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-white relative">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">Let's work <span className="text-accent">together!</span> ✨</h2>
                    <p className="text-lg text-dark/60 font-medium">Replies within 24 hours • Based in Philippines • Available for remote work</p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto mb-10">
                    <motion.a 
                        href="mailto:jergqweenslyb.flores@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex items-center justify-center gap-4 p-6 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary transition-colors group"
                    >
                        <div className="group-hover:scale-110 transition-transform drop-shadow-sm shrink-0">
                            <Image src="/Gmail_icon_(2026).svg" alt="Gmail" width={48} height={48} />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-dark text-base sm:text-lg break-all">jergqweenslyb.flores@gmail.com</p>
                        </div>
                    </motion.a>

                    <motion.a 
                        href="https://wa.me/639289916452"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex-1 flex items-center justify-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary-light transition-colors group"
                    >
                        <div className="group-hover:scale-110 transition-transform drop-shadow-sm shrink-0 flex items-center justify-center">
                            <Image src="/WhatsApp.svg" alt="WhatsApp" width={56} height={56} />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-dark text-base sm:text-lg break-all">+63 928 991 6452</p>
                        </div>
                    </motion.a>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-dark border-2 border-secondary font-medium hover:border-primary transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5 text-accent" />
                        Download Resume
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
