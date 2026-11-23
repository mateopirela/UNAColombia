import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Líneas de trabajo de UNA Colombia: Modelo de Naciones Unidas y Juventud y liderazgo.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Programas" }]}
        title="Programas"
        intro="Nuestras líneas de trabajo acercan los asuntos globales a jóvenes y ciudadanos, y convierten el conocimiento en participación."
      />

      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-line bg-white p-8"
            >
              <span className="font-serif text-3xl font-bold text-azul">
                0{i + 1}
              </span>
              <h2 className="mt-3 text-3xl text-navy">{p.title}</h2>
              <p className="mt-4 flex-1 text-muted">{p.summary}</p>
              <Link
                href={`/programas/${p.slug}`}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Conoce el programa <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-y border-line bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azulco">
              Iniciativas y alianzas
            </p>
            <h2 className="mt-3 text-3xl text-navy sm:text-4xl">
              Construimos iniciativas junto a otros
            </h2>
            <p className="mt-5 text-lg text-muted">
              Promovemos la creación y articulación de iniciativas que
              respondan a los desafíos sociales, económicos, ambientales,
              educativos, culturales y comunitarios de Colombia. Conectamos
              conocimientos, organizaciones, instituciones y recursos para
              desarrollar proyectos que contribuyan al desarrollo sostenible.
            </p>
          </div>
          <div className="rounded-2xl bg-azul-soft/70 p-8">
            <p className="font-serif text-xl font-bold text-navy">
              ¿Tu organización tiene una idea o una necesidad?
            </p>
            <p className="mt-2 text-sm text-muted">
              Las iniciativas nacen de las necesidades identificadas y de las
              alianzas que construimos.
            </p>
            <Link
              href="/contacto?asunto=alianzas"
              className="mt-5 inline-block text-sm font-semibold text-azulco hover:underline"
            >
              Conversemos sobre una iniciativa →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Quieres participar en un programa?"
        text="Cuéntanos quién eres y qué te interesa."
        href="/participa"
        cta="Ver formas de participar"
      />
    </>
  );
}
