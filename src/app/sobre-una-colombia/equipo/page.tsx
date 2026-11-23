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
  title: "Nuestro equipo",
  description: "Las personas que conforman UNA Colombia.",
};

type Member = { name: string; role: string; bio?: string; linkedin?: string };

/**
 * Añade aquí los perfiles cuando la estructura esté confirmada
 * y cada persona haya autorizado su publicación.
 */
const groups: { title: string; members: Member[] }[] = [
  { title: "Dirección institucional", members: [] },
  { title: "Equipo directivo", members: [] },
  { title: "Equipo de trabajo", members: [] },
  { title: "Junta directiva", members: [] },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
          { label: "Nuestro equipo" },
        ]}
        title="Nuestro equipo"
        intro="Las personas que conforman UNA Colombia y sus responsabilidades dentro de la organización."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia/equipo" />

      <section className="py-24">
        <Container className="space-y-14">
          <Pendiente>
            Los perfiles se publicarán cuando se confirme la estructura vigente
            y cada persona autorice su nombre, cargo, fotografía y biografía.
          </Pendiente>

          {groups.map((g) => (
            <div key={g.title}>
              <SectionHeading title={g.title} />
              {g.members.length === 0 ? (
                <p className="mt-8 rounded-2xl border border-line bg-white p-7 text-muted">
                  Próximamente.
                </p>
              ) : (
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.members.map((m) => (
                    <li
                      key={m.name}
                      className="rounded-2xl border border-line bg-white p-6"
                    >
                      <h3 className="text-xl text-navy">{m.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-azulco">
                        {m.role}
                      </p>
                      {m.bio && (
                        <p className="mt-3 text-sm text-muted">{m.bio}</p>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-sm font-semibold text-azulco hover:underline"
                        >
                          LinkedIn →
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
