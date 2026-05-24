"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm({ cta = "Send Message" }: { cta?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-zinc-200">
          Name
        </label>
        <input
          id="name"
          required
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-zinc-200">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-zinc-200">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </div>
      <Button type="submit">{cta}</Button>
      {sent ? <p className="text-sm text-green-300">Thanks! Message captured for follow-up.</p> : null}
    </form>
  );
}
