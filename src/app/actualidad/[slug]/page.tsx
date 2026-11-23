import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, Container, PageHero, Pendiente } from "@/components/ui";
import { formatDate, posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/actualidad/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function Page({
  params,
}: PageProps<"/actualidad/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const isEvent = post.type === "evento";

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/actualidad", label: "Actualidad" },
          { label: isEvent ? "Evento" : "Noticia" },
        ]}
        title={post.title}
      >
        <p className="mt-6 text-white/85">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.place && <> · {post.place}</>}
        </p>
      </PageHero>

      <article className="py-16">
        <Container className="max-w-3xl space-y-5 text-lg text-muted">
          {post.example && (
            <Pendiente>
              Esta publicación es un ejemplo de formato, no contenido real.
            </Pendiente>
          )}
          <p className="text-xl font-medium text-ink">{post.excerpt}</p>
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {isEvent && (
            <div className="pt-4">
              <ButtonLink href="/contacto?asunto=general">
                Quiero asistir o saber más
              </ButtonLink>
            </div>
          )}

          <p className="pt-8">
            <Link
              href="/actualidad"
              className="text-sm font-semibold text-azulco hover:underline"
            >
              ← Volver a actualidad
            </Link>
          </p>
        </Container>
      </article>
    </>
  );
}
