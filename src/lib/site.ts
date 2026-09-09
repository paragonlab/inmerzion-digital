export const site = {
  name: "Inmerzion",
  company: "Paragon Labs",
  tagline: "Experiencias digitales inmersivas",
  description:
    "Estudio creativo-tecnológico de AR, 3D, video, animación, IA e influencers digitales. Paragon Labs · México.",
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

/** Home capabilities + /servicios cards — same offerings, shared source. */
export const offerings = [
  {
    slug: "filtros-ar",
    title: "Filtros AR para redes",
    description:
      "Lentes y efectos de marca para Snapchat, Instagram y TikTok: face filters y experiencias AR listas para campaña.",
  },
  {
    slug: "ar-muebles",
    title: "AR para muebles",
    description:
      "Coloca el producto a escala real en la habitación (WebAR o app). Catálogo interactivo para retail y e-commerce.",
  },
  {
    slug: "ar-arquitectura",
    title: "AR para arquitectura y diseño",
    description:
      "Visualización de espacios, maquetas, interiorismo y walkthroughs para proyectos y presentaciones.",
  },
  {
    slug: "try-on",
    title: "Try-on AR",
    description:
      "Prueba virtual de moda y beauty: maquillaje, accesorios y prendas sobre el usuario en tiempo real.",
  },
  {
    slug: "webar-ecommerce",
    title: "WebAR para e-commerce",
    description:
      "Catálogos y fichas de producto en el navegador: ver, escalar y explorar sin instalar apps.",
  },
  {
    slug: "escaneo-3d",
    title: "Escaneo 3D",
    description:
      "Captura de productos y espacios en 3D para catálogos, AR, renders y activos digitales reutilizables.",
  },
  {
    slug: "showrooms",
    title: "Showrooms virtuales",
    description:
      "Espacios digitales para recorrer colecciones, lanzamientos y experiencias de marca a distancia.",
  },
  {
    slug: "activaciones",
    title: "Activaciones de marca",
    description:
      "Campañas QR → AR: empaque, POP y outdoor que abren una experiencia aumentada en el celular.",
  },
  {
    slug: "video",
    title: "Producción completa de video",
    description:
      "Spots, contenido para marcas y series cortas: guion, producción y entrega listos para pantallas y redes.",
  },
  {
    slug: "cortometrajes",
    title: "Cortometrajes y motion cinema",
    description:
      "Piezas narrativas y cinematográficas con motion design: historias cortas con identidad de estudio.",
  },
  {
    slug: "animacion",
    title: "Animación y contenido digital",
    description:
      "Motion, loops y piezas editoriales para campañas, landings y storytelling de marca.",
  },
  {
    slug: "ai-influencers",
    title: "Influencers digitales y assets 3D",
    description:
      "Talentos virtuales, pipelines de contenido con IA y assets 3D con identidad propia — como Lala Softfit.",
  },
] as const;

export const capabilities = offerings;

export const services = offerings.map(({ title, description }) => ({
  title,
  body: description,
}));

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
