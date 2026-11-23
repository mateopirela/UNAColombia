import { ButtonLink, Container, Tricolor } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azulco">
        Error 404
      </p>
      <h1 className="mt-3 text-4xl text-navy sm:text-5xl">
        No encontramos esta página
      </h1>
      <Tricolor className="mt-6" />
      <p className="mt-6 max-w-xl text-lg text-muted">
        Puede que el enlace haya cambiado o que la página ya no exista.
      </p>
      <ButtonLink href="/" className="mt-8">
        Volver al inicio
      </ButtonLink>
    </Container>
  );
}
