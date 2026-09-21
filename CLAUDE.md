# thonking.dev — base de contexto

Portfolio de Gabriel Ramírez González (Thonking). Astro 6 + Tailwind 4, estático, desplegado en https://thonking.dev.
Este archivo es el punto de entrada para cualquier sesión (humana o con Claude). Lo largo va en `docs/`.

## Lee primero

| Qué | Dónde |
|---|---|
| Voz y reglas de escritura en español (idioma del sitio) | `docs/lang/STYLE.es.md` |
| Voice and writing rules in English (READMEs, itch.io, futura versión EN) | `docs/lang/STYLE.en.md` |
| Historial de decisiones y snapshot de abril 2026 | `docs/CLAUDE.md` (interno, desactualizado en partes) |

## Quién es Gabriel (para no inventar)

- 28 años, Lima, Perú. Unity + C# desde 2020 (6 años). Gamificación enterprise, VR MetaQuest 3.
- Marca personal: **thonking** (minúscula en copy, "Thonking" solo al inicio de frase o como nombre propio).
- Tagline: *Hago que la gente aprenda jugando.*
- Email público: gabriel@thonking.dev. Sin Twitter/X.
- Cliente enterprise se nombra **"Retail Top 3 México"** o **"cliente bajo NDA"**. Nunca el nombre real.
- Stack público exacto: Unity · C# · Kotlin · Firebase · Astro · TypeScript (hero) y Game Design · VR · MetaQuest 3 · Android (about). Nada más.
- Prohibido en público: Shaders, Blender, Python, React, "vibecoding", "AI-assisted", "hecho con IA".

## Mascot

Gato astronauta chibi de **@floruwu_art** (derechos comerciales de Gabriel). Es lo único intocable del diseño.
Archivos en `public/mascot/` (idle / happy / excited × head-only / hero). El emoji thonking amarillo está obsoleto.
Atribución obligatoria en footer: *Mascot ilustrado por @floruwu_art*.

## Reglas duras de código

- Tailwind 4 con `@theme` en `src/styles/global.css`. No existe `tailwind.config.js`.
- **`text-base` es COLOR, no tamaño.** El token `--color-base` lo captura. Para 16px usa `text-[1rem]`.
- Nunca texto crema (`text-base-soft`) sobre coral (`bg-primary`): 2.48:1, falla WCAG. Sobre coral va `text-[#1a1815]` (hex fijo para que también sirva en dark mode).
- Cada página: `<main id="main">` y prop `path` al Layout (canonical).
- Antes de commitear algo visual: `npx astro build` sin errores + probar dark mode.
- Fuentes actuales: Geist, JetBrains Mono, Pixelify Sans. No Inter, Roboto, Space Grotesk.
- `grep -ri soriana src public` debe devolver vacío siempre.

## Comandos

```bash
npm run dev       # localhost:4321
npm run build     # dist/
npm run preview
```

## Estado (septiembre 2026)

- Sitio en producción. Se está preparando un rediseño completo (solo el gato se queda).
- Pendientes de negocio: newsletter backend en /now, primera nota del blog, OG por producto.
