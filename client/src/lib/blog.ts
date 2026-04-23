import blogData from "@/content/blog-data.json";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCredit: string;
  tags: string[];
  readingTime: number;
  author: string;
  content: string;
}

const posts = (blogData as { posts: BlogPost[] }).posts;

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, limit);
  const currentTags = new Set(current.tags);
  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1));
  return scored.slice(0, limit).map((s) => s.post);
}

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
