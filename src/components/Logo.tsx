import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/veritir_logo_wordmark_white.svg"
        alt="VERITIR"
        width={150}
        height={40}
        className="h-5 w-auto"
        priority
        unoptimized
      />
    </Link>
  );
}
