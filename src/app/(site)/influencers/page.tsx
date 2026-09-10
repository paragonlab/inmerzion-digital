import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { lalaPersonJsonLd, pageSocialMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = `Influencers digitales · ${site.name}`;
const description =
  "Creamos e impulsamos influencers digitales con identidad, contenido y activaciones. Conoce a Lala Softfit.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/influencers" },
  ...pageSocialMetadata({ title, description, path: "/influencers" }),
};

export default function InfluencersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <JsonLd data={lalaPersonJsonLd()} />
      <p className="text-sm uppercase tracking-[0.2em] text-mint">Influencers</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        Talentos digitales con personalidad de estudio
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-mist">
        En {site.name} diseñamos influencers digitales: look, voz, contenido y
        activaciones afiliadas. Ideal para marcas que buscan presencia constante
        sin depender solo de talento tradicional.
      </p>

      <section className="mt-16 border-t border-line/70 pt-12">
        <h2 className="font-display text-2xl font-semibold text-sand md:text-3xl">
          Qué incluye el estudio
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Identidad",
              body: "Concepto visual, tono y narrativa del talento digital alineados a tu marca o a un universo propio.",
            },
            {
              title: "Contenido",
              body: "Producción asistida por IA y dirección creativa para feeds, stories y colaboraciones.",
            },
            {
              title: "Activación",
              body: "Links afiliados, campañas y páginas tipo hub para convertir atención en clics.",
            },
          ].map((item) => (
            <li key={item.title} className="border-t border-line/50 pt-5">
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog/90">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="featured-talent"
        className="mt-16 overflow-hidden border border-line/70 bg-surface/40"
      >
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 bg-ink-soft md:min-h-full">
            <Image
              src="/lala-avatar.png"
              alt="Lala Softfit — influencer digital soft-girl de fitness y lifestyle"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-surface/40"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.18em] text-mint">
              Featured talent
            </p>
            <h2
              id="featured-talent"
              className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl"
            >
              Lala Softfit
            </h2>
            <a
              href="https://www.instagram.com/lala.softfit/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-base font-medium text-sand hover:text-mint"
            >
              @lala.softfit
            </a>
            <p className="mt-4 max-w-md text-mist">
              Influencer digital soft-girl de fitness y lifestyle. Síguela en
              Instagram o abre su página de links con recomendaciones afiliadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lala"
                className="inline-flex bg-mint px-5 py-3 text-sm font-semibold text-ink hover:bg-mint-deep hover:text-white"
              >
                Ver links de Lala
              </Link>
              <a
                href="https://www.instagram.com/lala.softfit/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-line px-5 py-3 text-sm font-medium text-fog hover:border-mint/40 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-12 text-sm text-mist">
        ¿Quieres lanzar tu propio talento digital? Escríbenos a{" "}
        <a href={`mailto:${site.email}`} className="text-fog hover:text-mint">
          {site.email}
        </a>
        .
      </p>
    </div>
  );
}
