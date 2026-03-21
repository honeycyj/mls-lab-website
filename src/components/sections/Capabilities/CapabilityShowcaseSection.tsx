import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { InteractiveFeatureCard } from "../../foundation/InteractiveFeatureCard/InteractiveFeatureCard";
import { CapabilityExploreMoreCard } from "./CapabilityExploreMoreCard";
import { capabilityEaseOut, type CapabilityCardData } from "./types";

type CapabilityShowcaseSectionProps = {
  cards: CapabilityCardData[];
  className?: string;
  description?: string;
  gridClassName?: string;
  headingClassName?: string;
  id?: string;
  title: string;
};

export function CapabilityShowcaseSection({
  cards,
  className,
  description,
  gridClassName,
  headingClassName,
  id,
  title,
}: CapabilityShowcaseSectionProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  const reveal = (delay = 0, amount = 0.2) => ({
    initial: { opacity: 0, ...(reduceMotion ? {} : { y: 48 }) },
    whileInView: { opacity: 1, ...(reduceMotion ? {} : { y: 0 }) },
    viewport: { once: true, amount },
    transition: { duration: reduceMotion ? 0.35 : 0.7, ease: capabilityEaseOut, delay },
  });

  return (
    <motion.section className={className} id={id} {...reveal()}>
      <motion.div className={headingClassName} {...reveal(0.04)}>
        <div>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <span aria-hidden="true">↓</span>
      </motion.div>

      <div className={gridClassName}>
        {cards.map((card, index) => {
          const isActive = hoveredCapability === index;
          const cardKey =
            card.kind === "explore-more" ? `explore-more-${card.title}` : `${card.title}-${card.linkHref}`;
          const sharedProps = {
            reveal: reveal(0.04 + (index % 4) * 0.06, 0.15),
            reduceMotion,
            isHovered: isActive,
            onHoverStart: () => setHoveredCapability(index),
            onHoverEnd: () => setHoveredCapability((current) => (current === index ? null : current)),
          };

          if (card.kind === "explore-more") {
            return <CapabilityExploreMoreCard key={cardKey} {...sharedProps} />;
          }

          return (
            <InteractiveFeatureCard
              key={cardKey}
              description={card.description}
              hoverIconBackgroundColor={card.hoverIconBackgroundColor}
              hoverIconColor={card.hoverIconColor}
              hoverSurfaceColor={card.hoverSurfaceColor}
              hoverTextColor={card.hoverTextColor}
              iconBackgroundColor={card.iconBackgroundColor}
              iconColor={card.iconColor}
              isHovered={isActive}
              linkHref={card.linkHref}
              linkRel={card.linkRel}
              linkTarget={card.linkTarget}
              onHoverEnd={sharedProps.onHoverEnd}
              onHoverStart={sharedProps.onHoverStart}
              reduceMotion={sharedProps.reduceMotion}
              reveal={sharedProps.reveal}
              surfaceColor={card.surfaceColor}
              textColor={card.textColor}
              title={card.title}
              variant={card.cardVariant}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
