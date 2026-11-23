import Link from "next/link";
import { aboutNav, independenceNotice, nav, site } from "@/lib/site";
import { Container, Wordmark } from "./ui";

export function Footer() {
  const whatsappHref = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;

  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="UNA Colombia, ir al inicio">
            <Wordmark light />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            {site.description}
          </p>
        </div>

        <FooterCol title="Organización" items={aboutNav} />
        <FooterCol
          title="Explora"
          items={nav.filter((n) => n.href !== "/sobre-una-colombia")}
        />

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/contacto" className="text-white/75 hover:text-white">
                Escríbenos
              </Link>
            </li>
            {site.contactEmail && (
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-white/75 hover:text-white"
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
                  className="text-white/75 hover:text-white"
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
                  className="text-white/75 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/65 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl">{independenceNotice}</p>
          <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacidad" className="hover:text-white">
              Tratamiento de datos
            </Link>
            <Link href="/creditos" className="hover:text-white">
              Créditos de imágenes
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
      <h2 className="font-sans text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-white/75 hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
