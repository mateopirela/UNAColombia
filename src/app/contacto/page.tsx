import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Container, PageHero } from "@/components/ui";
import { contactSubjects, independenceNotice, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos: consultas, participación, voluntariado y alianzas.",
};

async function FormWithSubject({
  searchParams,
}: Pick<PageProps<"/contacto">, "searchParams">) {
  const { asunto } = await searchParams;
  const initial = contactSubjects.some((s) => s.value === asunto)
    ? (asunto as string)
    : "general";
  return <ContactForm key={initial} initialSubject={initial} />;
}

export default function Page({ searchParams }: PageProps<"/contacto">) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contacto" }]}
        title="Conversemos"
        intro="Cuéntanos quién eres y qué te interesa. Elige el asunto para que tu mensaje llegue a la persona indicada."
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-9">
            <Suspense fallback={<ContactForm initialSubject="general" />}>
              <FormWithSubject searchParams={searchParams} />
            </Suspense>
          </div>

          <aside className="space-y-6 self-start">
            {(site.contactEmail || site.whatsapp || site.social.length > 0) && (
              <div className="rounded-2xl border border-line bg-white p-7">
                <h2 className="text-xl text-navy">Otros canales</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.contactEmail && (
                    <li>
                      <a
                        href={`mailto:${site.contactEmail}`}
                        className="font-semibold text-azulco hover:underline"
                      >
                        {site.contactEmail}
                      </a>
                    </li>
                  )}
                  {site.whatsapp && (
                    <li>
                      <a
                        href={`https://wa.me/${site.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-azulco hover:underline"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-azulco hover:underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border-l-4 border-azulco bg-white p-7">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-azulco">
                ¿Buscas a la ONU?
              </h2>
              <p className="mt-3 text-sm text-ink">{independenceNotice}</p>
              <p className="mt-3 text-sm text-muted">
                Para trámites o información oficial de las Naciones Unidas en
                el país, visita{" "}
                <a
                  href="https://colombia.un.org/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-azulco hover:underline"
                >
                  colombia.un.org
                </a>
                .
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
