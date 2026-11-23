"use client";

import Link from "next/link";
import { useState } from "react";
import { contactSubjects, site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-azulco";

export function ContactForm({ initialSubject }: { initialSubject: string }) {
  const [sent, setSent] = useState(false);
  const enabled = Boolean(site.contactEmail);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subjectLabel =
      contactSubjects.find((s) => s.value === data.get("asunto"))?.label ??
      "Consulta general";
    const body = [
      `Nombre: ${data.get("nombre")}`,
      `Correo: ${data.get("correo")}`,
      `Organización: ${data.get("organizacion") || "—"}`,
      "",
      String(data.get("mensaje")),
    ].join("\n");

    // Sin backend: abre el cliente de correo de la persona con el mensaje listo.
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
      `[Sitio web] ${subjectLabel}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Nombre completo
          <input name="nombre" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Correo electrónico
          <input
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Organización{" "}
          <span className="font-normal text-muted">(opcional)</span>
          <input
            name="organizacion"
            autoComplete="organization"
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Asunto
          <select name="asunto" defaultValue={initialSubject} className={field}>
            {contactSubjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink">
        Mensaje
        <textarea name="mensaje" required rows={6} className={field} />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-navy"
        />
        <span>
          Autorizo el tratamiento de mis datos para responder esta solicitud,
          según la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-azulco hover:underline"
          >
            política de tratamiento de datos
          </Link>
          .
        </span>
      </label>

      {!enabled && (
        <p
          role="status"
          className="rounded-md border border-dashed border-amber-500/70 bg-amber-50 px-4 py-3 text-sm text-amber-900"
        >
          <strong className="font-semibold">Formulario sin conectar.</strong>{" "}
          Falta definir el correo institucional que recibirá los mensajes
          (<code>contactEmail</code> en <code>src/lib/site.ts</code>).
        </p>
      )}

      <button
        type="submit"
        disabled={!enabled}
        className="inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        Enviar mensaje
      </button>

      {sent && (
        <p role="status" className="text-sm text-muted">
          Se abrió tu aplicación de correo con el mensaje listo. Envíalo desde
          allí para que lo recibamos.
        </p>
      )}
    </form>
  );
}
