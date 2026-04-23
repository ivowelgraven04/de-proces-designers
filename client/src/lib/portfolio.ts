import portfolioData from "@/content/portfolio-data.json";

export interface PortfolioSector {
  key: string;
  label: string;
}

export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioProject {
  slug: string;
  client: string;
  url: string;
  displayUrl?: string;
  sector: string;
  excerpt: string;
  featured?: boolean;
  previewDesktop: string | null;
  previewMobile: string | null;
  launched?: string;
  metrics?: PortfolioMetric[];
  challenge?: string;
  approach?: string[];
  result?: string;
  testimonial?: { quote: string; author: string; role?: string } | null;
}

interface PortfolioData {
  sectors: PortfolioSector[];
  projects: PortfolioProject[];
}

const data = portfolioData as PortfolioData;

export function getAllProjects(): PortfolioProject[] {
  return data.projects;
}

export function getSectors(): PortfolioSector[] {
  return data.sectors;
}

export function getSectorLabel(key: string): string {
  return data.sectors.find((s) => s.key === key)?.label ?? key;
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return data.projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(
  slug: string,
  limit = 3,
): PortfolioProject[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const sameSector = data.projects.filter(
    (p) => p.slug !== slug && p.sector === current.sector,
  );
  const others = data.projects.filter(
    (p) => p.slug !== slug && p.sector !== current.sector,
  );
  return [...sameSector, ...others].slice(0, limit);
}
