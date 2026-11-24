import Image from "next/image";
import type { ReactNode } from "react";
import { PostCard } from "@/components/PostCard";
import { ProgramCard } from "@/components/ProgramCard";
import {
  ButtonLink,
  Container,
  TextLink,
  Tricolor,
} from "@/components/ui";
import { pillars, programs, sdgs, sortedPosts } from "@/lib/content";
import { photos, programPhotos } from "@/lib/photos";

/** Fila de la portada: título a la izquierda, contenido a la derecha. */
function Row({
  title,
  children,
  tone = "white",
}: {
  title: string;
  children: ReactNode;
  tone?: "white" | "marfil" | "navy";
}) {
  const bg = {
    white: "bg-white border-b border-line",
    marfil: "bg-marfil border-b border-line",
    navy: "bg-navy text-white",
  }[tone];
  return (
    <section className={bg}>
      <Container className="grid gap-x-10 gap-y-6 py-12 lg:grid-cols-[15rem_1fr] lg:py-14">
        <h2
          className={`text-[1.7rem] ${tone === "navy" ? "text-white" : "text-navy"}`}
        >
          {title}
        </h2>
        <div>{children}</div>
      </Container>
    </section>
  );
}

const pillarIcons: ReactNode[] = [
  // Conexión
  <path
    key="a"
    d="M9.5 14.5l5-5M8 11l-2 2a3.5 3.5 0 005 5l2-2M16 13l2-2a3.5 3.5 0 00-5-5l-2 2"
  />,
  // Educación
  <path
    key="b"
    d="M3 9l9-4 9 4-9 4-9-4zm4 2.5V16c1.5 1.3 3.2 2 5 2s3.5-.7 5-2v-4.5M21 9v5"
  />,
  // Proyectos
  <path
    key="c"
    d="M12 20v-8m0 0c0-3 2-5 6-5 0 3-2 5-6 5zm0 2c0-2.5-1.8-4-5-4 0 2.5 1.8 4 5 4zM7 20h10"
  />,
  // Colombia en el mundo
  <path
    key="d"
    d="M12 3a9 9 0 100 18 9 9 0 000-18zm-9 9h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"
  />,
];

export default function Home() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-black lg:bg-[linear-gradient(90deg,#06213d_0%,#000_40%)] text-white">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="py-16 lg:py-24">
            <h1 className="text-[2.6rem] leading-[1.08] sm:text-[3.4rem] lg:whitespace-nowrap">
              Conectar a Colombia
              <br />
              <em>con el mundo</em>
            </h1>
            <Tricolor className="mt-7" />
            <p className="mt-7 max-w-lg text-lg text-white/85">
              Articulamos personas, organizaciones y sectores para transformar
              conocimiento, alianzas y oportunidades en acciones de impacto
              sostenible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/sobre-una-colombia" variant="light">
                Conoce nuestra organización
              </ButtonLink>
              <ButtonLink href="/participa" variant="ghostLight">
                Participa
              </ButtonLink>
            </div>
          </div>
          <div className="relative -mt-10 h-72 sm:h-96 lg:mt-0 lg:h-full lg:min-h-[32rem]">
            <Image
              src={photos.tierraDeNoche.src}
              alt={photos.tierraDeNoche.alt}
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute left-1/2 top-1/2 h-[150%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain lg:left-[58%] lg:h-[125%]"
            />
          </div>
        </Container>
      </section>

      {/* Sobre */}
      <section className="bg-navy text-white">
        <Container className="grid items-center gap-x-10 gap-y-8 py-12 lg:grid-cols-[15rem_1fr_22rem] lg:py-14">
          <h2 className="text-[1.7rem]">Sobre UNA Colombia</h2>
          <div>
            <p className="text-white/85">
              Somos una organización de la sociedad civil que vincula a
              Colombia con las Naciones Unidas y la comunidad internacional,
              promoviendo la cooperación, la participación y el desarrollo
              sostenible.
            </p>
            <TextLink href="/sobre-una-colombia" light className="mt-5 inline-block">
              Conoce más sobre la organización
            </TextLink>
          </div>
          <Image
            src={photos.bogota.src}
            alt={photos.bogota.alt}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 22rem"
            className="aspect-[16/9] w-full rounded-md object-cover"
          />
        </Container>
      </section>

      {/* Conexión global */}
      <section className="border-b border-line bg-white">
        <Container className="grid items-center gap-x-10 gap-y-8 py-12 lg:grid-cols-[15rem_1fr_22rem] lg:py-14">
          <h2 className="text-[1.7rem] text-navy">Nuestra conexión global</h2>
          <div>
            <p className="text-muted">
              Hacemos parte del movimiento de Asociaciones de Naciones Unidas:
              organizaciones de la sociedad civil que acercan el trabajo y los
              propósitos de la ONU a la ciudadanía de cada país.
            </p>
            <TextLink
              href="/sobre-una-colombia/relacion-global"
              className="mt-5 inline-block"
            >
              Conoce nuestra relación global
            </TextLink>
          </div>
          <Image
            src={photos.sedeOnu.src}
            alt={photos.sedeOnu.alt}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 22rem"
            className="aspect-[16/9] w-full rounded-md object-cover"
          />
        </Container>
      </section>

      {/* Agenda ONU */}
      <Row title="Colombia, ciudadanía global y agenda de la ONU" tone="navy">
        <p className="max-w-2xl text-white/85">
          Impulsamos el conocimiento, la participación y la acción en torno a
          los Objetivos de Desarrollo Sostenible, para contribuir a una
          Colombia más pacífica, inclusiva y sostenible.
        </p>
        <div
          role="img"
          aria-label="Los 17 Objetivos de Desarrollo Sostenible"
          className="mt-6 flex h-2.5 max-w-2xl overflow-hidden rounded-sm"
        >
          {sdgs.map(([name, color]) => (
            <span
              key={name}
              className="flex-1"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <TextLink href="/agenda-onu" light className="mt-6 inline-block">
          Explora la agenda global
        </TextLink>
      </Row>

      {/* Programas */}
      <Row title="Programas estratégicos" tone="marfil">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard
              key={p.slug}
              href={`/programas/${p.slug}`}
              title={p.title}
              summary={p.summary}
              photo={programPhotos[p.slug]}
            />
          ))}
          <ProgramCard
            href="/programas#iniciativas"
            title="Iniciativas estratégicas"
            summary="Articulamos conocimientos, organizaciones y recursos en proyectos que contribuyan al desarrollo sostenible."
            photo={programPhotos["iniciativas-estrategicas"]}
          />
        </div>
      </Row>

      {/* Cómo trabajamos */}
      <Row title="Cómo trabajamos">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-azulco"
              >
                {pillarIcons[i]}
              </svg>
              <h3 className="mt-3 font-sans text-base font-semibold text-navy">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Row>

      {/* Actualidad */}
      <Row title="Noticias y eventos destacados" tone="marfil">
        <div className="grid gap-8 md:grid-cols-3">
          {latest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
        <TextLink href="/actualidad" className="mt-8 inline-block">
          Ver toda la actualidad
        </TextLink>
      </Row>

      {/* Participa */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <Image
          src={photos.cocoraPanorama.src}
          alt=""
          placeholder="blur"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-navy-deep/60 md:bg-[linear-gradient(90deg,rgba(6,33,61,0.92)_0%,rgba(6,33,61,0.7)_50%,rgba(6,33,61,0.35)_100%)]"
        />
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl">Haz parte de UNA Colombia</h2>
            <p className="mt-3 text-white/90">
              Participa, colabora y suma tu voz para acercar a Colombia a
              nuevas oportunidades.
            </p>
          </div>
          <ButtonLink href="/participa" variant="light" className="shrink-0">
            Conoce cómo participar
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
