import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategory } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: `Installatie ${cat.label.toLowerCase()}`,
    description: `Zo verloopt de installatie van je ${cat.shortLabel.toLowerCase()} door SolarMist.`,
  };
}

export default async function CategoryInstallationPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <span className="text-sm font-semibold text-sky-dark">
        {cat.label} · Installatie
      </span>
      <h1 className="mt-2 text-4xl font-bold text-deep">
        Zo installeren wij jouw {cat.shortLabel.toLowerCase()}
      </h1>

      <div className="mt-8 rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-deep/60">
        Stappenplan van de installatie (intake, planning, montage,
        oplevering) volgt zodra we de opbouw van de referentiepagina hebben
        verwerkt.
      </div>

      <Link
        href="/offerte"
        className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
      >
        Offerte aanvragen
      </Link>
    </section>
  );
}
