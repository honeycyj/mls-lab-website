import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const DESKTOP_CURSOR_MEDIA = "(hover: hover) and (pointer: fine)";
const HIDDEN_POSITION = -100;
const CURSOR_ANCHOR_X = 3;
const CURSOR_ANCHOR_Y = 3;
const CURSOR_OFFSET_X = -18;
const CURSOR_OFFSET_Y = 0;
const CURSOR_X = CURSOR_ANCHOR_X + CURSOR_OFFSET_X;
const CURSOR_Y = CURSOR_ANCHOR_Y + CURSOR_OFFSET_Y;
const CURSOR_SPRING = { damping: 60, stiffness: 284, mass: 1 };

function CursorGlyph() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11H19V12H12V19H11V12H4V11H11V4H12V11Z" fill="#C9C9C9" />
    </svg>
  );
}

export function GlobalCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pointerX = useMotionValue(HIDDEN_POSITION);
  const pointerY = useMotionValue(HIDDEN_POSITION);
  const springX = useSpring(pointerX, CURSOR_SPRING);
  const springY = useSpring(pointerY, CURSOR_SPRING);
  const offsetPointerX = useTransform(pointerX, (value) => value + CURSOR_X);
  const offsetPointerY = useTransform(pointerY, (value) => value + CURSOR_Y);
  const offsetSpringX = useTransform(springX, (value) => value + CURSOR_X);
  const offsetSpringY = useTransform(springY, (value) => value + CURSOR_Y);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(DESKTOP_CURSOR_MEDIA);

    const updateEnabled = () => {
      const nextEnabled = mediaQuery.matches;
      setIsEnabled(nextEnabled);
      setIsVisible(false);

      if (!nextEnabled) {
        pointerX.set(HIDDEN_POSITION);
        pointerY.set(HIDDEN_POSITION);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!mediaQuery.matches) {
        return;
      }

      setIsVisible(true);
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [pointerX, pointerY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      className="global-cursor"
      aria-hidden="true"
      style={{
        x: prefersReducedMotion ? offsetPointerX : offsetSpringX,
        y: prefersReducedMotion ? offsetPointerY : offsetSpringY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <CursorGlyph />
    </motion.div>
  );
}
