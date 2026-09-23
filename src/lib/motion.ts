import type { Transition, Variants } from 'framer-motion';

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.48,
  ease: motionEase,
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

export const revealGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const cardLift = { y: -5 };
