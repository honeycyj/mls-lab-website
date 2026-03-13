import { motion } from "motion/react";

import type { CapabilityCardComponentProps } from "./types";

export function CapabilityExploreMoreCard({
  reveal,
  onHoverStart,
  onHoverEnd,
}: CapabilityCardComponentProps) {
  return (
    <motion.a
      className="capability-explore-card"
      href="#contact"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={reveal.transition}
    >
      <div className="capability-explore-card__content">
        <h3>探索更多能力 →</h3>
      </div>
    </motion.a>
  );
}
