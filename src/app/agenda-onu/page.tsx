import type { Metadata } from "next";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { sdgs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agenda ONU",
  description:
    "La agenda de las Naciones Unidas en Colombia: prioridades, Objetivos de Desarrollo Sostenible y fuentes oficiales.",
};

const priorities = [
  {
    title: "Paz y justicia social",
    text: "Promover la construcción de paz, los derechos humanos y el bienestar de las comunidades.",
  },
  {
    title: "Seguridad alimentaria y desarrollo rural",
    text: "Impulsar el acceso a alimentos, agua y oportunidades para las comunidades rurales.",
  },
  {
    title: "Inclusión y protección social",
    text: "Reducir desigualdades y fortalecer la protección de las poblaciones más vulnerables.",
  },
  {
    title: "Medio ambiente y acción climática",
    text: "Proteger los recursos naturales, la biodiversidad y promover un desarrollo ambientalmente sostenible.",
  },
  {
    title: "Alianzas para el desarrollo sostenible",
    text: "Fortalecer la cooperación y las capacidades necesarias para avanzar en los Objetivos de Desarrollo Sostenible.",
  },
];

const sources = [
  {
    title: "Noticias ONU",
    text: "Actualidad y acontecimientos de Naciones Unidas en el mundo.",
    href: "https://news.un.org/es/",
  },
  {
    title: "Objetivos de Desarrollo Sostenible en Colombia",
    text: "Conoce los 17 objetivos y su aplicación en el país.",
    href: "https://colombia.un.org/es/sdgs",
  },
  {
    title: "Naciones Unidas en Colombia",
    text: "Programas, iniciativas y noticias sobre el trabajo de la ONU en Colombia.",
    href: "https://colombia.un.org/es",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Agenda ONU" }]}
        title="Agenda ONU"
        intro="Las decisiones y los desafíos globales también tienen impacto en Colombia. Desde UNA Colombia buscamos acercar la agenda de las Naciones Unidas a la ciudadanía, promoviendo el conocimiento de los principales temas internacionales y su relación con nuestra realidad nacional."
      />

      <section className="py-16">
        <Container>
          <h2 className="text-3xl text-navy">
            La agenda de Naciones Unidas en Colombia
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Las Naciones Unidas y el Gobierno de Colombia trabajan
            conjuntamente en prioridades orientadas al desarrollo sostenible
            del país, entre ellas:
          </p>
          <ul className="mt-8 max-w-3xl space-y-4 text-lg text-muted">
            {priorities.map((p) => (
              <li key={p.title}>
                <strong className="font-semibold text-navy">{p.title}:</strong>{" "}
                {p.text.charAt(0).toLowerCase() + p.text.slice(1)}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16">
        <Container>
          <h2 className="text-3xl text-navy">
            Explora la agenda de Naciones Unidas
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Consulta las noticias, iniciativas y prioridades de Naciones Unidas
            y conoce cómo se relacionan con Colombia.
          </p>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {sources.map((s) => (
              <li key={s.href} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-azulco underline decoration-1 underline-offset-4 hover:text-navy"
                >
                  Consultar sitio oficial
                  <span className="sr-only"> de {s.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="ods" className="py-16">
        <Container>
          <h2 className="text-3xl text-navy">
            Los 17 Objetivos de Desarrollo Sostenible
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sdgs.map(([name, color], i) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-md border border-line bg-white p-3"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm font-serif text-lg font-semibold text-white"
                  style={{ backgroundColor: color }}
                >
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-ink">{name}</span>
              </li>
            ))}
          </ol>
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
