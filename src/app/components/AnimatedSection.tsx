'use client';

import { motion } from 'framer-motion';

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="w-full py-20 text-center"
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};