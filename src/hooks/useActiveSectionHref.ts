import { useEffect, useState } from "react";

export function useActiveSectionHref(hrefs: string[], offset = 180) {
  const [activeHref, setActiveHref] = useState(() => hrefs[0] ?? "");

  useEffect(() => {
    if (!hrefs.length) {
      return;
    }

    let frameId = 0;

    const updateActiveHref = () => {
      frameId = 0;

      const sectionEntries = hrefs
        .filter((href) => href.startsWith("#"))
        .map((href) => {
          const id = href.slice(1);
          const element = document.getElementById(id);

          return element
            ? {
                href,
                top: element.getBoundingClientRect().top,
              }
            : null;
        })
        .filter((entry): entry is { href: string; top: number } => entry !== null);

      if (!sectionEntries.length) {
        setActiveHref(hrefs[0] ?? "");
        return;
      }

      const currentSection =
        [...sectionEntries].reverse().find((entry) => entry.top <= offset) ?? sectionEntries[0];

      setActiveHref((current) => (current === currentSection.href ? current : currentSection.href));
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveHref);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [hrefs, offset]);

  return activeHref;
}
