"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
