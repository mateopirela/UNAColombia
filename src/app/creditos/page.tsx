import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, Pendiente } from "@/components/ui";
import { photos, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Créditos de imágenes",
  description: "Autoría y licencias de las fotografías usadas en el sitio.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Créditos de imágenes" }]}
        title="Créditos de imágenes"
        intro="Autoría y licencia de cada fotografía usada en este sitio."
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <Pendiente>
            Estas fotografías son provisionales, de licencia libre. Se
            reemplazarán por imágenes propias de UNA Colombia.
          </Pendiente>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {(Object.values(photos) as Photo[]).map((p) => (
              <li key={p.source} className="flex gap-5 py-5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  sizes="8rem"
                  className="h-20 w-32 shrink-0 rounded-sm object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-ink">{p.title}</p>
                  <p className="mt-1 text-muted">
                    {p.author} ·{" "}
                    {p.licenseUrl ? (
                      <a
                        href={p.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-navy"
                      >
                        {p.license}
                      </a>
                    ) : (
                      p.license
                    )}
                  </p>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-azulco underline underline-offset-2 hover:text-navy"
                  >
                    Ver original en Wikimedia Commons
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Las fotografías con licencia Creative Commons se muestran
            recortadas y redimensionadas respecto del original.
          </p>
        </Container>
      </section>
    </>
  );
}
