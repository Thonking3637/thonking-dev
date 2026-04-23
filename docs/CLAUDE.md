# thonking.dev — Portfolio de Gabriel Ramírez

Portfolio personal + landing de la marca **Thonking**. Astro 6 + Tailwind 4.
**Estado abril 2026: v1 production-grade, pendiente deploy a Vercel.**

---

## 1 · Identidad de marca

- **Persona:** Gabriel Ramírez González, 28 años, Lima, Perú.
- **Nick/marca:** Thonking (lo usa hace años, identidad pública).
- **Tagline principal:** *"Hago que la gente aprenda jugando."*
- **Dominio:** [thonking.dev](https://thonking.dev) — **dominio configurado y email activo desde 2026-04-23**.
- **Público:** B2B gamificación enterprise (retailers, training), indies, comunidad gamedev hispanohablante.

### Mascot OFICIAL (importante)

**Gato astronauta chibi** ilustrado por **[@floruwu_art](https://instagram.com/floruwu_art)** (Instagram). Gabriel tiene derechos comerciales.

- Casco mostaza/naranja con antenas laterales
- Cuerpo negro con ojos amarillos grandes
- Campanita dorada con letra "T" en el cuello
- Gabriel dice "ese soy yo en sí"

**Archivos en `public/mascot/`:** 6 PNG + 6 WebP (idle/happy/excited × head-only/hero-con-manos).

**OBSOLETO — NUNCA usar:** el emoji thonking genérico (:thonking: yellow thinking face con mano naranja). Era placeholder temprano; el gato reemplazó todo.

**Atribución obligatoria en footer:** *"Mascot ilustrado por @floruwu_art · Hecho con cariño desde Lima"*

### Stack real de Gabriel (crítico para copy)

**Dominio real:** Unity + C# · **6 años desde 2020** (no 7). Game dev, gamificación enterprise, VR MetaQuest 3.

**Listas exactas por sección (hard-coded en componentes):**

| Sección | Stack exacto |
|---|---|
| Hero chips (6) | Unity · C# · Kotlin · Firebase · Astro · TypeScript |
| About Stack principal (7) | Unity · C# · Game Design · VR · MetaQuest 3 · Kotlin · Firebase · Android |
| About "También construyo con" (4) | Astro · Tailwind · TypeScript · HTML/CSS |
| Marquee hero | UNITY · C# · KOTLIN · FIREBASE · ASTRO |

**BANS globales (nunca en chips/bios/portfolio público):**
Shaders · Blender · Python · React · Playtested · "vibecoding" · "AI-assisted"

Regla: las apps no-Unity (Solvi, GGleaner, este sitio) las presenta enfatizando *playtesting/review personal* — NUNCA "vibecoding" / "AI-assisted" porque es red flag en el mundo dev.

### Timeline LinkedIn-verified (about section)

- 2020 · Primer rol gamedev — Tester en **3S Design** (proyecto MINEDU)
- 2021 · Freelance Unity + preventa 3D/AR (Lima)
- 2021 · GDD Template publicado en itch.io
- 2024 · Entra a gamificación enterprise — **Soriana** via **ZinT3CH**
- 2025 · Herramientas internas (ElevenLabs Batch, Unity tools)
- 2025 · Proyecto VR enterprise (cancelado pero con avances)
- 2026 · thonking.dev + GGleaner v1.0 + apps indie

**Soriana:** OK nombrar en About bio + timeline (contexto personal). **NO** nombrar en product marketing cards → usar "Retailer top-3 de México".

### Socials (confirmados)

- GitHub: https://github.com/Thonking3637
- itch.io: https://thonking.itch.io
- LinkedIn: https://www.linkedin.com/in/gabrielramirezgonzalez/
- **Email activo:** gabriel@thonking.dev
- Email personal interno (no público): gabriel.jmrg@gmail.com
- Sin Twitter/X activo

---

## 2 · Dirección estética

**Maximalismo juguetón con gato astronauta.** No minimalismo austero, no templates corporate-dev.

Se traduce en:
- Tipografía masiva outlined de fondo por sección (THONKING STUDIO, AHORA, GDD, PONG, NDA, etc. en Pixelify Sans con text-stroke)
- Cards con **border 2px ink + shadow offset** tipo sticker (`shadow-[4px_4px_0_0_#1a1815]`)
- Subrayado hand-drawn SVG mostaza/rosa bajo palabras clave (clase `.draw-line` anima stroke-dashoffset)
- Estrellas giratorias + sparkles pixel + badges XP estilo gaming
- Movimiento suave constante (idle float, shimmer, draw-in)
- Gato peeking desde esquinas, con ground shadow ovalada plana
- Paleta limitada y saturada: coral, mostaza, ink, crema

---

## 3 · Design tokens

En `src/styles/global.css` con `@theme {}`. Tailwind 4 usa CSS, **no hay `tailwind.config.js`**. No intentes crearlo.

### Light mode (default)

| Token | Hex | Uso |
|---|---|---|
| `base` | `#edebe6` | Fondo página |
| `base-soft` | `#f5f3ee` | Cards, chips |
| `ink` | `#1a1815` | Texto principal, trazos, borders |
| `ink-soft` | `#2a2621` | Variante |
| `muted` | `#5a5650` | Texto secundario |
| `primary` | `#ff6b4a` | **Coral** — CTA principal, acento rojo |
| `secondary` | `#f4d35e` | **Mostaza** — highlights, subrayados, acento |
| `pink` | `#e8546f` | Acento rosa |
| `sky` | `#4a8fff` | Acento azul |
| `gold` | `#ffe085` | Acento dorado |

### Dark mode (opcional, implementado)

Activación: `.dark` class en `<html>`. Init script inline en Layout evita FOUC. localStorage persist + prefers-color-scheme default. Toggle en navbar.

Tokens remapeados bajo `.dark { ... }`:
- `base`: `#0f0d0b` (marrón café oscuro, no negro puro)
- `base-soft`: `#1a1815` (un tono arriba)
- `ink`: `#f5f0e8` (crema)
- `ink-soft`: `#e8dfd0`
- `muted`: `#8b7e6a` (beige apagado)

Coral + mostaza **se mantienen** en ambos modos (son brand identity).

**Transición smooth:** clase temporal `.theme-transitioning` durante 320ms con `transition-property: background-color, color, border-color, fill, stroke`.

### Fuentes

- `font-display` / `font-body` → **Geist** (400–900). Titulares 800-900.
- `font-mono` → **JetBrains Mono**. Metadata, chips, status pills.
- `font-pixel` → **Pixelify Sans**. Sellos, badges retro, backgrounds gigantes.

Cargadas via Google Fonts en `src/layouts/Layout.astro`.

**NO uses Inter, Roboto, Space Grotesk ni fuentes genéricas** — rompen la estética.

---

## 4 · Estructura de archivos (actual)

```
thonkingio-dev/
├── astro.config.mjs          # + site, + @astrojs/sitemap
├── package.json              # Astro 6 + Tailwind 4 + sitemap
├── docs/
│   └── CLAUDE.md             # este archivo
├── scripts/
│   ├── generate-assets.mjs   # one-shot: OG image + favicons
│   └── convert-webp.mjs      # one-shot: PNG → WebP mascots
├── public/
│   ├── favicon.ico           # multi-res 16/32/48
│   ├── favicon.svg           # mark cat vectorial
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png  # 180×180
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── manifest.webmanifest
│   ├── og-image.png          # 1200×630 · 97KB · social preview
│   ├── robots.txt
│   ├── mascot/               # 6 WebP + 6 PNG fallback
│   └── screenshots/          # ggleaner.png, solvi-home.png
└── src/
    ├── content.config.ts     # Zod schema para productos
    ├── content/
    │   └── products/         # 7 .md con frontmatter (body vacío)
    ├── layouts/
    │   └── Layout.astro      # HTML skeleton · FOUC init · meta · fonts · schema
    ├── components/
    │   ├── Navbar.astro              # pill flotante + dropdown trabajo + theme toggle
    │   ├── ThemeToggle.astro         # sun/moon con rotate+scale
    │   ├── Hero.astro                # headline + mascot hero + decoratives
    │   ├── Stats.astro               # 5 stats con count-up IntersectionObserver
    │   ├── Products.astro            # bento grid 7 cards
    │   ├── ProductVisual.astro       # image | placeholder temático
    │   ├── ProductSchema.astro       # JSON-LD CreativeWork
    │   ├── About.astro               # bio + timeline + stack
    │   ├── Contact.astro             # email CTA + socials
    │   ├── Footer.astro              # atribución @floruwu_art
    │   ├── ThonkingFace.astro        # wrapper mascot hero idle↔happy
    │   ├── GddSlide.astro            # 4 variants mockup GDD
    │   ├── RevertSlide.astro         # 4 variants pixel-arcade
    │   ├── TeLaCreisteSlide.astro    # 4 variants quiz crimson
    │   ├── GgleanerSlide.astro       # 4 variants dev-cleaner dark
    │   ├── EnterpriseSlide.astro     # 4 variants NDA corporate
    │   ├── ElevenLabsSlide.astro     # 4 variants audio tool
    │   └── SolviSlide.astro          # 4 variants mobile mint
    ├── pages/
    │   ├── index.astro               # one-pager: hero, stats, products, about, contact
    │   ├── now.astro                 # /now — bento cards construyendo/escribiendo/etc
    │   ├── 404.astro                 # noindex + mascot excited
    │   └── productos/
    │       ├── index.astro           # /productos listing
    │       ├── gdd-template.astro
    │       ├── revert-pong.astro
    │       ├── te-la-creiste.astro
    │       ├── ggleaner.astro
    │       ├── entrenamiento-enterprise.astro
    │       ├── elevenlabs-batch.astro
    │       └── solvi.astro
    └── styles/
        └── global.css         # @theme tokens + dark + keyframes + grain + util
```

---

## 5 · Rutas del sitio (11 páginas)

| Ruta | Descripción |
|---|---|
| `/` | Home one-pager (hero, stats, products, about, contact) |
| `/now` | Now page con bento cards de actividad |
| `/productos` | Listing (reusa componente Products) |
| `/productos/gdd-template` | Detalle custom |
| `/productos/te-la-creiste` | Detalle custom |
| `/productos/ggleaner` | Detalle custom |
| `/productos/entrenamiento-enterprise` | Detalle custom (NDA) |
| `/productos/elevenlabs-batch` | Detalle custom |
| `/productos/solvi` | Detalle custom |
| `/productos/revert-pong` | Detalle custom |
| `/404` | Mascot excited + copy ingenioso · `noindex` |

Cada página producto tiene: breadcrumb · hero con título+mascot peeking+CTA · visual 16:9 · galería 4 mockups editoriales con lightbox (scroll-locked) · sección problema · numbered list 01-05 · lecciones cards · CTA final con acento de producto · navegación inferior.

---

## 6 · Productos (snapshot abril 2026)

| Producto | Status | Label display | Color | URL |
|---|---|---|---|---|
| GDD Template | `live` | LIVE · 6,221 descargas | verde | thonking.itch.io/game-design-document |
| ¿Te la creíste? | `live` | LIVE · Elecciones 2026 | verde | thonking.itch.io/te-la-creiste |
| GGleaner | `wip` | SHIPPING V1.0 (override) | mostaza | (GitHub repo pronto) |
| Entrenamiento Enterprise | `locked` | Próximamente · Enterprise | gris | — (NDA) |
| ElevenLabs Batch | `live` | LIVE · v1.0 | verde | thonking.itch.io/11uds |
| Solvi | `beta` | Beta privada | mostaza | — (email request) |
| Revert Pong | `commercial` | Comercial · Vendido 2017 | gris | thonking.itch.io/revert-pong-virtual-magic-park |

Schema status (content.config.ts): `live` | `wip` | `beta` | `locked` | `commercial`.

**Código de colores status dropdown:**
- 🟢 verde `#22c55e` → live
- 🟡 mostaza `#f4d35e` → wip / beta
- ⚫ gris `#8b7e6a` → locked / commercial

Overrides por producto: `ggleaner` → "SHIPPING V1.0", `revert-pong` → "VENDIDO 2017" (en Navbar.astro).

---

## 7 · Convenciones de código

- Componentes `.astro` en **PascalCase**
- Props tipadas con `interface Props`
- **Mobile-first** (base mobile, breakpoints `sm` `md` `lg` `xl`)
- Accesibilidad: `aria-label` en icon buttons, `aria-hidden="true"` en decoratives, skip-to-content link global, `focus-visible` outline 2px
- `prefers-reduced-motion` respetado (todas las animaciones se apagan)
- SVGs decorativos **inline** (no archivos separados)
- Todos los `<main>` tienen `id="main"` (target del skip link)
- Textos SIEMPRE en español · tono primera persona ("hago", "construyo") · no emojis en copy final

### Accesibilidad

- Skip-to-content link al inicio del body (`<a href="#main">`)
- `<meta name="robots" content="noindex">` en 404
- **Contraste validado WCAG AA:** ink/coral 6.29:1 ✓ · ink/mostaza 12.09:1 ✓ · ink/bg 14.87:1 ✓
- **NUNCA** usar `text-base-soft` (cream) sobre `bg-primary` (coral) — ratio 2.48:1 FAILS. Usar `text-ink` sobre coral.

---

## 8 · Animaciones (global.css)

Todo CSS puro. Motion library deferida.

| Clase | Función |
|---|---|
| `rise rise-{1..6}` | Fade-up staggered al cargar (delays 0.05s–0.80s) |
| `float-a` / `float-b` / `float-c` | Idle float decoratives (6.5s / 7.8s / 8.6s) |
| `float-mac` | Float central mascot hero |
| `spin-slow` | Rotación 18s (estrellas) |
| `shimmer-word` | Gradiente dorado animado sobre texto |
| `draw-line` | stroke-dashoffset animado (subrayados squiggly) |
| `marquee-track` | Scroll infinito horizontal (-25% con 4 copies) |
| `scroll-dot` | Indicador scroll |

Theme toggle anima con clase `.theme-transitioning` aplicada temporalmente (320ms).

---

## 9 · Performance actual

- `dist/` total: **5.8 MB**
- Mascot hero WebP: **~255 KB** (2× para crossfade) vs. **~1.7 MB PNG** anterior (**−85%**)
- OG image: 97KB (bajo 200KB target)
- 29 referencias `<img src>` de mascots usan `.webp` (97% browser support, PNGs en public/ como fallback opcional)
- Build time: **~2.5s**
- 11 páginas estáticas generadas

---

## 10 · SEO + metadata

- `<title>` único por página (40-60 chars ✓)
- `<meta description>` único (< 160 chars ✓)
- **Open Graph** completo: og:type, og:title, og:description, og:image, og:url, og:locale, og:site_name
- **Twitter Card:** summary_large_image (sin creator, Gabriel no tiene Twitter)
- **Canonical URL** por página vía `path` prop al Layout
- **JSON-LD schemas:**
  - `Person` (global en Layout — Gabriel)
  - `WebSite` (en home)
  - `CreativeWork` (en cada producto vía `ProductSchema.astro`)
- **Sitemap:** `@astrojs/sitemap` genera `sitemap-index.xml` + `sitemap-0.xml` con 10 URLs (excluye 404)
- **robots.txt** con `Allow: /` + `Sitemap: https://thonking.dev/sitemap-index.xml`
- **Favicons completos:** .ico multi-res · .svg vectorial · apple-touch-icon 180 · android-chrome 192/512 · manifest.webmanifest (theme_color coral, background_color cream, standalone)

---

## 11 · Comandos

```bash
npm run dev       # dev server localhost:4321
npm run build     # build estático a dist/
npm run preview   # preview del build

# one-shot scripts (regeneran assets si cambia el mascot)
node scripts/generate-assets.mjs  # OG + favicons
node scripts/convert-webp.mjs     # mascots PNG → WebP
```

---

## 12 · Lecciones clave de esta sesión

1. **Mascot evolution:** thonking-emoji genérico → gato astronauta custom de @floruwu_art. Siempre preferir asset propio sobre meme de internet.
2. **Voz de Gabriel:** directo, peruano, primera persona, honesto sobre lo que domina. **Nunca "vibecoding" / "AI-assisted" en público.**
3. **Numbers matter:** 6 años (no 7, desde 2020) · 6,221 descargas (no 5,600 ni 6.2k) · 20,000+ empleados objetivo.
4. **Stack purity:** Hero chips exactos = 6 tech (Unity, C#, Kotlin, Firebase, Astro, TypeScript). No inflar con Shaders/Python/React.
5. **Soriana politics:** nombrar en bio personal, **nunca** en product marketing card. Usar "retailer top-3 México".
6. **Nested buttons fail:** `<button>` dentro de `<button>` rompe el DOM — browsers separan elementos. Usar `<div>` con role. (Bug galería productos descubierto + arreglado).
7. **Dialog scroll-jump:** `showModal()` nativo hace scroll al dialog. Fix: `position: fixed` body con `top: -scrollY` antes de abrir, restore al cerrar.
8. **WebP >> PNG:** quality 85 = ~85% reducción visual-lossless. WebP tiene 97%+ browser support desde 2020 — safe sin `<picture>` wrapper.
9. **Dark mode via token remap:** definir `.dark { --color-*: ... }` en CSS. Todos los `bg-base`, `text-ink`, etc. auto-swap sin tocar componentes. EXCEPT colores hex hardcoded en inline styles — esos quedan fijos (OK para placeholders que son siempre dark).
10. **Contraste WCAG:** cream sobre coral FALLA (2.48:1). Usar ink sobre coral (6.29:1) en CTAs. Validar con algoritmo, no a ojo.
11. **Tailwind 4:** `@import "tailwindcss"` + `@theme {}` + `@custom-variant dark (&:where(.dark, .dark *))`. Sin tailwind.config.js.
12. **Astro 6 Content Collections:** loader + Zod schema en `src/content.config.ts`. Uso `getEntry()` en pages estáticas custom + `getCollection()` en listings.
13. **Nested `<picture>` innecesario para WebP:** sed replace simple `.png` → `.webp` cubre 97%. PNGs como fallback en disk, 0 impact runtime.
14. **Fonts en dark mode:** `::selection { color: #1a1815 }` hardcodeado — no usar var(--color-ink) porque en dark el bg selection es mostaza y el texto invertiría ilegible.

---

## 13 · Estado actual (2026-04-23)

### ✅ Completo (ship-ready)

- Tokens + layout + fonts + grain
- Navbar pill flotante + dropdown productos + theme toggle
- Hero con gato + headline 3-líneas + decoratives + marquee 4-copies
- Stats section count-up
- Products bento grid (7 cards)
- About (bio + 7-entry timeline + stack)
- Contact (email pill + socials + Estado card adaptado a dark)
- Footer con atribución @floruwu_art
- /now page con bento cards + mascot + newsletter CTA
- 7 product pages custom (hero + visual + galería + lightbox + problema + howItWorks + lecciones + CTA) 
- 404 noindex con mascot excited
- Dark mode + toggle sol/luna con persistencia
- Skip-to-content link + id="main" global
- Sitemap + robots.txt + OG image + favicon set completo + manifest
- JSON-LD (Person + WebSite + CreativeWork per producto)
- WCAG AA contrast validado (cambio cream/coral → ink/coral)

### 🔜 Próxima sesión

1. **Deploy a Vercel** — conectar repo, apuntar thonking.dev, verificar SSL
2. **Submit sitemap a Google Search Console** — indexación
3. **Test social previews** — compartir URL en WhatsApp/LinkedIn para validar OG image render
4. **Test mobile real** — iPhone/Android de Gabriel, validar responsive en físico
5. **Newsletter backend** — conectar form de /now a Resend/Buttondown/ConvertKit
6. **Primera nota escrita** — "Cómo construí GGleaner con Claude Code" (mencionada en /now)
7. **OG images per producto** (nice-to-have)
8. **Motion library** para scroll-triggered reveals (nice-to-have)

### Decisiones abiertas (post-deploy)

- ¿Blog completo o solo devlog page? — decisión para fase 2
- ¿Versión EN del sitio? — por ahora solo ES
- ¿Cursor custom? — discutido, no implementado
- ¿Newsletter provider? — Buttondown vs Resend vs ConvertKit

---

## 14 · Notas para Claude (próximas sesiones)

- **Dominio email activo:** `gabriel@thonking.dev` — ya funciona. No uses gmail en copy pública.
- **Stack claro:** respeta las listas exactas de la sección 1. 4+ iteraciones me llevó a que quedara bien. No inventes.
- **Mascot es el gato, no el emoji.** Si ves `/mascot/mascot-*` en código = correcto. Si ves `/thonking-mascot.png` = obsoleto, borrarlo.
- **Dark mode ya funciona.** Para colores hex hardcoded en inline styles, usa light mode colors por defecto (la mayoría de fondos decorativos son siempre dark intencional).
- **Antes de añadir una página nueva:** añade `<main id="main">` + pasa `path` al Layout (para canonical correcto).
- **Antes de cambiar algo visual:** corre `npx astro build` después, verifica sin errors, y prueba el dark mode toggle.
- **Content Collections:** Los body de los .md están vacíos. Las páginas custom no usan markdown body — todo contenido está hardcoded en los `.astro` por producto. El markdown solo sirve frontmatter (metadata).
- **Nunca commitees** `scripts/generate-assets.mjs` ni `convert-webp.mjs` corriendo en CI — son one-shot locales. Si cambia el mascot, correlos una vez manualmente.
- **docs/CLAUDE.md** (este archivo) es tu fuente de verdad para re-contextualización rápida.
