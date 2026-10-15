# LATENTE — Prompt maestro de rebranding y rediseño web

Este documento tiene dos partes:

1. **Cómo lanzar Claude Code desde tu terminal** (una sola vez).
2. **El prompt** que le pegas a Claude para que audite la marca actual, investigue las
   tendencias 2026 y los referentes, y diseñe una marca y una web mucho mejores.

---

## Parte 1 · Lanzar Claude desde tu terminal

Necesitas: una suscripción Claude Pro o Max (recomendado) o una cuenta de Claude
Console, y una terminal abierta (en Mac: aplicación **Terminal**).

### Instalar (una sola vez)

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Alternativa en Mac con Homebrew: `brew install --cask claude-code`.
Alternativa en Windows: `winget install Anthropic.ClaudeCode`.

El instalador no muestra progreso; cuando termine, **abre una terminal nueva** y
comprueba:
```bash
claude --version
```
Debe imprimir un número de versión seguido de `(Claude Code)`. Si dice que
`claude` no se encuentra, cierra y vuelve a abrir la terminal.

### Abrir el proyecto y arrancar

```bash
git clone https://github.com/AnamariaVLR/LATENTE.git   # solo la primera vez
cd LATENTE
git checkout claude/eager-brown-CmDby                    # la rama con la web actual
claude
```

La primera vez te pide iniciar sesión: sigue el enlace en el navegador. Después
queda guardado. Ya dentro de Claude, pega el prompt de la Parte 2 completo.

Comandos útiles dentro de la sesión: `/help` (ayuda), `/clear` (nueva
conversación), `/exit` (salir), `claude -c` desde la terminal para continuar la
última conversación. `Shift+Tab` cambia el modo de permisos (para que no te
pregunte en cada archivo que edita).

---

## Parte 2 · El prompt

Copia desde la línea siguiente hasta el final del documento y pégalo en Claude.

---

Actúa como un equipo de dirección creativa de primer nivel: director/a de marca
con experiencia en casas de lujo y hospitality, diseñador/a gráfico/a senior,
estratega de marca, especialista en naming y experto/a en café de especialidad
(Q-grader). Trabajas para **LATENTE**, una casa de café de especialidad
colombiano que diseña programas de café a medida para hospitality de alto nivel.

Tu misión tiene dos capas, en este orden: **(1) evaluar con honestidad la marca
y la web actuales, (2) diseñar una marca y una web claramente mejores**, y
construir la web en este repositorio. No vas a inventar una marca desde cero
ignorando lo que existe: vas a decidir, con argumentos, qué se conserva, qué se
afina y qué se reemplaza.

### 0. Antes de nada: lee lo que existe

- Lee el `README.md` y recorre `src/` (componentes, `src/i18n/`, `src/styles/tokens.css`,
  `src/content/insights/`). La web actual está en Astro, es estática, trilingüe
  (EN/ES/AR con RTL), y se despliega gratis en GitHub Pages
  (`https://anamariavlr.github.io/LATENTE/`) y opcionalmente en Netlify.
- Entiende lo que ya se decidió y por qué: tipografía display Bodoni Moda + cuerpo
  EB Garamond, paleta (verde bosque `#1E3A2C`, marfil `#F4EFE4`, tinta, piedra,
  latón `#A98B4E` como acento mínimo), los tres cafés de la casa (No. 01 The High
  Bloom · No. 02 The Cacao Ground · No. 03 The Ferment Light), el programa en tres
  movimientos, la sección mensual "Field Notes" con datos de cultivo, el formulario
  de consulta B2B (que es el "checkout" del negocio) y la restricción de que todo
  funcione con herramientas gratuitas.
- Resume en diez líneas qué comunica hoy la marca y qué no, ANTES de proponer nada.

### 1. Entiende el producto a fondo

Antes de diseñar, demuestra que entiendes el café. Escribe un documento breve
`docs/01-producto.md` que cubra, con datos verificables y fuentes:

- Qué hace distinto al café colombiano de especialidad: altitud (1.800–2.100 m),
  regiones (Huila, Nariño, Cauca, Antioquia, Tolima, Sierra Nevada), variedades
  (Caturra, Castillo, Colombia, Geisha, Pink Bourbon, Tabi…), microclimas, dos
  cosechas, suelos volcánicos, maduración lenta.
- La cadena de precisión: grados Brix en recolección, fermentación controlada
  (horas, temperatura, pH), secado (humedad 10,5–11,5 %, actividad de agua ≤ 0,60),
  tueste, puntaje SCA (≥ 86 para los cafés de la casa). Explica por qué cada
  variable importa en taza.
- Qué significa "curaduría" en café y por qué es el argumento de LATENTE frente
  a un tostador cualquiera.
- El contexto comercial: por qué un hotel o restaurante de lujo necesita un
  "programa de café" y no solo un proveedor (consistencia, formación de barista,
  storytelling en sala, identidad de la taza, margen).

### 2. Investiga tendencias 2026 y referentes (con criterio, no con listas)

Investiga y escribe `docs/02-tendencias-y-referentes.md`. Para cada punto,
separa lo que es tendencia pasajera de lo que es un cambio de fondo, y di si
aplica o no a LATENTE y por qué.

**Tendencias globales 2026 que debes evaluar** (parte de estas señales ya
identificadas; verifica y amplía):
- La tipografía como protagonista absoluta: titulares a escala de viewport, fuentes
  variables que se mueven con el scroll, logotipos cinéticos.
- "Sistemas de identidad" en lugar de un logo aislado: marcas modulares que viven
  en movimiento, en packaging, en sala y en pantalla.
- Reacción contra el minimalismo "seguro": texturas, bordes imperfectos, lo
  anti-pulido… y, a la vez, el lujo que responde con contención y precisión. Decide
  dónde se sitúa LATENTE en esa tensión (pista: contención, pero con carácter).
- Milán 2026: el foco pasa del objeto a su génesis. Materia prima a la vista, el
  gesto artesanal, el proceso visible, incluso el error. La rareza ya no se
  entiende como ostentación. Esto encaja de forma natural con "Field Notes" y con
  la curaduría: explóralo.
- Tipografía "Italiano": serifas expresivas inspiradas en la publicidad y el
  packaging italiano de época, que están pasando de bebida y alimentación al lujo.
- Japón: neo-minimalismo japonés (espacio, geometría contenida, paleta sobria,
  wabi-sabi), tipografía "madurez refinada", packaging pensado para desmontarse y
  reutilizarse. Estudios a mirar: Garden Eight, SHIFTBRAIN, Dentsu Lab Tokyo.
- Cataluña: color mediterráneo e ilustración con carácter (Hey Studio, nº 4 en la
  lista de estudios más admirados de 2026; Mucho; Vasava; PAR y sus sistemas
  gráficos modulares para La Mercè y Pride 2026). Pregúntate qué de ese
  optimismo cromático puede dar calor a una marca que hoy es toda verde y marfil.
- Web 2026 para lujo: profundidad y capas en vez de planos, scroll que cuenta una
  historia, serifas hermosas sobre colores profundos, motion con restricción.

**Referentes de marca en café que debes analizar** (branding Y marketing):
- **Intelligentsia (Chicago/EE. UU.)**: la referencia que nos pide el cliente.
  Analiza el rediseño de Pearlfisher (lanzado en 2020): el ala y el ojo del
  logo, la estrella, el rojo de firma, la separación visual entre single origins
  (con la etiqueta de años de relación con el productor y notas de cata) y los
  blends de temporada con ilustraciones emotivas. Analiza también su marketing:
  el relato de "direct trade", cómo venden la relación con el productor como
  lujo, cómo nombran los cafés, su tono de voz, su web, su programa para
  negocios (wholesale/hospitality). Di qué haríamos igual, qué haríamos mejor y
  qué NO copiaríamos.
- **EE. UU.**: George Howell (su sistema de "paletas de sabor" por color, que
  permite elegir sin paladar entrenado), Onyx Coffee Lab (packaging y web como
  objeto de diseño), Sey (Nueva York, austeridad extrema), Counter Culture, Blue
  Bottle (cómo el minimalismo escaló a lujo accesible y qué perdió al hacerlo).
- **Europa nórdica**: Tim Wendelboe y April (Oslo), La Cabra (Aarhus), Koppi.
  Qué enseñan sobre contención y autoridad.
- **Japón**: % Arabica (Kioto) y su marca de una sola letra, Kurasu, Koffee Mameya
  (Tokio, el café como "boutique de curaduría"), Glitch, Fuglen.
- **Barcelona**: Nomad, Three Marks, SlowMov. **Milán/Italia**: Orsonero, Cafezal,
  Ditta Artigianale (Florencia) y el peso de illy y Lavazza como lenguaje visual
  heredado del espresso.
- **Lujo y hospitality (fuera del café)** que hablan a nuestro público: Aman, Six
  Senses, Rosewood, Aesop, Le Labo, Diptyque, Santa Maria Novella. Qué hacen con la
  tipografía, el silencio, la etiqueta, el "programa" y el ritual.

Para cada referente: dos frases de qué hace bien, una de qué le falta, y una
imagen mental de cómo se vería LATENTE si tomara esa lección.

### 3. Auditoría honesta de la marca y la web actuales

Escribe `docs/03-auditoria.md`. Sé crítico/a de verdad; el cliente ya nos ha dicho
que la web "es aburrida" y necesita ser más interesante, atractiva y sofisticada.
Evalúa, con ejemplos concretos de pantallas y secciones:

- Diferenciación: ¿se parece a cualquier marca "artesanal premium"? ¿Qué es
  inconfundiblemente LATENTE?
- Narrativa: ¿la web cuenta una historia o enumera secciones? ¿Dónde está la
  tensión, la sorpresa, el momento memorable?
- Ritmo y densidad: ¿hay demasiado aire sin contenido? ¿Dónde falta materia (la
  finca, las manos, la textura del grano, la taza, el dato)?
- Imagen: cinco fotos de stock-look no construyen una marca. ¿Qué dirección de
  arte fotográfica y de ilustración/gráfica necesita?
- Tipografía: Bodoni Moda fue un paso hacia el lujo. ¿Es la decisión correcta, o
  hay una voz más propia (quizá una serif expresiva "italiana", o una pareja
  inesperada serif + grotesk, o tipografía a medida para el wordmark)?
- Color: ¿el verde + marfil + latón es sofisticado o es predecible? ¿Qué acento
  inesperado (un rojo café-cereza, un azul de altura, un rosa de flor de café)
  le daría vida sin perder elegancia?
- Nombre y wordmark: ver sección 5.
- Conversión B2B: ¿un director de F&B de un hotel entiende en 10 segundos qué
  compra y por qué? ¿El formulario inspira confianza?
- Técnica: rendimiento, accesibilidad AA, i18n, RTL; qué conservar sí o sí.

Termina con una tabla "Conservar / Afinar / Reemplazar".

### 4. Estrategia de marca

Escribe `docs/04-estrategia.md`:

- **Público**: consumidores de café de especialidad en las grandes capitales donde
  más se consume (Nueva York, Londres, Tokio, Seúl, Melbourne, Copenhague,
  Berlín, Milán, Barcelona, Dubái, Ciudad de México…), y en paralelo la salida
  **B2B** a hoteles, restaurantes y clubes de lujo. Define dos o tres retratos de
  persona (el director de F&B, el propietario de un boutique hotel, el consumidor
  "connoisseur" de ciudad) y qué necesita cada uno de la marca.
- **Posicionamiento** en una frase: qué es LATENTE, para quién, frente a qué
  alternativa y por qué creerlo. Debe comunicar sofisticación, elegancia y
  curaduría, y ser "cool" sin perder seriedad.
- **Territorio de marca**: 3–4 ideas fuerza (por ejemplo: "lo latente" como
  energía contenida que el ritual revela; Colombia como altura y precisión, no
  como folclore; el café como identidad de un lugar; la curaduría como lujo).
- **Arquitectura**: LATENTE como casa; los cafés de la casa como ediciones; el
  programa a medida; "Field Notes" como voz experta. Cómo se nombran y jerarquizan.
- **Tono de voz** con ejemplos: tres titulares, un párrafo de producto, un mensaje
  B2B, en EN y ES.
- **Qué significa "fácil salida B2B"** en términos de diseño: que la misma marca
  funcione en una carta de hotel, en una taza, en un dossier PDF, en una tienda
  online futura y en la web, sin cambiar de piel.

### 5. Naming: evaluación y proceso completo

Escribe `docs/05-naming.md`. El nombre actual es **LATENTE**. No des por hecho
que hay que cambiarlo ni que hay que conservarlo:

1. Evalúa LATENTE con criterios explícitos (significado en ES/EN/IT/FR/JA, sonoridad,
   memorabilidad, distintividad en la categoría, registrabilidad, disponibilidad
   de dominio — ten en cuenta que `latente.com` está en venta por un revendedor —
   y de redes, pronunciación global, riesgo de asociaciones negativas).
2. Ejecuta igualmente el proceso completo de naming como ejercicio de contraste:
   territorios semánticos (altura, bruma, palma de cera, latencia/energía,
   ritual, curaduría, cartografía colombiana, luz), 30–40 candidatos, criba a 8,
   fichas de los 3 finalistas con racional, comprobaciones básicas de dominio y
   marca (indica qué debe verificar un abogado de marcas), y una recomendación.
3. Si recomiendas conservar LATENTE, propón el **sistema de nombres** alrededor
   (ediciones, programa, dossier, notas de campo) y, si aplica, un descriptor
   ("LATENTE — Casa de Café", "Signature Coffee Program", etc.).

### 6. Identidad visual

Escribe `docs/06-identidad.md` y crea los activos en `brand/`:

- **Wordmark y símbolo**: la marca actual coloca una palma de cera en la "T".
  Diseña 3 direcciones de wordmark (en SVG, con construcción y versiones
  horizontal/apilada/monograma/favicon) y recomienda una. Considera un
  wordmark a medida en vez de tipografía de catálogo. Explora un sistema
  cinético (cómo se anima en la web) sin que el logo dependa de la animación.
- **Tipografía**: propón la pareja definitiva (display + texto, y si hace falta
  una mono o una grotesk para datos y etiquetas). Justifica frente a Bodoni Moda.
  Solo fuentes de licencia abierta o indica el coste si es de pago. Mantén
  pequeñas versalitas reales, cifras tabulares y soporte árabe.
- **Color**: paleta principal y un acento "de temporada" o "de edición". Verifica
  contraste AA en todas las combinaciones de texto.
- **Fotografía y dirección de arte**: brief fotográfico (localizaciones en
  Colombia, luz, encuadres, tratamiento de color, qué NO fotografiar) e ideas de
  ilustración o gráfica científica (mapas de altitud, curvas de secado, ruedas
  de sabor) que conviertan los datos en belleza, al estilo George Howell pero con
  nuestra voz.
- **Packaging y materiales B2B**: bolsa, etiqueta de edición, carta de café para
  el hotel, tarjeta de mesa, dossier PDF. Bocetos descritos o SVG simples.
- **Motion**: principios (lento, contenido, "la revelación de lo latente") y 3
  ejemplos concretos para la web.

### 7. Rediseño de la web (y construirla)

Primero `docs/07-web.md` con la estructura y el guion narrativo; después,
**implementa** en una rama nueva `rebrand/2026`, conservando la arquitectura
técnica que funciona (Astro estático, i18n EN/ES/AR con RTL, formulario de
consulta B2B con Netlify Forms / formsubmit, Field Notes mensuales, despliegue
gratuito en GitHub Pages).

La nueva web debe:
- Abrir con un momento memorable, no con "foto + título". Explora: tipografía a
  escala de viewport que se revela con el scroll, una secuencia que lleve de la
  bruma de la palma de cera a la precisión del dato, un "índice" editorial, un
  objeto tridimensional contenido (grano, taza) solo si aporta.
- Contar una historia en un solo scroll: territorio → precisión → las tres
  ediciones → el programa a medida → hospitality → Field Notes → conversación.
- Dar materia y textura: datos reales, mapas, curvas, manos, grano, taza,
  interiores, con una dirección de arte coherente (indica qué fotos faltan y usa
  placeholders claros).
- Mantener el embudo B2B como columna vertebral: "Request a Private
  Conversation" accesible desde todas las secciones, formulario que cualifica
  (tipo de propiedad, escala, plazo), dossier bajo petición.
- Cumplir: rendimiento alto, accesibilidad AA, reduced-motion, 320 px a 4K,
  SEO/hreflang, todo gratuito.
- Incluir capturas o un vídeo corto del resultado si tu entorno lo permite; si
  no, describe cada pantalla.

### 8. Marketing y lanzamiento

Escribe `docs/08-marketing.md`: cómo haría marketing una marca así en 2026 sin
gritar. Contenido editorial (Field Notes como activo), Instagram/Pinterest con
dirección de arte, LinkedIn para B2B (director de F&B), eventos de cata en
hoteles, colaboraciones con estudios de diseño o arquitectos, prensa
especializada (Sprudge, Standart, Drift), ferias (World of Coffee, HostMilano).
Un calendario de 90 días y los tres activos que hay que producir primero.

### Forma de trabajar

- Trabaja por fases, en este orden: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. **Al
  terminar cada fase, para y muéstrame un resumen de una página con tus
  decisiones y las preguntas que necesitas que responda yo** antes de seguir.
  Prefiero decidir contigo que recibir un paquete cerrado.
- Toda afirmación sobre café, tendencias o referentes debe llevar fuente. Si no
  puedes verificar algo, dilo.
- Cuando propongas, muestra alternativas (A/B/C) con una recomendación clara y
  sus razones; no me des veinte opciones.
- Escribe los documentos en español; la web y los activos en EN/ES/AR como hasta
  ahora (el árabe puede quedar como borrador marcado para traducción
  profesional).
- Presupuesto cero: fuentes y herramientas de licencia abierta, hosting gratuito.
  Si algo de pago mejora mucho el resultado (una fuente, fotografía con licencia),
  propónlo aparte con su coste.
- Haz commits pequeños con mensajes claros en la rama `rebrand/2026`. No borres
  la rama actual.

Empieza por la fase 0: lee el repositorio, dime en diez líneas qué comunica hoy
LATENTE y qué no, y enséñame tu plan de fases con tiempos estimados.
