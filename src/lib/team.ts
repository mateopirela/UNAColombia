import type { StaticImageData } from "next/image";
import andrea from "@/assets/team/andrea.jpg";
import camilo from "@/assets/team/camilo.jpg";
import clara from "@/assets/team/clara.jpg";
import mariaCarolina from "@/assets/team/maria-carolina.jpg";
import mariaClara from "@/assets/team/maria-clara.jpg";
import marta from "@/assets/team/marta.jpg";
import mateoGomez from "@/assets/team/mateo-gomez.jpg";
import mateoPirela from "@/assets/team/mateo-pirela.jpg";
import patriciaBischoff from "@/assets/team/patricia-bischoff.jpg";
import silvana from "@/assets/team/silvana.jpg";
import valentina from "@/assets/team/valentina.jpg";

export type Member = {
  name: string;
  role: string;
  bio?: string;
  photo?: StaticImageData;
};

/**
 * Equipo de UNA Colombia, en el orden institucional.
 * Para añadir una foto, guarda la imagen en src/assets/team e impórtala aquí.
 */
export const team: Member[] = [
  {
    name: "María Clara García",
    photo: mariaClara,
    role: "Secretaria General de UNA Colombia y Presidenta ante la WFUNA",
    bio: "Líder empresarial, coach ejecutiva y estratega en desarrollo humano, con más de 35 años de trayectoria en educación, formación de líderes y transformación organizacional. Cuenta con formación en Coaching Ejecutivo por University of Miami y es miembro profesional de la International Coaching Federation (ICF). Fundadora y CEO de Visionarium, ha liderado iniciativas de formación en diplomacia, negociación, pensamiento crítico y ciudadanía global, entre ellas BAMUN y COLMUN. En el ámbito empresarial, es Co-founder & CEO de VISION2AI y DE AQUÍ, y Co-founder de TOCA Technologies, FRAME y FULMIS, iniciativas que abarcan los sectores de tecnología, inteligencia artificial, moda e innovación. Desde la Secretaría General de UNA Colombia, impulsa la cooperación internacional, el liderazgo, la innovación y la construcción de alianzas para generar oportunidades de transformación y desarrollo sostenible.",
  },
  {
    name: "Patricia Bischoff Bettencourt",
    photo: patriciaBischoff,
    role: "Secretaria Privada de UNA Colombia",
    bio: "Líder en gestión estratégica y desarrollo de talento, con experiencia en dirección de proyectos, alianzas institucionales e innovación. Actualmente es Coordinadora de Extensión Académica del Colegio Marymount de Barranquilla, CSO de Barranquilla Fashion Week y cofundadora y Brand & Product Developer de DE AQUÍ, donde lidera la Dirección Creativa. Su trayectoria integra liderazgo organizacional, desarrollo empresarial y articulación multisectorial. Desde UNA Colombia, impulsa el fortalecimiento institucional, la cooperación internacional y la conexión de talento y oportunidades.",
  },
  {
    name: "Clara Leonor Téllez Navarro",
    photo: clara,
    role: "Vicepresidenta de Cooperación, Relaciones Institucionales y Proyectos",
    bio: "Comunicadora Social y Periodista, magíster en Gerencia de Proyectos, con más de 23 años de trayectoria en el sector público, la cooperación internacional, la diplomacia económica y el desarrollo territorial. Ha desarrollado su carrera en entidades como la Presidencia de la República, Prosperidad Social, el Ministerio de Justicia y la Cancillería de Colombia. Su experiencia comprende la formulación de políticas públicas, la gerencia de proyectos y la construcción de alianzas entre gobiernos, organismos internacionales, empresas y comunidades. Autora del libro Soy, integra la comunicación estratégica y la gestión institucional como herramientas para impulsar procesos de transformación social.",
  },
  {
    name: "Camilo Andrés Sandoval Bula",
    photo: camilo,
    role: "Vicepresidente de Desarrollo Institucional",
    bio: "Politólogo de la Pontificia Universidad Javeriana, con maestría en Innovación Social. Cuenta con más de 15 años de experiencia en liderazgo educativo, gestión institucional y alianzas estratégicas. Ha dirigido y asesorado más de 25 conferencias de Modelos de Naciones Unidas y participado en encuentros internacionales de WFUNA. Su trayectoria abarca la cooperación internacional, el liderazgo juvenil y el desarrollo sostenible. Aporta a UNA Colombia su experiencia en gestión de proyectos, articulación de aliados y fortalecimiento institucional.",
  },
  {
    name: "Francisco Escobar",
    role: "Vicepresidente de Asuntos Globales, Conocimiento y Formación",
  },
  {
    name: "Sebastián Pérez",
    role: "Vicepresidente de Sostenibilidad y Agenda 2030",
  },
  {
    name: "Martha Cecilia Restrepo",
    photo: marta,
    role: "Directora de Gobernanza y Articulación Interna",
    bio: "Psicóloga de la Pontificia Universidad Javeriana, con maestría en Psicología Social de la London School of Economics y más de 20 años de trayectoria en gestión organizacional, coordinación de equipos y desarrollo de iniciativas en los sectores educativo, empresarial y social. Ha participado en procesos de fortalecimiento de la convivencia y construcción de entornos institucionales desde el sector público. Su experiencia integra la gestión administrativa, el liderazgo colaborativo y la articulación de actores, contribuyendo al fortalecimiento de la gobernanza y la consolidación institucional de UNA Colombia.",
  },
  {
    name: "Valentina Alcocer",
    photo: valentina,
    role: "Directora de Proyectos y Operaciones",
    bio: "Ingeniera Industrial de la Universidad Pontificia Bolivariana y especialista en Dirección de Operaciones y Logística de la Universidad EAFIT, cuenta con experiencia en organizaciones como P&G, C.I. Tecnología Alimentaria e iNNpulsa Colombia. Su trayectoria comprende la gestión estratégica de proyectos, el desarrollo productivo, el fortalecimiento empresarial y la articulación institucional. Integra conocimientos en dirección de operaciones, desarrollo territorial y estructuración de iniciativas para impulsar la eficiencia organizacional y la ejecución de proyectos de impacto.",
  },
  {
    name: "Andrea Jackeline Gelpud Bravo",
    photo: andrea,
    role: "Directora de Comunicaciones Estratégicas",
    bio: "Administradora Financiera de la Corporación Universitaria Minuto de Dios y especialista en Contratación Estatal de la Universidad La Gran Colombia, cuenta con más de siete años de experiencia en el sector público y en entidades como la Cancillería, MinTIC, la Superintendencia de Servicios Públicos y la Presidencia de la República. Su trayectoria integra la cooperación internacional, la planeación estratégica de proyectos y la articulación institucional. Su experiencia en comunicación estratégica y construcción de narrativas contribuye a fortalecer el posicionamiento, la visibilidad y la proyección institucional de UNA Colombia.",
  },
  {
    name: "María Carolina Martín-Leyes Aldana",
    photo: mariaCarolina,
    role: "Directora de Gestión de Eventos y Experiencia Institucional",
    bio: "Administradora de Empresas del CESA, con maestría en Marketing de EADA Business School y 18 años de trayectoria profesional en desarrollo estratégico, mercadeo y gestión institucional. Actualmente se desempeña como Coordinadora de Eventos Institucionales y Estratégicos del Colegio Marymount de Barranquilla, CPO de Barranquilla Fashion Week y CCO de DE AQUÍ. Su experiencia incluye gestión y sostenibilidad empresarial en la Cámara de Comercio de Barranquilla, así como estrategias de mercadeo en los sectores de salud y farmacéutico. Integra la visión estratégica, la gestión de experiencias y el relacionamiento con aliados para fortalecer la proyección institucional y el desarrollo de iniciativas de UNA Colombia.",
  },
  {
    name: "Luz Patricia García",
    role: "Directora de Contenidos, Educación y Comunidad",
    bio: "Fonoaudióloga y Educadora Especial de la Universidad Iberoamericana, con más de 35 años de trayectoria en educación, comunicación y desarrollo de procesos de aprendizaje. Ha trabajado en el sector privado como docente y ha participado en iniciativas de promoción y prevención en primera infancia, detección temprana de dificultades de lectura y escritura, y desarrollo de materiales pedagógicos. Autora de Caretín, publicado por Editorial Voluntad, integra su experiencia en lenguaje, aprendizaje e inclusión para impulsar la creación de contenidos educativos y herramientas de comunicación accesibles y transformadoras.",
  },
  {
    name: "Mateo Pirela",
    photo: mateoPirela,
    role: "Director de Innovación Digital",
    bio: "Emprendedor tecnológico y fundador y director ejecutivo de Fulmis Inc., empresa dedicada al despliegue y operación de infraestructura de cómputo con GPU para inteligencia artificial en Chile y Estados Unidos. Se desempeñó como ingeniero de software en 30X y cuenta con una destacada trayectoria en competencias científicas internacionales, con medalla de plata en la Olimpiada Latinoamericana de Astronomía y Astronáutica (OLAA) 2025 e integrante del equipo colombiano en la Olimpiada Internacional de Astronomía y Astrofísica (IOAA) 2025. Su experiencia en tecnología, inteligencia artificial, desarrollo de productos digitales y comunidades de innovación contribuye a impulsar la transformación digital y la evolución tecnológica de UNA Colombia.",
  },
  {
    name: "Silvana García",
    photo: silvana,
    role: "Apoyo a la Dirección de Gobernanza y Articulación Interna",
    bio: "Licenciada en Pedagogía Infantil de la Universidad del Norte y especialista en Estudios Pedagógicos de la Universidad de la Costa, cuenta con experiencia en los sectores público y privado, particularmente en educación, convivencia escolar y articulación institucional. Su trayectoria integra el trabajo con comunidades, la gestión educativa y el desarrollo de procesos participativos. Desde UNA Colombia, contribuye al fortalecimiento organizacional mediante la coordinación de iniciativas y la promoción de espacios de colaboración y participación.",
  },
  {
    name: "Mateo Gómez Bischoff",
    photo: mateoGomez,
    role: "Apoyo a la Dirección de Innovación Digital",
    bio: "Emprendedor tecnológico y fundador y CEO de Toca Technologies S.A.S., empresa especializada en soluciones NFC. Es Makers Fellow 2026 y estudiante de Ingeniería Mecánica de la Universidad del Norte, donde lidera el grupo de cohetería. Cuenta con experiencia en ingeniería en el sector aeroespacial en Estados Unidos y una trayectoria destacada en competencias académicas, incluyendo su participación en el equipo ganador de la Olimpiada Matemática Colombiana en 2023 y el segundo lugar obtenido en 2025. Su perfil integra innovación, ingeniería y emprendimiento tecnológico, aportando nuevas perspectivas al desarrollo de soluciones digitales y proyectos de innovación de UNA Colombia.",
  },
  {
    name: "Tomás Monsalvo",
    role: "Apoyo a la Dirección de Innovación Digital",
  },
  {
    name: "María Fernanda Diago",
    role: "Dirección de Asuntos Jurídicos Nacionales e Internacionales",
  },
];
