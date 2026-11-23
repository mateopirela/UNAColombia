import { ButtonLink, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      crumbs={[{ label: "Error 404" }]}
      title="No encontramos esta página"
      intro="Puede que el enlace haya cambiado o que la página ya no exista."
    >
      <ButtonLink href="/" variant="light" className="mt-10">
        Volver al inicio
      </ButtonLink>
    </PageHero>
  );
}
