import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/photos";

export function ProgramCard({
  href,
  title,
  summary,
  photo,
}: {
  href: string;
  title: string;
  summary: string;
  photo: Photo;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white">
      <Link href={href} tabIndex={-1} aria-hidden className="block">
        <Image
          src={photo.src}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="aspect-[3/2] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl text-navy">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted">{summary}</p>
        <Link
          href={href}
          className="mt-4 text-sm font-semibold text-azulco underline decoration-1 underline-offset-4 hover:text-navy"
        >
          Conoce el programa
        </Link>
      </div>
    </article>
  );
}
