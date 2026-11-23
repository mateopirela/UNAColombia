import type { Metadata } from "next";
import Image from "next/image";
import {
  Container,
  CtaBand,
  PageHero,
  Pendiente,
  SubNav,
} from "@/components/ui";
import { photos } from "@/lib/photos";
import { aboutNav, independenceNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Relación global",
  description:
    "La conexión de UNA Colombia con las Naciones Unidas, WFUNA y la cooperación internacional.",
};

const cooperation = [
  {
    title: "Visita institucional de WFUNA a Colombia",
    text: "Encuentros y reuniones facilitados por UNA Colombia con instituciones y aliados nacionales para abordar temas de paz, desarrollo sostenible, cambio climático, seguridad alimentaria, desarme y participación de la sociedad civil.",
  },
  {
    title: "Participación en la campaña internacional Youth Building Peace",
    text: "Colaboración de UNA Colombia con WFUNA y las Asociaciones de Naciones Unidas de Finlandia, Malasia y Uganda para promover la participación de los jóvenes en la construcción de paz.",
  },
  {
    title: "Invitación a WIMUN Brasil",
    text: "Comunicación e invitación oficial de WFUNA a UNA Colombia para participar en el Modelo Internacional de Naciones Unidas organizado en Brasil.",
  },
  {
    title: "Comunicación y relacionamiento institucional",
    text: "Contactos entre representantes de WFUNA y UNA Colombia para restablecer la comunicación y fortalecer los vínculos entre ambas organizaciones.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
          { label: "Relación global" },
        ]}
        title="Relación global"
        intro="UNA Colombia busca conectar al país con las Naciones Unidas y la comunidad internacional, promoviendo el intercambio de conocimientos, experiencias y oportunidades de cooperación."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia/relacion-global" />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl text-navy">
              Un movimiento de ciudadanía global
            </h2>
            <p className="mt-6 text-lg text-muted">
              El movimiento de Asociaciones de Naciones Unidas reúne
              organizaciones de la sociedad civil que acercan el trabajo y los
              propósitos de las Naciones Unidas a sus respectivos países. Desde
              esta perspectiva, la articulación internacional permite construir
              relaciones, compartir iniciativas y generar espacios de
              colaboración frente a los desafíos globales.
            </p>
            <Image
              src={photos.banderasOnu.src}
              alt={photos.banderasOnu.alt}
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 40rem"
              className="mt-8 aspect-[16/9] w-full rounded-md object-cover"
            />
          </div>
          <aside className="self-start rounded-lg border-l-4 border-azulco bg-white p-6">
            <h2 className="font-sans text-sm font-semibold text-navy">
              Para evitar confusiones
            </h2>
            <p className="mt-3 text-ink">{independenceNotice}</p>
            <p className="mt-4 text-sm text-muted">
              Si buscas información oficial de la ONU en el país, visita{" "}
              <a
                href="https://colombia.un.org/es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-azulco underline underline-offset-2 hover:text-navy"
              >
                colombia.un.org
              </a>
              .
            </p>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16">
        <Container>
          <h2 className="text-3xl text-navy">
            WFUNA y cooperación internacional
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            La Federación Mundial de Asociaciones de Naciones Unidas (WFUNA,
            por sus siglas en inglés) es una organización no gubernamental
            independiente, fundada en 1946, que agrupa a las Asociaciones de
            Naciones Unidas de distintos países.
          </p>
          <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {cooperation.map((c) => (
              <li key={c.title} className="border-t-2 border-navy pt-5">
                <h3 className="text-xl text-navy">{c.title}</h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl">
            <Pendiente>
              Confirmar el estado actual de la membresía en WFUNA antes de
              afirmarla de forma explícita.
            </Pendiente>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Colombia en el mundo"
        text="Promovemos la participación de Colombia en espacios internacionales y damos visibilidad a lo que se construye en el país."
        href="/participa"
        cta="Conoce cómo participar"
      />
    </>
  );
}
