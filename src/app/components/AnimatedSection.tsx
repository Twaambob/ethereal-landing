'use client';

import { motion } from 'framer-motion';

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
    className="relative z-20 w-full py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};