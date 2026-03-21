import type { InteractiveFeatureCardProps, InteractiveFeatureCardVariant } from "../../foundation/InteractiveFeatureCard/InteractiveFeatureCard";

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

type CapabilityInteractiveCardData = {
  kind?: "interactive";
  cardVariant?: InteractiveFeatureCardVariant;
  title: string;
  description?: string;
  linkHref: string;
  linkRel?: InteractiveFeatureCardProps["linkRel"];
  linkTarget?: InteractiveFeatureCardProps["linkTarget"];
  surfaceColor?: InteractiveFeatureCardProps["surfaceColor"];
  hoverSurfaceColor?: InteractiveFeatureCardProps["hoverSurfaceColor"];
  textColor?: InteractiveFeatureCardProps["textColor"];
  hoverTextColor?: InteractiveFeatureCardProps["hoverTextColor"];
  iconBackgroundColor?: InteractiveFeatureCardProps["iconBackgroundColor"];
  hoverIconBackgroundColor?: InteractiveFeatureCardProps["hoverIconBackgroundColor"];
  iconColor?: InteractiveFeatureCardProps["iconColor"];
  hoverIconColor?: InteractiveFeatureCardProps["hoverIconColor"];
};

type CapabilityExploreMoreCardData = {
  kind: "explore-more";
  title: string;
};

export type CapabilityCardData = CapabilityInteractiveCardData | CapabilityExploreMoreCardData;
