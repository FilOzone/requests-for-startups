import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllRfs, getRfsBySlug, SUBMISSION_URL } from "@/lib/rfs";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const rfsList = getAllRfs();
  return rfsList.map((rfs) => ({ slug: rfs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rfs = getRfsBySlug(slug);
  if (!rfs) return {};
  return {
    title: `RFS-${rfs.number}: ${rfs.title} — Filecoin Onchain Cloud`,
    description: rfs.description,
  };
}

export default async function RfsPage({ params }: PageProps) {
  const { slug } = await params;
  const rfs = getRfsBySlug(slug);
  if (!rfs) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-muted hover:text-accent transition-colors mb-10 inline-block"
      >
        &larr; All Requests
      </Link>

      <header className="mb-10">
        <span className="text-xs font-mono text-accent mb-2 block">
          RFS-{rfs.number}
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {rfs.title}
        </h1>
        <p className="text-muted leading-relaxed">{rfs.description}</p>
      </header>

      <article className="prose">
        <ReactMarkdown>{rfs.content}</ReactMarkdown>
      </article>

      <div className="mt-16 pt-8 border-t border-card-border flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          &larr; Back to all requests
        </Link>
        <a
          href={SUBMISSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/85"
        >
          Submit a Proposal
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
