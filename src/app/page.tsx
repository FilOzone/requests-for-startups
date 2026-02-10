import Link from "next/link";
import { getAllRfs, SUBMISSION_URL } from "@/lib/rfs";

export default function Home() {
  const rfsList = getAllRfs();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Requests for Startups
        </h1>
        <p className="text-accent font-mono text-sm mb-8">
          Filecoin Onchain Cloud
        </p>

        <div className="space-y-4 text-muted leading-relaxed max-w-3xl">
          <p>
            The next generation of cloud users will not be humans. They will be
            autonomous AI agents — long-lived, identity-aware, and capable of
            paying for their own storage, compute, and communication. This
            program exists to make Filecoin Onchain Cloud the default substrate
            for those agents.
          </p>
          <p>
            We are seeking teams to deploy AI-native products on FOC mainnet:
            agent-owned storage, programmable payments, and new economic
            structures for autonomous agents.{" "}
            <span className="text-foreground font-medium">
              Ship running prototypes, not architecture diagrams.
            </span>
          </p>
        </div>

        <a
          href={SUBMISSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/85"
        >
          Submit a Proposal
          <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      {/* Submission Guidelines */}
      <section className="mb-12 rounded-lg border border-card-border bg-card-bg p-8 max-w-3xl">
        <h2 className="text-xl font-bold tracking-tight mb-4">
          Submission Guidelines
        </h2>
        <p className="text-sm text-muted mb-4">
          To be considered a strong submission, teams must deliver:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Deployment against Filecoin Onchain Cloud contracts on test, extra points for mainnet",
            "A 2-minute demo recording showing the system in action",
            "A live, interactive example (not just docs or diagrams)",
            "Clear explanation of why Filecoin is essential (not incidental)",
            "Working code demonstrating real storage, payments, and usage",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="text-green-400 shrink-0">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">
          Submissions that only include architecture diagrams, documentation,
          mockups, or testnet-only deployments will not be considered sufficient.
        </p>
      </section>

      {/* RFS Index */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Open Requests
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rfsList.map((rfs) => (
            <Link
              key={rfs.slug}
              href={`/rfs/${rfs.slug}`}
              className="group block rounded-lg border border-card-border bg-card-bg p-6 transition-all hover:border-accent/50 hover:bg-accent/5"
            >
              <span className="text-xs font-mono text-accent mb-2 block">
                RFS-{rfs.number}
              </span>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {rfs.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {rfs.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
