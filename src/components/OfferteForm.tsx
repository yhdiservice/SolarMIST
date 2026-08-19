"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories, getCategory } from "@/data/categories";

type Status = "idle" | "submitting" | "success" | "error";

export default function OfferteForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const prefillEmail = searchParams.get("email") ?? "";
  const prefillMessage = searchParams.get("notitie") ?? "";
  const prefillCategory = getCategory(searchParams.get("categorie") ?? "")
    ?.slug;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Er is iets misgegaan.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Er is iets misgegaan.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sky/30 bg-sky/10 p-8 text-deep">
        <h2 className="text-lg font-semibold">Bedankt voor je aanvraag!</h2>
        <p className="mt-2 text-sm text-deep/70">
          We nemen binnen één werkdag contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-deep">
          Naam *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-deep/15 px-4 py-2.5 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-deep">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={prefillEmail}
            className="mt-1 w-full rounded-lg border border-deep/15 px-4 py-2.5 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-deep">
            Telefoonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-deep/15 px-4 py-2.5 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-deep">
          Waarin ben je geïnteresseerd? *
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue={prefillCategory ?? ""}
          className="mt-1 w-full rounded-lg border border-deep/15 bg-white px-4 py-2.5 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
        >
          <option value="" disabled>
            Kies een dienst
          </option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-deep">
          Toelichting
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={prefillMessage}
          className="mt-1 w-full rounded-lg border border-deep/15 px-4 py-2.5 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Versturen..." : "Offerte aanvragen"}
      </button>
    </form>
  );
}
