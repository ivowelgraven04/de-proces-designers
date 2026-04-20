import { useEffect } from "react";

const BASE_URL = "https://www.deprocesdesigners.nl";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schema?: object;
}

function setMeta(selector: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (selector.includes('property="')) {
      el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "");
    } else {
      el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "");
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = url;
}

function setSchema(schema: object) {
  const id = "json-ld-page";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

export function useSEO({ title, description, path = "/", image = DEFAULT_IMAGE, schema }: SEOProps) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${path}`;

    document.title = title;

    setMeta('meta[name="description"]', description);
    setCanonical(fullUrl);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[property="og:image"]', image);

    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    if (schema) setSchema(schema);
  }, [title, description, path, image, schema]);
}
