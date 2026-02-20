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
    title: "Select",
    description:
      "Choose research assets that contribute to papers, published results, or ongoing work.",
  },
  {
    number: 2,
    title: "Set boundaries",
    description:
      "Define permitted use, IP constraints, retention, and output controls.",
  },
  {
    number: 3,
    title: "Execute safely",
    description:
      "Run training/evals inside the lab boundary or a controlled clean room.",
  },
  {
    number: 4,
    title: "Prove & iterate",
    description:
      "Generate audit trails and provenance; optionally run outcome-based evaluation loops.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* What VERITIR is not */}
      <Section title="Not a data dump. Not a labeling shop.">
        <ul className="space-y-4">
          {[
            "Not 'make it public so models can scrape it'",
            "Not commodity data labeling",
            "Not a one-time data sale",
            "Not blanket training rights",
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
        title="Turn internal research work into permitted-use training—safely."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Unpublished research artifacts"
            description="Drafts, intermediate results, negative results, lab notes, datasets, protocols, and code—kept private by default."
          />
          <Card
            title="Clean-room licensing interface"
            description="Models train and evaluate through a governed environment with explicit permitted use, controlled execution, and constrained outputs."
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
        title="For labs: collaborate without compromising what makes your work valuable."
      >
        <BulletSection
          items={[
            "Keep custody: your internal work stays non-public by default.",
            "Protect IP and publication freedom: collaborate without silent reuse.",
            "Reduce friction: a repeatable path through governance and compliance review.",
            "Support de-identification: help remove PII/PHI when required.",
          ]}
        />
      </Section>

      {/* For Foundation Model Partners */}
      <Section
        id="partners"
        title="For model partners: access high-value domains with less risk and less negotiation."
      >
        <BulletSection
          items={[
            "Clear permitted-use terms for sensitive research work",
            "Boundary-controlled execution and controlled outputs",
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
        title="Bring VERITIR to your research center."
        subtitle="We're onboarding a small set of research labs and model partners."
      >
        <CTAForm />
      </Section>
    </>
  );
}
