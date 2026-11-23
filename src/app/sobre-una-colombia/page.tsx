import type { Metadata } from "next";
import {
  Card,
  Container,
  CtaBand,
  PageHero,
  SectionHeading,
  SubNav,
} from "@/components/ui";
import { howWeDoIt, pillars, timeline, values } from "@/lib/content";
import { aboutNav, independenceNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre UNA Colombia",
  description:
    "Quiénes somos, nuestra historia, propósito, misión, visión y valores.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Sobre UNA Colombia" }]}
        title="Sobre UNA Colombia"
        intro="Una organización de la sociedad civil que construye puentes entre personas, organizaciones, sectores y oportunidades."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia" />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Quiénes somos" title="Conectamos a Colombia con las Naciones Unidas y la comunidad internacional" />
            <div className="mt-8 space-y-5 text-lg text-muted">
              <p>
                UNA Colombia es una organización de la sociedad civil que busca
                conectar a Colombia con las Naciones Unidas y la comunidad
                internacional. Nuestra vocación es construir puentes para que
                el conocimiento y las relaciones se conviertan en colaboración
                e iniciativas con impacto sostenible.
              </p>
              <p>
                Acercamos a Colombia las agendas, conversaciones y
                oportunidades internacionales, y proyectamos hacia el mundo las
                voces, experiencias, capacidades y soluciones que nacen en el
                país.
              </p>
            </div>
          </div>
          <aside className="self-start rounded-2xl border-l-4 border-azulco bg-white p-7">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-azulco">
              Nuestra relación con la ONU
            </h2>
            <p className="mt-3 text-ink">{independenceNotice}</p>
          </aside>
        </Container>
      </section>

      <section id="proposito" className="bg-navy py-20 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azul">
            Propósito
          </p>
          <p className="mt-5 max-w-4xl font-serif text-3xl font-bold leading-snug sm:text-4xl">
            Conectar a Colombia con las Naciones Unidas y el mundo para
            transformar conocimiento, relaciones y oportunidades en acción con
            impacto sostenible.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howWeDoIt.map((h, i) => (
              <li key={h.title} className="border-t border-white/25 pt-5">
                <span className="font-serif text-xl font-bold text-amarillo">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-sans text-base font-semibold">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-white/75">{h.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl text-navy">Misión</h2>
            <p className="mt-4 text-muted">
              Conectar a la sociedad colombiana con las Naciones Unidas y la
              comunidad internacional, articulando personas, organizaciones y
              sectores para fortalecer capacidades, formar líderes y
              transformar conocimiento, alianzas y oportunidades en acciones
              que contribuyan al desarrollo sostenible, la paz, los derechos
              humanos y la inclusión en Colombia.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl text-navy">Visión</h2>
            <p className="mt-4 text-muted">
              Ser una organización referente por su capacidad de conectar a
              Colombia con el mundo y transformar esas conexiones en
              colaboración y acción, contribuyendo a una Colombia más pacífica,
              sostenible, inclusiva y participativa, con ciudadanos,
              comunidades y organizaciones capaces de aportar soluciones a los
              desafíos nacionales y globales.
            </p>
          </Card>
        </Container>
      </section>

      <section id="historia" className="border-y border-line bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Nuestra historia"
            title="Desde 2008 creando puentes"
            intro="Nuestra trayectoria incluye educación, liderazgo juvenil, Modelos de Naciones Unidas, acción social, alianzas y representación internacional."
          />
          <ol className="relative space-y-8 border-l-2 border-azul/40 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-azulco"
                />
                <p className="font-serif text-2xl font-bold text-navy">
                  {t.year}
                </p>
                <p className="mt-1 text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Cómo trabajamos" title="Cuatro pilares" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Card key={p.title}>
                <span className="font-serif text-3xl font-bold text-azul">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="valores" className="bg-azul-soft/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Nuestros valores"
            title="Los principios que orientan nuestra manera de trabajar"
          />
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-navy/20 pt-5">
                <dt className="font-serif text-xl font-bold text-navy">
                  {v.title}
                </dt>
                <dd className="mt-2 text-sm text-muted">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand
        title="¿Quieres sumarte?"
        text="Hay espacio para jóvenes, voluntarios, organizaciones y aliados."
        href="/participa"
        cta="Conoce cómo participar"
      />
    </>
  );
}
