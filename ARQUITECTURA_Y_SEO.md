# Documentación de Arquitectura y SEO - VerifacTool Web

Este documento detalla la estructura, tecnologías y estrategias de SEO utilizadas en el proyecto **VerifacTool Web**, diseñado para servir como base técnica para futuros desarrollos.

## 1. Stack Tecnológico

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Gestión de Contenido:** Markdown (MDX) con `next-mdx-remote` y `gray-matter`.
*   **Analítica:** Google Analytics 4 (vía `@next/third-parties/google`).
*   **Emailing:** [Resend](https://resend.com/).

---

## 2. Estructura de Carpetas

```text
/src
  /app                # Rutas, Layouts y APIs (App Router)
    /api              # Endpoints de API (Ej. envío de leads)
    /blog             # Sistema de blog dinámico
    /verifactu        # Páginas de pilares de contenido (Silo SEO)
    layout.tsx        # Configuración global y metadatos base
    page.tsx          # Home Page
    sitemap.ts        # Generación automática de Sitemap XML
    robots.ts         # Configuración de Robots.txt
    globals.css       # Estilos globales y tokens de Tailwind
  /components         # Componentes React reutilizables
    /SEO              # Componentes específicos para SEO (JsonLd)
    Navbar.tsx        # Navegación optimizada
    Footer.tsx        # Pie de página con enlaces legales y sociales
    Hero.tsx          # Secciones de impacto
  /content            # Archivos .md/.mdx (Contenido estático)
    /blog             # Artículos del blog
  /lib                # Utilidades, constantes y lógica de negocio
    blog.ts           # Funciones para leer y parsear MDX
    utils.ts          # Utilidades de clases (tailwind-merge, clsx)
/public               # Activos estáticos (Imágenes, iconos, fuentes)
```

---

## 3. Estrategia de SEO (Search Engine Optimization)

El proyecto está optimizado siguiendo las mejores prácticas de SEO técnico y de contenido:

### A. Metadatos Dinámicos
*   **Layout Global:** Se definen `metadataBase`, `title.template` y `openGraph` base en `src/app/layout.tsx`.
*   **Páginas Individuales:** Cada página o carpeta de ruta define su propio objeto `Metadata` para optimizar títulos y descripciones específicas.

### B. SEO Técnico
*   **Sitemap XML:** Generado dinámicamente en `src/app/sitemap.ts`, incluyendo rutas estáticas y dinámicas (artículos del blog) con prioridades y frecuencias de cambio.
*   **Robots.txt:** Configurado en `src/app/robots.ts` para controlar el rastreo e indexación.
*   **URLs Canónicas:** Implementadas para evitar contenido duplicado.
*   **Optimización de Imágenes:** Uso del componente `next/image` y formatos modernos.
*   **Favicons & Apple Icons:** Configurados correctamente en el directorio `app`.

### C. Datos Estructurados (JSON-LD)
*   Se utiliza un componente `JsonLd.tsx` para inyectar esquemas de Schema.org:
    *   `Organization` (en el home).
    *   `Article` (en blogs).
    *   `FAQPage` (en secciones de preguntas frecuentes).
    *   `BreadcrumbList` (para navegación).

### D. Rendimiento (Web Vitals)
*   **Fuentes:** Uso de `next/font/google` (Inter) para evitar el Cumulative Layout Shift (CLS).
*   **Carga Crítica:** Optimización de scripts de terceros mediante `next/script` o `@next/third-parties`.

---

## 4. Paquetes y Plugins Clave

| Paquete | Propósito |
| :--- | :--- |
| `next` | Framework core (App Router, Optimización de imágenes, etc.) |
| `tailwindcss` | Estilos utilitarios rápidos y mantenibles. |
| `framer-motion` | Micro-interacciones y animaciones premium. |
| `lucide-react` | Set de iconos vectoriales ligeros. |
| `next-mdx-remote` | Renderizado de contenido Markdown en componentes React. |
| `gray-matter` | Parseo de frontmatter en archivos de contenido. |
| `@next/third-parties` | Integración optimizada de Google Analytics. |
| `resend` | Servicio de envío de emails para formularios de contacto. |
| `clsx` & `tailwind-merge` | Gestión limpia de clases dinámicas de Tailwind. |

---

## 5. Guía de Replicación para Nuevos Proyectos

Para replicar esta arquitectura:
1.  **Directorio `app`:** Mantener la estructura de `layout.tsx` para metadatos y fuentes.
2.  **Sitemap & Robots:** Copiar y adaptar `sitemap.ts` y `robots.ts` con el nuevo dominio.
3.  **Diseño:** Utilizar el archivo `globals.css` como base para los tokens de color y tipografía.
4.  **Componentes SEO:** Asegurarse de implementar los componentes de JSON-LD en las páginas pilares.
5.  **Contenido:** Seguir el patrón de la carpeta `content` para escalar el blog o guías informativas sin tocar el código.
