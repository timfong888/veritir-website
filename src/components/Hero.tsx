import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Text column */}
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Private research,
            <br />
            licensed learning.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            VERITIR is the safe intermediary between university research labs and
            foundation models&mdash;so models can learn from high-value research
            work without labs relinquishing custody, IP, or publication freedom.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Clean-room collaboration (not public release)",
              "Permitted-use controls + boundary-enforced execution",
              "Audit logs & provenance for confidence and continuity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Request early access
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500"
            >
              Partner inquiry
            </a>
          </div>
        </div>

        {/* Image column */}
        <HeroImage />
      </div>
    </section>
  );
}
