# Brief de rediseño — thonking.dev

Para quien diseñe (Claude Design o humano). Este documento define qué se rediseña, qué es intocable, con qué restricciones y qué se espera como entrega. El contexto general está en `CLAUDE.md` (raíz) y la voz del copy en `docs/lang/STYLE.es.md`.

## 1. El problema

El sitio actual funciona, pero se ve "hecho por IA": tiene todos los tics de landing generada. El objetivo es un portfolio que parezca diseñado por una persona con criterio, para un Unity developer peruano que vende gamificación enterprise y publica herramientas indie.

Público, en este orden: (1) empresas que compran gamificación o training (retail, RRHH), (2) estudios y devs que buscan un Unity dev, (3) comunidad gamedev hispanohablante que baja sus herramientas.

## 2. Qué se queda (intocable)

- **El gato astronauta** de @floruwu_art. Es la marca. Archivos en `public/mascot/`: `mascot-hero-{idle,happy,excited}.webp` (cuerpo con manos, 1200×1200) y `mascot-{idle,happy,excited}.webp` (solo cabeza). Hay PNG de respaldo de cada uno.
- **Atribución en footer:** "Mascot ilustrado por @floruwu_art · Hecho con cariño desde Lima".
- **El copy y los hechos**: tagline "Hago que la gente aprenda jugando.", cifras (6 años, 6,221 descargas, 20,000+ empleados, 7 productos), nombres de productos y sus estados. El copy se puede reescribir siguiendo `docs/lang/STYLE.es.md`, pero no se inventan datos.
- **Idioma**: español. Versión EN es fase futura.

Todo lo demás está abierto: paleta, tipografía, layout, componentes, animaciones, estructura de navegación.

## 3. Qué se va (los tics a eliminar)

Lista de lo que hoy hace que el sitio parezca generado. Cualquiera de estos que sobreviva es un fallo del rediseño.

- Tipografía gigante outlined de fondo en cada sección (THONKING STUDIO, SELECTED WORK, EL HUMANO).
- Sparkles, estrellas giratorias y badges "+100 XP" flotando alrededor del hero.
- Marquee infinito con separadores ★ ● ♥.
- Bento grid con cards redondeadas (rounded-2xl) + sombra suave para todo.
- Stats con count-up animado y sufijo en color de acento.
- Subrayados SVG "dibujados a mano" bajo palabras clave.
- Pills redondeadas para todo: navbar, chips de stack, status, CTAs.
- Eyebrows "§ 02 · Números que importan" en mono con puntito de color.
- Ruido/grain sobre el fondo, blur de backdrop, pings animados.
- Sombras offset tipo sticker (`4px 4px 0 0`) en cards.
- Movimiento idle constante (float) en decorativos.
- Cuatro fuentes compitiendo (Geist, JetBrains Mono, Pixelify Sans en tres roles).

Regla general: si un elemento es decorativo y no comunica un hecho sobre Gabriel o su trabajo, se elimina.

### Checklist visual anti-IA (obligatorio)

Lista de tics que delatan una web generada. Se marca cuáles comete el sitio actual. El rediseño no puede tener NINGUNO.

| # | Tic | ¿Hoy? |
|---|---|---|
| 1 | Texto con degradado | sí (shimmer dorado) |
| 2 | Emojis en títulos | no |
| 3 | Inter (o Roboto, Arial) en todo | no |
| 4 | Bordes de colores en cards | parcial (border-ink/10) |
| 5 | Glassmorphism (blur, transparencias) | sí (navbar y pills con backdrop-blur) |
| 6 | Poco contraste | sí (crema sobre coral, ya corregido) |
| 7 | Tres iconos en fila con texto debajo | no |
| 8 | Badge/pill encima del titular | sí ("Lima, Perú" con puntito ping) |
| 9 | Lucide icons por defecto | no (SVG inline, pero genéricos) |
| 10 | Componentes shadcn tal cual | no |
| 11 | Fade-in al hacer scroll en todo | sí (clases rise-1…6) |
| 12 | Luz que sigue el cursor | no |
| 13 | Botones que solo hacen fade en hover | parcial |
| 14 | Espaciado inconsistente entre secciones | sí (py-20 / py-24 / py-32 mezclados) |
| 15 | Guiones largos (—) en el copy | sí (hero, bio, notas) |
| 16 | Copy genérico | parcial (ver `docs/lang/STYLE.es.md`) |
| 17 | Serif en cursiva como recurso "elegante" | no |
| 18 | Space Grotesk + Instrument Serif | no |
| 19 | Bento grid con cards redondeadas y sombra suave | sí |
| 20 | Marquee, sparkles y decorativos flotantes | sí |

Nota sobre las direcciones exploradas: la dirección A (editorial) usa Instrument Serif en cursiva y cae en los puntos 17 y 18. Si se elige esa línea, cambiar la display a una serif no cursiva con carácter (por ejemplo una transicional o una egipcia) o a una grotesk pesada.

## 4. Dirección

Elegir UNA y comprometerse. Tres referencias ya exploradas (hero en Claude Design, opcional): editorial con índice tipo revista; retro arcade con HUD; brutalista de celdas con bordes duros. Cualquier otra dirección es válida si cumple la sección 3 y convive con el gato (colores del gato: casco mostaza/naranja, cuerpo negro, ojos amarillos, campana dorada).

Criterios de decisión:
- El trabajo real (capturas y videos de los juegos) debe pesar más que los adornos.
- Debe funcionar en enterprise: un gerente de RRHH tiene que sentir que puede contratar a esta persona.
- 1 a 2 tipografías, no 4. Nada de Inter, Roboto, Arial, Space Grotesk.
- Paleta reducida: un fondo, un color de texto, 1 o 2 acentos. Los acentos deben salir del gato o convivir con él.
- Dark mode: opcional. Si se incluye, el gato tiene cuerpo negro y necesita contraste con el fondo oscuro.

## 5. Inventario de contenido (lo que hay que diseñar)

### Páginas (11)

| Ruta | Contenido |
|---|---|
| `/` | Hero · stats · trabajo (7 productos) · sobre (bio + timeline 7 hitos + stack) · contacto |
| `/now` | Fecha de actualización · 5 bloques: Construyendo, Escribiendo, Jugando, Leyendo, Aprendiendo · CTA newsletter |
| `/productos` | Listado de los 7 productos |
| `/productos/<slug>` ×7 | Breadcrumb · hero con título y estado · visual 16:9 (video o captura) · galería 4 mockups con lightbox · "el problema" · cómo funciona (lista 01–05) · lecciones · CTA · navegación anterior/siguiente |
| `/404` | Mensaje + gato excited |

### Productos (fuente: `src/content/products/*.md`)

| Producto | Estado | Media disponible |
|---|---|---|
| GDD Template | Live · 6,221 descargas | ninguna (es un PDF; hoy usa mockup ilustrado) |
| ¿Te la creíste? | Live · Elecciones 2026 | `public/videos/te-la-creiste-clip.mp4` (vertical, móvil) |
| GGleaner | En desarrollo | `public/screenshots/ggleaner.png` (app Windows, dark) |
| Entrenamiento Enterprise | Bajo NDA | ninguna, y no puede haberla (NDA) |
| ElevenLabs Batch | Live · v1.0 | `public/videos/elevenlabs-batch-clip.mp4` (web, horizontal) |
| Solvi | Beta privada | `public/screenshots/solvi-home.png` + `public/videos/solvi-clip.mp4` (móvil) |
| Revert Pong | Comercial · vendido 2017 | `public/videos/revert-pong-clip.mp4` (pixel art, horizontal) |

Estados posibles: `live`, `wip`, `beta`, `locked`, `commercial`. Necesitan un tratamiento visual distinguible pero no un semáforo de tres colores.

### Timeline (sobre)

2020 Tester en 3S Design (MINEDU) · 2021 Freelance Unity + preventa 3D/AR · 2021 GDD Template en itch.io · 2024 Gamificación enterprise (Retail Top 3 México, NDA) · 2025 Herramientas internas · 2025 Proyecto VR enterprise (cancelado, con avances) · 2026 thonking.dev + GGleaner + apps indie.

### Stack (chips o lista, textos exactos)

Hero: Unity · C# · Kotlin · Firebase · Astro · TypeScript. About: Unity · C# · Game Design · VR · MetaQuest 3 · Kotlin · Firebase · Android, y "también construyo con" Astro · Tailwind · TypeScript · HTML/CSS.

### Socials

GitHub, itch.io, LinkedIn. Email gabriel@thonking.dev. Sin Twitter/X.

## 6. Restricciones técnicas (lo que el diseño tiene que respetar)

- **Stack:** Astro 6 estático + Tailwind 4. Los tokens viven en `src/styles/global.css` dentro de `@theme {}`. No hay `tailwind.config.js`. Los componentes son `.astro` en `src/components/`.
- **Sin JavaScript pesado.** Nada de librerías de animación, ni React. Interacción en vanilla JS mínimo (theme toggle, lightbox).
- **Mobile-first.** Breakpoints: base <640, `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Diseñar 390px y 1280px como mínimo; 768 si el layout cambia mucho.
- **Accesibilidad:** contraste 4.5:1 en texto (3:1 desde 24px). Botones e inputs reales. `prefers-reduced-motion` apaga toda animación. Skip link y `<main id="main">` se mantienen.
- **Performance:** el sitio pesa 5.8 MB total, la mayoría videos. No añadir fuentes pesadas (máx 2 familias, pesos justos). Imágenes nuevas en WebP.
- **Nombrar tokens** para que se puedan mapear a `@theme`: `base`, `ink`, `muted`, `primary`, `secondary` o los que se propongan, con hex para light (y dark si aplica).
- **Trampa conocida:** en Tailwind 4 `text-base` es un color si existe el token `base`. No es problema de diseño, pero explica por qué el token de fondo se llama así hoy y por qué podría renombrarse.

## 7. Entrega esperada

1. **Tokens:** paleta con hex, tipografías con pesos y escala de tamaños (mobile y desktop), espaciado, radios (o su ausencia), bordes.
2. **Home** completa a 390 y 1280.
3. **Una página de producto** completa a 390 y 1280 (sirve de plantilla para las 7). Debe resolver: video vertical (móvil), video horizontal, captura estática, y el caso sin media (Enterprise NDA, GDD).
4. **/now** a 1280 (mobile se deriva).
5. **404** y estados: navbar en scroll, hover de links, estado `locked`.
6. **Nota de decisiones:** qué tipografías, por qué esa paleta, qué pasa con dark mode.

Con eso, la implementación en Astro se hace sin volver a preguntar.

## 8. Lo que no hay que hacer

- No inventar productos, cifras, clientes ni testimonios. No hay testimonios.
- No escribir "Soriana" en ningún lado. El cliente es "Retail Top 3 México" o "cliente bajo NDA".
- No usar el emoji thonking amarillo ni ninguna cara pensante: es el placeholder viejo.
- No mencionar IA, vibecoding ni asistentes en el copy del sitio.
- No agregar secciones nuevas (blog, testimonios, pricing) sin que se pidan.
