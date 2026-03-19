import { motion, useReducedMotion } from "motion/react";
import { PlusIcon } from "../../../components/foundation/Icons/PlusIcon";
import { capabilityEaseOut } from "../../../components/sections/Capabilities/types";

type AboutOrganizationCardProps = {
  delay: number;
  description: string;
  hoverDescription?: string;
  isHovered: boolean;
  onHoverEnd: () => void;
  onHoverStart: () => void;
  title: string;
};

export function AboutOrganizationCard({
  delay,
  description,
  hoverDescription,
  isHovered,
  onHoverEnd,
  onHoverStart,
  title,
}: AboutOrganizationCardProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const cardClassName = `about-org-card${isHovered ? " is-hovered" : ""}`;
  const hoverBackground = "hsla(240, 70%, 11%, 1)";
  const accentIconBackground = "var(--color-brand-03)";
  const hoverTextColor = "#ffffff";
  const idleTextColor = "rgba(0, 0, 0, 0.85)";
  const idleIconBackground = "#bec3cb";
  const idleIconColor = "#161616";
  const visibleDescription = isHovered ? hoverDescription ?? description : description;

  const overlayDuration = reduceMotion ? 0.2 : 0.38;
  const descriptionDuration = reduceMotion ? 0.18 : 0.24;
  const titleDelay = reduceMotion ? 0 : isHovered ? 0.14 : 0;
  const descriptionDelay = reduceMotion ? 0 : isHovered ? 0.18 : 0;
  const descriptionOffset = reduceMotion ? 0 : 4;
  const idleTopSpacing = reduceMotion ? 96 : 108;
  const hoverTopSpacing = reduceMotion ? 68 : 72;

  const reveal = {
    initial: { opacity: 0, ...(reduceMotion ? {} : { y: 48 }) },
    whileInView: { opacity: 1, ...(reduceMotion ? {} : { y: 0 }) },
    viewport: { once: true as const, amount: 0.15 },
    transition: { duration: reduceMotion ? 0.35 : 0.7, ease: capabilityEaseOut, delay },
  };

  const overlayAnimate = isHovered
    ? { y: "0%", backgroundColor: hoverBackground }
    : { y: reduceMotion ? "100%" : "102%", backgroundColor: hoverBackground };

  const titleColor = isHovered ? hoverTextColor : idleTextColor;

  const plusAnimate = isHovered
    ? {
        backgroundColor: accentIconBackground,
        color: hoverTextColor,
        rotate: 90,
      }
    : {
        backgroundColor: idleIconBackground,
        color: idleIconColor,
        rotate: 0,
      };

  return (
    <motion.article
      className={cardClassName}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={reveal.transition}
      animate={{ y: 0 }}
    >
      <motion.div
        className="about-org-card__overlay"
        aria-hidden="true"
        initial={false}
        animate={overlayAnimate}
        transition={{ duration: overlayDuration, ease: capabilityEaseOut }}
      />
      <div className="about-org-card__body">
        <motion.div
          className="about-org-card__content"
          animate={{
            paddingTop: isHovered ? hoverTopSpacing : idleTopSpacing,
          }}
          transition={{ duration: overlayDuration, ease: capabilityEaseOut, delay: titleDelay }}
        >
          <motion.h3
            animate={{ color: titleColor }}
            transition={{ duration: overlayDuration, ease: capabilityEaseOut, delay: titleDelay }}
          >
            {title}
          </motion.h3>
          <div className="about-org-card__description">
            <motion.p
              className={`about-org-card__description-copy${isHovered ? " is-hovered" : ""}`}
              initial={false}
              animate={{
                color: isHovered ? hoverTextColor : idleTextColor,
                y: isHovered ? 0 : descriptionOffset,
              }}
              transition={{
                duration: descriptionDuration,
                ease: capabilityEaseOut,
                delay: descriptionDelay,
              }}
            >
              {visibleDescription}
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.span
        className="about-org-card__plus"
        aria-hidden="true"
        style={{ transformOrigin: "50% 50%" }}
        animate={plusAnimate}
        transition={{ duration: 0.24, ease: capabilityEaseOut }}
      >
        <PlusIcon size={14} strokeWidth={1.25} />
      </motion.span>
    </motion.article>
  );
}
