import Link from "next/link";
import { Globe } from "@/components/Globe";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import {
  Arcs,
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
  Marquee,
  SectionHeading,
  Tricolor,
} from "@/components/ui";
import { pillars, programs, sdgs, sortedPosts, timeline } from "@/lib/content";
import { site } from "@/lib/site";

const themes = [
  "Paz",
  "Derechos humanos",
  "Desarrollo sostenible",
  "Inclusión",
  "Ciudadanía global",
  "Liderazgo juvenil",
  "Cooperación internacional",
];

const audiences = [
  {
    who: "Soy joven o estudiante",
    what: "Quiero formarme, debatir y liderar.",
    subject: "juventud",
  },
  {
    who: "Represento un colegio o universidad",
    what: "Quiero llevar un Modelo ONU a mi institución.",
    subject: "modelo-onu",
  },
  {
    who: "Represento una organización o empresa",
    what: "Quiero construir una alianza o iniciativa.",
    subject: "alianzas",
  },
  {
    who: "Quiero ser voluntario",
    what: "Quiero aportar mi tiempo y experiencia.",
    subject: "voluntariado",
  },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  const latest = sortedPosts().slice(0, 3);
  const [mun, youth] = programs;

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="bg-deep grain relative overflow-hidden text-white">
        <Container className="relative grid min-h-[100svh] items-center gap-6 pb-16 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div className="relative z-10">
            <div className="hero-in">
              <Eyebrow light>{site.legalName}</Eyebrow>
            </div>
            <h1
              className="hero-in mt-7 text-[3.2rem] leading-[0.98] sm:text-7xl xl:text-[5.6rem]"
              style={d(100)}
            >
              Conectamos Colombia con el{" "}
              <span className="relative inline-block italic text-amarillo">
                mundo
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                >
                  <path
                    d="M2 14 C 70 2, 150 2, 298 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p
              className="hero-in mt-9 max-w-xl text-lg text-white/80 sm:text-xl"
              style={d(220)}
            >
              Construimos puentes entre Colombia, las Naciones Unidas y la
              comunidad internacional para convertir conocimiento, relaciones y
              oportunidades en acción con impacto sostenible.
            </p>
            <div className="hero-in mt-10 flex flex-wrap gap-3" style={d(340)}>
              <ButtonLink href="/participa" variant="yellow" arrow>
                Participa
              </ButtonLink>
              <ButtonLink href="/programas" variant="ghostLight">
                Conoce los programas
              </ButtonLink>
            </div>

            <dl
              className="hero-in mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70"
              style={d(460)}
            >
              <dt className="flex items-center gap-2.5 font-semibold text-white">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-amarillo" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-amarillo" />
                </span>
                Bogotá
              </dt>
              <dd className="flex flex-wrap items-center gap-x-3">
                <span aria-hidden>→</span>
                <span>Nueva York</span>
                <span aria-hidden>·</span>
                <span>Ginebra</span>
                <span aria-hidden>·</span>
                <span>Viena</span>
                <span aria-hidden>·</span>
                <span>Nairobi</span>
              </dd>
            </dl>
          </div>

          <div
            className="hero-in pointer-events-auto relative -mx-16 -mb-40 sm:-mx-10 lg:-mr-40 lg:mb-0 lg:ml-0"
            style={d(200)}
          >
            <div
              aria-hidden
              className="absolute inset-[12%] rounded-full bg-azul/25 blur-3xl"
            />
            <Globe className="relative" />
          </div>
        </Container>
      </section>

      <Marquee items={themes} />

      {/* ——— Premisa ——— */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Nuestra premisa</Eyebrow>
          </Reveal>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <Reveal>
              <p className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-navy sm:text-6xl">
                Traer el mundo
                <br />
                <span className="italic text-azulco">a Colombia</span>
              </p>
              <p className="mt-6 max-w-md text-lg text-muted">
                Acercamos las agendas, conversaciones y oportunidades
                internacionales a la realidad del país.
              </p>
            </Reveal>

            <Reveal delay={150} className="flex justify-center">
              <svg
                aria-hidden
                viewBox="0 0 200 80"
                className="h-20 w-48 rotate-90 text-azul lg:rotate-0"
                fill="none"
              >
                <path
                  d="M10 28 C 70 0, 130 0, 190 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="dash-flow"
                />
                <path
                  d="M190 52 C 130 80, 70 80, 10 52"
                  stroke="#0057b8"
                  strokeWidth="2"
                  className="dash-flow"
                />
                <circle cx="10" cy="40" r="7" fill="#fbd200" />
                <circle cx="190" cy="40" r="7" fill="#0a3a6b" />
              </svg>
            </Reveal>

            <Reveal delay={250} className="lg:text-right">
              <p className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-navy sm:text-6xl">
                Llevar Colombia
                <br />
                <span className="italic text-azulco">al mundo</span>
              </p>
              <p className="mt-6 max-w-md text-lg text-muted lg:ml-auto">
                Proyectamos las voces, experiencias, capacidades y soluciones
                que nacen en Colombia.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— Cómo trabajamos ——— */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Cuatro pilares que convierten conexiones en acción"
          />
          <ol className="stagger mt-14 border-t border-navy/15">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal className="group grid gap-4 border-b border-navy/15 py-9 hover:bg-white md:grid-cols-[7rem_1fr_1.3fr] md:items-baseline md:gap-10 md:px-6">
                  <span className="font-serif text-5xl font-bold text-azul/50 transition-colors duration-300 group-hover:text-amarillo">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl text-navy">{p.title}</h3>
                  <p className="text-lg text-muted">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ——— Programas ——— */}
      <section className="bg-navy-deep py-24 text-white sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              light
              eyebrow="Programas"
              title="Formamos ciudadanos globales"
            />
            <Reveal>
              <ButtonLink href="/programas" variant="ghostLight" arrow>
                Ver todos los programas
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Link
                href={`/programas/${mun.slug}`}
                className="bg-deep grain group relative flex h-full min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-12"
              >
                <Arcs className="-bottom-40 -right-32 h-[38rem] w-[38rem] text-azul/40 transition-transform duration-700 group-hover:scale-110" />
                <div className="relative flex items-start justify-between gap-6">
                  <span className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Programa insignia
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amarillo text-navy-deep transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </div>
                <div className="relative">
                  <h3 className="max-w-xl text-4xl sm:text-6xl">{mun.title}</h3>
                  <p className="mt-5 max-w-xl text-lg text-white/75">
                    {mun.summary}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {mun.skills?.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link
                href={`/programas/${youth.slug}`}
                className="group relative flex h-full min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-azul p-8 text-navy-deep sm:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="rounded-full border border-navy-deep/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                    Programa
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl sm:text-5xl">{youth.title}</h3>
                  <p className="mt-5 text-lg text-navy-deep/80">
                    {youth.summary}
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-3">
              <Link
                href="/contacto?asunto=alianzas"
                className="group flex flex-col justify-between gap-6 rounded-[2rem] bg-amarillo p-8 text-navy-deep sm:flex-row sm:items-center sm:p-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Iniciativas y alianzas
                  </p>
                  <p className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-4xl">
                    ¿Tu organización tiene una idea o una necesidad?
                    Construyámosla juntos.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold">
                  Conversemos
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— Historia ——— */}
      <section className="overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Desde 2008 creando puentes"
              intro="Educación, liderazgo juvenil, Modelos de Naciones Unidas, acción social, alianzas y representación internacional."
            />
            <Reveal>
              <ButtonLink href="/sobre-una-colombia" variant="secondary" arrow>
                Conoce la organización
              </ButtonLink>
            </Reveal>
          </div>

          <ol className="stagger relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[5.4rem] hidden h-px bg-navy/20 md:block"
            />
            {timeline.map((t) => (
              <li key={t.year}>
                <Reveal>
                  <p className="font-serif text-7xl font-bold leading-none tracking-tighter text-navy sm:text-8xl md:text-7xl lg:text-8xl">
                    {t.year}
                  </p>
                  <span
                    aria-hidden
                    className="relative mt-5 hidden h-4 w-4 rounded-full border-4 border-marfil bg-azulco md:block"
                  />
                  <p className="mt-5 max-w-xs text-lg text-muted">{t.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ——— Agenda 2030 ——— */}
      <section className="border-y border-line bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Agenda ONU"
              title="Una agenda común: 17 objetivos"
              intro="Acercamos los Objetivos de Desarrollo Sostenible a la ciudadanía para entender cómo lo global toca lo local."
            />
            <Reveal>
              <ButtonLink href="/agenda-onu" variant="secondary" arrow>
                Explora la agenda
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal className="mt-14">
            <ol className="grid grid-cols-6 gap-1.5 sm:grid-cols-9 lg:grid-cols-[repeat(17,minmax(0,1fr))] lg:gap-2">
              {sdgs.map(([name, color], i) => (
                <li key={name}>
                  <Link
                    href="/agenda-onu#ods"
                    title={`ODS ${i + 1}: ${name}`}
                    className="flex aspect-square items-center justify-center rounded-lg font-serif text-lg font-bold text-white transition-transform duration-300 hover:-translate-y-2 hover:scale-110 sm:rounded-xl sm:text-xl"
                    style={{ backgroundColor: color }}
                  >
                    <span aria-hidden>{i + 1}</span>
                    <span className="sr-only">
                      ODS {i + 1}: {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* ——— ¿Quién eres? ——— */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Participa"
            title="Hay un lugar para ti"
            intro="Conectar a Colombia con el mundo es una tarea colectiva. Elige por dónde empezar."
          />
          <ul className="stagger mt-14 grid gap-4 sm:grid-cols-2">
            {audiences.map((a) => (
              <li key={a.who}>
                <Reveal className="h-full">
                  <Link
                    href={`/contacto?asunto=${a.subject}`}
                    className="group flex h-full items-center justify-between gap-6 rounded-3xl border border-line bg-white p-7 transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white sm:p-9"
                  >
                    <span>
                      <span className="block font-serif text-2xl font-bold text-navy transition-colors duration-300 group-hover:text-white sm:text-3xl">
                        {a.who}
                      </span>
                      <span className="mt-2 block text-muted transition-colors duration-300 group-hover:text-white/75">
                        {a.what}
                      </span>
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-azul-soft text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amarillo">
                      <ArrowIcon className="h-5 w-5" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ——— Actualidad ——— */}
      <section className="border-t border-line bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Actualidad" title="Noticias y eventos" />
            <Reveal>
              <ButtonLink href="/actualidad" variant="secondary" arrow>
                Ver toda la actualidad
              </ButtonLink>
            </Reveal>
          </div>
          <div className="stagger mt-14 grid gap-5 md:grid-cols-3">
            {latest.map((p) => (
              <Reveal key={p.slug} className="h-full">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ——— Cierre ——— */}
      <section className="bg-deep grain relative overflow-hidden text-white">
        <Arcs className="-left-40 -top-40 h-[44rem] w-[44rem] -scale-x-100 text-azul/30" />
        <Container className="relative py-28 sm:py-40">
          <Reveal>
            <p className="max-w-5xl font-serif text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
              Traer el mundo a Colombia.{" "}
              <span className="italic text-amarillo">
                Llevar Colombia al mundo.
              </span>
            </p>
            <Tricolor className="mt-10 w-48" />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/participa" variant="yellow" arrow>
                Súmate
              </ButtonLink>
              <ButtonLink
                href="/sobre-una-colombia/relacion-global"
                variant="ghostLight"
              >
                Conoce la red global
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
