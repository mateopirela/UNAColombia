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

      <section className="py-24">
        <Container className="space-y-6">
          {participation.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-6 rounded-2xl border border-line bg-white p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <span className="font-serif text-4xl font-bold text-azul">
                0{i + 1}
              </span>
              <div>
                <h2 className="text-2xl text-navy">{p.title}</h2>
                <p className="mt-3 max-w-2xl text-muted">{p.text}</p>
              </div>
              <ButtonLink href={`/contacto?asunto=${p.subject}`}>
                {p.cta} <span aria-hidden>→</span>
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
