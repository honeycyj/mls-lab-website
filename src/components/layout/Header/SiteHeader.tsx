import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NavDropdown } from "./NavDropdown";

const navItems = [
  { label: "能力引擎", href: "#capabilities" },
  { label: "产业赋能", href: "#solutions" },
  { label: "测试服务", href: "#media" },
  { label: "人才发展", href: "#team" },
  { label: "新闻动态", href: "#media" },
  { label: "实验室资源", href: "#contact" },
];

const overviewMenuItems = [
  { label: "实验室简介", href: "/about" },
  { label: "管理团队" },
  { label: "联系我们" },
];

const HEADER_INITIAL_OFFSET = -18;
const HEADER_HIDDEN_OFFSET = 72;
const HEADER_SHOW_THRESHOLD = 10;
const HEADER_HIDE_START_SCROLL = 120;
const HEADER_TOP_RESET_SCROLL = 8;
const MIN_SCROLL_DELTA = 0.5;

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.85 12.85L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 3C8.05 5.03 6.95 7.49 6.95 10C6.95 12.51 8.05 14.97 10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 3C11.95 5.03 13.05 7.49 13.05 10C13.05 12.51 11.95 14.97 10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type SiteHeaderProps = {
  isHome: boolean;
};

export function SiteHeader({ isHome }: SiteHeaderProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const homeHref = isHome ? "#top" : "/";
  const [headerOffsetY, setHeaderOffsetY] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const previousScrollY = useRef(0);
  const accumulatedScroll = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;
    accumulatedScroll.current = 0;

    let frameId = 0;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY.current;

      if (Math.abs(scrollDelta) < MIN_SCROLL_DELTA) {
        frameId = 0;
        return;
      }

      if (currentScrollY <= HEADER_TOP_RESET_SCROLL) {
        setIsRevealing(true);
        setHeaderOffsetY(0);
        accumulatedScroll.current = 0;
      } else if (scrollDelta > 0 && currentScrollY > HEADER_HIDE_START_SCROLL) {
        setIsRevealing(false);
        accumulatedScroll.current = 0;
        setHeaderOffsetY((current) => Math.min(current + scrollDelta, HEADER_HIDDEN_OFFSET));
      } else {
        const isChangingDirection = scrollDelta < 0 && accumulatedScroll.current > 0;

        if (isChangingDirection) {
          accumulatedScroll.current = 0;
        }

        accumulatedScroll.current += scrollDelta;

        if (accumulatedScroll.current <= -HEADER_SHOW_THRESHOLD) {
          setIsRevealing(true);
          setHeaderOffsetY(0);
          accumulatedScroll.current = 0;
        }
      }

      previousScrollY.current = currentScrollY;
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="homepage__header"
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : HEADER_INITIAL_OFFSET,
      }}
      animate={{
        opacity: 1,
        y: -headerOffsetY,
      }}
      transition={{
        opacity: {
          duration: reduceMotion ? 0.12 : 0.28,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: reduceMotion ? 0.12 : isRevealing ? 0.48 : 0,
          ease: isRevealing ? [0.16, 1, 0.3, 1] : "linear",
        },
      }}
    >
      <div className="homepage__header-inner">
        <a className="homepage__logo" href={homeHref} aria-label="马栏山音视频实验室">
          <img src="/assets/home/nav-logo.svg" alt="" />
        </a>
        <nav className="homepage__nav" aria-label="主导航">
          <NavDropdown label="实验室概况" items={overviewMenuItems} menuLabel="实验室概况菜单" />
          {navItems.map((item) => (
            <a key={item.label} className="homepage__nav-link" href={isHome ? item.href : `/${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="homepage__header-actions">
          <button className="homepage__icon-button" type="button" aria-label="搜索">
            <SearchIcon />
          </button>
          <button className="homepage__icon-button" type="button" aria-label="语言">
            <GlobeIcon />
          </button>
          <a className="homepage__login" href={isHome ? "#contact" : "/#contact"}>
            登录
          </a>
        </div>
      </div>
    </motion.header>
  );
}
