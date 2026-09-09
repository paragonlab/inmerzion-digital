import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-white">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-mist">
            {site.company} — estudio creativo-tecnológico en México.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-fog/90">
          <a href={`mailto:${site.email}`} className="hover:text-mint">
            {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="hover:text-mint">
            {site.phoneDisplay}
          </a>
          <Link href="/lala" className="text-mist hover:text-sand">
            Lala Softfit
          </Link>
        </div>
      </div>
      <div className="border-t border-line/40 px-5 py-4 text-center text-xs text-mist md:px-8">
        © {new Date().getFullYear()} {site.name} · {site.company}
      </div>
    </footer>
  );
}
