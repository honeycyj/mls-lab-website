import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../foundation/Button/Button";
import { HeaderMenuItem, HeaderNavItem } from "./headerContent";
import { industryCollaborations, industryMenuGroups } from "./industryMenuContent";

type MobileNavDrawerProps = {
  contactHref: string;
  drawerId: string;
  isOpen: boolean;
  navItems: HeaderNavItem[];
  onClose: () => void;
  resolveHeaderHref: (href?: string) => string | undefined;
  solutionsHref: string;
};

type LinkProps = {
  href: string;
  rel?: string;
  target?: string;
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`site-header__mobile-chevron${isOpen ? " is-open" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function getLinkProps(href: string): LinkProps {
  const isExternal = /^https?:\/\//.test(href);

  return {
    href,
    rel: isExternal ? "noreferrer" : undefined,
    target: isExternal ? "_blank" : undefined,
  };
}

function MobileSubmenuLinks({
  items,
  onClose,
}: {
  items: HeaderMenuItem[];
  onClose: () => void;
}) {
  return (
    <div className="site-header__mobile-submenu-links">
      {items.map((item) =>
        item.href ? (
          <a
            key={item.label}
            className="site-header__mobile-submenu-link"
            {...getLinkProps(item.href)}
            onClick={onClose}
          >
            {item.label}
          </a>
        ) : (
          <span key={item.label} className="site-header__mobile-submenu-link is-placeholder">
            {item.label}
          </span>
        ),
      )}
    </div>
  );
}

function MobileIndustrySection({
  contactHref,
  onClose,
  solutionsHref,
}: {
  contactHref: string;
  onClose: () => void;
  solutionsHref: string;
}) {
  return (
    <div className="site-header__mobile-industry-panel">
      <a className="site-header__mobile-industry-overview" href={solutionsHref} onClick={onClose}>
        查看全部解决方案
      </a>

      <div className="site-header__mobile-industry-groups">
        {industryMenuGroups.map((group) => (
          <div
            key={group.title + group.items.map((item) => item.label).join("")}
            className="site-header__mobile-industry-group"
          >
            <p>{group.title}</p>
            <div>
              {group.items.map((item) => {
                const href = item.href ?? solutionsHref;

                return (
                  <a key={item.label} {...getLinkProps(href)} onClick={onClose}>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="site-header__mobile-industry-collabs">
        <p>与实验室合作</p>
        <div>
          {industryCollaborations.map((item) => (
            <a key={item.title} href={contactHref} onClick={onClose}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileNavDrawer({
  contactHref,
  drawerId,
  isOpen,
  navItems,
  onClose,
  resolveHeaderHref,
  solutionsHref,
}: MobileNavDrawerProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setExpandedLabel(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const container = drawerRef.current;

    if (!container) {
      return;
    }

    const firstFocusable = container.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    (firstFocusable ?? container).focus();
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setExpandedLabel((current) => (current === label ? null : label));
  };

  return (
    <motion.div
      className="site-header__mobile-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.16 : 0.22, ease: "easeOut" }}
      onClick={onClose}
    >
      <motion.div
        id={drawerId}
        ref={drawerRef}
        className="site-header__mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="主导航菜单"
        tabIndex={-1}
        initial={{ opacity: 0, x: reduceMotion ? 0 : 32 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
        transition={{ duration: reduceMotion ? 0.16 : 0.26, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="site-header__mobile-nav">
          {navItems.map((item) => {
            const isExpandable =
              (item.menuType === "dropdown" && item.menuItems?.length) || item.menuType === "industry";

            if (!isExpandable) {
              const href = resolveHeaderHref(item.href);

              if (!href) {
                return null;
              }

              return (
                <a
                  key={item.label}
                  className="site-header__mobile-link"
                  href={href}
                  onClick={onClose}
                >
                  <span>{item.label}</span>
                </a>
              );
            }

            const isExpanded = expandedLabel === item.label;

            return (
              <section
                key={item.label}
                className={`site-header__mobile-section${isExpanded ? " is-open" : ""}`}
              >
                <button
                  className="site-header__mobile-section-trigger"
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => {
                    toggleSection(item.label);
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronIcon isOpen={isExpanded} />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      className="site-header__mobile-section-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0.14 : 0.22,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="site-header__mobile-section-panel-inner">
                        {item.menuType === "industry" ? (
                          <MobileIndustrySection
                            contactHref={contactHref}
                            onClose={onClose}
                            solutionsHref={solutionsHref}
                          />
                        ) : (
                          <MobileSubmenuLinks items={item.menuItems ?? []} onClose={onClose} />
                        )}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </section>
            );
          })}
        </div>

        <div className="site-header__mobile-footer">
          <Button href={contactHref} size="lg" fullWidth onClick={onClose}>
            登录
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
