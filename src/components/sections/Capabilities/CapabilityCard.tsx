import { motion } from "motion/react";

import { capabilityEaseOut, type CapabilityCardProps } from "./types";

export function CapabilityCard({
  title,
  description,
  featured = false,
  linkHref = "#solutions",
  linkLabel = "了解更多",
  reveal,
  reduceMotion,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: CapabilityCardProps) {
  const hoverBackground = "hsla(240, 70%, 11%, 1)";

  return (
    <motion.article
      className={[
        "capability-card",
        featured ? "capability-card--featured" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={reveal.transition}
      animate={{ y: 0 }}
    >
      <motion.div
        className="capability-card__overlay"
        aria-hidden="true"
        initial={false}
        animate={
          isHovered
            ? { y: "0%", backgroundColor: hoverBackground }
            : reduceMotion
              ? { y: "100%", backgroundColor: hoverBackground }
              : { y: "102%", backgroundColor: hoverBackground }
        }
        transition={{ duration: reduceMotion ? 0.2 : 0.38, ease: capabilityEaseOut }}
      />
      <div className="capability-card__content">
        <motion.h3
          animate={{
            x: isHovered && !reduceMotion ? 6 : 0,
            color: isHovered ? "#ffffff" : "rgba(0, 0, 0, 0.85)",
          }}
          transition={{ duration: 0.28, ease: capabilityEaseOut }}
        >
          {title}
        </motion.h3>
        <motion.p
          animate={{ color: isHovered ? "#ffffff" : "rgba(0, 0, 0, 0.85)" }}
          transition={{ duration: 0.24, ease: capabilityEaseOut }}
        >
          {description}
        </motion.p>
        <div className="capability-card__footer">
          <motion.span
            className="capability-card__icon"
            animate={
              isHovered
                ? {
                    backgroundColor: "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    rotate: 90,
                  }
                : { backgroundColor: "#bec3cb", color: "#262a33", rotate: 0 }
            }
            transition={{ duration: 0.24, ease: capabilityEaseOut }}
          >
            +
          </motion.span>
          {featured ? (
            <motion.a
              href={linkHref}
              animate={{
                x: isHovered && !reduceMotion ? 4 : 0,
                color: isHovered ? "#ffffff" : "rgba(0, 0, 0, 0.85)",
              }}
              transition={{ duration: 0.24, ease: capabilityEaseOut }}
            >
              {linkLabel}
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
