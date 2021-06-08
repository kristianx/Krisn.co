export const pageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.01,
    top: 10,
  },
  visible: {
    transition: {
      top: 0,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
    opacity: 1,
    scale: 1.0,
  },
  mobileExit: {
    opacity: 0,
    scale: 1.5,
  },
  transition: {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};
