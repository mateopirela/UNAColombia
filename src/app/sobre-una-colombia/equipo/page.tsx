import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, Pendiente, SubNav } from "@/components/ui";
import { aboutNav } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description:
    "El equipo que lidera y hace posible el trabajo de UNA Colombia.",
};

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

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
            Faltan cinco fotografías, la foto nueva de Martha Cecilia Restrepo
            y las biografías de quienes aún no la tienen.
          </Pendiente>

          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name}>
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`Retrato de ${m.name}`}
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="aspect-[4/5] w-full rounded-md object-cover object-top"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[4/5] w-full items-center justify-center rounded-md bg-azul-soft font-serif text-4xl font-semibold text-navy/50"
                  >
                    {initials(m.name)}
                  </div>
                )}
                <h2 className="mt-4 text-xl text-navy">{m.name}</h2>
                <p className="mt-1 text-sm font-semibold text-azulco">
                  {m.role}
                </p>
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
