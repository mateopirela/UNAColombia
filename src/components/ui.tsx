import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Barra tricolor del manual de marca. */
export function Tricolor({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex h-1.5 w-40 overflow-hidden rounded-full ${className}`}
    >
      <span className="flex-1 bg-amarillo" />
      <span className="flex-1 bg-azulco" />
      <span className="flex-1 bg-rojo" />
    </div>
  );
}

/** Arcos finos: recurso gráfico del manual, sin usar el emblema de la ONU. */
export function Arcs({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      <circle cx="520" cy="560" r="420" stroke="currentColor" strokeWidth="2" />
      <circle
        cx="640"
        cy="420"
        r="380"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="420"
        cy="700"
        r="460"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`font-serif text-[1.7rem] font-bold leading-none tracking-tight transition-colors ${light ? "text-white" : "text-navy"}`}
      >
        UNA
      </span>
      <span aria-hidden className="flex h-7 w-[3px] flex-col overflow-hidden rounded-full">
        <span className="flex-[2] bg-amarillo" />
        <span className="flex-1 bg-azulco" />
        <span className="flex-1 bg-rojo" />
      </span>
      <span
        className={`text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.24em] transition-colors ${light ? "text-white/90" : "text-navy"}`}
      >
        Colombia
      </span>
    </span>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghostLight" | "yellow";
  arrow?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-navy text-white hover:bg-navy-deep",
    secondary:
      "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
    light: "bg-white text-navy hover:bg-amarillo",
    ghostLight:
      "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy",
    yellow: "bg-amarillo text-navy-deep hover:bg-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] ${light ? "text-azul" : "text-azulco"}`}
    >
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-4xl sm:text-5xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg sm:text-xl ${light ? "text-white/75" : "text-muted"}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: { href?: string; label: string }[];
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-deep grain relative overflow-hidden text-white">
      <Arcs className="-right-24 -top-10 h-[44rem] w-[44rem] text-azul/35" />
      <Container className="relative pb-20 pt-36 sm:pb-28 sm:pt-44">
        <nav
          aria-label="Ruta de navegación"
          className="hero-in text-sm text-white/65"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className="hero-in mt-8 max-w-4xl text-5xl sm:text-6xl lg:text-7xl"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        <Tricolor className="grow-x mt-8 w-48" />
        {intro && (
          <p
            className="hero-in mt-8 max-w-2xl text-lg text-white/80 sm:text-xl"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            {intro}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

/** Nota visible solo mientras `site.showDraftNotes` sea true. */
export function Pendiente({ children }: { children: ReactNode }) {
  if (!site.showDraftNotes) return null;
  return (
    <p className="rounded-xl border border-dashed border-amber-500/70 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <strong className="font-semibold">Pendiente de validación.</strong>{" "}
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`rounded-3xl border border-line bg-white p-7 hover:-translate-y-1 hover:border-azul/60 hover:shadow-[0_24px_60px_-30px_rgba(10,58,107,0.45)] sm:p-8 ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function SubNav({
  items,
  current,
}: {
  items: { href: string; label: string }[];
  current: string;
}) {
  return (
    <div className="sticky top-[4.5rem] z-30 border-b border-line bg-marfil/90 backdrop-blur">
      <Container>
        <nav
          aria-label="Sección"
          className="-mx-2 flex gap-1 overflow-x-auto py-3"
        >
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={i.href === current ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                i.href === current
                  ? "bg-navy text-white"
                  : "text-navy hover:bg-azul-soft"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 font-serif text-2xl italic sm:text-3xl"
        >
          {item}
          <span aria-hidden className="h-2 w-2 rounded-full bg-amarillo" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy-deep py-6 text-white/90">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export function CtaBand({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <section className="bg-deep grain relative overflow-hidden text-white">
      <Arcs className="-left-40 -top-40 h-[40rem] w-[40rem] -scale-x-100 text-azul/30" />
      <Container className="relative py-24 sm:py-32">
        <Reveal className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
            {text}
          </p>
          <ButtonLink href={href} variant="yellow" arrow className="mt-10">
            {cta}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
