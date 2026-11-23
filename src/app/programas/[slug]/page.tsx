import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, Container, PageHero, Pendiente } from "@/components/ui";
import { programs } from "@/lib/content";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/programas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  return program
    ? { title: program.title, description: program.summary }
    : {};
}

export default async function Page({
  params,
}: PageProps<"/programas/[slug]">) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/programas", label: "Programas" },
          { label: program.title },
        ]}
        title={program.title}
        intro={program.summary}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-lg text-muted">
            {program.body.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {program.skills && (
              <div className="pt-6">
                <h2 className="text-2xl text-navy">
                  Habilidades que se desarrollan
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {program.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-azul-soft px-4 py-2 text-sm font-semibold text-navy"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6">
              <Pendiente>
                Confirmar si el programa está activo, sus próximas fechas y la
                persona responsable de responder solicitudes.
              </Pendiente>
            </div>
          </div>

          <aside className="self-start rounded-2xl border border-line bg-white p-7">
            <h2 className="text-xl text-navy">¿Te interesa este programa?</h2>
            <p className="mt-3 text-sm text-muted">
              Escríbenos y te contamos cómo participar o cómo llevarlo a tu
              institución.
            </p>
            <ButtonLink
              href={`/contacto?asunto=${program.subject}`}
              className="mt-6 w-full"
            >
              Quiero más información
            </ButtonLink>
          </aside>
        </Container>
      </section>

      <Container className="pb-20">
        <Link
          href="/programas"
          className="text-sm font-semibold text-azulco hover:underline"
        >
          ← Volver a programas
        </Link>
      </Container>
    </>
  );
}
