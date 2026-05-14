"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const staggerChild = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/** A plain hover-lift card for server-page use */
export function MotionCard({
  children,
  className,
  hoverY = -6,
  hoverBorder,
  style,
  ...rest
}: HTMLMotionProps<"div"> & { hoverY?: number; hoverBorder?: string }) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: hoverY, ...(hoverBorder ? { borderColor: hoverBorder } : {}) }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger child — use inside StaggerIn */
export function StaggerItem({
  children,
  className,
  hoverY,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  hoverY?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerChild}
      whileHover={hoverY !== undefined ? { y: hoverY } : undefined}
    >
      {children}
    </motion.div>
  );
}

/** Floating card with entrance animation + tilt (for work preview strip) */
export function FloatingCard({
  children,
  className,
  delay = 0,
  rotate = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ rotate, ...style }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: 0 }}
    >
      {children}
    </motion.div>
  );
}

/** Team card with slide-in from right */
export function TeamCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
}

/** Pressable button wrapper */
export function MotionButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  );
}
