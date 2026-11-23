# UNA Colombia — sitio web

Sitio institucional de UNA Colombia, hecho con Next.js (App Router) y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Dónde se edita el contenido

| Qué | Archivo |
|---|---|
| Correo de contacto, WhatsApp, redes, menú | `src/lib/site.ts` |
| Programas, noticias, eventos, pilares, valores | `src/lib/content.ts` |
| Equipo | `src/app/sobre-una-colombia/equipo/page.tsx` |
| Documentos de transparencia | `src/app/sobre-una-colombia/transparencia/page.tsx` |
| Colores y tipografías de marca | `src/app/globals.css` |
| Fotografías y sus créditos | `src/lib/photos.ts` (archivos en `src/assets/photos/`) |

## Antes de publicar

- Definir `contactEmail` en `src/lib/site.ts`; sin él, el formulario de contacto queda deshabilitado.
- Reemplazar las noticias y eventos marcados con `example: true`.
- Suministrar la política de tratamiento de datos (`/privacidad`).
- Reemplazar las fotografías provisionales de licencia libre por fotos propias y actualizar `/creditos`.
- Poner `showDraftNotes: false` en `src/lib/site.ts` para ocultar las notas «Pendiente de validación».
