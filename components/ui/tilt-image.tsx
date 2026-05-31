'use client';

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export const TiltImage = ({ src, alt }: { src: string; alt: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white group cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem] overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-medium text-xl rotate-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out drop-shadow-md">
              Sly Flores
            </p>
        </div>
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
        sizes="(max-width: 768px) 100vw, 500px"
        priority
      />
    </motion.div>
  );
};
