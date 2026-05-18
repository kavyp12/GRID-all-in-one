import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/**
 * Mount Lenis once at the app root. Module-level singleton so the
 * exported `jump` helper can reach the active instance from anywhere.
 * Also scrolls to top whenever the route pathname changes.
 */
export function useSmoothScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisInstance = lenis;

    let rafId = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Scroll to top (or to hash target) on route change
  useEffect(() => {
    if (!lenisInstance) return;
    if (hash) {
      const t = setTimeout(() => {
        lenisInstance?.scrollTo(hash, { offset: -60 });
      }, 80);
      return () => clearTimeout(t);
    }
    lenisInstance.scrollTo(0, { immediate: true });
  }, [pathname, hash]);
}

/** Smooth-scroll to a hash on the current page. Use `#top` for page top. */
export function jump(hash: string) {
  const target =
    hash === "#top" ? 0 : document.querySelector<HTMLElement>(hash);

  if (lenisInstance) {
    lenisInstance.scrollTo(target ?? 0, { offset: -60 });
    return;
  }
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
