import type { Metadata } from "next";
import { ButtonLink, Container, CtaBand, PageHero } from "@/components/ui";
import { participation } from "@/lib/content";

export const metadata: Metadata = {
  title: "Participa",
  description:
    "Formas de vincularse a UNA Colombia: participación juvenil, voluntariado y alianzas institucionales.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Participa" }]}
        title="Participa"
        intro="Conectar a Colombia con el mundo también es una tarea colectiva. Generamos oportunidades para que jóvenes, ciudadanos, organizaciones e instituciones se vinculen a iniciativas que promuevan el conocimiento, la colaboración y el desarrollo sostenible."
      />

      <section className="py-16">
        <Container className="space-y-6">
          {participation.map((p) => (
            <article
              key={p.title}
              className="grid gap-6 rounded-lg border border-line bg-white p-8 md:grid-cols-[1fr_auto] md:items-center"
            >
              <div>
                <h2 className="text-2xl text-navy">{p.title}</h2>
                <p className="mt-3 max-w-2xl text-muted">{p.text}</p>
              </div>
              <ButtonLink href={`/contacto?asunto=${p.subject}`}>
                {p.cta}
              </ButtonLink>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand
        title="¿Quieres recibir nuestras novedades?"
        text="Déjanos tu correo y te avisamos de próximos eventos y convocatorias."
        href="/contacto?asunto=novedades"
        cta="Recibir novedades"
      />
    </>
  );
}
