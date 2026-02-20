import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Principles — VERITIR",
  description:
    "How VERITIR protects research integrity: private by default, permitted-use first, boundary-controlled execution.",
};

const principles = [
  {
    title: "Private by default",
    description:
      "Internal research artifacts are not made public as a condition of collaboration.",
  },
  {
    title: "Permitted-use first",
    description:
      "Training occurs only within explicit scope and purpose.",
  },
  {
    title: "Boundary-controlled execution",
    description:
      "In-boundary or clean room; outputs constrained.",
  },
  {
    title: "Audit & provenance",
    description:
      "Access logs and lineage to support review, continuity, and confidence.",
  },
  {
    title: "De-identification support",
    description:
      "Where needed, we support PII/PHI removal workflows.",
  },
];

export default function TrustPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Trust principles
        </h1>

        <div className="mt-16 space-y-14">
          {principles.map((p) => (
            <div key={p.title}>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-neutral-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12 text-center">
          <a
            href="/#contact"
            className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Request early access
          </a>
        </div>
      </div>
    </section>
  );
}
