import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logoAzul from "@/assets/logo/logo-azul.png";
import logoBlanco from "@/assets/logo/logo-blanco.png";
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
    <div aria-hidden className={`flex h-1 w-28 ${className}`}>
      <span className="flex-1 bg-amarillo" />
      <span className="flex-1 bg-azulco" />
      <span className="flex-1 bg-rojo" />
    </div>
  );
}

/** Logotipo oficial junto al nombre. `light` es la versión para fondo oscuro. */
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={light ? logoBlanco : logoAzul}
        alt=""
        sizes="48px"
        className={light ? "h-12 w-12" : "h-11 w-11"}
      />
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${light ? "text-white" : "text-navy"}`}
      >
        UNA Colombia
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
    secondary: "border border-navy text-navy hover:bg-navy hover:text-white",
    light: "bg-white text-navy hover:bg-azul-soft",
    ghostLight: "border border-white/60 text-white hover:bg-white hover:text-navy",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Enlace de texto subrayado. */
export function TextLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-semibold underline decoration-1 underline-offset-4 transition-colors ${
        light
          ? "text-white hover:text-azul"
          : "text-azulco hover:text-navy"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  title,
  intro,
}: {
  /** Se conserva por compatibilidad; ya no se muestra. */
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl text-navy">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
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
    <section className="bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
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
        <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
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
    <p className="rounded-md border border-dashed border-amber-500/70 bg-amber-50 px-4 py-3 text-sm text-amber-900">
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
    <div className={`rounded-lg border border-line bg-white p-6 ${className}`}>
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
        <nav aria-label="Sección" className="-mx-3 flex overflow-x-auto">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={i.href === current ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 px-3 py-4 text-sm font-semibold transition-colors ${
                i.href === current
                  ? "border-navy text-navy"
                  : "border-transparent text-muted hover:text-navy"
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
    <section className="bg-navy text-white">
      <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{text}</p>
        </div>
        <ButtonLink href={href} variant="light" className="shrink-0">
          {cta}
        </ButtonLink>
      </Container>
    </section>
  );
}
