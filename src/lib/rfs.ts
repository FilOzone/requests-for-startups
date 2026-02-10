import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rfsDirectory = path.join(process.cwd(), "content/rfs");

export const SUBMISSION_URL = "https://www.plgenesis.com/";

export interface RfsMeta {
  number: number;
  title: string;
  slug: string;
  description: string;
}

export interface Rfs extends RfsMeta {
  content: string;
}

function validateRfsMeta(data: Record<string, unknown>, file: string): RfsMeta {
  if (
    typeof data.number !== "number" ||
    typeof data.title !== "string" ||
    typeof data.slug !== "string" ||
    typeof data.description !== "string"
  ) {
    throw new Error(
      `Invalid frontmatter in ${file}: requires number, title, slug, and description`
    );
  }
  return {
    number: data.number,
    title: data.title,
    slug: data.slug,
    description: data.description,
  } as RfsMeta;
}

export function getAllRfs(): RfsMeta[] {
  const files = fs.readdirSync(rfsDirectory);
  const rfsItems = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(rfsDirectory, file), "utf-8");
      const { data } = matter(raw);
      return validateRfsMeta(data, file);
    });

  return rfsItems.sort((a, b) => a.number - b.number);
}

export function getRfsBySlug(slug: string): Rfs | null {
  // Validate slug to prevent path traversal
  if (!/^rfs-\d+$/.test(slug)) return null;

  const filePath = path.join(rfsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...validateRfsMeta(data, `${slug}.md`), content };
}
