interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-4">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-black">
            {step.number}
          </span>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
