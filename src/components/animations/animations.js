export const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const containerStagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
  viewport: { once: false, amount: 0.2 },
};

export const childFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const caterpillarWiggle = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: [0, -10, 0],
  },
  transition: (index) => ({
    delay: index * 0.1,
    duration: 0.4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 5,
    // repeatType: "reverse",
  }),
};
