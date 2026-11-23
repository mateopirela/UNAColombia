import type { Metadata } from "next";
import {
  Card,
  Container,
  CtaBand,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { sdgs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agenda ONU",
  description:
    "Ciudadanía global, Objetivos de Desarrollo Sostenible y los asuntos internacionales que conectan a Colombia con el mundo.",
};

const themes = [
  {
    title: "Desarrollo sostenible",
    text: "Crecer sin comprometer a las generaciones futuras: economía, sociedad y ambiente en equilibrio.",
  },
  {
    title: "Paz",
    text: "Prevenir conflictos, construir convivencia y fortalecer el diálogo entre comunidades y naciones.",
  },
  {
    title: "Derechos humanos",
    text: "La dignidad y los derechos que pertenecen a todas las personas, sin distinción.",
  },
  {
    title: "Inclusión",
    text: "Que nadie se quede atrás: participación plena de todas las personas y comunidades.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Agenda ONU" }]}
        title="Agenda ONU"
        intro="Las decisiones y los desafíos globales también tienen impacto en Colombia. Acercar la agenda de las Naciones Unidas a la ciudadanía ayuda a comprenderlos y a contribuir a su transformación."
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Lo esencial"
              title="¿Qué son las Naciones Unidas?"
            />
            <div className="mt-8 space-y-5 text-lg text-muted">
              <p>
                La Organización de las Naciones Unidas se fundó en 1945, tras
                la Segunda Guerra Mundial, para mantener la paz y la seguridad
                internacionales, fomentar la cooperación entre países y
                promover los derechos humanos.
              </p>
              <p>
                Hoy la integran 193 Estados miembros. Colombia es uno de sus
                miembros fundadores.
              </p>
            </div>
            <a
              href="https://www.un.org/es/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-azulco hover:underline"
            >
              Más información en un.org →
            </a>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h2 className="text-2xl">Ciudadanía global</h2>
            <p className="mt-4 text-white/85">
              Ser ciudadano global es reconocer que lo que ocurre en el mundo
              nos afecta y que lo que hacemos en nuestra comunidad también
              cuenta. Significa informarse, dialogar y participar en los
              asuntos que conectan a Colombia con el mundo.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Agenda 2030"
            title="Los 17 Objetivos de Desarrollo Sostenible"
            intro="En 2015, los Estados miembros de la ONU adoptaron la Agenda 2030: un plan común con 17 objetivos para las personas, el planeta y la prosperidad."
          />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sdgs.map(([name, color], i) => (
              <li key={name}>
                <a
                  href={`https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-line bg-marfil p-3 transition-colors hover:bg-white"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-serif text-lg font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-ink">{name}</span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Temas"
            title="Los asuntos que orientan nuestro trabajo"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => (
              <Card key={t.title}>
                <h3 className="text-xl text-navy">{t.title}</h3>
                <p className="mt-3 text-sm text-muted">{t.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="De la agenda a la acción"
        text="Conoce los programas con los que acercamos estos temas a jóvenes y ciudadanos."
        href="/programas"
        cta="Ver programas"
      />
    </>
  );
}
