import portfolioData from "@/content/portfolio-data.json";

export interface PortfolioSector {
  key: string;
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
