export const modalVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.25 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeIn" },
  },
};

export const pageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.25 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeIn" },
  },
};

export const iconVariants = {
  hidden: { rotate: -45 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

export const textVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "ease" },
  },
};

export const basicVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
