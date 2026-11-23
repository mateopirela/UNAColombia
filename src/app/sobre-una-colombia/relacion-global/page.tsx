import type { Metadata } from "next";
import {
  Card,
  Container,
  CtaBand,
  PageHero,
  Pendiente,
  SectionHeading,
  SubNav,
} from "@/components/ui";
import { aboutNav, independenceNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Relación global",
  description:
    "La conexión de UNA Colombia con las Naciones Unidas, el movimiento de Asociaciones de Naciones Unidas y la cooperación internacional.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
          { label: "Relación global" },
        ]}
        title="Relación global"
        intro="Conectamos al país con las Naciones Unidas y la comunidad internacional, promoviendo el intercambio de conocimientos, experiencias y oportunidades de cooperación."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia/relacion-global" />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Un movimiento de la sociedad civil"
              title="Las Asociaciones de Naciones Unidas"
            />
            <div className="mt-8 space-y-5 text-lg text-muted">
              <p>
                El movimiento de Asociaciones de Naciones Unidas reúne
                organizaciones de la sociedad civil que acercan el trabajo y
                los propósitos de las Naciones Unidas a sus respectivos países.
              </p>
              <p>
                Desde esta perspectiva, la articulación internacional permite
                construir relaciones, compartir iniciativas y generar espacios
                de colaboración frente a los desafíos globales.
              </p>
            </div>
          </div>
          <aside className="self-start rounded-2xl border-l-4 border-azulco bg-white p-7">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-azulco">
              Para evitar confusiones
            </h2>
            <p className="mt-3 text-ink">{independenceNotice}</p>
            <p className="mt-4 text-sm text-muted">
              Si buscas información oficial de la ONU, visita{" "}
              <a
                href="https://www.un.org/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-azulco hover:underline"
              >
                un.org
              </a>
              .
            </p>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          <Card className="bg-marfil">
            <h2 className="text-2xl text-navy">¿Qué es WFUNA?</h2>
            <p className="mt-4 text-muted">
              La Federación Mundial de Asociaciones de Naciones Unidas (WFUNA,
              por sus siglas en inglés) es una organización no gubernamental
              independiente, fundada en 1946, que agrupa a las Asociaciones de
              Naciones Unidas de distintos países.
            </p>
            <a
              href="https://wfuna.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-azulco hover:underline"
            >
              Visitar wfuna.org →
            </a>
          </Card>
          <Card className="bg-marfil">
            <h2 className="text-2xl text-navy">UNA Colombia en la red</h2>
            <p className="mt-4 text-muted">
              Aquí se presentarán la vinculación de UNA Colombia con WFUNA y
              los espacios de cooperación internacional en los que participa.
            </p>
            <div className="mt-5">
              <Pendiente>
                Confirmar el estado actual de la membresía en WFUNA antes de
                afirmarla públicamente.
              </Pendiente>
            </div>
          </Card>
        </Container>
      </section>

      <CtaBand
        title="Colombia en el mundo"
        text="Promovemos la participación de Colombia en espacios internacionales y damos visibilidad a lo que se construye en el país."
        href="/participa"
        cta="Súmate"
      />
    </>
  );
}
