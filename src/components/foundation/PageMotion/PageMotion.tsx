import { motion } from "motion/react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { usePageMotion } from "../../../hooks/usePageMotion";

const motionElements = {
  a: motion.a,
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  img: motion.img,
  nav: motion.nav,
  p: motion.p,
  section: motion.section,
} as const;

type MotionTag = keyof typeof motionElements;

type PageMotionProps<Tag extends MotionTag> = {
  amount?: number;
  as?: Tag;
  children?: ReactNode;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<Tag>, "children">;

export function PageIntro<Tag extends MotionTag = "div">({
  as,
  children,
  delay = 0,
  ...props
}: PageMotionProps<Tag>) {
  const { intro } = usePageMotion();
  const Component = motionElements[as ?? "div"] as any;

  return (
    <Component {...intro(delay)} {...props}>
      {children}
    </Component>
  );
}

export function PageReveal<Tag extends MotionTag = "div">({
  amount = 0.2,
  as,
  children,
  delay = 0,
  ...props
}: PageMotionProps<Tag>) {
  const { reveal } = usePageMotion();
  const Component = motionElements[as ?? "div"] as any;

  return (
    <Component {...reveal(delay, amount)} {...props}>
      {children}
    </Component>
  );
}
