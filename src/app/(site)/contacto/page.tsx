import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = `Contacto · ${site.name}`;
const description = `Contacta a ${site.name} (${site.company}): ${site.email} · ${site.phoneDisplay}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contacto" },
  ...pageSocialMetadata({ title, description, path: "/contacto" }),
};

export default function ContactoPage() {
  const subject = encodeURIComponent("Hola Inmerzion — consulta");
  const body = encodeURIComponent(
    "Hola equipo Inmerzion,\n\nQuiero platicar sobre:\n\n",
  );
  const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-mint">Contacto</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        Empecemos algo inmersivo
      </h1>
      <p className="mt-5 max-w-xl text-lg text-mist">
        Cuéntanos tu idea, campaña o producto. Respondemos desde México.
      </p>

      <div className="mt-14 grid gap-10 border-t border-line/70 pt-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-sand">
            Correo
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block text-lg text-white transition hover:text-mint"
          >
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-sand">
            Teléfono / WhatsApp
          </h2>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 block text-lg text-white transition hover:text-mint"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mt-14 max-w-xl">
        <a
          href={mailto}
          className="inline-flex bg-mint px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint-deep hover:text-white"
        >
          Escribir por correo
        </a>
        <p className="mt-6 text-sm leading-relaxed text-mist">
          Formulario simple vía mailto: se abre tu cliente de correo con un
          asunto listo. También puedes marcar o mandar WhatsApp al número de
          arriba.
        </p>
      </div>
    </div>
  );
}
