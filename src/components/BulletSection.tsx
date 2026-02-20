interface BulletSectionProps {
  items: string[];
}

export default function BulletSection({ items }: BulletSectionProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
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
  );
}
