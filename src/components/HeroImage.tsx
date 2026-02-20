"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <div className="overflow-hidden rounded-xl border border-border bg-muted">
        {!failed ? (
          <Image
            src="/veritir-intermediary.png"
            alt="VERITIR as safe intermediary between research labs and foundation models"
            width={600}
            height={400}
            className="h-auto w-full"
            priority
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex aspect-[3/2] w-full items-center justify-center p-8 text-center text-sm text-neutral-500">
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border">
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
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              </div>
              <p className="font-medium text-neutral-400">
                VERITIR as safe intermediary
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                Research Labs &rarr; VERITIR &rarr; Foundation Models
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
