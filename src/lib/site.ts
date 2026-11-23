/**
 * Configuración central del sitio.
 * Todo lo que depende de una decisión institucional vive aquí,
 * para poder cambiarlo sin tocar las páginas.
 */
export const site = {
  name: "UNA Colombia",
  legalName: "Asociación Nacional de las Naciones Unidas en Colombia",
  description:
    "Organización de la sociedad civil que conecta a Colombia con las Naciones Unidas y la comunidad internacional.",
  premise: "Traer el mundo a Colombia. Llevar Colombia al mundo.",

  /**
   * Muestra las notas "Pendiente de validación" en el sitio.
   * Poner en false al publicar, cuando el contenido esté aprobado.
   */
  showDraftNotes: true,

  /** Correo que recibe el formulario de contacto. Vacío = formulario deshabilitado. */
  contactEmail: "",
  /** Número de WhatsApp en formato internacional sin "+", p. ej. "573001234567". */
  whatsapp: "",
  /** Perfiles oficiales confirmados: { label: "Instagram", href: "https://…" } */
  social: [
    { label: "Instagram", href: "https://www.instagram.com/unacolombia/" },
  ] as { label: string; href: string }[],
};

export const nav = [
  { href: "/sobre-una-colombia", label: "Sobre UNA Colombia" },
  { href: "/programas", label: "Programas" },
  { href: "/agenda-onu", label: "Agenda ONU" },
  { href: "/actualidad", label: "Actualidad" },
  { href: "/participa", label: "Participa" },
];

export const aboutNav = [
  { href: "/sobre-una-colombia", label: "Quiénes somos" },
  { href: "/sobre-una-colombia/equipo", label: "Nuestro equipo" },
  { href: "/sobre-una-colombia/relacion-global", label: "Relación global" },
  { href: "/sobre-una-colombia/transparencia", label: "Transparencia" },
];

export const contactSubjects = [
  { value: "general", label: "Consulta general" },
  { value: "juventud", label: "Participación juvenil" },
  { value: "voluntariado", label: "Voluntariado y colaboración" },
  { value: "alianzas", label: "Alianzas institucionales" },
  { value: "modelo-onu", label: "Modelo de Naciones Unidas" },
  { value: "novedades", label: "Quiero recibir novedades" },
] as const;

export const independenceNotice =
  "UNA Colombia es una organización independiente de la sociedad civil. No es una agencia, dependencia ni representación oficial de las Naciones Unidas.";
