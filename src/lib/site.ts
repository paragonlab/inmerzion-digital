export const site = {
  name: "Inmerzion",
  company: "Paragon Labs",
  tagline: "Experiencias digitales inmersivas",
  description:
    "Estudio creativo-tecnológico de AR, 3D, animación, IA e influencers digitales. Paragon Labs · México.",
  url: "https://inmerzion.digital",
  email: "hola@paragonlabs.mx",
  phoneDisplay: "+52 (667) 302 2370",
  phoneTel: "+526673022370",
  locale: "es_MX",
  lang: "es-MX",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/influencers", label: "Influencers" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const capabilities = [
  {
    slug: "ar",
    title: "WebAR y realidad aumentada",
    description:
      "Visualizadores de producto en el navegador: prueba, escala y compra sin instalar apps.",
  },
  {
    slug: "3d",
    title: "3D y entornos digitales",
    description:
      "Modelado, renders y espacios interactivos listos para web, catálogos y campañas.",
  },
  {
    slug: "animation",
    title: "Animación y contenido digital",
    description:
      "Motion, piezas para redes y narrativas visuales con identidad de marca.",
  },
  {
    slug: "ai",
    title: "IA e influencers digitales",
    description:
      "Personas virtuales, contenido asistido por IA y presencia digital consistente.",
  },
] as const;

export const services = [
  {
    title: "Visualizadores AR de producto",
    body: "Experiencias WebAR para que tus clientes vean el producto en su espacio real desde el celular. Ideal para retail, muebles, belleza y empaque.",
  },
  {
    title: "Producción 3D",
    body: "Assets, escenas y renders para e-commerce, lanzamientos y presentaciones. Optimizados para web y redes.",
  },
  {
    title: "Animación y digital",
    body: "Secuencias animadas, loops y piezas editoriales para campañas, landing pages y storytelling de marca.",
  },
  {
    title: "IA e influencers digitales",
    body: "Diseño de talentos digitales, pipelines de contenido y activaciones con identidad propia — como Lala Softfit.",
  },
] as const;

export const lalaLinks = [
  {
    label: "Termo pastel",
    href: "https://meli.la/1TwyfpG",
  },
  {
    label: "Ligas de resistencia",
    href: "https://meli.la/2QfeZGu",
  },
  {
    label: "Leggings",
    href: "https://meli.la/2d47wAd",
  },
  {
    label: "Crema Nivea",
    href: "https://meli.la/1nRi4zK",
  },
  {
    label: "Protector Avène SPF",
    href: "https://meli.la/1pmnXb3",
  },
  {
    label: "Gloss Maybelline",
    href: "https://meli.la/1pk9d8P",
  },
  {
    label: "Vaso iced coffee",
    href: "https://meli.la/2iWstwJ",
  },
  {
    label: "Scrunchies",
    href: "https://meli.la/1tdrtpm",
  },
] as const;
