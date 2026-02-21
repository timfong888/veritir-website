export default function CTAForm() {
  return (
    <div className="max-w-lg space-y-6">
      <p className="text-lg text-neutral-300">
        Reach out to start a conversation.
      </p>
      <a
        href="mailto:tim@veritir.com"
        className="inline-flex items-center gap-3 rounded-md border border-border bg-muted px-6 py-4 text-lg font-medium text-white transition-colors hover:border-accent hover:text-accent"
      >
        <svg
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        tim@veritir.com
      </a>
    </div>
  );
}
