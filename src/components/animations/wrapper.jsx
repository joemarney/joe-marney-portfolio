//! Imports
import { motion } from "framer-motion";

export default function Wrapper({ children, animation, className, ...props }) {
  return (
    <motion.span initial={animation.initial} animate={animation.animate} exit={animation.exit} whileInView={animation.whileInView} viewport={{ once: animation.once || false }} transition={animation.transition || { duration: 0.8 }} className={`inline ${className}`} {...props}>
      {children}
    </motion.span>
  );
}
