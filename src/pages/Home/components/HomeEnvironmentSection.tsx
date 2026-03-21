import { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { PageReveal } from "../../../components/foundation/PageMotion/PageMotion";

type HomeEnvironmentSectionProps = {
  images: string[];
};

function EnvironmentArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      {direction === "previous" ? (
        <path d="M9.75 3.5L5.25 8L9.75 12.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6.25 3.5L10.75 8L6.25 12.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function HomeEnvironmentSection({ images }: HomeEnvironmentSectionProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const loopWidthRef = useRef(0);
  const cardOffsetsRef = useRef<number[]>([]);
  const transitionRef = useRef<ReturnType<typeof animate> | null>(null);
  const latestIndexRef = useRef(0);
  const trackX = useMotionValue(0);

  const imageCount = images.length;
  const repeatedImages = [...images, ...images, ...images];
  const velocity = 28;

  const stopTransition = () => {
    transitionRef.current?.stop();
    transitionRef.current = null;
  };

  const normalizeIndex = (index: number) => {
    if (imageCount === 0) {
      return 0;
    }

    return ((index % imageCount) + imageCount) % imageCount;
  };

  const normalizeTrack = (value: number) => {
    const loopWidth = loopWidthRef.current;

    if (!loopWidth) {
      return value;
    }

    let nextValue = value;
    const minTrack = -loopWidth * 2;
    const maxTrack = -loopWidth;

    while (nextValue <= minTrack) {
      nextValue += loopWidth;
    }

    while (nextValue > maxTrack) {
      nextValue -= loopWidth;
    }

    return nextValue;
  };

  const getTrackOffset = (value = trackX.get()) => {
    const loopWidth = loopWidthRef.current;

    if (!loopWidth) {
      return 0;
    }

    let nextOffset = -normalizeTrack(value) - loopWidth;

    while (nextOffset < 0) {
      nextOffset += loopWidth;
    }

    while (nextOffset >= loopWidth) {
      nextOffset -= loopWidth;
    }

    return nextOffset;
  };

  const syncActiveIndex = (value = trackX.get()) => {
    const offsets = cardOffsetsRef.current;

    if (!offsets.length) {
      return;
    }

    const currentOffset = getTrackOffset(value);
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    offsets.forEach((offset, index) => {
      const distance = Math.abs(offset - currentOffset);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (latestIndexRef.current !== nearestIndex) {
      latestIndexRef.current = nearestIndex;
      setActiveIndex(nearestIndex);
    }
  };

  const alignTrack = (index = latestIndexRef.current) => {
    const loopWidth = loopWidthRef.current;
    const offsets = cardOffsetsRef.current;
    const nextIndex = normalizeIndex(index);

    if (!loopWidth || !offsets.length) {
      return;
    }

    stopTransition();
    trackX.set(-(loopWidth + offsets[nextIndex]));
    latestIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  const measureTrack = () => {
    const gallery = galleryRef.current;

    if (!gallery || imageCount === 0) {
      return;
    }

    const cards = Array.from(gallery.querySelectorAll<HTMLElement>("[data-environment-card='true']"));

    if (cards.length < imageCount * 2) {
      return;
    }

    const firstSetCards = cards.slice(0, imageCount);
    const secondSetStart = cards[imageCount];
    const firstSetOrigin = firstSetCards[0]?.offsetLeft ?? 0;
    const loopWidth = (secondSetStart?.offsetLeft ?? 0) - firstSetOrigin;

    if (!loopWidth) {
      return;
    }

    loopWidthRef.current = loopWidth;
    cardOffsetsRef.current = firstSetCards.map((card) => card.offsetLeft - firstSetOrigin);
    alignTrack(latestIndexRef.current);
  };

  const animateToIndex = (index: number) => {
    const loopWidth = loopWidthRef.current;
    const offsets = cardOffsetsRef.current;
    const nextIndex = normalizeIndex(index);

    if (!loopWidth || !offsets.length) {
      return;
    }

    const currentOffset = getTrackOffset();
    const targetOffset = offsets[nextIndex];
    const forwardOffset = targetOffset <= currentOffset ? targetOffset + loopWidth : targetOffset;
    const backwardOffset = targetOffset >= currentOffset ? targetOffset - loopWidth : targetOffset;
    const resolvedOffset =
      Math.abs(forwardOffset - currentOffset) <= Math.abs(backwardOffset - currentOffset)
        ? forwardOffset
        : backwardOffset;
    const targetValue = -(loopWidth + resolvedOffset);

    stopTransition();
    latestIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    if (reduceMotion) {
      trackX.set(normalizeTrack(targetValue));
      syncActiveIndex();
      return;
    }

    transitionRef.current = animate(trackX, targetValue, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: syncActiveIndex,
      onComplete: () => {
        trackX.set(normalizeTrack(trackX.get()));
        transitionRef.current = null;
        syncActiveIndex();
      },
    });
  };

  useEffect(() => {
    measureTrack();

    return () => {
      stopTransition();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      measureTrack();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || imageCount <= 1 || transitionRef.current) {
      return;
    }

    const loopWidth = loopWidthRef.current;

    if (!loopWidth) {
      return;
    }

    const nextValue = normalizeTrack(trackX.get() - velocity * (delta / 1000));
    trackX.set(nextValue);
    syncActiveIndex(nextValue);
  });

  return (
    <PageReveal as="section" className="section section--environment">
      <PageReveal className="section__heading section__heading--wide environment__heading" delay={0.04}>
        <h2>实验室环境</h2>
        <div className="environment__controls">
          <button className="environment__control" type="button" aria-label="上一张环境照片" onClick={() => animateToIndex(latestIndexRef.current - 1)}>
            <EnvironmentArrow direction="previous" />
          </button>
          <button className="environment__control" type="button" aria-label="下一张环境照片" onClick={() => animateToIndex(latestIndexRef.current + 1)}>
            <EnvironmentArrow direction="next" />
          </button>
        </div>
      </PageReveal>
      <div className="environment__viewport">
        <motion.div ref={galleryRef} className="environment__gallery" style={{ x: trackX }}>
          {repeatedImages.map((image, index) => {
            const logicalIndex = index % imageCount;
            const isMiddleSet = index >= imageCount && index < imageCount * 2;

            return (
              <div key={`${image}-${index}`} className="environment__card" data-environment-card="true" aria-hidden={!isMiddleSet}>
                <img src={image} alt={isMiddleSet ? `实验室环境 ${logicalIndex + 1}` : ""} />
              </div>
            );
          })}
        </motion.div>
      </div>
      <PageReveal className="environment__dots" delay={0.12} aria-label="环境图片区分页">
        {images.map((image, index) => (
          <button
            key={image}
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            aria-label={`查看第 ${index + 1} 张环境照片`}
            onClick={() => animateToIndex(index)}
          />
        ))}
      </PageReveal>
    </PageReveal>
  );
}
