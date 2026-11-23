import type { MetadataRoute } from "next";
import { posts, programs } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/sobre-una-colombia",
    "/sobre-una-colombia/equipo",
    "/sobre-una-colombia/relacion-global",
    "/sobre-una-colombia/transparencia",
    "/programas",
    ...programs.map((p) => `/programas/${p.slug}`),
    "/agenda-onu",
    "/actualidad",
    ...posts.filter((p) => !p.example).map((p) => `/actualidad/${p.slug}`),
    "/participa",
    "/contacto",
    "/privacidad",
    "/creditos",
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
