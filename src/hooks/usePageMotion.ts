import { useReducedMotion } from "motion/react";

const easeOut = [0, 0.62, 0.5, 1] as const;

export function usePageMotion() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0, amount = 0.2) => ({
    initial: { opacity: 0, ...(reducedMotion ? {} : { y: 48 }) },
    whileInView: { opacity: 1, ...(reducedMotion ? {} : { y: 0 }) },
    viewport: { once: true, amount },
    transition: { duration: reducedMotion ? 0.35 : 0.7, ease: easeOut, delay },
  });

  const intro = (delay = 0) => ({
    initial: { opacity: 0, ...(reducedMotion ? {} : { y: 24 }) },
    animate: { opacity: 1, ...(reducedMotion ? {} : { y: 0 }) },
    transition: { duration: reducedMotion ? 0.35 : 0.6, ease: easeOut, delay },
  });

  return {
    intro,
    reducedMotion,
    reveal,
  };
}
