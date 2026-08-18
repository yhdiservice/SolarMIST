import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subsidie & financiering",
  description:
    "ISDE-subsidie voor warmtepompen en financiering via het Nationaal Warmtefonds.",
};

export default function SubsidiePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-deep">Subsidie &amp; financiering</h1>
      <p className="mt-4 text-lg text-deep/70">
        Verduurzamen is vaak voordeliger dan gedacht. Hieronder een overzicht
        van de belangrijkste regelingen.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-deep/10 bg-white p-6">
          <h2 className="text-lg font-semibold text-deep">
            ISDE-subsidie (warmtepomp)
          </h2>
          <p className="mt-2 text-sm text-deep/70">
            Voor de aanschaf van een warmtepomp kom je mogelijk in aanmerking
            voor de Investeringssubsidie duurzame energie en energiebesparing
            (ISDE). Exacte bedragen en voorwaarden vullen we hier aan met
            actuele, geverifieerde informatie.
          </p>
        </div>

        <div className="rounded-2xl border border-deep/10 bg-white p-6">
          <h2 className="text-lg font-semibold text-deep">
            Nationaal Warmtefonds
          </h2>
          <p className="mt-2 text-sm text-deep/70">
            Voor thuisbatterijen, laadpalen en warmtepompen kun je vaak
            gunstig financieren via het Nationaal Warmtefonds. We vullen deze
            sectie aan met actuele, geverifieerde informatie.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-deep/60">
        Let op: bedragen en voorwaarden wijzigen regelmatig. Deze pagina wordt
        aangevuld met geverifieerde, actuele cijfers voordat de site live
        gaat.
      </div>

      <Link
        href="/offerte"
        className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
      >
        Vraag advies op maat aan
      </Link>
    </section>
  );
}
