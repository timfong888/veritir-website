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
          <div className="flex aspect-[3/2] w-full items-center justify-center p-10">
            <div className="flex w-full items-center justify-between gap-4">
              {/* Left: Research Labs */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background">
                  <svg className="h-7 w-7 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.591.659H9.061a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7.5" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-neutral-400">Research Labs</span>
              </div>

              {/* Arrow */}
              <svg className="h-4 w-8 shrink-0 text-neutral-600" fill="none" viewBox="0 0 32 16">
                <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Center: VERITIR */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent/40 bg-accent/10">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-accent">VERITIR</span>
                <span className="text-[10px] text-neutral-500">Clean-room interface</span>
              </div>

              {/* Arrow */}
              <svg className="h-4 w-8 shrink-0 text-neutral-600" fill="none" viewBox="0 0 32 16">
                <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Right: Foundation Models */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background">
                  <svg className="h-7 w-7 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-neutral-400">Foundation Models</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
