import { useEffect } from "react";

const BASE_URL = "https://www.deprocesdesigners.nl";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_IMAGE_ALT =
  "De Proces Designers — Marketing & Leadgeneratie voor lokale bedrijven";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  /** Pagina-titel zoals die in <title> en og:title verschijnt. Idealiter ≤ 60 zichtbare chars. */
  title: string;
  /** Meta description (150–160 chars sweet spot). */
  description: string;
  /** Pad vanaf root, bijv. "/diensten". Default "/". */
  path?: string;
  /** OG-afbeelding URL. Default: site-wide og-image.png. */
  image?: string;
  /** Alt-tekst van de OG-afbeelding. */
  imageAlt?: string;
  /** og:type — "website" voor gewone pages, "article" voor blogposts. Default "website". */
  ogType?: "website" | "article" | "profile";
  /** Eén of meerdere JSON-LD objecten. Worden samen in #json-ld-page geïnjecteerd. */
  schema?: JsonLd;
  /** Robots: index of niet. Default true. Zet false voor 404, juridische pagina's, etc. */
  index?: boolean;
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

function setSchema(schema: JsonLd) {
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

function clearPageSchema() {
  document.getElementById("json-ld-page")?.remove();
}

export function useSEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  ogType = "website",
  schema,
  index = true,
}: SEOProps) {
  useEffect(() => {
    const cleanedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
    const fullUrl = `${BASE_URL}${cleanedPath}`;

    document.title = title;

    setMeta('meta[name="description"]', description);
    setMeta(
      'meta[name="robots"]',
      index
        ? "index, follow, max-image-preview:large, max-snippet:-1"
        : "noindex, follow",
    );
    setCanonical(fullUrl);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:image:alt"]', imageAlt);
    setMeta('meta[property="og:type"]', ogType);

    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    if (schema) {
      setSchema(schema);
    } else {
      clearPageSchema();
    }

    return () => {
      // Bij route-wissel ruimen we de page-specifieke JSON-LD op,
      // zodat de volgende pagina geen verouderde schema achterhoudt.
      clearPageSchema();
    };
  }, [title, description, path, image, imageAlt, ogType, schema, index]);
}

/**
 * Helper: bouw een BreadcrumbList JSON-LD blok.
 * Gebruik: schema: breadcrumb([{name:"Home",path:"/"},{name:"Blog",path:"/blog"}, ...])
 * of combineer in array: schema: [breadcrumb([...]), articleSchema]
 */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.path === "/" ? "/" : it.path.replace(/\/+$/, "")}`,
    })),
  };
}
