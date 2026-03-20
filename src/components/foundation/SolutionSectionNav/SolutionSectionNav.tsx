import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export type SolutionSectionNavItem = {
  href: string;
  label: string;
};

type SolutionSectionNavProps = {
  activeHref?: string;
  ariaLabel?: string;
  items: SolutionSectionNavItem[];
};

export function SolutionSectionNav({
  activeHref,
  ariaLabel = "页面内导航",
  items,
}: SolutionSectionNavProps) {
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState({ height: 60, top: 0 });
  const resolvedActiveHref = activeHref ?? items[0]?.href ?? "";
  const activeIndex = Math.max(
    items.findIndex((item) => item.href === resolvedActiveHref),
    0,
  );

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeItem = itemRefs.current[activeIndex];

      if (!activeItem) {
        return;
      }

      setIndicator({
        height: activeItem.offsetHeight,
        top: activeItem.offsetTop,
      });
    };

    updateIndicator();

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            updateIndicator();
          });

    const activeItem = itemRefs.current[activeIndex];

    if (resizeObserver && activeItem) {
      resizeObserver.observe(activeItem);
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex]);

  return (
    <nav className="solution-section-nav" aria-label={ariaLabel}>
      <motion.div
        className="solution-section-nav__active-indicator"
        aria-hidden="true"
        animate={{
          height: indicator.height,
          top: indicator.top,
        }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      {items.map((item, index) => (
        <a
          key={item.label}
          className={`solution-section-nav__item${index === activeIndex ? " is-active" : ""}`}
          href={item.href}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
        >
          <span className="solution-section-nav__rail" aria-hidden="true" />
          <span className="solution-section-nav__label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
