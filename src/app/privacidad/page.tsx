import type { Metadata } from "next";
import { Container, PageHero, Pendiente } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tratamiento de datos",
  description: "Política de tratamiento de datos personales de UNA Colombia.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Tratamiento de datos" }]}
        title="Política de tratamiento de datos"
      />
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 text-lg text-muted">
          <Pendiente>
            El texto legal de la política debe suministrarlo UNA Colombia antes
            de publicar el sitio y de activar el formulario de contacto.
          </Pendiente>
          <p>
            Aquí se publicará la política de tratamiento de datos personales de
            UNA Colombia: quién es el responsable del tratamiento, qué datos se
            recogen, con qué finalidad, y cómo ejercer los derechos de
            consulta, actualización, rectificación y supresión.
          </p>
        </Container>
      </section>
    </>
  );
}
