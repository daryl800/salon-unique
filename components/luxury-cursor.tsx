'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const LuxuryCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 260, damping: 24 });
  const sy = useSpring(y, { stiffness: 260, damping: 24 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 14);
      y.set(e.clientY - 14);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-7 w-7 rounded-full border border-accent/70 bg-accent/20 mix-blend-screen md:block"
      style={{ x: sx, y: sy }}
    />
  );
};
