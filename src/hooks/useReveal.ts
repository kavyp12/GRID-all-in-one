import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds the `in` class to any element with `.reveal` once it enters the
 * viewport. Re-runs on every route change so newly-mounted page content
 * actually gets observed (without this, /contact stays opacity: 0).
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Tiny delay so the route's new DOM is mounted before we query.
    const t = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => io.observe(el));
    }, 50);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);
}
