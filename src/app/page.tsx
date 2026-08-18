import Link from "next/link";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky/10 via-bg to-bg" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <span className="inline-block rounded-full bg-gold/15 px-4 py-1 text-sm font-semibold text-gold-dark">
            Energie, comfort &amp; verduurzaming
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-deep sm:text-5xl">
            Slimmer verwarmen, koelen, laden en opslaan met SolarMist
          </h1>
          <p className="mt-6 max-w-xl text-lg text-deep/70">
            Van thuisbatterij tot laadpaal, van airco tot warmtepomp — SolarMist
            levert en installeert vakkundig, met oog voor subsidie en
            financiering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offerte"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
            >
              Vrijblijvende offerte
            </Link>
            <Link
              href="/subsidie"
              className="rounded-full border border-deep/15 px-6 py-3 text-sm font-semibold text-deep transition hover:border-sky hover:text-sky-dark"
            >
              Subsidie &amp; financiering
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-deep">Onze diensten</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group rounded-2xl border border-deep/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-10 w-10 rounded-full bg-sky/15" />
              <h3 className="mt-4 text-lg font-semibold text-deep">
                {cat.label}
              </h3>
              <p className="mt-2 text-sm text-deep/70">{cat.tagline}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-sky-dark group-hover:underline">
                Meer weten →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-deep py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">
            Benieuwd wat SolarMist voor jouw woning kan betekenen?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Vraag een vrijblijvende offerte aan en we nemen binnen één werkdag
            contact met je op.
          </p>
          <Link
            href="/offerte"
            className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
          >
            Offerte aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
