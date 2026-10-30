"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, className, ariaLabel }: { children: ReactNode; className: string; ariaLabel?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div
    className={className}
    aria-label={ariaLabel}
    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.22 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
