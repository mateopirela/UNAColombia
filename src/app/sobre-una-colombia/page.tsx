import type { Metadata } from "next";
import {
  Card,
  Container,
  CtaBand,
  PageHero,
  Pendiente,
  SubNav,
} from "@/components/ui";
import { howWeDoIt, pillars, timeline, values } from "@/lib/content";
import { aboutNav, independenceNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre UNA Colombia",
  description:
    "Quiénes somos, nuestra historia, propósito, misión, visión y valores.",
};

const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** Lista en la que cada idea abre con su encabezado en negrilla. */
function LeadList({
  items,
  ordered = false,
}: {
  items: { title: string; text: string }[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      className={`mt-6 max-w-3xl space-y-4 text-lg text-muted ${
        ordered ? "list-decimal pl-6 marker:font-semibold marker:text-navy" : ""
      }`}
    >
      {items.map((i) => (
        <li key={i.title}>
          <strong className="font-semibold text-navy">{i.title}:</strong>{" "}
          {lowerFirst(i.text)}
        </li>
      ))}
    </List>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Sobre UNA Colombia" }]}
        title="Sobre UNA Colombia"
        intro="Una organización de la sociedad civil que construye puentes entre personas, organizaciones, sectores y oportunidades."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia" />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl text-navy">Quiénes somos</h2>
            <div className="mt-6 space-y-5 text-lg text-muted">
              <p>
                UNA Colombia es una organización de la sociedad civil que busca
                conectar a Colombia con las Naciones Unidas y la comunidad
                internacional. Su compromiso es construir puentes entre
                personas, organizaciones, sectores y oportunidades, para que el
                conocimiento y las relaciones puedan convertirse en
                colaboración e iniciativas con impacto sostenible.
              </p>
              <p>
                La organización busca acercar a Colombia las agendas,
                conversaciones y oportunidades internacionales y proyectar
                hacia el mundo las voces, experiencias, capacidades y
                soluciones que nacen en el país.
              </p>
            </div>
          </div>
          <aside className="self-start rounded-lg border-l-4 border-azulco bg-white p-6">
            <h2 className="font-sans text-sm font-semibold text-navy">
              Nuestra relación con la ONU
            </h2>
            <p className="mt-3 text-ink">{independenceNotice}</p>
          </aside>
        </Container>
      </section>

      <section id="historia" className="border-y border-line bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl text-navy">Nuestra historia</h2>
            <p className="mt-6 text-lg text-muted">
              UNA Colombia nació en 2008 para crear puentes entre Colombia y
              las Naciones Unidas. Su trayectoria incluye educación, liderazgo
              juvenil, Modelos de Naciones Unidas, acción social, alianzas y
              representación internacional.
            </p>
            <div className="mt-6">
              <Pendiente>
                Falta incorporar el texto ampliado de la historia compartido
                por Andrea.
              </Pendiente>
            </div>
          </div>
          <ol className="relative space-y-7 border-l-2 border-azul/40 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full bg-azulco"
                />
                <p className="font-serif text-2xl font-semibold text-navy">
                  {t.year}
                </p>
                <p className="mt-1 text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="proposito" className="bg-navy py-16 text-white">
        <Container>
          <h2 className="text-3xl">Nuestro propósito</h2>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug sm:text-[1.7rem]">
            Conectar a Colombia con las Naciones Unidas y el mundo para
            transformar conocimiento, relaciones y oportunidades en acción con
            impacto sostenible.
          </p>
          <p className="mt-6 max-w-3xl text-white/85">
            Buscamos construir puentes para que las agendas y oportunidades
            internacionales se conecten con la realidad colombiana y, al mismo
            tiempo, para que las voces, experiencias, capacidades y soluciones
            de Colombia encuentren espacios de participación y visibilidad
            internacional.
          </p>
          <p className="mt-6 font-semibold">
            Traer el mundo a Colombia. Llevar Colombia al mundo.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl text-navy">¿Cómo lo hacemos?</h2>
          <LeadList items={howWeDoIt} ordered />
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card className="bg-marfil">
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
          <Card className="bg-marfil">
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

      <section className="py-16">
        <Container>
          <h2 className="text-3xl text-navy">¿Cómo trabajamos?</h2>
          <LeadList items={pillars} />
        </Container>
      </section>

      <section id="valores" className="border-t border-line bg-white py-16">
        <Container>
          <h2 className="text-3xl text-navy">Nuestros valores</h2>
          <LeadList items={values} />
        </Container>
      </section>

      <CtaBand
        title="Conoce al equipo"
        text="Las personas que lideran y hacen posible el trabajo de UNA Colombia."
        href="/sobre-una-colombia/equipo"
        cta="Ver nuestro equipo"
      />
    </>
  );
}
