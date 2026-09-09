import Image from "next/image";
import { lalaLinks, site } from "@/lib/site";
const cardClass = "group flex items-center justify-between rounded-xl border p-4";
export default function LalaPage() {
  return <div className="mx-auto flex min-h-dvh max-w-md flex-col p-5">
    <header className="flex flex-col items-center text-center">
      <Image src="/lala-avatar.png" alt="Lala Softfit" width={144} height={144} priority className="h-36 w-36 rounded-full object-cover shadow-lg" />
      <h1 className="mt-5 text-4xl font-semibold text-[#3d4a3f]" style={{fontFamily:"var(--font-lala-display), serif"}}>Lala</h1>
      <a href="https://www.instagram.com/lala.softfit/" target="_blank" rel="noopener noreferrer" className="mt-2 text-[#6f8a6c]">@lala.softfit</a>
      <p className="mt-3 text-sm text-[#6d7a6f]">Softfit · lifestyle · mis picks del momento</p>
    </header>
    <nav className="mt-10 flex flex-col gap-3" aria-label="Links de Lala">
      <a href="mailto:hola@paragonlabs.mx?subject=Collab%20Lala%20Softfit" className={`${cardClass} border-[#6f8a6c]/45 bg-[#e8c4b8]/45`}><span><b>Collab / Colaboraciones</b><small className="ml-2 text-[#6d7a6f]">marcas &amp; partnerships</small></span><span aria-hidden="true">→</span></a>
      {lalaLinks.map((link,index)=><a key={link.href} href={link.href} target="_blank" rel="sponsored noopener noreferrer" className={`${cardClass} border-[#8fa88a]/35 bg-[#f6efe6]/80`} style={{animationDelay:`${.08*(index+1)}s`}}><b>{link.label}</b><span aria-hidden="true">→</span></a>)}
    </nav>
    <p className="mt-8 text-center text-xs text-[#6d7a6f]">Algunos enlaces son de afiliados: si compras a través de ellos, puedo recibir una comisión sin costo extra para ti.</p>
    <footer className="mt-6 text-center text-xs text-[#8fa88a]">{site.name} · {site.company}</footer>
  </div>;
}
