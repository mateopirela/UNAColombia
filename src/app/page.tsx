import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import {
  Arcs,
  ButtonLink,
  Card,
  Container,
  CtaBand,
  Eyebrow,
  SectionHeading,
  Tricolor,
} from "@/components/ui";
import {
  participation,
  pillars,
  programs,
  sortedPosts,
  timeline,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <Arcs className="-right-32 -top-20 h-[46rem] w-[46rem] text-azul/40" />
        <Container className="relative py-20 sm:py-28">
          <Eyebrow light>{site.legalName}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">
            Conectamos Colombia con el mundo
          </h1>
          <Tricolor className="mt-7" />
          <p className="mt-7 max-w-2xl text-lg text-white/85 sm:text-xl">
            Construimos puentes entre Colombia, las Naciones Unidas y la
            comunidad internacional para transformar conocimiento, relaciones y
            oportunidades en acción con impacto sostenible.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/participa" variant="light">
              Participa <span aria-hidden>→</span>
            </ButtonLink>
            <ButtonLink href="/programas" variant="ghostLight">
              Conoce los programas
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Premisa */}
      <section className="border-b border-line bg-white">
        <Container className="grid gap-8 py-12 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div>
            <p className="font-serif text-2xl font-bold text-navy">
              Traer el mundo a Colombia
            </p>
            <p className="mt-2 text-muted">
              Acercamos las agendas, conversaciones y oportunidades
              internacionales a la realidad del país.
            </p>
          </div>
          <span
            aria-hidden
            className="hidden font-serif text-4xl text-azul md:block"
          >
            ↔
          </span>
          <div>
            <p className="font-serif text-2xl font-bold text-navy">
              Llevar Colombia al mundo
            </p>
            <p className="mt-2 text-muted">
              Proyectamos las voces, experiencias, capacidades y soluciones que
              nacen en Colombia.
            </p>
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Cuatro pilares que orientan nuestro trabajo"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Card key={p.title}>
                <span className="font-serif text-3xl font-bold text-azul">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Programas */}
      <section className="bg-azul-soft/60 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Programas" title="Lo que hacemos" />
            <ButtonLink href="/programas" variant="secondary">
              Ver todos los programas
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/programas/${p.slug}`}
                className="group rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-2xl text-navy">{p.title}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-azulco">
                  Conoce el programa
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Historia */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Desde 2008 creando puentes"
              intro="Nuestra trayectoria incluye educación, liderazgo juvenil, Modelos de Naciones Unidas, acción social, alianzas y representación internacional."
            />
            <ButtonLink
              href="/sobre-una-colombia"
              variant="secondary"
              className="mt-8"
            >
              Conoce la organización
            </ButtonLink>
          </div>
          <ol className="relative space-y-8 border-l-2 border-azul/40 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-marfil bg-azulco"
                />
                <p className="font-serif text-2xl font-bold text-navy">
                  {t.year}
                </p>
                <p className="mt-1 text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Actualidad */}
      <section className="border-y border-line bg-white py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Actualidad" title="Noticias y eventos" />
            <ButtonLink href="/actualidad" variant="secondary">
              Ver toda la actualidad
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Participa */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Participa"
            title="Conectar a Colombia con el mundo es una tarea colectiva"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {participation.map((p) => (
              <Card key={p.title} className="flex flex-col">
                <h3 className="text-xl text-navy">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">{p.text}</p>
                <Link
                  href={`/contacto?asunto=${p.subject}`}
                  className="mt-5 text-sm font-semibold text-azulco hover:underline"
                >
                  {p.cta} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Parte de un movimiento global"
        text="Las Asociaciones de Naciones Unidas acercan el trabajo y los propósitos de la ONU a la ciudadanía de cada país."
        href="/sobre-una-colombia/relacion-global"
        cta="Conoce la relación global"
      />
    </>
  );
}
