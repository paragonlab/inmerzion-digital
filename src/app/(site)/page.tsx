import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inicio",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-4.5rem)] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-mint/20 blur-3xl animate-drift" />
          <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-sand/10 blur-3xl animate-drift [animation-delay:1.5s]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mint/50 to-transparent animate-pulse-line" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-20">
          <p className="animate-rise font-display text-[clamp(3.2rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
            {site.name}
          </p>
          <p className="animate-rise-delay-1 mt-5 max-w-xl text-lg text-fog md:text-xl">
            Estudio creativo-tecnológico de{" "}
            <span className="text-sand">AR, 3D, animación, IA</span> e influencers
            digitales. Hecho en México por {site.company}.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center bg-mint px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint-deep hover:text-white"
            >
              Hablemos de tu proyecto
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center border border-line px-6 py-3 text-sm font-medium text-fog transition hover:border-mint/50 hover:text-white"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Capacidades
          </h2>
          <p className="mt-3 max-w-2xl text-mist">
            Diseñamos y producimos experiencias digitales inmersivas para marcas
            que quieren verse y sentirse distintas.
          </p>

          <ul className="mt-14 grid gap-10 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item.slug} className="border-t border-line/70 pt-6">
                <h3 className="font-display text-xl font-semibold text-sand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog/90 md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              ¿Listos para sumergirnos?
            </h2>
            <p className="mt-3 max-w-lg text-mist">
              Cuéntanos qué quieres lanzar. Respondemos por correo o WhatsApp.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex w-fit items-center bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint"
          >
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
