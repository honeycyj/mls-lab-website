import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { CapabilityCard } from "./CapabilityCard";
import { CapabilityExploreMoreCard } from "./CapabilityExploreMoreCard";
import { capabilityCards } from "./capabilityCards";
import { capabilityEaseOut } from "./types";

export function CapabilitiesSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  const reveal = (delay = 0, amount = 0.2) => ({
    initial: { opacity: 0, ...(reduceMotion ? {} : { y: 48 }) },
    whileInView: { opacity: 1, ...(reduceMotion ? {} : { y: 0 }) },
    viewport: { once: true, amount },
    transition: { duration: reduceMotion ? 0.35 : 0.7, ease: capabilityEaseOut, delay },
  });

  return (
    <motion.section className="section section--capabilities" id="capabilities" {...reveal()}>
      <motion.div className="section__heading section__heading--wide" {...reveal(0.04)}>
        <div>
          <h2>实验室技术原子能力与布局</h2>
          <p>
            围绕声音与影像的生成、编码、传输与重建机制，我们构建跨学科技术体系，致力于提升沉浸式听觉与视觉体验的真实度、空间感与表达力。
          </p>
        </div>
        <span>↓</span>
      </motion.div>

      <div className="capability-grid">
        {capabilityCards.map((card, index) => {
          const sharedProps = {
            reveal: reveal(0.04 + (index % 4) * 0.06, 0.15),
            reduceMotion,
            isHovered: hoveredCapability === index,
            onHoverStart: () => setHoveredCapability(index),
            onHoverEnd: () => setHoveredCapability((current) => (current === index ? null : current)),
          };

          if (card.variant === "explore-more") {
            return <CapabilityExploreMoreCard key={card.id} {...sharedProps} />;
          }

          return <CapabilityCard key={card.id} {...card} {...sharedProps} />;
        })}
      </div>
    </motion.section>
  );
}
