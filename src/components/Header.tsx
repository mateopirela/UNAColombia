"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const first = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Sobre el hero (azul) el encabezado es transparente con texto claro.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "border-b border-line bg-marfil/90 shadow-[0_8px_30px_-20px_rgba(6,33,61,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="UNA Colombia, ir al inicio">
          <Wordmark light={!solid} />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-4 ${
                      solid
                        ? active
                          ? "text-azulco"
                          : "text-ink hover:text-azulco"
                        : active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-amarillo xl:inset-x-4"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contacto"
            className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300 sm:inline-flex ${
              solid
                ? "bg-navy text-white hover:bg-navy-deep"
                : "bg-white text-navy hover:bg-amarillo"
            }`}
          >
            Contacto
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-navy hover:bg-azul-soft" : "text-white hover:bg-white/10"
            }`}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-marfil lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-8">
            {[...nav, { href: "/contacto", label: "Contacto" }].map(
              (item, i) => (
                <li
                  key={item.href}
                  className="hero-in border-b border-line"
                  style={{ "--d": `${i * 50}ms` } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-5 font-serif text-3xl font-bold ${
                      isActive(item.href) ? "text-azulco" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden className="text-xl text-azul">
                      →
                    </span>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
