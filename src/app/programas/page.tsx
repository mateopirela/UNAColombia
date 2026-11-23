import type { Metadata } from "next";
import { ProgramCard } from "@/components/ProgramCard";
import {
  ButtonLink,
  Container,
  CtaBand,
  PageHero,
} from "@/components/ui";
import { programs } from "@/lib/content";
import { programPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Líneas de trabajo de UNA Colombia: Modelo de Naciones Unidas, Juventud y liderazgo e Iniciativas estratégicas.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Programas" }]}
        title="Programas"
        intro="Nuestras líneas de trabajo acercan los asuntos globales a jóvenes y ciudadanos, y convierten el conocimiento en participación."
      />

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard
              key={p.slug}
              href={`/programas/${p.slug}`}
              title={p.title}
              summary={p.summary}
              photo={programPhotos[p.slug]}
            />
          ))}
          <ProgramCard
            href="#iniciativas"
            title="Iniciativas estratégicas"
            summary="Articulamos conocimientos, organizaciones y recursos en proyectos que contribuyan al desarrollo sostenible."
            photo={programPhotos["iniciativas-estrategicas"]}
          />
        </Container>
      </section>

      <section id="iniciativas" className="border-y border-line bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl text-navy">Iniciativas estratégicas</h2>
            <div className="mt-5 space-y-4 text-lg text-muted">
              <p>
                Promovemos la creación y articulación de iniciativas que
                respondan a los desafíos sociales, económicos, ambientales,
                educativos, culturales y comunitarios de Colombia.
              </p>
              <p>
                Trabajamos conectando conocimientos, organizaciones,
                instituciones y recursos para desarrollar proyectos que
                contribuyan al desarrollo sostenible y generen oportunidades
                de colaboración.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-marfil p-6">
            <h3 className="text-xl text-navy">
              ¿Tu organización tiene una idea o una necesidad?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Las iniciativas nacen de las necesidades identificadas y de las
              alianzas que construimos.
            </p>
            <ButtonLink href="/contacto?asunto=alianzas" className="mt-5">
              Conversemos sobre una iniciativa
            </ButtonLink>
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
