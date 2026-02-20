import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  border = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 md:py-28",
        border && "border-t border-border",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">{subtitle}</p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
