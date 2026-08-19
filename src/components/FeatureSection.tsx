import Link from "next/link";
import type { FeatureBlock } from "@/data/categories";

export default function FeatureSection({
  feature,
  imageOnLeft = false,
  tinted = false,
}: {
  feature: FeatureBlock;
  imageOnLeft?: boolean;
  tinted?: boolean;
}) {
  return (
    <section className={tinted ? "bg-white" : "bg-bg"}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className={imageOnLeft ? "lg:order-2" : undefined}>
          <h2 className="text-3xl font-bold text-deep">{feature.heading}</h2>
          <div className="mt-6 space-y-6">
            {feature.points.map((point) => (
              <div key={point.title}>
                <h3 className="font-semibold text-deep">{point.title}</h3>
                <p className="mt-1 text-deep/70">{point.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/offerte"
            className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
          >
            Offerte op maat aanvragen →
          </Link>
        </div>
        <div
          className={`aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky/20 via-gold/10 to-deep/10 ${
            imageOnLeft ? "lg:order-1" : ""
          }`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
