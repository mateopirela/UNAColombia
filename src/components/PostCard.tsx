import Link from "next/link";
import { formatDate, type Post } from "@/lib/content";

export function PostCard({ post }: { post: Post }) {
  const isEvent = post.type === "evento";
  return (
    <Link
      href={`/actualidad/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
        <span
          className={`rounded-full px-3 py-1 ${
            isEvent ? "bg-amarillo/30 text-navy-deep" : "bg-azul-soft text-navy"
          }`}
        >
          {isEvent ? "Evento" : "Noticia"}
        </span>
        {post.example && (
          <span className="rounded-full border border-dashed border-amber-500/70 px-3 py-1 text-amber-800">
            Ejemplo
          </span>
        )}
      </div>
      <h3 className="mt-4 text-xl text-navy">{post.title}</h3>
      <p className="mt-2 text-sm font-medium text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.place && <> · {post.place}</>}
      </p>
      <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-azulco">
        {isEvent ? "Ver el evento" : "Leer la noticia"}
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
