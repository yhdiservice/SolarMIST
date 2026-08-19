"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Category } from "@/data/categories";

export default function CategoryHero({ category }: { category: Category }) {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({
      categorie: category.slug,
      email,
      notitie: `Postcode: ${postcode}, huisnummer: ${huisnummer}`,
    });
    router.push(`/offerte?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep via-deep to-sky-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24">
        <div className="lg:w-1/2">
          <span className="text-sm font-semibold text-gold">
            {category.label}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {category.tagline}
          </h1>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:w-1/2">
          <h2 className="text-xl font-bold text-deep">
            {category.heroFormHeading}
          </h2>
          <ul className="mt-4 space-y-2">
            {category.heroBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-deep/80"
              >
                <span className="mt-0.5 text-sky-dark">✓</span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm font-semibold text-deep">
            Binnen 1 minuut jouw prijs
          </p>
          <form onSubmit={handleSubmit} className="mt-3 space-y-3">
            <div className="flex gap-3">
              <input
                type="text"
                required
                placeholder="Postcode*"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-2/3 rounded-lg border border-deep/15 px-3 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
              />
              <input
                type="text"
                required
                placeholder="Huisnummer*"
                value={huisnummer}
                onChange={(e) => setHuisnummer(e.target.value)}
                className="w-1/3 rounded-lg border border-deep/15 px-3 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
              />
            </div>
            <input
              type="email"
              required
              placeholder="E-mailadres*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-deep/15 px-3 py-2.5 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
            >
              Persoonlijk plan ontvangen →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
