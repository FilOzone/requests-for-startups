# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Requests for Startups** — A Next.js frontend for the Filecoin Onchain Cloud (FOC) RFS program. Displays a program overview and 6 individual Requests for Startups, each sourced from its own markdown file.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (static generation)
- `npm run lint` — Run ESLint

## Architecture

- **Next.js 16 App Router** with TypeScript and Tailwind CSS v4
- **Static site** — all pages are statically generated at build time
- RFS content lives in `content/rfs/rfs-{1-6}.md` as markdown with YAML frontmatter (number, title, slug, description)
- `src/lib/rfs.ts` provides `getAllRfs()` and `getRfsBySlug(slug)` to read and parse the markdown files using `gray-matter`
- Homepage (`src/app/page.tsx`) renders program overview + grid of RFS cards
- Individual RFS pages (`src/app/rfs/[slug]/page.tsx`) use `generateStaticParams` for SSG and render markdown with `react-markdown`
- Dark theme by default, styled with Tailwind utility classes + custom `.prose` CSS in `globals.css`

## Adding a New RFS

1. Create `content/rfs/rfs-N.md` with frontmatter matching the existing schema
2. The homepage index and static routes update automatically on next build
