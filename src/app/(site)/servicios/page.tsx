import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site";

const title = `Servicios · ${site.name}`;
const description =
  "Filtros AR, WebAR, apps inmersivas y juegos, video, cortometrajes, escaneo 3D, showrooms e influencers digitales por Inmerzion · Paragon Labs.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/servicios" },
  ...pageSocialMetadata({ title, description, path: "/servicios" }),
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-mint">Servicios</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        Producción inmersiva de punta a punta
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-mist">
        De filtros AR en redes a apps, juegos, video, cortometrajes y talentos
        digitales: producimos las piezas y experiencias que tu marca necesita.
      </p>

      <div className="mt-16 space-y-0">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="grid gap-4 border-t border-line/70 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10"
          >
            <div>
              <span className="font-display text-sm text-mint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold text-sand md:text-3xl">
                {service.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-fog/90 md:pt-8">
              {service.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-line/70 pt-12">
        <p className="text-mist">
          ¿Quieres un influencer digital con identidad propia?{" "}
          <Link href="/influencers" className="text-mint underline-offset-4 hover:underline">
            Conoce la oferta
          </Link>{" "}
          o visita a{" "}
          <Link href="/lala" className="text-sand underline-offset-4 hover:underline">
            Lala Softfit
          </Link>
          .
        </p>
        <p className="mt-6 text-sm text-mist">
          Contacto:{" "}
          <a href={`mailto:${site.email}`} className="text-fog hover:text-mint">
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
