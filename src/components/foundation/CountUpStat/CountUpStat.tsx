import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  className?: string;
  label: string;
  labelClassName?: string;
  value: string;
  valueClassName?: string;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { numericValue: 0, suffix: value };
  }

  return {
    numericValue: Number(match[1]),
    suffix: match[2],
  };
}

export function CountUpStat({
  className,
  label,
  labelClassName,
  value,
  valueClassName,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion() ?? false;
  const { numericValue, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(() => (reduceMotion ? numericValue : 0));

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (reduceMotion) {
      setDisplayValue(numericValue);
      return;
    }

    let frameId = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(numericValue * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isInView, numericValue, reduceMotion]);

  return (
    <div ref={ref} className={className}>
      <strong className={valueClassName}>
        {displayValue}
        {suffix}
      </strong>
      <span className={labelClassName}>{label}</span>
    </div>
  );
}
