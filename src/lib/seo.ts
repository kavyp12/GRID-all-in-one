import { useEffect } from "react";

/**
 * Per-page SEO injector.
 * Updates document.title and standard meta/OG/Twitter/canonical tags at runtime.
 * Renders nothing — zero impact on layout or component tree.
 */

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
};

const SITE_ORIGIN = "https://grid.in";
const DEFAULT_IMAGE = `${SITE_ORIGIN}/og-cover.jpg`;

function setMeta(
  selector: string,
  attrName: "name" | "property",
  attrValue: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo(seo: SeoInput) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${seo.path ?? ""}`;
    const image = seo.image ?? DEFAULT_IMAGE;

    document.title = seo.title;

    setMeta('meta[name="description"]', "name", "description", seo.description);
    if (seo.keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", seo.keywords);
    }
    setLink("canonical", url);

    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seo.description,
    );
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", image);

    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seo.description,
    );
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  }, [seo.title, seo.description, seo.path, seo.keywords, seo.image]);
}
