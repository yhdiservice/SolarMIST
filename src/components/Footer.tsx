import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-block h-3 w-3 rounded-full bg-gold" />
            SolarMist
          </div>
          <p className="mt-3 text-sm text-white/70">
            Thuisbatterijen, laadpalen, airco en warmtepompen. Vakkundig geleverd
            en geïnstalleerd.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Diensten</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/${cat.slug}`} className="hover:text-white">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Informatie</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/offerte" className="hover:text-white">
                Offerte aanvragen
              </Link>
            </li>
            <li>
              <Link href="/subsidie" className="hover:text-white">
                Subsidie &amp; financiering
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>info@solarmist.nl</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} SolarMist. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
