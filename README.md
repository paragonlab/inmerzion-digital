# Inmerzion · Paragon Labs

Sitio web de **Inmerzion** (Paragon Labs): estudio creativo-tecnológico de AR, 3D, animación, IA e influencers digitales. Incluye la página de links de **Lala Softfit** (`/lala`).

Idioma: español (México). Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home: hero, capacidades, CTA de contacto |
| `/servicios` | AR, apps/juegos, 3D, video, animación, IA e influencers |
| `/influencers` | Oferta de influencers digitales + Lala |
| `/lala` | Hub tipo Linktree de @lala.softfit (afiliados) |
| `/contacto` | Correo, teléfono y mailto |

Contacto: `hola@paragonlabs.mx` · `+52 (667) 302 2370`

## Deploy en Vercel

1. Empuja este repo a GitHub (ya configurado).
2. En [vercel.com](https://vercel.com): **Add New Project** → importa `paragonlab/inmerzion-digital`.
3. Framework preset: **Next.js**. Build: `npm run build`. Output: default.
4. Deploy. Obtendrás una URL `*.vercel.app`.

No se requieren variables de entorno para el MVP.

### Dominio `inmerzion.digital` (cutover desde Hostinger)

Cuando el deploy en Vercel esté estable:

1. En Vercel → Project → **Settings → Domains** → agrega `inmerzion.digital` y `www.inmerzion.digital`.
2. En Hostinger (DNS del dominio), apunta:
   - **A** `@` → IP que indique Vercel (suele ser `76.76.21.21`)
   - **CNAME** `www` → `cname.vercel-dns.com` (o el valor exacto que muestre Vercel)
3. Espera la propagación DNS y verifica el certificado SSL en Vercel.
4. Solo entonces quita o deja de usar el hosting web anterior en Hostinger (el DNS queda en Hostinger; el sitio vive en Vercel).

## Notas

- Links de `/lala` llevan `rel="sponsored"`.
- Sin métricas ni clientes inventados.
- OG image dinámica en `/lala/opengraph-image`.
