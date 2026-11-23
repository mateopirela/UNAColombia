import type { Metadata } from "next";
import {
  Container,
  PageHero,
  Pendiente,
  SectionHeading,
  SubNav,
} from "@/components/ui";
import { aboutNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparencia",
  description:
    "Información legal, de gobierno y de gestión de UNA Colombia.",
};

type Doc = { label: string; href?: string };

/** Añade `href` a cada documento cuando esté disponible para publicación. */
const sections: { title: string; text: string; docs: Doc[] }[] = [
  {
    title: "Información legal",
    text: "Naturaleza jurídica, registro y representación legal de la organización.",
    docs: [
      { label: "Certificado de existencia y representación legal" },
      { label: "Estatutos" },
    ],
  },
  {
    title: "Gobierno",
    text: "Órganos de dirección y personas responsables.",
    docs: [{ label: "Junta directiva" }, { label: "Organigrama" }],
  },
  {
    title: "Gestión y resultados",
    text: "Informes de actividades y estados financieros por año.",
    docs: [{ label: "Informe de gestión" }, { label: "Estados financieros" }],
  },
  {
    title: "Alianzas y convenios",
    text: "Organizaciones con las que trabajamos y acuerdos vigentes.",
    docs: [{ label: "Listado de alianzas y convenios" }],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
          { label: "Transparencia" },
        ]}
        title="Transparencia"
        intro="Actuamos con honestidad y coherencia, comunicando con claridad nuestras acciones y resultados."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia/transparencia" />

      <section className="py-24">
        <Container>
          <Pendiente>
            Confirmar el estado legal vigente y qué documentos se publicarán.
            Los que no tengan enlace aparecen como «Próximamente».
          </Pendiente>

          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {sections.map((s) => (
              <div key={s.title}>
                <SectionHeading title={s.title} intro={s.text} />
                <ul className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
                  {s.docs.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-center justify-between gap-4 px-5 py-4"
                    >
                      <span className="font-medium text-ink">{d.label}</span>
                      {d.href ? (
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-sm font-semibold text-azulco hover:underline"
                        >
                          Ver documento →
                        </a>
                      ) : (
                        <span className="shrink-0 text-sm text-muted">
                          Próximamente
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
