import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — VERITIR",
  description:
    "Frequently asked questions about VERITIR pilots, data readiness, governance, and pricing.",
};

const faqs = [
  {
    q: "What is this pilot?",
    a: "A short, structured engagement that assesses whether a research dataset can be productized for foundation-model evaluation, benchmarking, and (where appropriate) licensing.",
  },
  {
    q: "What do you actually deliver?",
    a: `A lightweight "readiness pack" that includes:`,
    bullets: [
      "Data quality + completeness assessment",
      "Labeling review (explicit + implicit outcome labels)",
      "Governance and rights checklist (what's allowed, what isn't)",
      "A sanitized sample and a simple schema/metadata template",
      "Practical licensing guidelines (plain-English terms and risk tiers)",
    ],
  },
  {
    q: "Who is this for?",
    a: "Research labs, institutes, data owners, and R&D organizations that have valuable machine or experimental data and want to turn it into a repeatable revenue stream without creating compliance or reputational risk.",
  },
  {
    q: "What kinds of data are a good fit?",
    a: "High-signal datasets that are hard to reproduce, such as:",
    bullets: [
      "Experimental measurements + outcomes (success/failure, yield, binding, stability, performance metrics)",
      "Instrument outputs (imaging, spectroscopy, sequencing, microscopy, sensor logs)",
      "Structured annotations, scoring rubrics, or decision labels tied to outcomes",
    ],
  },
  {
    q: "How do you handle sensitive or regulated data?",
    a: "We start with strict guardrails: sensitive data requires clear consent/authorization, strong access controls, and often a restricted \"evaluation-only\" model. If the rights or governance can't be made clean, it's out of scope for licensing.",
  },
  {
    q: "Why not just send the data directly to an AI lab?",
    a: "Because \"direct\" deals often fail on the basics: unclear rights, mixed sponsorship/collaboration terms, missing provenance, privacy exposure, and inconsistent pricing. A governance layer makes the dataset safe, contractable, and repeatable.",
  },
  {
    q: "Are you selling patents or inventions?",
    a: "No. This is about data assets (and their evaluation access / licensing). If patent rights are involved, they're handled separately under the appropriate IP process.",
  },
  {
    q: "Are you training foundation models on the data?",
    a: "Not by default. The typical starting point is benchmarking and evaluation (lower risk, high value). Training or fine-tuning rights, if allowed, are treated as a higher tier with tighter controls.",
  },
  {
    q: 'What does "labels" mean here?',
    a: "Anything that connects inputs to outcomes\u2014e.g., \"worked/didn't,\" yields, scores, phenotypes, performance metrics, pass/fail gates, or expert judgments embedded in spreadsheets and lab workflows.",
  },
  {
    q: "What does success look like?",
    a: "A dataset that is:",
    bullets: [
      "Clearly scoped and documented",
      "Legally and ethically usable for defined purposes",
      "Structured enough to evaluate models or license with confidence",
      "Packaged so buyers can quickly understand value and constraints",
    ],
  },
  {
    q: "How long does a pilot take?",
    a: "Usually 4\u20138 weeks, depending on data readiness, governance complexity, and stakeholder availability.",
  },
  {
    q: "What happens after the pilot?",
    a: "You can choose one of three paths:",
    bullets: [
      "Publish an evaluation benchmark (recurring access)",
      "Offer controlled dataset licenses (selective buyers/uses)",
      "Build a longer-term data product pipeline (multiple datasets, standard terms)",
    ],
  },
  {
    q: "How do you price it?",
    a: "Pilot pricing is typically fixed-fee. Ongoing commercialization can be structured as subscription, per-evaluation access, licensing fees, and/or revenue share\u2014depending on the asset and constraints.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Common questions about VERITIR pilots, data readiness, governance, and
          pricing.
        </p>

        <div className="mt-16 space-y-12">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h2 className="text-xl font-semibold text-white">{faq.q}</h2>
              <p className="mt-3 text-neutral-300 leading-relaxed">{faq.a}</p>
              {faq.bullets && (
                <ul className="mt-3 space-y-2 pl-1">
                  {faq.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-neutral-300">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <p className="text-neutral-400">
            Have a question not covered here?{" "}
            <a
              href="mailto:tim@veritir.com"
              className="text-accent hover:underline"
            >
              Reach out directly
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
