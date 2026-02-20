"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactState = { success: false, message: "" };

const inputClass =
  "w-full rounded-md border border-border bg-muted px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function CTAForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <p className="text-lg font-medium text-accent">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="max-w-lg space-y-5">
      {state.message && !state.success && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}
      <input
        name="name"
        type="text"
        placeholder="Name *"
        required
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Email *"
        required
        className={inputClass}
      />
      <input
        name="organization"
        type="text"
        placeholder="Organization *"
        required
        className={inputClass}
      />
      <select name="role" required className={cn(inputClass, "appearance-none")}>
        <option value="">Role *</option>
        <option value="Lab">Lab</option>
        <option value="Model partner">Model partner</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Message (optional)"
        rows={4}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Request early access"}
      </button>
    </form>
  );
}
