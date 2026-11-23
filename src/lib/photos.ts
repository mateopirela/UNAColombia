import type { StaticImageData } from "next/image";
import asambleaGeneral from "@/assets/photos/asamblea-general.jpg";
import banderasOnu from "@/assets/photos/banderas-onu.jpg";
import bogota from "@/assets/photos/bogota.jpg";
import cocora from "@/assets/photos/cocora.jpg";
import cocoraPanorama from "@/assets/photos/cocora-panorama.jpg";
import sedeOnu from "@/assets/photos/sede-onu.jpg";
import tierraDeNoche from "@/assets/photos/tierra-de-noche.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Datos de atribución, mostrados en /creditos. */
  title: string;
  author: string;
  license: string;
  licenseUrl?: string;
  source: string;
};

/**
 * Fotografías provisionales de licencia libre.
 * Reemplázalas por fotos propias de UNA Colombia cuando estén disponibles.
 */
export const photos = {
  tierraDeNoche: {
    src: tierraDeNoche,
    alt: "La Tierra de noche vista desde el espacio, con las luces de las ciudades de América",
    title: "Black Marble: Americas",
    author: "NASA Earth Observatory",
    license: "Dominio público",
    source: "https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg",
  },
  bogota: {
    src: bogota,
    alt: "Edificios del centro de Bogotá con el cerro de Monserrate al fondo",
    title: "Monserrate y centro de Bogotá",
    author: "Jos Cuevasc",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Monserrate_y_centro_de_Bogota.jpg",
  },
  sedeOnu: {
    src: sedeOnu,
    alt: "Sede de las Naciones Unidas en Nueva York vista desde el East River",
    title:
      "Shore of the East River with Headquarters of the United Nations, New York City",
    author: "Jakub Hałun",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Shore_of_the_East_River_with_Headquarters_of_the_United_Nations,_New_York_City,_20231005_1132_2230.jpg",
  },
  asambleaGeneral: {
    src: asambleaGeneral,
    alt: "Salón de la Asamblea General de las Naciones Unidas durante una sesión",
    title: "United Nations General Assembly Hall (3)",
    author: "Basil D Soufi",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:United_Nations_General_Assembly_Hall_(3).jpg",
  },
  banderasOnu: {
    src: banderasOnu,
    alt: "Avenida de banderas de los Estados miembros frente al Palacio de las Naciones en Ginebra",
    title: "United Nations Flags (cropped)",
    author: "Tom Page",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:United_Nations_Flags_-_cropped.jpg",
  },
  cocora: {
    src: cocora,
    alt: "Palmas de cera entre la niebla en el Valle de Cocora, Quindío",
    title: "Valle de Cocora, Colombia 02",
    author: "Bernard Gagnon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_02.jpg",
  },
  cocoraPanorama: {
    src: cocoraPanorama,
    alt: "Panorámica del Valle de Cocora con palmas de cera sobre las colinas",
    title: "Valle de Cocora, Colombia 04",
    author: "Bernard Gagnon",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_04.jpg",
  },
} satisfies Record<string, Photo>;

export const programPhotos: Record<string, Photo> = {
  "modelo-de-naciones-unidas": photos.asambleaGeneral,
  "juventud-y-liderazgo": photos.banderasOnu,
  "iniciativas-estrategicas": photos.cocora,
};
