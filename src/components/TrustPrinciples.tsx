const principles = [
  {
    title: "Private by default",
    description:
      "Internal research artifacts are not made public as a condition of collaboration.",
    icon: (
      // Shield with lock
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z"
        />
        <rect x="10" y="10" width="4" height="4" rx="0.5" />
        <path strokeLinecap="round" d="M10 10v-1a2 2 0 114 0v1" />
      </svg>
    ),
  },
  {
    title: "Permitted-use first",
    description: "Training occurs only within explicit scope and purpose.",
    icon: (
      // Key
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3.75 3.75 0 11-5.304 5.304L7.5 13.5l-1.5 1.5H4.5v1.5H3v1.5H1.5v-1.94l6.446-6.446A3.75 3.75 0 0115.75 5.25z"
        />
        <circle cx="15" cy="6" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Boundary-controlled execution",
    description: "In-boundary or clean room; outputs constrained.",
    icon: (
      // Container / box with walls
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-4.5L3 7.5m18 0l-9 4.5m9-4.5v9l-9 4.5M3 7.5l9 4.5M3 7.5v9l9 4.5m0-9v9"
        />
      </svg>
    ),
  },
  {
    title: "Audit & provenance",
    description:
      "Access logs and lineage to support review, continuity, and confidence.",
    icon: (
      // Clipboard with check
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "De-identification support",
    description: "Where needed, we support PII/PHI removal workflows.",
    icon: (
      // User with shield
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
];

export default function TrustPrinciples() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {principles.map((p) => (
        <div key={p.title} className="flex flex-col items-start">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-muted">
            {p.icon}
          </div>
          <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
