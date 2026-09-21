# Guía de voz y escritura — Español

Idioma principal del sitio. Aplica a copy web, páginas de producto, /now, notas del blog, descripciones en itch.io y posts de LinkedIn.
Objetivo: que todo suene a Gabriel escribiendo, no a una plantilla generada.

## 1. Quién habla

Gabriel, en primera persona del singular. Peruano, directo, sin pose corporativa. Dice lo que hizo, con qué, y qué salió mal.

- "Hago", "construyo", "envío", "se me cayó", "lo arreglé". Nunca "nuestro equipo", "en Thonking creemos".
- Nombra cosas concretas: 3S Design, MINEDU, itch.io, MetaQuest 3, 6,221 descargas. Lo concreto es lo que suena humano.
- Admite límites. "Cancelado, pero con avances" vale más que "exitosamente entregado".
- Habla de usted a nadie. Tuteo siempre.

## 2. Registro

- Español de Perú, neutro en lo técnico. Se permiten "floro", "chamba", "jalar" cuando aportan tono, no como decoración.
- Términos técnicos en inglés se dejan en inglés y en minúscula si son comunes (build, deploy, playtest, cleaner). No se traducen a la fuerza ("despliegue" no).
- Sin emojis en copy final. Sin signos de exclamación salvo diálogo real.
- Números con coma de miles (6,221) y sin abreviar en cifras que importan. "20k+" solo en stats visuales.

## 3. Lo que delata texto generado (prohibido)

Estas son las marcas que hacen que un texto "se vea hecho por IA". Si aparece una, se reescribe.

**Estructura**
- Frase de contraste "No es X, es Y." / "No se trata de X, sino de Y."
- Tríadas automáticas: tres adjetivos, tres bullets, tres beneficios, siempre tres.
- Cierre con pregunta retórica o con "¿Listo para...?".
- Abrir con "En un mundo donde..." / "Hoy en día..." / "En la era de...".
- Párrafos que resumen el párrafo anterior. Se dice una vez.
- Listas donde cada bullet empieza con palabra en negrita seguida de dos puntos, todas del mismo largo.
- Rayas largas (—) como muleta en cada frase. Máximo una por párrafo, mejor un punto.

**Vocabulario**
- Elevar, potenciar, desbloquear, impulsar, transformar, revolucionar, redefinir, empoderar.
- Sin fisuras, robusto, escalable, innovador, disruptivo, de vanguardia, integral, holístico.
- "Experiencia inmersiva", "solución end-to-end", "llevar al siguiente nivel", "sumergirse".
- "Descubre", "explora", "sumérgete" como imperativos de marketing.
- "Apasionado por", "entusiasta de", "amante de".
- Adverbios de relleno: verdaderamente, realmente, sumamente, increíblemente.
- "Y mucho más", "entre otros", "etc." para inflar.

**Tono**
- Entusiasmo uniforme. Un texto humano tiene partes planas.
- Simetría perfecta entre secciones (todas con título + 2 líneas + 3 bullets).
- Cero fechas, cero nombres, cero cifras. Lo vago es lo artificial.

## 4. Cómo se escribe aquí

- Frases cortas mezcladas con alguna larga. Ritmo irregular a propósito.
- Un párrafo = una idea. Si hay dos, son dos párrafos.
- Verbo de acción al inicio cuando se puede: "Construí", "Publiqué", "Vendí en 2017".
- Detalle antes que adjetivo. En vez de "herramienta potente": "convierte 400 líneas en OGG en un solo run".
- Los títulos en frase normal (sentence case), nunca Title Case. Mayúsculas sostenidas solo como recurso visual del diseño.
- Cifras redondas se marcan como aproximadas con "+", no con "más de" repetido.

## 5. Ejemplos

| Suena a plantilla | Suena a Gabriel |
|---|---|
| Soy un apasionado desarrollador Unity con amplia experiencia creando experiencias inmersivas. | Llevo 6 años haciendo videojuegos con Unity. Empecé como tester en 3S Design en 2020. |
| GGleaner no es solo un limpiador, es tu aliado para un sistema optimizado. | GGleaner borra la basura que dejan Unity, Unreal, Godot y Docker. Open source, para Windows. |
| ¡Descubre cómo llevar tu capacitación al siguiente nivel! | Un videojuego de capacitación para un Retail Top 3 México. 20,000+ empleados. También en VR. |
| Explora mis proyectos y sumérgete en mi mundo creativo. | Lo que envío. |

## 6. Textos fijos del sitio

- Tagline: "Hago que la gente aprenda jugando."
- Atribución footer: "Mascot ilustrado por @floruwu_art · Hecho con cariño desde Lima"
- Contacto: "Respondo en 24-48h · Lima, Perú (GMT-5)"
- Cliente enterprise: "Retail Top 3 México" o "cliente bajo NDA". Nunca el nombre.

## 7. Checklist antes de publicar

1. ¿Hay algún término de la sección 3? Reescribir.
2. ¿Cada afirmación tiene un nombre, una fecha o una cifra cerca? Si no, ¿es necesaria?
3. ¿Lo diría Gabriel en voz alta a otro dev? Si suena a landing, cortar.
4. `grep -ri "soriana\|vibecod\|ai-assisted" src public` vacío.
5. Sin emojis, sin exclamaciones, sin Title Case.
