import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Steps from "@/components/Steps";
import BulletSection from "@/components/BulletSection";
import CTAForm from "@/components/CTAForm";
import TrustPrinciples from "@/components/TrustPrinciples";

const howSteps = [
  {
    number: 1,
    title: "Identify",
    description:
      "Surface the high-value research artifacts that sit outside patents and papers: datasets with metadata, outcome labels, negative results, protocols.",
  },
  {
    number: 2,
    title: "Package",
    description:
      "Structure raw lab outputs into governed data products—benchmarks, evaluation sets, fine-tuning packs—with clear rights, provenance, and permitted-use terms.",
  },
  {
    number: 3,
    title: "Connect",
    description:
      "Match packaged assets to qualified buyers: AI labs seeking domain evaluation, pharma needing model validation, device companies building specialized models.",
  },
  {
    number: 4,
    title: "Earn & iterate",
    description:
      "Generate recurring revenue through benchmark subscriptions, licensed access, and sponsored evaluations. Audit trails prove compliance at every step.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* The shadow asset */}
      <Section
        title="The most valuable part of your research never makes it into the patent or the paper."
        subtitle="Negative results. Protocol variations. Calibration data. Instrument noise characteristics. Labeling decisions buried in spreadsheets. In modern research—biomed, materials, quantum, physics—the signal that matters most lives in artifacts that patents don't capture and publications don't include."
      >
        <p className="text-lg font-medium text-accent">
          VERITIR turns these shadow assets into governed, revenue-generating data products.
        </p>
      </Section>

      {/* What VERITIR is not */}
      <Section
        title="Not a data dump. Not a labeling shop."
      >
        <ul className="space-y-4">
          {[
            "Not 'make it public so models can scrape it'",
            "Not commodity data labeling",
            "Not a one-time data sale",
            "Not blanket model access",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-lg text-red-400">&times;</span>
              <span className="text-neutral-300">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What we enable */}
      <Section
        title="Turn research artifacts into governed, licensable data products."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Unpublished research artifacts"
            description="Drafts, intermediate results, negative results, lab notes, datasets, protocols, and code—kept private by default."
          />
          <Card
            title="Clean-room licensing interface"
            description="Models evaluate and benchmark through a governed environment with explicit permitted use, controlled execution, and constrained outputs. Raw data never leaves."
          />
          <Card
            title="Outcome supervision (optional)"
            description="When human feedback is needed, it's focused on outcomes and evaluation—not turning labs into labeling factories."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" title="How it works">
        <Steps steps={howSteps} />
      </Section>

      {/* For University Research Labs */}
      <Section
        id="labs"
        title="For labs: new revenue from the research you've already done."
        subtitle="Your lab generates datasets, protocols, and outcome data that are uniquely valuable—hard to recreate, expensive to reproduce, and rich with implicit labels that models need. VERITIR helps you monetize these assets without disrupting your work."
      >
        <BulletSection
          items={[
            "Non-dilutive revenue: earn from benchmarks, licensed evaluations, and fine-tuning packs—no equity, no grants, no overhead.",
            "Keep custody: your internal work stays non-public by default. Data never leaves without explicit consent.",
            "Protect IP and publication freedom: collaborate without silent reuse or surprise downstream claims.",
            "Reduce friction: a repeatable path through governance, compliance, and tech transfer review.",
            "Support de-identification: help remove PII/PHI when required.",
            "Academic alignment: benchmarks earn citations, leaderboards earn visibility, evaluations earn prestige.",
          ]}
        />
      </Section>

      {/* For Foundation Model Partners */}
      <Section
        id="partners"
        title="For model partners: domain-specific evaluation and benchmarking data you can't get elsewhere."
        subtitle="University labs hold the gold-standard datasets in biomed, materials science, quantum, and beyond. VERITIR gives you governed access to domain-specific evaluation, benchmarking, and fine-tuning assets—without the 18-month negotiation cycle."
      >
        <BulletSection
          items={[
            "Evaluation benchmarks: prove your model works on gold-standard research data",
            "Fine-tuning packs: curated, labeled data for narrow domain tasks under clear terms",
            "Clear permitted-use terms for sensitive research work",
            "Boundary-controlled execution and constrained outputs",
            "Standard reporting: what ran, when, and under which permissions",
          ]}
        />
      </Section>

      {/* Trust & Governance */}
      <Section
        id="trust"
        title="Designed to prevent extractive data deals."
        subtitle="Most collaborations today either move too fast (and leak risk) or move too slow (and never ship). VERITIR is built around explicit permissions, controlled execution, and audit-grade evidence—so both sides can collaborate without surprises."
      >
        <TrustPrinciples />
      </Section>

      {/* Contact / CTA */}
      <Section
        id="contact"
        title="Bring VERITIR to your research institution."
        subtitle="We're working with a small set of research labs and model partners to build the first governed data-asset marketplace for university research."
      >
        <CTAForm />
      </Section>
    </>
  );
}
