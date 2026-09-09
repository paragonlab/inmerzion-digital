import { lalaLinks, site } from "@/lib/site";

export default function LalaPage() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-12">
      <header className="animate-rise flex flex-col items-center text-center">
        <div
          className="animate-drift flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(145deg,#e8c4b8_0%,#8fa88a_100%)] shadow-[0_12px_40px_rgba(111,138,108,0.25)]"
          aria-hidden="true"
        >
          <span
            className="text-3xl font-semibold text-[#f6efe6]"
            style={{ fontFamily: "var(--font-lala-display), serif" }}
          >
            La
          </span>
        </div>
        <h1
          className="mt-5 text-4xl font-semibold tracking-tight text-[#3d4a3f]"
          style={{ fontFamily: "var(--font-lala-display), serif" }}
        >
          Lala
        </h1>
        <a
          href="https://www.instagram.com/lala.softfit/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-base font-medium text-[#6f8a6c] transition hover:text-[#3d4a3f]"
        >
          @lala.softfit
        </a>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#6d7a6f]">
          Softfit · lifestyle · mis picks del momento
        </p>
      </header>

      <nav className="animate-rise-delay-1 mt-10 flex flex-1 flex-col gap-3" aria-label="Links de Lala">
        {lalaLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-[#8fa88a]/35 bg-[#f6efe6]/80 px-5 py-4 text-left shadow-[0_4px_20px_rgba(61,74,63,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#6f8a6c]/55 hover:bg-white/70 hover:shadow-[0_10px_28px_rgba(111,138,108,0.15)]"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <span className="font-semibold text-[#3d4a3f]">{link.label}</span>
            <span
              className="text-lg text-[#8fa88a] transition group-hover:translate-x-0.5 group-hover:text-[#6f8a6c]"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        ))}
      </nav>

      <p className="animate-rise-delay-2 mt-8 text-center text-xs leading-relaxed text-[#6d7a6f]">
        Algunos enlaces son de afiliados: si compras a través de ellos, puedo
        recibir una comisión sin costo extra para ti.
      </p>

      <footer className="mt-6 text-center text-xs text-[#8fa88a]">
        {site.name} · {site.company}
      </footer>
    </div>
  );
}
