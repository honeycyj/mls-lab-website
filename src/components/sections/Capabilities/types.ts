export const capabilityEaseOut = [0, 0.62, 0.5, 1] as const;

export type CapabilityRevealConfig = {
  initial: { opacity: number; y?: number };
  whileInView: { opacity: number; y?: number };
  viewport: { once: boolean; amount: number };
  transition: { duration: number; ease: typeof capabilityEaseOut; delay: number };
};

export type CapabilityCardComponentProps = {
  reveal: CapabilityRevealConfig;
  reduceMotion: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export type CapabilityCardData = {
  id: string;
  variant?: "default" | "explore-more";
  title: string;
  description?: string;
  featured?: boolean;
  linkHref?: string;
  linkLabel?: string;
};

export type CapabilityCardProps = CapabilityCardComponentProps & CapabilityCardData;
