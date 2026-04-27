"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClientFadeUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClientFadeUp({ children, className = "" }: ClientFadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}