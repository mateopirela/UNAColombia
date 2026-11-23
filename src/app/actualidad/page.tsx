import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { PostCard } from "@/components/PostCard";
import {
  Container,
  PageHero,
  Pendiente,
  SectionHeading,
} from "@/components/ui";
import { sortedPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Noticias y eventos",
  description:
    "Novedades, actividades y eventos de UNA Colombia y de los temas de su agenda institucional.",
};

export default async function Page() {
  "use cache";
  cacheLife("hours");

  const today = new Date().toISOString().slice(0, 10);
  const events = sortedPosts("evento");
  const upcoming = events.filter((e) => e.date >= today).reverse();
  const past = events.filter((e) => e.date < today);
  const news = sortedPosts("noticia");
  const hasExamples = [...events, ...news].some((p) => p.example);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Actualidad" }]}
        title="Noticias y eventos"
        intro="Conoce las novedades, actividades y acontecimientos relacionados con UNA Colombia y los temas de nuestra agenda."
      />

      <Container className="space-y-20 py-16">
        {hasExamples && (
          <Pendiente>
            Las publicaciones marcadas como «Ejemplo» son de relleno y deben
            reemplazarse por contenido real.
          </Pendiente>
        )}

        <section id="eventos">
          <SectionHeading eyebrow="Eventos" title="Próximos eventos" />
          {upcoming.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {upcoming.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-lg border border-line bg-white p-7 text-muted">
              No hay eventos programados por ahora.
            </p>
          )}
        </section>

        <section id="noticias">
          <SectionHeading eyebrow="Noticias" title="Últimas publicaciones" />
          {news.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {news.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-lg border border-line bg-white p-7 text-muted">
              Aún no hay publicaciones.
            </p>
          )}
        </section>

        {past.length > 0 && (
          <section id="eventos-anteriores">
            <SectionHeading eyebrow="Archivo" title="Eventos anteriores" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {past.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
