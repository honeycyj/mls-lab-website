import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { IndustryMegaMenu } from "./IndustryMegaMenu";
import { headerNavItems } from "./headerContent";
import { NavDropdown } from "./NavDropdown";

const HEADER_INITIAL_OFFSET = -18;
const HEADER_HIDDEN_OFFSET = 72;
const HEADER_SHOW_THRESHOLD = 10;
const HEADER_HIDE_START_SCROLL = 120;
const HEADER_TOP_RESET_SCROLL = 8;
const INDUSTRY_MENU_CLOSE_DELAY = 90;
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

export function SiteHeader() {
  const reduceMotion = useReducedMotion() ?? false;
  const location = useLocation();
  const isHome = location.pathname === "/";
  const homeHref = isHome ? "#top" : "/";
  const solutionsHref = isHome ? "#solutions" : "/#solutions";
  const contactHref = isHome ? "#contact" : "/#contact";
  const [headerOffsetY, setHeaderOffsetY] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isIndustryMenuOpen, setIsIndustryMenuOpen] = useState(false);
  const headerShellRef = useRef<HTMLDivElement | null>(null);
  const overlayLayerRef = useRef<HTMLDivElement | null>(null);
  const previousScrollY = useRef(0);
  const accumulatedScroll = useRef(0);
  const industryMenuCloseTimeoutRef = useRef<number | null>(null);

  const resolveHeaderHref = (href?: string) => {
    if (!href) {
      return undefined;
    }

    return isHome ? href : `/${href}`;
  };

  const openIndustryMenu = () => {
    if (industryMenuCloseTimeoutRef.current !== null) {
      window.clearTimeout(industryMenuCloseTimeoutRef.current);
      industryMenuCloseTimeoutRef.current = null;
    }

    setIsIndustryMenuOpen(true);
  };

  const closeIndustryMenu = () => {
    if (industryMenuCloseTimeoutRef.current !== null) {
      window.clearTimeout(industryMenuCloseTimeoutRef.current);
    }

    industryMenuCloseTimeoutRef.current = window.setTimeout(() => {
      setIsIndustryMenuOpen(false);
      industryMenuCloseTimeoutRef.current = null;
    }, INDUSTRY_MENU_CLOSE_DELAY);
  };

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

  useEffect(() => {
    return () => {
      if (industryMenuCloseTimeoutRef.current !== null) {
        window.clearTimeout(industryMenuCloseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={headerShellRef}
      className="site-header-shell"
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
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__logo" href={homeHref} aria-label="马栏山音视频实验室">
            <img src="/assets/home/nav-logo.svg" alt="" />
          </a>
          <nav className="site-header__nav" aria-label="主导航">
            {headerNavItems.map((item) => (
              item.menuType === "dropdown" && item.menuItems ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  items={item.menuItems}
                  menuLabel={`${item.label}菜单`}
                  overlayRoot={overlayLayerRef.current}
                  shell={headerShellRef.current}
                />
              ) : item.menuType === "industry" ? (
                <div
                  key={item.label}
                  className="site-header__nav-item site-header__nav-item--industry"
                  onMouseEnter={openIndustryMenu}
                  onMouseLeave={closeIndustryMenu}
                >
                  <a
                    className={`site-header__nav-link${isIndustryMenuOpen ? " is-active" : ""}`}
                    href={resolveHeaderHref(item.href) ?? solutionsHref}
                    onFocus={openIndustryMenu}
                  >
                    {item.label}
                  </a>
                </div>
              ) : (
                <a
                  key={item.label}
                  className="site-header__nav-link"
                  href={resolveHeaderHref(item.href)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
          <div className="site-header__actions">
            <button className="site-header__icon-button" type="button" aria-label="搜索">
              <SearchIcon />
            </button>
            <button className="site-header__icon-button" type="button" aria-label="语言">
              <GlobeIcon />
            </button>
            <a className="site-header__login" href={contactHref}>
              登录
            </a>
          </div>
        </div>
      </header>
      <div ref={overlayLayerRef} className="site-header__overlay-layer">
        <AnimatePresence>
          {isIndustryMenuOpen ? (
            <motion.div
              className="site-header__industry-shell"
              onMouseEnter={openIndustryMenu}
              onMouseLeave={closeIndustryMenu}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : -22,
                scale: reduceMotion ? 1 : 0.965,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -14,
                scale: reduceMotion ? 1 : 0.982,
              }}
              transition={{
                duration: reduceMotion ? 0.14 : 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <IndustryMegaMenu contactHref={contactHref} solutionsHref={solutionsHref} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
