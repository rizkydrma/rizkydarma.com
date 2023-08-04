export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

export const slideUpText = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 3 + 0.3 * i },
  }),
};

export const skewed = {
  initial: {
    rotate: 0,
  },
  enter: (i: number) => ({
    rotate: -3,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 5 + 0.3 * i },
  }),
};

export const bounce = {
  initial: {
    opacity: 0,
    rotate: 90,
    scale: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 3 + 0.3 * i },
  }),
};
