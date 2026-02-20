import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <svg
        width="28"
        height="38"
        viewBox="0 0 32 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Beacon dot */}
        <circle cx="16" cy="2.5" r="2.5" fill="white" />
        {/* Left blade — curved outward */}
        <path
          d="M14.5 8 C12 20 6 31 1 42 L9.5 42 C12 33 14 22 15.2 12 Z"
          fill="white"
        />
        {/* Center spire — narrow */}
        <path d="M15.5 8 L14.2 42 L17.8 42 L16.5 8 Z" fill="white" />
        {/* Right blade — curved outward */}
        <path
          d="M16.8 12 C18 22 20 33 22.5 42 L31 42 C26 31 20 20 17.5 8 Z"
          fill="white"
        />
      </svg>
      <span className="text-lg font-bold tracking-[0.18em] text-white">
        VERITIR
      </span>
    </Link>
  );
}
