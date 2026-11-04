# AGENTS.md — Portafolio de Tomás González

> **Documento vivo.** Este archivo es la fuente de verdad para cualquier agente (humano o IA) que trabaje en este repo. Se lee al empezar una tarea y **se actualiza al terminarla**. No es documentación decorativa: es el sistema operativo del proyecto.

---

## 1. Misión

Este repo es el **portafolio personal de Tomás González**, desarrollador Front-end / Full-stack. Su único objetivo de negocio es:

> **Conseguir entrevistas de trabajo como developer.**

Todo cambio se evalúa con una pregunta: *¿esto acerca a un reclutador a contactarme o a confiar más en mí como profesional?* Si la respuesta es no, es secundario.

### Criterios de éxito (medibles)

| Métrica | Objetivo |
|---|---|
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Best Practices / SEO | ≥ 95 |
| Navegación completa por teclado | 100% de las rutas y modales |
| Contraste de texto | WCAG AA (≥ 4.5:1 normal, ≥ 3:1 grande) |
| LCP en mobile | < 2.5 s |
| CV descargable / visible | 1 clic desde cualquier página |
| Contacto | 1 clic desde cualquier página |
| Recorrido reclutador | Entiende rol + stack + 2 proyectos fuertes en < 60 s |

---

## 2. Stack

- **React 18** + **TypeScript 5** (modo `strict`)
- **Vite 5** (build y dev server)
- **Tailwind CSS 3** + `tailwindcss-animated`
- **NextUI 2** (Modal, Button) — solo lo que ya se usa
- **React Router 6** con `HashRouter`
- **Framer Motion** (indicador animado del menú)
- **react-slick** (carrusel de screenshots)
- **react-icons**
- Node **≥ 18** (Vite 5)
- Entorno de desarrollo actual: **Windows / PowerShell**

### Comandos

```bash
npm install        # dependencias
npm run dev        # servidor local (Vite)
npm run build      # tsc && vite build  -> dist/
npm run preview    # sirve el build
npm run lint       # eslint, --max-warnings 0
```

**Regla:** `npm run build` y `npm run lint` deben pasar antes de dar una tarea por terminada. Hoy ambos pasan; no los rompas.

> No hay tests todavía. Si agregás lógica no trivial (filtros, formularios, fetching), proponer Vitest + Testing Library y Playwright para E2E, y documentarlo acá.

---

## 3. Mapa del proyecto

```text
src/
├─ main.tsx                     # NextUIProvider > HashRouter > App
├─ App.tsx                      # Layout global + rutas
├─ routes/routes.tsx            # Definición de rutas
├─ index.css                    # Tailwind layers, tokens base, page-canvas, surface-card, scrollbar, reduced motion
├─ App.css                      # .icon hover (legacy, sin uso)
├─ style/dropdown.css           # Dropdown "MAS" viejo en CSS puro (legacy, sin uso)
├─ components/
│  ├─ layout/
│  │  ├─ Layout.tsx             # Canvas ambiental + skip link
│  │  ├─ LayoutPrimario.tsx     # Card principal: hero + redes + nav + <Outlet>
│  │  └─ LayoutSecundario.tsx   # Layout de /habilidades (Volver + contenido)
│  └─ ui/
│     ├─ principalImg/Principal.tsx      # Foto, nombre, stats de GitHub
│     ├─ socialNetworks/LinksNetwork.tsx # LinkedIn, GitHub, Figma, CV
│     ├─ navBar/navBar.tsx + menu.tsx    # Tabs accesibles + dropdown con estado
│     ├─ carrousel/Carrousel.tsx         # Screenshots de proyectos
│     ├─ badge/TechBadge.tsx             # Badge de stack reutilizable
│     ├─ pageHeader/PageHeader.tsx       # Título de página + meta
│     ├─ notificacion/ButtomNotification.tsx # Conservado pero NO renderizado
│     └─ skeleton/RepoCountSkeleton.tsx
├─ pages/
│  ├─ sobremi/SobreMi.tsx       # Ruta /
│  ├─ experiencia/Experiencia.tsx # Ruta /experiencia
│  ├─ estudios/Estudios.tsx     # Ruta /estudios
│  ├─ projectos/Projectos.tsx   # Ruta /projectos
│  ├─ habilidades/Habilidades.tsx + SkillItem.tsx # Ruta /habilidades
│  └─ contacto/Contacto.tsx     # Existe pero NO está ruteado
├─ data/                        # Contenido editable (fuente de verdad)
│  ├─ proyectos.ts
│  ├─ experiencia.ts
│  └─ estudios.ts
└─ services/github.tsx          # Hook useGithubStats (API pública de GitHub)
```

### Rutas activas

| Ruta | Página | Layout |
|---|---|---|
| `/` | Sobre mí | Primario |
| `/experiencia` | Experiencia | Primario |
| `/estudios` | Estudios | Primario |
| `/projectos` | Proyectos | Primario |
| `/habilidades` | Habilidades | Secundario |
| `*` | `<div />` (sin 404 real) | — |

`Contacto.tsx` está escrito pero **comentado** en `routes.tsx`. Si se reactiva, hacerlo con ruta y layout coherentes, y con envío real (no `console.log`).

---

## 4. Modelo de datos (importante)

El contenido vive en `src/data/*.ts`. **No hardcodear contenido en las páginas** salvo que sea UI.

### `proyectos.ts`

```ts
{
  title: string;
  link: string;            // repo o demo; puede ser ""
  info: string;
  imgUrl: string;          // URLs separadas por coma: "/a.png, /b.png"
  techonolgies: string;    // CSV: "REACT, TAILWIND, TYPESCRIPT"
}
```

### `experiencia.ts`

```ts
{
  area: string;
  techonolgies: string;    // CSV
  descrpcion: string;      // (sic)
  age: string;             // "2025-Actual"
  link: string;
  from: string;
}
```

### `estudios.ts`

```ts
{
  title: string;
  techonolgies: string;    // CSV, puede ser ""
  age: string;
  link: string;
  from: string;
}
```

**Guardrails de datos:**

- Los campos tienen errores de tipeo históricos (`techonolgies`, `descrpcion`, `Projectos`, `ButtomNotification`). **No los renombres** sin migrar todos los consumidores en el mismo cambio. Si lo hacés, actualizá este documento.
- `imgUrl` es un string CSV que se parsea con `.split(",")`. Es frágil: no agregues comas dentro de rutas. Si se migra a `string[]`, hacerlo en datos + `Carrousel` + `Projectos` a la vez.
- Las imágenes viven en `public/` y se referencian con `/archivo.png`.
- Tecnologías se muestran tal cual el CSV; mantener mayúsculas consistentes.

### Cómo agregar contenido

1. Agregar el objeto al array correspondiente en `src/data/`.
2. Si es proyecto: subir screenshots a `public/` y referenciarlas en `imgUrl` separadas por coma.
3. Verificar que el modal y el carrusel rendericen sin romper el layout.
4. Probar en mobile y desktop.

---

## 5. Sistema de diseño

### Dirección visual: "dossier nocturno"

Superficie de vidrio ahumado sobre un canvas casi negro con dos halos de luz muy tenues. Tipografía editorial (serif de display + Outfit), acento azul hielo usado con disciplina y micro-interacciones que responden al usuario. La card es una hoja de dossier, no una colección de tarjetas idénticas.

### Tokens actuales (`tailwind.config.js`)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#080B0F` | Fondo del canvas |
| `surface` | `#10151B` | Superficie de la card |
| `surface-2` | `#161D25` | Filas, nav, inputs |
| `surface-3` | `#1D2630` | Hover / tab activo |
| `line` | `#26313C` | Bordes base |
| `line-strong` | `#34414F` | Bordes de énfasis |
| `fg` | `#E9EEF5` | Texto principal |
| `muted` | `#98A6B5` | Texto secundario |
| `faint` | `#7F8D9C` | Metadatos y labels |
| `accent` | `#7CC4FF` | Links, foco, badges, estado activo |
| `accent-strong` | `#2C96EA` | Rellenos de marca (legacy) |
| `primary` / `secondary` / `tertiary` / `hov` / `celeste` | alias legacy | Se mantienen para no romper clases viejas |

- **Display:** `font-display` → **Instrument Serif** (Google Fonts). Solo para nombre, títulos de página y títulos de modal.
- **UI/body:** `font-sans` / `font-outfit` → **Outfit** (Google Fonts, 300–700).
- `font-ubuntu` fue eliminado: ya no existe en el proyecto.
- Escala tipográfica: nombre `2rem` mobile / `2.7rem` desktop; título de página `1.5rem` / `1.875rem`; body `0.95rem`–`1rem`; metadatos `0.75rem`; badges `0.7rem`; nav `0.75rem` mobile / `0.8rem` desktop.
- Usar `text-pretty` en párrafos largos y `leading-relaxed` en cuerpo. Evitar textos menores a `0.7rem`.

### Superficies y profundidad

- `page-canvas` (en `index.css`): `ink` + dos radial gradients azules muy sutiles.
- `surface-card` (en `index.css`): sheen superior + radial azul tenue + `surface`.
- Radio de card: `rounded-[28px]`. Filas y controles: `rounded-xl`/`rounded-2xl`.
- Sombras: `shadow-card` (profundidad), `shadow-glow` (foto/estado), `shadow-glow-soft` (hover de filas).
- Timing: `ease-smooth` (`cubic-bezier(0.22, 1, 0.36, 1)`), duración 200 ms.

### Reglas visuales

- Estética: dark, minimalista, editorial, con un solo acento azul hielo. **No introduzcas una paleta nueva** sin actualizar tokens y este documento.
- Preferir clases de Tailwind sobre CSS suelto. `dropdown.css` y `App.css` son legacy sin uso: no agregar lógica ahí.
- Espaciado: escala de Tailwind (`gap-2/3/4`, `p-2/3/4`, `mt-4/6/10`). Evitar valores mágicos.
- Responsive: mobile-first. Card `w-full max-w-[780px]`, altura `calc(100dvh - 8rem)` mobile / `calc(100dvh - 10rem)` desktop, `min-h-[540px]`, `max-h-[880px]`. En flex con contenido que hace scroll o `nowrap`, agregar `min-w-0` para evitar overflow.
- Micro-interacciones: hover con lift de 2 px, borde `accent/35` y `shadow-glow-soft`; foco visible con ring `accent/70`; transiciones de 200 ms. No animar todo: el movimiento debe responder a una acción.
- Animaciones: una sola entrada `animate-fade` en la card. No agregar cascadas de fade-up por sección. Respetar `prefers-reduced-motion` (global + carrusel).
- Primitivas de UI: usar `TechBadge` para stack y `PageHeader` para títulos de página. No duplicar esos estilos.
- El aviso flotante (`BottomNotification`) se retiró del layout porque tapaba el hero y el CTA. Si se recupera, debe ubicarse sin superponer contenido interactivo.

---

## 6. Convenciones de código

- **TypeScript estricto.** Sin `any` salvo justificación. `noUnusedLocals` y `noUnusedParameters` están activos.
- Componentes en **PascalCase**; hooks con prefijo `use`; archivos de datos en camelCase.
- Un componente por archivo. Props tipadas con `type` o `interface` local.
- Imports relativos como en el código existente. No introduzcas alias sin configurar `tsconfig` + Vite.
- UI en **español**; nombres de código en inglés cuando sea natural (`repoCount`, `loading`). Mantener el estilo existente.
- No agregues dependencias sin justificar peso y alternativa nativa. El bundle ya está en ~522 kB.
- No uses `index` como `key` cuando la lista pueda reordenarse o filtrarse; para datos estáticos es aceptable pero es deuda.
- Accesibilidad: ver §7. Es parte del Definition of Done, no un extra.

---

## 7. Accesibilidad — checklist no negociable

Cada PR/cambio debe cumplir:

### Semántica y estructura
- [x] Un solo `<h1>` por página; jerarquía de headings sin saltos. (Home: hero `h1`; páginas internas: hero `h1` + `h2`; `/habilidades`: `PageHeader level={1}`.)
- [ ] Usar `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>` donde corresponda. Ya hay `header`, `nav` y `section`; falta envolver el contenido en `<main>`.
- [x] `index.html` tiene `lang="es"`.
- [x] Skip link ("Saltar al contenido") al inicio del `<body>`.
- [ ] Título de documento descriptivo por ruta. Hoy hay un título descriptivo fijo; falta actualizarlo por ruta.

### Teclado
- [x] Todo interactivo es alcanzable con `Tab` y activable con `Enter`/`Space` (verificar en cada cambio).
- [x] **No anidar interactivos**: el nav usa solo `Link`; el dropdown es un `button` con estado. Si se agregan controles al carrusel, revisar que no queden dentro del `button` de la card.
- [x] Foco visible y con contraste: `:focus-visible` global + rings `accent/70`.
- [x] El dropdown "Más" abre con teclado, cierra con `Escape` y devuelve el foco al botón.
- [x] Los modales de NextUI manejan foco, `Escape` y retorno al disparador. Verificar al cambiar de versión.

### Contenido no textual
- [x] `alt` descriptivo en imágenes de contenido (retrato y screenshots con nombre del proyecto).
- [x] Iconos sociales con `aria-label` (LinkedIn, GitHub, Figma, CV).
- [x] Iconos decorativos con `aria-hidden="true"`.

### Contraste y legibilidad
- [ ] Texto mínimo 14 px efectivos. Se subió de 8 px a 11–12 px en nav, metadatos y badges; el objetivo sigue siendo 14 px para texto de lectura y navegación.
- [x] Contraste de la paleta nueva (`fg`/`muted`/`faint` sobre `surface` y `accent` sobre `surface`). Verificar con Lighthouse en cada release.
- [x] No comunicar estado solo por color: el tab activo usa `aria-current="page"`.

### Movimiento
- [x] `prefers-reduced-motion` global en `index.css` y animaciones de entrada acotadas.
- [x] El carrusel pausa el autoplay con `prefers-reduced-motion`.

### Formularios (si se activa Contacto)
- [x] `<label>` asociado a cada input en `Contacto.tsx`.
- [ ] Mensajes de error accesibles (`aria-describedby`, `role="alert"`).
- [ ] Estado de envío y confirmación anunciados.

---

## 8. Roadmap UX/UI (priorizado por impacto en entrevistas)

Trabajar de arriba hacia abajo. Un ítem por PR cuando sea posible.

### P0 — Impacto directo en contratación
- [x] **Hero con identidad clara:** nombre, rol, stack principal, métricas de GitHub, CV/redes y CTA a proyectos.
- [ ] Agregar ubicación/disponibilidad y un CTA explícito "Contactarme" en el hero.
- [ ] **CV y contacto siempre visibles**: el CV ya está en la fila de redes; falta el contacto.
- [ ] **Reactivar Contacto** con envío real (Formspree/EmailJS/Resend o mailto bien formado) o, mínimo, `mailto:` claro.
- [ ] **Reescribir proyectos como casos:** problema → solución → stack → resultado/impacto → link. Los 2 mejores primero.
- [x] **Meta tags + Open Graph básicos** (título, descripción, imagen). Falta una imagen OG dedicada y URL absoluta.
- [ ] **404 real** con navegación de vuelta.

### P1 — Percepción de calidad
- [x] Unificar tipografía: Instrument Serif para display + Outfit para UI; `font-ubuntu` eliminado.
- [ ] Subir tamaños de texto mínimos a 14 px. Hoy nav/metadatos están en 12 px y badges en 11 px.
- [x] Reemplazar dropdown hover-only por menú accesible con estado, `aria-expanded`, `Escape` y foco devuelto.
- [x] Estados `hover`, `focus-visible`, `active` consistentes en nav, cards, links y botones.
- [x] Skeleton/loader coherente con la paleta nueva.
- [ ] Empty states y manejo de error de la API de GitHub con mensaje amigable y fallback.
- [x] Primitivas visuales reutilizables: `TechBadge`, `PageHeader`, `SkillItem`.
- [x] Jerarquía editorial: nombre y títulos en serif, cuerpo en Outfit, metadatos en `faint`.

### P2 — Performance y pulido
- [ ] Code-splitting por ruta (`React.lazy` + `Suspense`); el bundle supera 500 kB.
- [ ] Importar solo componentes NextUI necesarios; evaluar reemplazar Modal por un dialog nativo.
- [ ] Convertir screenshots PNG a WebP/AVIF, definir `width`/`height` y `srcset`. Ya tienen `loading="lazy"` y `decoding="async"`.
- [x] `preconnect` para Google Fonts + `display=swap`. Evaluar self-host en el futuro.
- [ ] Reemplazar `react-slick` por un carrusel más liviano o nativo si no se justifica.
- [x] `scrollbar` cross-browser (`scrollbar-width`/`scrollbar-color` + fallback `-webkit-`).

### P3 — Extras que suman
- [ ] Modo claro/oscuro persistido (el `darkMode: "class"` ya está configurado pero sin uso).
- [ ] Versión en inglés o toggle ES/EN (amplía mercado).
- [ ] Filtros por tecnología en Proyectos.
- [ ] Métricas de GitHub más significativas (contribuciones del último año, lenguajes) en vez de solo conteos.
- [ ] Analítica privacy-friendly (Plausible/Umami) para saber qué miran los reclutadores.

---

## 9. Definition of Done

Un cambio está terminado cuando:

1. `npm run build` pasa.
2. `npm run lint` pasa con 0 warnings.
3. Se probó en mobile (≤ 390 px), tablet y desktop.
4. Se navegó la ruta afectada **solo con teclado**.
5. Se verificó contraste y tamaño de texto del área tocada.
6. No se rompieron rutas existentes ni el layout de la card.
7. Si cambió contenido, se actualizó el `src/data/` correspondiente (no hardcode).
8. Si cambió una decisión de diseño/arquitectura, se actualizó este `AGENTS.md` (§11).
9. Se agregó la entrada en la bitácora (§10).

---

## 10. Bitácora del proyecto (append-only)

> Agregar una fila al final al cerrar cada tarea relevante. No borrar historia. Formato: fecha · cambio · archivos · impacto.

| Fecha | Cambio | Archivos | Impacto |
|---|---|---|---|
| 2026-11-03 | Creación de `AGENTS.md` con misión, sistema de diseño, checklist a11y y roadmap | `AGENTS.md` | Base para trabajo asistido y mejora continua |
| 2026-11-03 | Refactor visual "dossier nocturno": tokens nuevos, Instrument Serif + Outfit, canvas y card con halos, nav accesible sin links anidados, `TechBadge`/`PageHeader`/`SkillItem`, modales y carrusel rediseñados, skip link, `lang="es"`, meta/OG básicos, `prefers-reduced-motion` | `tailwind.config.js`, `index.html`, `src/index.css`, `src/components/**`, `src/pages/**` | Interfaz coherente y accesible en desktop y mobile (390 px sin overflow); build y lint verdes. Retirado el toast flotante que tapaba el hero |
| 2026-11-03 | Revertido a pedido del usuario un round de ajustes (nav más grande con "Estudios" en Más, previews estáticas, timeline de Experiencia, Estudios agrupado por `tipo` sin modal). El código y este documento vuelven al estado del refactor "dossier nocturno" | `src/components/ui/navBar/*`, `src/components/ui/socialNetworks/LinksNetwork.tsx`, `src/components/ui/carrousel/Carrousel.tsx`, `src/index.css`, `src/pages/projectos/Projectos.tsx`, `src/pages/experiencia/Experiencia.tsx`, `src/pages/estudios/Estudios.tsx`, `src/data/*` | Sin cambios netos frente al refactor; build y lint verdes. El round revertido no dejó deuda: se retiró `src/utils/images.ts` |

---

## 11. Protocolo de auto-nutrición (obligatorio para agentes)

Este documento debe mejorar solo. Al terminar cualquier tarea:

1. **Bitácora:** agregar fila en §10 con fecha, cambio, archivos e impacto.
2. **Roadmap:** marcar `[x]` lo completado y agregar nuevos ítems descubiertos, con prioridad P0–P3.
3. **Deuda técnica:** si encontraste un problema que no arreglaste, registrarlo en §12.
4. **Sistema de diseño:** si cambiaste tokens, tipografía o patrones visuales, actualizar §5.
5. **Accesibilidad:** si descubriste una barrera nueva, agregarla al checklist §7.
6. **Decisiones:** si tomaste una decisión que contradice este archivo, **actualizá el archivo en el mismo cambio**. La documentación desactualizada es un bug.
7. **No inflar:** mantener el documento accionable. Si una sección deja de ser útil, se reescribe, no se acumula.

### Prompt de arranque sugerido para un agente nuevo

```text
Leé AGENTS.md completo. Luego:
1) corré npm run build y npm run lint para confirmar baseline;
2) revisá el roadmap §8 y elegí el primer ítem P0 sin marcar;
3) implementá el cambio más pequeño que lo resuelva;
4) verificá con el Definition of Done §9;
5) actualizá bitácora, roadmap y deuda técnica.
No cambies rutas, datos ni tokens de diseño sin justificarlo.
```

---

## 12. Deuda técnica conocida

| ID | Problema | Impacto | Prioridad | Estado |
|---|---|---|---|---|
| TD-01 | `font-ubuntu` no existe en Tailwind y se usaba en casi toda la UI | Tipografía inconsistente | P1 | ✅ Resuelto: display + Outfit |
| TD-02 | Textos de 8 px (`text-[0.5rem]`) en nav/redes | Ilegible e inaccesible | P0 | ✅ Resuelto: mínimo 11–12 px |
| TD-03 | `<Link><button>` anidados y dropdown hover-only | Teclado roto | P0 | ✅ Resuelto: `Link` + menú con estado |
| TD-04 | `lang="en"` en `index.html` con contenido en español | SEO + lectores de pantalla | P0 | ✅ Resuelto: `lang="es"` |
| TD-14 | Sin `prefers-reduced-motion` | Accesibilidad | P1 | ✅ Resuelto: global + carrusel |
| TD-15 | Sin meta/OG tags | Mala preview al compartir | P0 | 🟡 Parcial: OG relativa, falta imagen dedicada |
| TD-05 | Falta `<main>` que envuelva el contenido; headings ya jerárquicos | Semántica débil | P1 | Pendiente |
| TD-06 | `imgUrl` como CSV string | Frágil, propenso a errores | P1 | Pendiente |
| TD-07 | `Contacto.tsx` sin ruta y sin backend (`console.log`) | No hay conversión directa | P0 | Pendiente |
| TD-08 | Ruta `*` renderiza `<div />` | Mala experiencia en links rotos | P1 | Pendiente |
| TD-09 | Bundle único de ~509 kB | Carga lenta en mobile | P2 | Pendiente |
| TD-10 | PNGs sin optimizar ni dimensiones | CLS y peso | P2 | Pendiente |
| TD-11 | `useGithubStats` sin caché, rate-limit ni abort | Fallos silenciosos / 403 | P1 | Pendiente |
| TD-12 | Nombres con typos (`techonolgies`, `descrpcion`, `Projectos`) | Confusión, no romper sin migrar | P3 | Pendiente |
| TD-13 | Sin tests | Regresiones silenciosas | P2 | Pendiente |
| TD-16 | Textos de lectura/navegación en 11–12 px (nav, badges, metadatos) | Bajo el objetivo de 14 px | P1 | Pendiente |
| TD-17 | Título de documento fijo, sin variación por ruta | SEO + historial/lectores | P1 | Pendiente |
| TD-18 | `BottomNotification.tsx`, `App.css` y `dropdown.css` sin uso | Peso muerto y confusión | P3 | Pendiente |
| TD-19 | Imagen OG relativa (`/este.png`) y sin dimensiones dedicadas | Preview incompleta fuera del dominio | P2 | Pendiente |

---

## 13. Guardrails (no romper)

- **No** cambiar `HashRouter` por `BrowserRouter` sin configurar rewrites en el hosting; el deploy actual depende del hash.
- **No** renombrar campos de `src/data/` sin migrar todos los consumidores.
- **No** eliminar el `NextUIProvider` mientras se usen `Modal`/`Button` de NextUI.
- **No** tocar `node_modules/`, `dist/`, `package-lock.json` a mano.
- **No** commitear secretos ni tokens de API.
- **No** agregar analítica, cookies o terceros sin avisar.
- **No** hacer refactors masivos no pedidos: cambios pequeños, verificables y con build verde.
- Mantener el tono visual dark/minimalista y el acento celeste salvo decisión explícita documentada.

---

*Última actualización: 2026-11-03 · Mantenedor: Tomás González · Este archivo se actualiza en cada tarea.*
