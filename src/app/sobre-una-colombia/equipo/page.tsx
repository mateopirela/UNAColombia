import type { Metadata } from "next";
import { Container, PageHero, Pendiente, SubNav } from "@/components/ui";
import { aboutNav } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description:
    "El equipo que lidera y hace posible el trabajo de UNA Colombia.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
          { label: "Nuestro equipo" },
        ]}
        title="Nuestro equipo"
        intro="Conoce al equipo que lidera y hace posible el trabajo de UNA Colombia: secretaría general, vicepresidencias, direcciones, apoyos y asesorías."
      />
      <SubNav items={aboutNav} current="/sobre-una-colombia/equipo" />

      <section className="py-16">
        <Container>
          <Pendiente>
            Faltan las fotografías del equipo y las biografías de quienes aún
            no la tienen.
          </Pendiente>

          <ul className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {team.map((m) => (
              <li key={m.name} className="border-t-2 border-navy pt-5">
                <h2 className="text-2xl text-navy">{m.name}</h2>
                <p className="mt-1 font-semibold text-azulco">{m.role}</p>
                {m.bio && (
                  <details className="mt-3 text-muted">
                    <summary className="cursor-pointer text-sm font-semibold text-ink underline decoration-1 underline-offset-4">
                      Biografía
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed">{m.bio}</p>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
