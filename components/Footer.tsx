'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jerg-qweensly-b-flores-b70595352', icon: '/linkedin.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1DzE4HKqG1/', icon: '/facebook.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/slyxqueny?igsh=bGRiYXNvYzdxeWo1', icon: '/instagram.svg' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@slyyuh?_r=1&_t=ZS-96l8mN9PlEA', icon: '/tiktok.svg' },
];

function DockItem({ item, mouseX }: { item: typeof socials[0], mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative rounded-full bg-white border border-gray-200 dark:border-white/10 flex items-center justify-center p-2 isolate group shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Tooltip */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-dark text-white text-xs px-3 py-1.5 rounded-md font-medium whitespace-nowrap z-50 pointer-events-none drop-shadow-md">
        {item.name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark rotate-45 pointer-events-none"></div>
      </div>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full h-full relative overflow-hidden flex items-center justify-center rounded-full pointer-events-auto cursor-pointer">
         <Image src={item.icon} alt={item.name} width={40} height={40} className="w-[70%] h-[70%] object-contain" />
      </a>
    </motion.div>
  );
}

export function Footer() {
  const mouseX = useMotionValue(Infinity);

  return (
    <footer 
      className="w-full border-t border-secondary/20 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.05)] relative py-12 px-6 bg-white overflow-hidden flex items-center flex-col justify-end mt-auto min-h-[300px]"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)]"></div>
      
      <div className="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none" />
      
      <motion.h3 
        className="text-lg font-bold text-dark mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Find me here —
      </motion.h3>

      <motion.div 
        className="relative z-10 flex items-end gap-4 rounded-2xl bg-white/50 backdrop-blur-md border border-gray-200/50 p-4 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {socials.map((item) => (
          <DockItem key={item.name} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
      <div className="text-center mt-6 text-sm text-gray-500 font-medium relative z-10">
        © {new Date().getFullYear()} Jerg Qweensly B. Flores. All rights reserved.
      </div>
    </footer>
  );
}
