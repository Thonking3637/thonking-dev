# thonking.dev — Portfolio de Gabriel Ramírez

Portfolio personal + landing de la marca **Thonking**. Astro 6 + Tailwind 4.

## Identidad

- **Persona:** Gabriel Ramírez González, 28, Lima, Perú.
- **Marca:** Thonking (nick desde hace años; mascot = emoji thinking-face amarillo con mano naranja en la barbilla). Tagline: *"Hago que la gente aprenda jugando."*
- **Dominio:** thonking.dev (sin deploy aún; Vercel planeado).
- **Público:** clientes B2B (gamificación corporativa), indies, comunidad gamedev.

### Stack real (importante para copy)
- **Dominio real:** Unity + C# (6 años desde 2020). Game dev, gamificación enterprise, VR · MetaQuest 3.
- **Herramientas e indie apps** (Solvi, GGleaner, sitio): las construye con stack web moderno y las **revisa / juega / usa personalmente antes de enviar**. Cada release pasa por sus manos.
- **NUNCA** usar el término "vibecoding", "AI-assisted" o similares en copy pública — es red flag en el mundo dev. Framing correcto: enfatizar playtesting/review personal del producto.

### Socials (confirmados abril 2026)
- GitHub: https://github.com/Thonking3637
- itch.io: https://thonking.itch.io
- LinkedIn: https://www.linkedin.com/in/gabrielramirezgonzalez/
- **Email activo**: gabriel@thonking.dev (dominio configurado, abril 2026)

## Dirección estética

**Maximalismo juguetón con 3D.** Referencia: landings tipo Pixel Rise. **NO** queremos minimalismo austero ni templates corporate-dev.

Se traduce en:
- Tipografía masiva outline de fondo ("THONKING STUDIO" detrás del hero).
- Objetos decorativos flotantes (gamepad, moneda, estrella, corazón, carta, badge "+100 XP").
- Subrayado hand-drawn SVG amarillo bajo palabras clave.
- Retro-gaming touches: Pixelify Sans en badges/sellos, Mac Classic como hero visual.
- Movimiento suave pero constante (idle float, shimmer, draw-in).

## Design tokens

Viven en `src/styles/global.css` bajo `@theme {}`. **Tailwind 4 ya no usa `tailwind.config.js`** — todo se define en CSS.

### Colores
| Token | Hex | Uso |
|---|---|---|
| `base` | `#edebe6` | Fondo |
| `base-soft` | `#f5f3ee` | Cards, chips |
| `ink` | `#1a1815` | Texto principal, trazos |
| `ink-soft` | `#2a2621` | Variante suave |
| `muted` | `#5a5650` | Texto secundario |
| `primary` | `#ff6b4a` | Naranja coral peruano |
| `primary-deep` | `#e85838` | Hover primario |
| `secondary` | `#f4d35e` | Amarillo mostaza |
| `pink` | `#e8546f` | Acento rosa |
| `gold` | `#ffe085` | Acento dorado |
| `sky` | `#4a8fff` | Acento azul (rainbow stripe) |

### Fuentes
- `font-display` / `font-body` → **Geist** (400–900). Display en 800–900 bold.
- `font-mono` → **JetBrains Mono**. Metadata, chips, coordenadas.
- `font-pixel` → **Pixelify Sans**. Sellos, badges, wordmark retro.

Cargadas vía Google Fonts en `src/layouts/Layout.astro`.

## Estructura de archivos

```
src/
├── layouts/
│   └── Layout.astro         # HTML skeleton + fonts + meta + global.css import
├── components/
│   ├── Navbar.astro         # Nav flotante pill (Raycast-style)
│   ├── Hero.astro           # Hero maximalista completo
│   └── MacClassic.astro     # SVG inline del Mac Classic naranja (hero visual)
├── pages/
│   └── index.astro          # Landing
└── styles/
    └── global.css           # @theme tokens + keyframes + util classes
```

Próximas páginas: `/sobre`, `/contacto` y sección de productos (aún no construidas).

## Convenciones

- Componentes `.astro` en **PascalCase**.
- Props tipadas con TypeScript (`interface Props`).
- **Mobile-first** responsive (base móvil, breakpoints sm/md/lg/xl).
- Accesibilidad AA: `aria-label`, `aria-hidden="true"` para decorativos, `focus-visible` global.
- `prefers-reduced-motion` respetado — todas las animaciones se apagan.
- SVGs decorativos inline (no archivos separados) para evitar waterfalls.
- Imágenes de productos se añaden después; usa placeholders por ahora.

## Animaciones

Todo en CSS puro por ahora (sin Motion library). Clases utilitarias en `global.css`:

- `rise rise-{1..6}` — fade-up staggered al cargar (delays 0.05s–0.80s).
- `float-a` / `float-b` / `float-c` — idle float para decoratives (6.5s / 7.8s / 8.6s).
- `float-mac` — float central del Mac.
- `spin-slow` — rotación 18s para estrella.
- `shimmer-word` — gradiente dorado animado sobre texto.
- `draw-line` — stroke-dashoffset animado para subrayados SVG.
- `marquee-track` — scroll infinito horizontal.
- `scroll-dot` — indicador de scroll.

**Motion library queda deferida** hasta que necesitemos gestos complejos (drag, scroll-scrubbed, layout).

## Comandos

```bash
npm run dev      # dev server en localhost:4321
npm run build    # build estático a dist/
npm run preview  # preview del build
```

## Estado actual

### ✅ Slice 1 — Hero + Navbar (hecho)
Tokens + Layout + Navbar flotante + Hero maximalista con:
- Badge "Lima, Perú"
- Headline "HAGO QUE / LA GENTE / APRENDA / JUGANDO" + underline SVG animado
- Mac Classic SVG central con float
- 6 decoratives flotantes (estrella, gamepad, moneda, corazón, XP badge, carta)
- Columna derecha: stat 6,221+ descargas (GDD Template) → itch.io · card de *¿Te la creíste?* (LIVE, elecciones 12 abr 2026) · lista socials (GitHub, itch.io, LinkedIn)
- Stack chips: Unity, C#, Shaders, Game Design, VR · MetaQuest 3, Playtested
- Marquee infinito
- Scroll indicator
- Fondo "THONKING STUDIO" outlined en Pixelify Sans

### 🔜 Próximos slices (sugeridos)
1. **Slice 2 — Sección productos.** Grid/carrusel. Estado real (abril 2026):
   - LIVE: GDD Template (6,221 desc), ¿Te la creíste? (web, elecciones), ElevenLabs Batch Generator (v1.0 interno), Revert Pong (demo para Virtual Magic Park).
   - WIP no lanzados: Solvi (APK testeo privado), GGleaner (por construir), Entrenamiento Soriana (juego flat + VR MetaQuest 3).
2. **Slice 3 — Página /sobre.** Bio honesta (Unity 6 años), timeline, filosofía "aprender jugando".
3. **Slice 4 — Página /contacto.** Email destacado, socials, CTA colabora.
4. **Slice 5 — Motion + scroll animations.** Integrar Motion library para reveals scroll-triggered, hover gestures, cursor custom opcional.
5. **Slice 6 — Deploy Vercel + dominio.**

## Decisiones abiertas

- **Imágenes de productos**: pendiente capturar/generar screenshots.
- **3D real vs SVG**: Mac Classic por ahora es SVG plano. Considerar Three.js/Spline para hero si se quiere 3D de verdad (Slice 5+).
- **Cursor custom**: mencionado como opcional. Decidir en Slice 5.
- **Sección blog**: fuera del v1.0.
- **i18n**: el contenido está en español; sin versión EN por ahora.

## Notas para Claude

- Tailwind 4 usa `@import "tailwindcss"` + `@theme {}` en CSS — no hay `tailwind.config.{js,ts}`. No intentes crearlo.
- Al añadir fuentes nuevas, actualizar el `<link>` de Google Fonts en `Layout.astro` Y declarar la var `--font-*` en `@theme`.
- Todos los textos en **español**, tono personal (usa "hago", "construyo", no "I build").
- Evita emojis en copy final — pertenecen al sistema visual (SVG decoratives, no texto).
- No uses Inter, Roboto, Space Grotesk u otras fuentes genéricas — rompen la estética.
