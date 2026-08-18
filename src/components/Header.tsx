import Link from "next/link";
import { categories } from "@/data/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-deep">
          <span className="inline-block h-3 w-3 rounded-full bg-gold" />
          SolarMist
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-deep md:flex">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className="hover:text-sky-dark">
              {cat.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/offerte"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-deep transition hover:bg-gold-dark hover:text-white"
        >
          Offerte aanvragen
        </Link>
      </div>
    </header>
  );
}
