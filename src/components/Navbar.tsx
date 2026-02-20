"use client";

import { useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "How it works", href: "#how" },
  { label: "For Labs", href: "#labs" },
  { label: "For Model Partners", href: "#partners" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Request early access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-transform",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-opacity",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-transform",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-black"
          >
            Request early access
          </a>
        </div>
      )}
    </header>
  );
}
