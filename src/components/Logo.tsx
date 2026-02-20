import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <svg
        width="28"
        height="36"
        viewBox="0 0 28 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Pillar */}
        <rect x="8" y="6" width="12" height="30" rx="2" fill="white" />
        {/* Beacon dot */}
        <circle cx="14" cy="4" r="4" fill="#06b6d4" />
      </svg>
      <span className="text-lg font-semibold tracking-[0.15em] text-white">
        VERITIR
      </span>
    </Link>
  );
}
