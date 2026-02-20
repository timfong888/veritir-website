interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-xl border border-border bg-muted p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}
