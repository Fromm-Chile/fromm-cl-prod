# Plan de Modernización UI — FROMM Chile

> **Alcance:** Mejoras de UI únicamente (no lógica de negocio).
> **Stack:** React 19 + TypeScript + Tailwind CSS + Framer Motion
> **Paleta actual:** `#f10503` (red), `#E4E4E4` (primaryGray), `#f7f7fd` (lightGray), `#2d2d2d` (shadowBlack), `#404040` (textGray)
> **Restricciones:** Mantener paleta de colores, estructura de rutas, lógica de negocio y diseño general.

---

## Fase 1 — Sistema base: tipografía, tokens y CSS global

**Objetivo:** Establecer la base tipográfica moderna antes de tocar componentes.

### 1.1 Tipografía moderna (Inter + opcional Geist)
- Agregar `Inter` desde Google Fonts (o self-hosted con `@font-face`) en `index.html`
- Inter reemplaza el stack de Tailwind por defecto: más legible, moderna, muy usada en B2B industrial
- Configurar en `tailwind.config.js`:
  ```js
  fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
  ```
- Opcional: `Geist Mono` para números/códigos en tablas de cotización

### 1.2 Ampliar tokens de diseño en Tailwind
- Agregar escala de colores extendida (sin cambiar los colores actuales):
  ```js
  'red-50': '#fff0f0',   // fondos sutiles
  'red-100': '#ffd6d6',  // hover states
  'surface': '#fafafa',  // alternativa a lightGray
  ```
- Agregar `borderRadius` custom: `'2xl': '1rem'`, `'3xl': '1.5rem'`
- Agregar `boxShadow` custom: `'soft': '0 2px 20px rgba(0,0,0,0.06)'`, `'card': '0 4px 24px rgba(0,0,0,0.08)'`
- Agregar `transitionTimingFunction`: `'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'`

### 1.3 CSS global (`index.css`)
- Eliminar el `text-justify` global en `<p>` (afecta legibilidad en párrafos cortos)
- Agregar `text-rendering: optimizeLegibility` y `font-feature-settings` para Inter
- Agregar clase utilitaria `.text-balance` para headings
- Agregar transición global suave para links y botones:
  ```css
  *, *::before, *::after { transition-property: color, background-color, border-color, box-shadow, opacity, transform; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
  ```
- Agregar smooth scrolling: `html { scroll-behavior: smooth; }`

### 1.4 SEO — `index.html`
- Agregar `<meta name="theme-color" content="#f10503">` para mobile browsers
- Agregar preconnect a Cloudflare R2 (dominio de imágenes):
  ```html
  <link rel="preconnect" href="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev">
  ```
- Precargar fuente Inter con `<link rel="preload">`
- Ampliar JSON-LD a tipo `LocalBusiness` (más específico que `Organization`) con campos `openingHours`, `priceRange`, `hasMap`
- Agregar `<meta name="author" content="FROMM Chile">` y `<meta name="copyright">`
- Verificar que el `canonical` sea dinámico por página (actualmente es solo para `/`)

---

## Fase 2 — Componentes globales: Navbar, Footer, WhatsApp

### 2.1 Top bar del Navbar
- Reducir altura de `h-[45px]` a un valor más compacto con mejor padding vertical
- Reemplazar íconos SVG de teléfono/mail con componentes de **Tabler Icons** (ya instalado)
- Agregar separador visual sutil entre los items de contacto
- Mejorar hover: underline offset, transición suave de color
- En mobile: este top bar está oculto — agregar la info de contacto al mobile menu de forma más elegante

### 2.2 Navbar principal (desktop)
- Mejorar el dropdown: cambiar de `hidden/block` a animación de Framer Motion (`opacity` + `translateY`) para que aparezca suavemente
- Agregar indicador visual de página activa (underline con color `red` debajo del item actual)
- Mejorar spacing entre links: consistencia `gap-8` en lugar de `lg:gap-3 xl:gap-10`
- Badge de cotización: reposicionar para que no se superponga con texto, redondear más, tamaño más compacto

### 2.3 FloatingNav (scroll)
- Reducir tamaño del logo en floating nav (`max-w-[200px]`)
- Añadir `backdrop-blur-sm` y `bg-white/95` para efecto glassmorphism sutil
- Afinar la transición de aparición (actualmente brusca)
- Sombra más refinada: reemplazar `border border-red` por `shadow-card` + `border border-red/30`

### 2.4 Mobile menu (Layout.tsx)
- Mejorar transición de apertura: actualmente `transition-all duration-1000` es demasiado lento y rígido — reducir a 300–400ms con `ease-in-out`
- Botón hamburguesa: cambiar a esquinas redondeadas (`rounded-lg`) en lugar del cuadrado actual
- Mejorar íconos de menú/cerrar: usar Tabler Icons en lugar de los SVGs custom
- Darle más breathing room (padding) a los items del menú mobile
- Añadir `aria-expanded`, `aria-controls` para accesibilidad

### 2.5 WhatsApp button
- Cambiar de imagen SVG estática a componente estilizado con Tailwind
- Agregar animación `animate-bounce` suave (solo primera vez, con `animationIterationCount: 3`)
- Mejorar sombra y borde redondeado
- Añadir tooltip "Contáctanos por WhatsApp" en desktop

### 2.6 Footer
- Agregar separación visual entre columnas más clara
- Iconos de redes sociales (Instagram, LinkedIn): actualizar a Tabler Icons con mejor tamaño y hover con escala
- Los social pills (`border rounded-full`): simplificar a íconos simples con hover de color
- Mejorar tipografía del footer: reducir weight disparidades
- Agregar `aria-label` en todos los links del footer
- Copyright: actualizar a año dinámico con `new Date().getFullYear()`

---

## Fase 3 — Componentes UI base

### 3.1 Button (`Button.tsx`)
- Mejorar border-radius: cambiar `rounded-xl` a `rounded-lg` (más consistente)
- Añadir `font-semibold` y `tracking-wide` para el texto del botón
- Mejorar transición: `transition-all duration-200` en lugar de `duration-500`
- Agregar estado `focus-visible` con outline accesible
- Variante de tamaño: agregar prop `size` (`sm | md | lg`) para uso flexible
- Añadir efecto de `active:scale-95` para feedback táctil

### 3.2 ProductCard (`ProductCard.tsx`)
- Suavizar el `hover:scale-105`: usar `hover:scale-[1.02]` (más sutil)
- Mejorar sombra base: reemplazar `border border-primaryGray` por `shadow-soft` sutil siempre visible
- Etiqueta "PRODUCTO": cambiar de text rojo extralight a un badge/pill más moderno (`bg-red/10 text-red rounded-full px-3 py-0.5 text-xs`)
- Añadir línea separadora entre imagen y contenido
- Añadir animación de entrada con Framer Motion cuando aparece en viewport (`useInView`)
- Mejorar la altura fija (`md:h-[470px]`): reemplazar por layout flexible con `min-h`

### 3.3 InfoAcordeon (`InfoAcordeon.tsx`)
- Agregar animación smooth de apertura/cierre con Framer Motion `AnimatePresence` + `motion.div` con `height: auto`
- Mejorar ícono chevron: rotar suavemente al abrir/cerrar
- Mejorar estilos del header del acordeón: `hover:bg-red/5` en lugar de cambio brusco

### 3.4 Loader (`Loader.tsx`)
- Leer el componente actual e implementar una versión más elegante (skeleton o spinner minimalista)
- Añadir fade-out suave cuando desaparece

### 3.5 CustomSelect (`CustomSelect.tsx`)
- Mejorar dropdown con animación de apertura
- Border y focus state más accesible

---

## Fase 4 — Páginas principales

### 4.1 Home (`Home.tsx`)
**Hero / Banner:**
- Video hero: añadir overlay gradiente sutil encima para mejor contraste con texto si se agrega
- Imagen mobile (`frommMob.JPG`): agregar `object-cover` con height fija y overlay para mejor composición
- La sección roja mobile con links: mejorar con íconos más modernos, mejor spacing, añadir animación de entrada

**Sección "Bienvenido":**
- Mejorar el layout con más espacio blanco (whitespace)
- El label `BIENVENIDO!` + `FROMM CHILE` + subtítulo: mejorar jerarquía visual con tamaños diferenciados
- Imagen del equipo: redondear bordes, mejor sombra

**HomeCard (Soluciones):**
- Las cards de HoverEffect: verificar que las animaciones sean fluidas y no afecten CLS
- Nombres en mayúsculas: considerar font-size ligeramente mayor

**Sección Industrias:**
- CustomSelect: hacer más prominente visualmente
- El body text: mejorar legibilidad con `text-gray-600` y `leading-relaxed`

**Sección Global:**
- Mapa SVG: asegurarse de que tenga `loading="lazy"` correcto
- Mejorar separación entre secciones con más whitespace vertical

### 4.2 Productos (`Products.tsx`)
- Leer y evaluar el componente para mejoras de grid y filtros
- Animación `stagger` al cargar las cards (aparecen una a una con Framer Motion)
- Mejorar `CategoryFilter` con mejor UX visual

### 4.3 Páginas de Mercados
- Consistencia visual entre las 9 páginas de mercado
- Verificar uso de headings jerárquicos (H1 → H2 → H3)

### 4.4 Cotización (`Cotizacion`)
- Leer `InvoiceCard.tsx` y mejorar el layout
- Mejorar estados vacíos (0 productos) con ilustración/mensaje friendly
- Formulario: mejor feedback visual de validación

### 4.5 Contacto
- Mejorar el layout del formulario
- Animaciones de entrada de los campos
- Feedback de éxito/error más estilizado

---

## Fase 5 — Animaciones y micro-interacciones

**Principios:** Solo usar Framer Motion (ya instalado), no agregar nuevas dependencias.

### 5.1 Animaciones de entrada de secciones
- Crear componente `FadeInSection` reutilizable con `useInView` + `motion.div`
- Aplicar a: secciones de Home, páginas de Mercados, páginas de Soluciones
- Configuración: `opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.5`, `once: true`

### 5.2 Stagger en grids de cards
- Al cargar la grilla de productos, las cards aparecen con delay incremental (0.05s por card)
- Máximo de 8 cards animadas para no degradar performance

### 5.3 Transiciones de página
- Agregar `AnimatePresence` al router para fade suave entre páginas
- Duración: 200ms, `opacity: 0 → 1`

### 5.4 Links y hover states
- Consistencia en todos los links: `transition-colors duration-150`
- Nav items: añadir indicador animado (underline slide in)

---

## Fase 6 — Accesibilidad

### 6.1 ARIA y semántica
- Verificar orden de headings en cada página (un solo H1, H2s para secciones)
- Agregar `aria-label` a todos los botones icon-only
- Agregar `aria-expanded` + `aria-controls` al mobile menu
- `role="navigation"` en el `<nav>` y footer nav
- Links de "ir al contenido" (skip links): agregar `<a href="#main" class="sr-only focus:not-sr-only">`

### 6.2 Focus visible
- Agregar outline visible en todos los elementos interactivos (`:focus-visible`)
- CSS: `outline: 2px solid #f10503; outline-offset: 2px;`

### 6.3 Contraste de colores
- Verificar contraste del text-textGray (`#404040`) sobre fondos claros (cumple WCAG AA)
- Verificar contraste de text blanco sobre `bg-red` (cumple WCAG AA — rojo oscuro)
- Texto `font-extralight` en algunos contextos puede ser difícil de leer: considerar `font-light` como mínimo

### 6.4 Imágenes
- Verificar que todas las imágenes decorativas tengan `alt=""` y `aria-hidden="true"`
- Imágenes de contenido: alt descriptivo en español, incluir palabras clave relevantes

---

## Fase 7 — Responsive y Mobile

### 7.1 Breakpoints y consistencia
- Auditar cada página en 375px, 768px, 1024px, 1440px
- Verificar que no haya overflow horizontal en ningún breakpoint
- Revisar fuente en mobile: Inter debe verse bien a 14-16px

### 7.2 Touch targets
- Todos los elementos interactivos: mínimo 44×44px (WCAG 2.5.5)
- Links del footer en mobile: aumentar padding

### 7.3 Imágenes responsive
- Verificar uso de `srcset` o al menos que las imágenes estén optimizadas
- El banner hero mobile: asegurar que ocupe bien el espacio sin content layout shift

---

## Fase 8 — SEO adicional

### 8.1 Meta tags por página
- Actualmente `<title>` y `<meta description>` están en `index.html` (globales) y algunos en páginas individuales
- Implementar `<title>` y `<description>` dinámicos en cada página usando el patrón ya usado en `Home.tsx`
- Prioridad: Productos, Soluciones, Cotización, Contacto, Mercados

### 8.2 JSON-LD por página
- Página de Productos: agregar `ItemList` schema
- Página de Contacto: ampliar con `ContactPage` schema
- Página Nosotros: `AboutPage` schema

### 8.3 Open Graph por página
- Actualmente solo hay OG global en `index.html`
- Agregar OG image específica y title para páginas principales

### 8.4 Mejoras técnicas
- Verificar que el sitemap generado incluya `lastmod` con fechas reales
- Verificar que `robots.txt` sea correcto (actualmente bien configurado)

---

## Resumen de prioridades

| Fase | Impacto UI | Dificultad | Prioridad |
|------|-----------|------------|-----------|
| 1 — Tipografía y tokens | Alto | Bajo | 🔴 Alta |
| 2 — Navbar y Footer | Alto | Medio | 🔴 Alta |
| 3 — Componentes base | Alto | Bajo | 🔴 Alta |
| 4.1 — Home | Alto | Medio | 🔴 Alta |
| 5 — Animaciones | Medio | Bajo | 🟡 Media |
| 6 — Accesibilidad | Medio | Medio | 🟡 Media |
| 7 — Responsive | Medio | Medio | 🟡 Media |
| 4.2-4.5 — Otras páginas | Medio | Medio | 🟡 Media |
| 8 — SEO | Bajo-Medio | Bajo | 🟢 Baja |

---

## Notas de implementación

- **No instalar nuevas dependencias** — todo lo necesario ya está (Framer Motion, Tabler Icons, React Icons, Tailwind)
- **Commits atómicos por fase** para fácil rollback
- **No modificar rutas ni lógica de datos** — solo clases, estilos y estructura JSX de presentación
- **Probar en producción simulada** (`npm run build && npm run preview`) antes de cada deploy
- **Performance budget:** verificar que Lighthouse score no baje de 80 en Performance

---

*Documento generado: Febrero 2026*
