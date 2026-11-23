import Link from "next/link";
import { formatDate, type Post } from "@/lib/content";

export function PostCard({ post }: { post: Post }) {
  const isEvent = post.type === "evento";
  return (
    <article className="flex h-full flex-col border-t-2 border-navy pt-5">
      <p className="text-sm text-muted">
        {isEvent ? "Evento" : "Noticia"}
        {" · "}
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.example && (
          <span className="ml-2 rounded-sm border border-dashed border-amber-500/70 bg-amber-50 px-1.5 py-0.5 text-xs text-amber-900">
            Ejemplo
          </span>
        )}
      </p>
      <h3 className="mt-2 text-xl text-navy">
        <Link href={`/actualidad/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      {post.place && <p className="mt-1 text-sm text-muted">{post.place}</p>}
      <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
      <Link
        href={`/actualidad/${post.slug}`}
        className="mt-4 text-sm font-semibold text-azulco underline decoration-1 underline-offset-4 hover:text-navy"
      >
        {isEvent ? "Ver el evento" : "Leer la noticia"}
      </Link>
    </article>
  );
}
