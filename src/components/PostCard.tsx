import Link from "next/link";
import { formatDate, type Post } from "@/lib/content";
import { ArrowIcon } from "./ui";

export function PostCard({ post }: { post: Post }) {
  const isEvent = post.type === "evento";
  const date = new Date(post.date + "T00:00:00Z");
  const day = date.getUTCDate();
  const month = new Intl.DateTimeFormat("es-CO", {
    month: "short",
    timeZone: "UTC",
  })
    .format(date)
    .replace(".", "");

  return (
    <Link
      href={`/actualidad/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-marfil transition-all duration-300 hover:-translate-y-1 hover:border-azul/60 hover:shadow-[0_24px_60px_-30px_rgba(10,58,107,0.45)]"
    >
      <div
        className={`relative flex h-36 items-end justify-between overflow-hidden p-6 ${
          isEvent ? "bg-navy text-white" : "bg-azul-soft text-navy"
        }`}
      >
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          fill="none"
          className={`absolute -right-10 -top-16 h-56 w-56 transition-transform duration-700 group-hover:scale-125 ${
            isEvent ? "text-azul/40" : "text-azul/50"
          }`}
        >
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
        </svg>
        <p className="relative font-serif leading-none">
          <span className="block text-5xl font-bold">{day}</span>
          <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.2em]">
            {month} {date.getUTCFullYear()}
          </span>
        </p>
        <div className="relative flex flex-wrap justify-end gap-2 text-[0.7rem] font-semibold uppercase tracking-wider">
          <span
            className={`rounded-full px-3 py-1 ${
              isEvent ? "bg-amarillo text-navy-deep" : "bg-white text-navy"
            }`}
          >
            {isEvent ? "Evento" : "Noticia"}
          </span>
          {post.example && (
            <span className="rounded-full border border-dashed border-current px-3 py-1">
              Ejemplo
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl text-navy">{post.title}</h3>
        <p className="sr-only">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        {post.place && (
          <p className="mt-2 text-sm font-medium text-muted">{post.place}</p>
        )}
        <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-azulco">
          {isEvent ? "Ver el evento" : "Leer la noticia"}
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
