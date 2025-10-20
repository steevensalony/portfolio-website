"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors([]);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      botField: String(formData.get("botField") || ""), // hidden honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrors(data.errors || ["Something went wrong."]);
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrors(["Network error. Try again."]);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      {/* Honeypot field (hidden). Real people won’t see it, bots might fill it. */}
      <input
        type="text"
        name="botField"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Tell me a bit about what you need…"
        />
      </div>

      {errors.length > 0 && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <ul className="list-disc pl-5">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-green-700">Thanks! Your message was sent.</p>
      )}
    </form>
  );
}
