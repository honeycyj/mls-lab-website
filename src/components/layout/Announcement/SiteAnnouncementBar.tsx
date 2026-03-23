import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteAnnouncement } from "../../../content/site/announcement";
import "./siteAnnouncementBar.css";

const ANNOUNCEMENT_EXIT_EASE = [0.22, 1, 0.36, 1] as const;

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function SiteAnnouncementBar() {
  const reduceMotion = useReducedMotion() ?? false;
  const { href, id, label, message } = siteAnnouncement;
  const [isVisible, setIsVisible] = useState(true);
  const exitAnimation = reduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: -20,
        height: 0,
      };
  const exitTransition = reduceMotion
    ? { duration: 0.18 }
    : {
        duration: 0.32,
        ease: ANNOUNCEMENT_EXIT_EASE,
      };

  useEffect(() => {
    setIsVisible(true);
  }, [id]);

  return (
    <AnimatePresence initial={false}>
      {isVisible ? (
        <motion.div
          key={id}
          className="site-announcement"
          exit={exitAnimation}
          transition={exitTransition}
        >
          <div className="site-announcement__inner">
            <div className="site-announcement__copy">
              <p>{message}</p>
              <a href={href}>{label}</a>
            </div>
            <button type="button" aria-label="关闭公告" onClick={() => setIsVisible(false)}>
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
