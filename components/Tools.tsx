'use client';
import { motion } from 'motion/react';
import { Layers, BriefcaseBusiness, MessagesSquare } from 'lucide-react';

export function Tools() {
    const toolCategories = [
        {
            title: "Design & Content",
            icon: Layers,
            tools: ["Canva", "CapCut", "Adobe Express", "Pinterest", "TikTok", "Instagram"],
            color: "text-accent"
        },
        {
            title: "Productivity & Admin",
            icon: BriefcaseBusiness,
            tools: ["Google Workspace", "Microsoft Office", "Notion", "Zoom"],
            color: "text-primary"
        },
        {
            title: "Communication",
            icon: MessagesSquare,
            tools: ["Messenger", "WhatsApp", "Telegram", "LinkedIn", "Discord"],
            color: "text-primary-light"
        }
    ];

    return (
        <section id="tools" className="py-24 px-6 bg-white outline-none">
            <div className="max-w-5xl mx-auto">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">Tools I <span className="text-primary">Use</span></h2>
                    <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {toolCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-secondary/20 border border-secondary hover:border-primary-light transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-white border border-secondary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${category.color}`}>
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-dark mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.tools.map((tool, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-white border border-secondary text-sm font-medium text-dark/80 shadow-sm cursor-default hover:text-primary transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
