"use client";

import { motion } from "framer-motion";

/**
 * A single, restrained fade/rise-in used for section-level reveals.
 * Deliberately not applied per-card or per-list-item — see the
 * frontend design guidance this project follows: one considered
 * motion moment reads better than the same transition on everything.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
