import type { Metadata } from "next";
import { Suspense } from "react";
import OfferteForm from "@/components/OfferteForm";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag vrijblijvend een offerte aan voor thuisbatterij, laadpaal, airco of warmtepomp.",
};

export default function OffertePage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-deep">Offerte aanvragen</h1>
      <p className="mt-4 text-deep/70">
        Vul het formulier in en we nemen binnen één werkdag contact met je op.
      </p>

      <div className="mt-10 rounded-2xl border border-deep/10 bg-white p-8">
        <Suspense>
          <OfferteForm />
        </Suspense>
      </div>
    </section>
  );
}
