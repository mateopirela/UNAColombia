import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
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
        className={`font-serif text-2xl font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}
      >
        UNA
      </span>
      <span
        aria-hidden
        className={`h-7 w-px ${light ? "bg-white/40" : "bg-navy/30"}`}
      />
      <span
        className={`text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.22em] ${light ? "text-white/90" : "text-navy"}`}
      >
        Colombia
      </span>
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghostLight";
  className?: string;
}) {
  const styles = {
    primary: "bg-navy text-white hover:bg-navy-deep",
    secondary: "border border-navy/30 text-navy hover:border-navy hover:bg-white",
    light: "bg-white text-navy hover:bg-amarillo",
    ghostLight: "border border-white/40 text-white hover:bg-white/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
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
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-azul" : "text-azulco"}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl text-navy sm:text-4xl">{title}</h2>
      <Tricolor className="mt-5" />
      {intro && <p className="mt-6 text-lg text-muted">{intro}</p>}
    </div>
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
    <section className="relative overflow-hidden bg-navy text-white">
      <Arcs className="-right-24 -top-10 h-[34rem] w-[34rem] text-azul/40" />
      <Container className="relative py-14 sm:py-20">
        <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden>›</span>
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
        <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        <Tricolor className="mt-6" />
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-white/85">{intro}</p>
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
    <div
      className={`rounded-2xl border border-line bg-white p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
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
    <div className="border-b border-line bg-white">
      <Container>
        <nav aria-label="Sección" className="-mx-2 flex gap-1 overflow-x-auto py-3">
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
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <Arcs className="-left-40 -top-40 h-[30rem] w-[30rem] -scale-x-100 text-azul/30" />
      <Container className="relative flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{text}</p>
        </div>
        <ButtonLink href={href} variant="light">
          {cta} <span aria-hidden>→</span>
        </ButtonLink>
      </Container>
    </section>
  );
}
