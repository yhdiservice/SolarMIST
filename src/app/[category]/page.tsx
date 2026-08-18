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
    title: cat.label,
    description: cat.tagline,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <>
      <section className="border-b border-deep/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="text-sm font-semibold text-sky-dark">
            {cat.label}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-deep">{cat.tagline}</h1>
          <p className="mt-4 max-w-2xl text-lg text-deep/70">{cat.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offerte"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
            >
              Offerte aanvragen
            </Link>
            <Link
              href={`/${cat.slug}/installatie`}
              className="rounded-full border border-deep/15 px-6 py-3 text-sm font-semibold text-deep transition hover:border-sky hover:text-sky-dark"
            >
              Hoe werkt de installatie?
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-deep/60">
          Content voor deze pagina (voordelen, prijsindicatie, veelgestelde
          vragen) volgt zodra we de opbouw van de referentiepagina hebben
          verwerkt.
        </div>
      </section>
    </>
  );
}
