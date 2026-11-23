import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, Container, CtaBand, PageHero } from "@/components/ui";
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

      <section className="py-24">
        <Container className="grid gap-5 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className="h-full">
              <Link
                href={`/programas/${p.slug}`}
                className={`group relative flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 ${
                  i === 0
                    ? "bg-deep grain text-white"
                    : "bg-azul text-navy-deep"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-serif text-5xl font-bold opacity-50">
                    0{i + 1}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg] ${
                      i === 0
                        ? "bg-amarillo text-navy-deep"
                        : "bg-navy-deep text-white"
                    }`}
                  >
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl">{p.title}</h2>
                  <p className="mt-5 text-lg opacity-80">{p.summary}</p>
                  <span className="mt-6 inline-block text-sm font-semibold underline decoration-2 underline-offset-4">
                    Conoce el programa
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-line bg-white py-24">
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
