//! Imports
import { motion } from "framer-motion";

export default function Wrapper({ animation, children, className, inline = false }) {
  return (
    <motion.div initial={animation.initial} whileInView={animation.whileInView} viewport={{ once: animation.once || false }} transition={animation.transition || { duration: 0.8 }} style={inline ? { display: "inline" } : {}} className={className}>
      {children}
    </motion.div>
  );
}
