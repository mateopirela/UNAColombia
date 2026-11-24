export const pillars = [
  {
    title: "Conexión y articulación",
    text: "Creamos vínculos entre Naciones Unidas, organizaciones, empresas, instituciones, universidades y comunidades para promover la cooperación y el trabajo conjunto.",
  },
  {
    title: "Educación, juventud y liderazgo",
    text: "Acercamos los temas de Naciones Unidas y los asuntos globales a jóvenes y ciudadanos, promoviendo el liderazgo, la participación, el diálogo y la ciudadanía global.",
  },
  {
    title: "Proyectos y acción",
    text: "Impulsamos y articulamos proyectos que respondan a necesidades sociales, económicas, ambientales, educativas, culturales y comunitarias de Colombia.",
  },
  {
    title: "Colombia en el mundo",
    text: "Promovemos la participación de Colombia en espacios internacionales y damos visibilidad a las experiencias, iniciativas y soluciones que se desarrollan en el país.",
  },
];

export const values = [
  {
    title: "Integridad y transparencia",
    text: "Actuamos con honestidad y coherencia, comunicando con claridad nuestras acciones y resultados.",
  },
  {
    title: "Colaboración",
    text: "Construimos alianzas basadas en el respeto, el trabajo conjunto y los objetivos compartidos.",
  },
  {
    title: "Responsabilidad",
    text: "Cumplimos nuestros compromisos y acompañamos las iniciativas hasta alcanzar sus resultados.",
  },
  {
    title: "Conexión",
    text: "Creamos vínculos entre personas, organizaciones, sectores, territorios y países.",
  },
  {
    title: "Impacto sostenible",
    text: "Buscamos que nuestro trabajo genere cambios, capacidades y relaciones que perduren en el tiempo.",
  },
];

export const howWeDoIt = [
  {
    title: "Conectamos a Colombia",
    text: "construimos puentes entre personas, organizaciones, instituciones, sectores y comunidades del país.",
  },
  {
    title: "Conectamos con las Naciones Unidas y el mundo",
    text: "acercamos las agendas, conversaciones y oportunidades internacionales a la realidad colombiana, y facilitamos que las voces, experiencias, capacidades y soluciones de Colombia tengan participación y visibilidad internacional.",
  },
  {
    title: "Transformamos conocimientos, relaciones y oportunidades",
    text: "no nos limitamos a generar contactos. Convertimos la conexión en conocimiento compartido, capacidades articuladas, alianzas y oportunidades de colaboración.",
  },
  {
    title: "Convertimos en acción",
    text: "transformamos esas conexiones en iniciativas y acciones concretas, con objetivos y seguimiento.",
  },
  {
    title: "Generamos impacto sostenible",
    text: "procuramos que las acciones fortalezcan capacidades y produzcan relaciones y transformaciones que puedan mantenerse en el tiempo.",
  },
];

export type Program = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  skills?: string[];
  subject: string;
};

export const programs: Program[] = [
  {
    slug: "modelo-de-naciones-unidas",
    title: "Modelo de Naciones Unidas",
    summary:
      "Espacios académicos y formativos en los que los participantes representan países, asumen el papel de delegados y debaten problemáticas internacionales.",
    body: [
      "Los Modelos de Naciones Unidas son espacios académicos y formativos en los que los participantes representan a diferentes países, asumen el papel de delegados y debaten sobre problemáticas internacionales.",
      "UNA Colombia cuenta con una trayectoria histórica en este ámbito, vinculada al desarrollo de COLMUN y otras experiencias de formación juvenil.",
    ],
    skills: [
      "Investigación",
      "Argumentación",
      "Negociación",
      "Pensamiento crítico",
      "Liderazgo",
      "Diplomacia",
    ],
    subject: "modelo-onu",
  },
  {
    slug: "juventud-y-liderazgo",
    title: "Juventud y liderazgo",
    summary:
      "Promovemos el liderazgo juvenil, la participación ciudadana y el conocimiento de los asuntos internacionales.",
    body: [
      "En UNA Colombia creemos en el papel de los jóvenes como actores fundamentales en la construcción de soluciones para los desafíos sociales y globales.",
      "Esta línea busca promover el liderazgo juvenil, la participación ciudadana y el conocimiento de los asuntos internacionales, generando espacios para que los jóvenes desarrollen capacidades, intercambien ideas y participen activamente en sus comunidades.",
    ],
    subject: "juventud",
  },
];

export const timeline = [
  {
    year: "2008",
    text: "Nace UNA Colombia como un nexo entre Colombia y las Naciones Unidas.",
  },
  {
    year: "2009",
    text: "Se crea COLMUN, el Modelo de Naciones Unidas vinculado a la organización.",
  },
  {
    year: "Hoy",
    text: "Una nueva etapa: conectar a Colombia con el mundo y convertir esas conexiones en colaboración y acción.",
  },
];

export const participation = [
  {
    title: "Participación juvenil",
    text: "Un espacio para jóvenes interesados en fortalecer sus capacidades de liderazgo, conocer los asuntos globales y participar en iniciativas que aporten a sus comunidades.",
    cta: "Quiero participar",
    subject: "juventud",
  },
  {
    title: "Voluntariado y colaboración",
    text: "Una oportunidad para poner conocimientos, habilidades y experiencia al servicio de iniciativas de interés común, según las modalidades que habilite la organización.",
    cta: "Quiero colaborar",
    subject: "voluntariado",
  },
  {
    title: "Alianzas institucionales",
    text: "Invitamos a empresas, organizaciones, instituciones académicas y otros actores a explorar oportunidades de colaboración y construcción conjunta de iniciativas.",
    cta: "Proponer una alianza",
    subject: "alianzas",
  },
];

export const sdgs = [
  ["Fin de la pobreza", "#E5243B"],
  ["Hambre cero", "#DDA63A"],
  ["Salud y bienestar", "#4C9F38"],
  ["Educación de calidad", "#C5192D"],
  ["Igualdad de género", "#FF3A21"],
  ["Agua limpia y saneamiento", "#26BDE2"],
  ["Energía asequible y no contaminante", "#FCC30B"],
  ["Trabajo decente y crecimiento económico", "#A21942"],
  ["Industria, innovación e infraestructura", "#FD6925"],
  ["Reducción de las desigualdades", "#DD1367"],
  ["Ciudades y comunidades sostenibles", "#FD9D24"],
  ["Producción y consumo responsables", "#BF8B2E"],
  ["Acción por el clima", "#3F7E44"],
  ["Vida submarina", "#0A97D9"],
  ["Vida de ecosistemas terrestres", "#56C02B"],
  ["Paz, justicia e instituciones sólidas", "#00689D"],
  ["Alianzas para lograr los objetivos", "#19486A"],
] as const;

export type Post = {
  slug: string;
  type: "noticia" | "evento";
  title: string;
  /** Fecha ISO (AAAA-MM-DD). En eventos, la fecha del evento. */
  date: string;
  place?: string;
  excerpt: string;
  body: string[];
  /** true = contenido de ejemplo; se muestra con una etiqueta visible. */
  example?: boolean;
};

/**
 * Noticias y eventos. Las entradas marcadas con `example: true`
 * son de relleno: reemplázalas por publicaciones reales.
 */
export const posts: Post[] = [
  {
    slug: "ejemplo-evento",
    type: "evento",
    title: "Título del próximo evento",
    date: "2027-02-18",
    place: "Ciudad o enlace en línea",
    excerpt:
      "Una frase que explica de qué trata el evento, a quién va dirigido y cómo inscribirse.",
    body: [
      "Aquí va la descripción del evento: objetivo, público, agenda y ponentes.",
      "Incluye la forma de inscripción y la persona de contacto.",
    ],
    example: true,
  },
  {
    slug: "ejemplo-noticia-1",
    type: "noticia",
    title: "Título de una noticia institucional",
    date: "2026-11-20",
    excerpt:
      "Resumen de una o dos líneas sobre una iniciativa, alianza o actividad de UNA Colombia.",
    body: [
      "Aquí va el cuerpo de la noticia. Cada párrafo es un elemento de la lista.",
      "Puedes añadir tantos párrafos como necesites.",
    ],
    example: true,
  },
  {
    slug: "ejemplo-noticia-2",
    type: "noticia",
    title: "Título de otra publicación",
    date: "2026-11-05",
    excerpt:
      "Resumen breve de la publicación, pensado para que se entienda sin abrirla.",
    body: ["Aquí va el cuerpo de la publicación."],
    example: true,
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso + "T00:00:00Z"));
}

export function sortedPosts(type?: Post["type"]) {
  return posts
    .filter((p) => !type || p.type === type)
    .sort((a, b) => b.date.localeCompare(a.date));
}
