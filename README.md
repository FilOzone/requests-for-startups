# Requests for Startups — Filecoin Onchain Cloud

A static site presenting the Filecoin Onchain Cloud (FOC) Requests for Startups program. Displays a program overview, submission guidelines, and a set of individual RFS briefs — each sourced from its own markdown file.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Project Structure

```
content/rfs/          # Markdown files with YAML frontmatter (rfs-1.md …)
src/app/page.tsx      # Homepage — overview, guidelines, RFS card grid
src/app/rfs/[slug]/   # Individual RFS detail pages (statically generated)
src/lib/rfs.ts        # Reads and parses markdown content at build time
```

## Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Uses Turbopack for fast refresh.

## Build

```bash
npm run build
```

All pages are statically generated at build time. No runtime server required.

## Lint

```bash
npm run lint
```

## Adding a New RFS

1. Create `content/rfs/rfs-N.md` with frontmatter matching the existing schema (`number`, `title`, `slug`, `description`).
2. The homepage index and static routes update automatically on next build.
