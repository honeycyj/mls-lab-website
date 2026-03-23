import { motion } from "motion/react";
import type { CSSProperties } from "react";
import "./interactiveFeatureCard.css";
import { PlusIcon } from "../Icons/PlusIcon";

const interactiveFeatureCardEaseOut = [0, 0.62, 0.5, 1] as const;

export type InteractiveFeatureCardVariant = "default" | "dark";

export type InteractiveFeatureCardProps = {
  className?: string;
  description?: string;
  hoverIconBackgroundColor?: string;
  hoverIconColor?: string;
  hoverSurfaceColor?: string;
  hoverTextColor?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
  isHovered: boolean;
  linkHref: string;
  linkRel?: string;
  linkTarget?: string;
  onHoverEnd: () => void;
  onHoverStart: () => void;
  reduceMotion: boolean;
  reveal: {
    initial: { opacity: number; y?: number };
    transition: { duration: number; ease: typeof interactiveFeatureCardEaseOut; delay: number };
    viewport: { once: boolean; amount: number };
    whileInView: { opacity: number; y?: number };
  };
  surfaceColor?: string;
  textColor?: string;
  title: string;
  variant?: InteractiveFeatureCardVariant;
};

const interactiveFeatureCardVariantDefaults: Record<
  InteractiveFeatureCardVariant,
  {
    hoverIconBackgroundColor: string;
    hoverIconColor: string;
    hoverSurfaceColor: string;
    hoverTextColor: string;
    iconBackgroundColor: string;
    iconColor: string;
    surfaceColor: string;
    textColor: string;
  }
> = {
  default: {
    hoverIconBackgroundColor: "var(--color-brand-03)",
    hoverIconColor: "#ffffff",
    hoverSurfaceColor: "hsla(240, 70%, 11%, 1)",
    hoverTextColor: "#ffffff",
    iconBackgroundColor: "#bec3cb",
    iconColor: "#262a33",
    surfaceColor: "var(--color-gray-surface)",
    textColor: "rgba(0, 0, 0, 0.85)",
  },
  dark: {
    hoverIconBackgroundColor: "var(--color-brand-03)",
    hoverIconColor: "#ffffff",
    hoverSurfaceColor: "hsla(240, 70%, 11%, 1)",
    hoverTextColor: "#ffffff",
    iconBackgroundColor: "rgba(255, 255, 255, 0.2)",
    iconColor: "#ffffff",
    surfaceColor: "var(--color-brand-01)",
    textColor: "#ffffff",
  },
};

export function InteractiveFeatureCard({
  className,
  description,
  hoverIconBackgroundColor,
  hoverIconColor,
  hoverSurfaceColor,
  hoverTextColor,
  iconBackgroundColor,
  iconColor,
  isHovered,
  linkHref,
  linkRel,
  linkTarget,
  onHoverEnd,
  onHoverStart,
  reduceMotion,
  reveal,
  surfaceColor,
  textColor,
  title,
  variant = "default",
}: InteractiveFeatureCardProps) {
  const palette = interactiveFeatureCardVariantDefaults[variant];

  return (
    <motion.a
      className={["capability-card", `interactive-feature-card--${variant}`, className].filter(Boolean).join(" ")}
      href={linkHref}
      rel={linkRel}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      target={linkTarget}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={reveal.transition}
      animate={{ y: 0 }}
      style={
        {
          "--interactive-card-hover-surface": hoverSurfaceColor ?? palette.hoverSurfaceColor,
          "--interactive-card-icon-color": iconColor ?? palette.iconColor,
          "--interactive-card-surface": surfaceColor ?? palette.surfaceColor,
        } as CSSProperties
      }
    >
      <motion.div
        className="capability-card__overlay"
        aria-hidden="true"
        initial={false}
        animate={
          isHovered
            ? { y: "0%", backgroundColor: hoverSurfaceColor ?? palette.hoverSurfaceColor }
            : { y: "100%", backgroundColor: hoverSurfaceColor ?? palette.hoverSurfaceColor }
        }
        transition={{ duration: reduceMotion ? 0.2 : 0.38, ease: interactiveFeatureCardEaseOut }}
      />
      <div className="capability-card__content">
        <div className="capability-card__heading">
          <motion.h3
            animate={{ color: isHovered ? hoverTextColor ?? palette.hoverTextColor : textColor ?? palette.textColor }}
            transition={{ duration: 0.28, ease: interactiveFeatureCardEaseOut }}
          >
            {title}
          </motion.h3>
          {description ? (
            <motion.p
              animate={{ color: isHovered ? hoverTextColor ?? palette.hoverTextColor : textColor ?? palette.textColor }}
              transition={{ duration: 0.24, ease: interactiveFeatureCardEaseOut }}
            >
              {description}
            </motion.p>
          ) : null}
        </div>
        <div className="capability-card__footer">
          <motion.span
            className="capability-card__icon"
            style={{ transformOrigin: "50% 50%" }}
            animate={
              isHovered
                ? {
                    backgroundColor: hoverIconBackgroundColor ?? palette.hoverIconBackgroundColor,
                    color: hoverIconColor ?? palette.hoverIconColor,
                    rotate: 90,
                  }
                : {
                    backgroundColor: iconBackgroundColor ?? palette.iconBackgroundColor,
                    color: iconColor ?? palette.iconColor,
                    rotate: 0,
                  }
            }
            transition={{ duration: 0.24, ease: interactiveFeatureCardEaseOut }}
          >
            <PlusIcon size={14} strokeWidth={1.25} />
          </motion.span>
          <motion.span
            style={{ visibility: isHovered ? "visible" : "hidden" }}
            animate={{
              opacity: isHovered ? 1 : 0,
              color: isHovered ? hoverTextColor ?? palette.hoverTextColor : textColor ?? palette.textColor,
            }}
            transition={{ duration: 0.24, ease: interactiveFeatureCardEaseOut }}
          >
            了解更多
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}
