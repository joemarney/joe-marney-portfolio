import { motion } from "framer-motion";

export default function Wrapper({ animation, children, className = "", style = {} }) {
  return (
    <motion.div initial={animation.initial} whileInView={animation.whileInView} animate={animation.animate} exit={animation.exit} viewport={animation.viewport || {}} transition={animation.transition || {}} className={className} style={style}>
      {children}
    </motion.div>
  );
}
