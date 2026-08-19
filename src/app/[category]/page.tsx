import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategory } from "@/data/categories";
import CategoryHero from "@/components/CategoryHero";
import FeatureSection from "@/components/FeatureSection";
import FaqSection from "@/components/FaqSection";

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
      <CategoryHero category={cat} />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <p className="text-lg text-deep/70">{cat.intro}</p>
          <Link
            href={`/${cat.slug}/installatie`}
            className="mt-6 inline-block text-sm font-semibold text-sky-dark hover:underline"
          >
            Hoe werkt de installatie? →
          </Link>
        </div>
      </section>

      {cat.features.map((feature, index) => (
        <FeatureSection
          key={feature.heading}
          feature={feature}
          imageOnLeft={index % 2 === 1}
          tinted={index % 2 === 1}
        />
      ))}

      <FaqSection faqs={cat.faqs} contactEmail="info@solarmist.nl" />
    </>
  );
}
