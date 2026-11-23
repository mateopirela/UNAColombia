import Link from "next/link";
import { aboutNav, independenceNotice, nav, site } from "@/lib/site";
import { Container, Tricolor, Wordmark } from "./ui";

export function Footer() {
  const whatsappHref = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <Container className="grid gap-12 pb-10 pt-20 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="UNA Colombia, ir al inicio">
            <Wordmark light />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-white/65">{site.legalName}</p>
          <p className="mt-8 max-w-sm font-serif text-2xl italic leading-snug text-white/90">
            Traer el mundo a Colombia.
            <br />
            Llevar Colombia al mundo.
          </p>
          <Tricolor className="mt-6 w-24" />
        </div>

        <FooterCol title="Organización" items={aboutNav} />
        <FooterCol
          title="Explora"
          items={nav.filter((n) => n.href !== "/sobre-una-colombia")}
        />

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-azul">
            Contacto
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/contacto" className="text-white/80 hover:text-amarillo">
                Escríbenos
              </Link>
            </li>
            {site.contactEmail && (
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-white/80 hover:text-amarillo"
                >
                  {site.contactEmail}
                </a>
              </li>
            )}
            {whatsappHref && (
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-amarillo"
                >
                  WhatsApp
                </a>
              </li>
            )}
            {site.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-amarillo"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Marca gigante decorativa */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden px-5 sm:px-8"
      >
        <p className="mx-auto max-w-7xl whitespace-nowrap font-serif text-[14.5vw] font-bold leading-[0.85] tracking-tighter text-white/[0.06] 2xl:text-[13.5rem]">
          UNA Colombia
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/60 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl">{independenceNotice}</p>
          <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacidad" className="hover:text-white">
              Tratamiento de datos
            </Link>
            <span>© UNA Colombia</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-azul">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-white/80 hover:text-amarillo">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
