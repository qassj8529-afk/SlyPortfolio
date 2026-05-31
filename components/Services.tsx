'use client';
import { motion } from 'motion/react';
import { LayoutGrid, Mail, MessageSquare, PaintbrushIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Social Media Management",
    icon: LayoutGrid,
    items: ["Content creation & posting", "Content planning & scheduling", "Caption writing", "Graphic design (Canva)", "Engagement & community interaction"],
    className: "md:col-span-2 md:row-span-2 bg-[#F3F0FF] border-2 border-transparent hover:border-primary/20",
    iconColor: "text-primary",
  },
  {
    title: "Virtual Assistant Support",
    icon: Mail,
    items: ["Email & inbox management", "Calendar scheduling", "Data entry", "File organization", "Research tasks"],
    className: "md:col-span-1 md:row-span-2 bg-white border border-secondary hover:border-primary/20",
    iconColor: "text-primary-light",
  },
  {
    title: "Communication Support",
    icon: MessageSquare,
    items: ["Client messaging", "Follow-ups", "Meeting coordination", "Customer support assistance"],
    className: "md:col-span-1 md:row-span-2 bg-secondary/50 border border-secondary hover:border-primary/20",
    iconColor: "text-accent",
  },
  {
    title: "Creative Services",
    icon: PaintbrushIcon,
    items: ["Basic graphic design", "Photo editing", "Short-form video editing", "Digital content creation"],
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border border-secondary hover:border-primary/20",
    iconColor: "text-primary",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">My <span className="text-primary">Services</span></h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={cn(
                "p-8 rounded-3xl flex flex-col group overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300",
                service.className
              )}
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-500 scale-150">
                <service.icon className="w-48 h-48" />
              </div>
              <service.icon className={cn("w-10 h-10 mb-6 group-hover:scale-110 origin-left transition-transform duration-300", service.iconColor)} />
              <h3 className="text-2xl font-display font-bold text-dark mb-6 relative z-10">{service.title}</h3>
              <ul className="space-y-3 mt-auto relative z-10">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-dark/70 text-sm md:text-base font-medium">
                    <span className="text-accent mt-0.5 group-hover:scale-125 transition-transform duration-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
