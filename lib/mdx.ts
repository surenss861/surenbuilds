import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content", "work");

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  client: string;
  industry: string;
  year?: number;
  type?: "personal" | "client"; // "personal" for your own projects, "client" for client work
  role?: string[];
  stack?: string[];
  liveUrl?: string;
  repoUrl?: string;
  cover: string;
  metrics?: Array<{ label: string; value: string }>;
  testimonial?: {
    author: string;
    quote: string;
    rating?: number;
  };
  previewUrl?: string;
  gallery?: string[];
}

export interface Project extends ProjectFrontmatter {
  rawContent: string;
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory).filter((name) =>
    name.endsWith(".mdx")
  );

  const projects = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const slug = fileName.replace(/\.mdx$/, "");
      return {
        ...(data as ProjectFrontmatter),
        slug: data.slug || slug,
      } as ProjectFrontmatter;
    })
  );

  return projects.sort((a, b) => (b.year || 0) - (a.year || 0));
}

export async function getPersonalProjects(): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((p) => p.type === "personal");
}

export async function getClientProjects(): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((p) => p.type === "client" || !p.type); // Default to client if not specified
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as ProjectFrontmatter),
    slug: data.slug || slug,
    rawContent: content,
  };
}

