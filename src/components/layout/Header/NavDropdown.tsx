import { AnimatePresence, motion } from "motion/react";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router";

const DROPDOWN_CLOSE_DELAY = 90;

export type NavDropdownItem = {
  href?: string;
  label: string;
};

type NavDropdownProps = {
  items: NavDropdownItem[];
  label: string;
  menuLabel?: string;
  overlayRootRef: RefObject<HTMLDivElement | null>;
  shellRef: RefObject<HTMLDivElement | null>;
};

export function NavDropdown({ items, label, menuLabel, overlayRootRef, shellRef }: NavDropdownProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [menuLeft, setMenuLeft] = useState<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsOpen(true);
  };

  const closeMenu = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, DROPDOWN_CLOSE_DELAY);
  };

  const closeMenuImmediately = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsOpen(false);
  };

  const handlePointerMove = () => {
    if (!isOpen) {
      openMenu();
    }
  };

  const updateMenuPosition = () => {
    if (!triggerRef.current || !shellRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const shellRect = shellRef.current.getBoundingClientRect();

    setMenuLeft(triggerRect.left + triggerRect.width / 2 - shellRect.left);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    closeMenuImmediately();
  }, [location.key]);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    updateMenuPosition();

    const handlePositionChange = () => {
      updateMenuPosition();
    };

    window.addEventListener("resize", handlePositionChange);
    window.addEventListener("scroll", handlePositionChange, { passive: true });

    return () => {
      window.removeEventListener("resize", handlePositionChange);
      window.removeEventListener("scroll", handlePositionChange);
    };
  }, [isOpen, shellRef]);

  const menu = overlayRootRef.current && menuLeft !== null ? createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div
          className="site-header__nav-menu-shell"
          style={{ left: `${menuLeft}px` }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onFocusCapture={openMenu}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget;

            if (
              nextTarget instanceof Node &&
              (menuRef.current?.contains(nextTarget) || triggerRef.current?.contains(nextTarget))
            ) {
              return;
            }

            closeMenu();
          }}
        >
          <motion.div
            ref={menuRef}
            className="site-header__nav-menu"
            aria-label={menuLabel ?? `${label}菜单`}
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {items.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  className="site-header__nav-menu-link"
                  href={item.href}
                  onClick={closeMenuImmediately}
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="site-header__nav-menu-link is-placeholder">
                  {item.label}
                </span>
              ),
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    overlayRootRef.current,
  ) : null;

  return (
    <div
      ref={triggerRef}
      className="site-header__nav-item site-header__nav-item--menu"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onMouseMove={handlePointerMove}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <button
        className={`site-header__nav-trigger${isOpen ? " is-active" : ""}`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
      </button>
      {menu}
    </div>
  );
}
