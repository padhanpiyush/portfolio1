# Design Specification: Piyush Padhan Portfolio

A comprehensive guide to the visual design system, aesthetic philosophy, UI tokens, component specs, and interaction patterns for the **Piyush Padhan Cyberpunk Developer Portfolio**.

---

## 1. Aesthetic Vision & Design Philosophy

The design marries **high-octane Cyberpunk / Synthwave retro-futurism** with **clean, scan-friendly engineering minimalism**. Rather than generic flat or corporate UI, it immerses technical recruiters and visitors into a hacker terminal environment while maintaining crisp readability.

### Core Visual Pillars:
1. **Outrun / Synthwave Atmosphere**: Deep indigo-violet void (`#090014`), an infinite 3D perspective grid floor, and a warm blurred ambient sun horizon.
2. **Terminal & CRT FX**: Optical scanline overlays, subtle RGB chromatic edge noise, and a monospaced boot sequence.
3. **High-Voltage Contrast Accents**: Electric Cyan (`#00FFFF`) for active elements and primary signals; Hot Magenta (`#FF00FF`) for highlights, borders, and secondary interactions; Amber Orange (`#FF9900`) for metadata and warnings.
4. **Angled Geometric Micro-Interactions**: Angular parallelogram buttons (`skewX(-12deg)`), holographic card glow states, and terminal window decorations.

---

## 2. Color Palette & Design Tokens

Defined centrally via CSS custom properties on `:root`:

| Token | Hex / Value | Role & Usage |
|---|---|---|
| `--bg` | `#090014` | Core dark canvas background (deep obsidian violet) |
| `--fg` | `#E0E0E0` | High-contrast cool white/silver typography |
| `--card` | `#1a103c` | Card and modal surfaces (semi-translucent dark indigo) |
| `--magenta` | `#FF00FF` | Secondary CTA, eyebrow tags, selection highlight, contact border |
| `--cyan` | `#00FFFF` | Primary CTA, logo, active links, stat highlights, terminal text |
| `--orange` | `#FF9900` | Project tags, metadata timestamps, ambient sun gradient start |
| `--border` | `#2D1B4E` | Structural separators, table dividers, tag outlines |

### Glow & Shadow Presets:
- **Cyan Glow**: `0 0 8px rgba(0, 255, 255, 0.7)` / `0 0 24px #00FFFF`
- **Magenta Glow**: `0 0 30px rgba(255, 0, 255, 0.35)` / `0 0 50px rgba(255, 0, 255, 0.12)`
- **Project Card Elevation**: `box-shadow: 0 0 20px rgba(0, 255, 255, 0.12)`

---

## 3. Typography Hierarchy

### Google Fonts Imported:
1. **`Orbitron`** (Weights: 400, 500, 700, 900) — Sci-fi geometric sans-serif for headings, branding, numbers, and uppercase titles.
2. **`Share Tech Mono`** (Weight: 400) — Monospaced technical font for body copy, terminal commands, buttons, and code tags.

### Type Scale:
- **Brand Logo (`.logo`)**: `1.1rem`, Weight: 900, `letter-spacing: 0.15em`
- **Hero Title (`h1`)**: Fluid `clamp(2.6rem, 8vw, 6rem)`, Weight: 900, Line Height: `1.03`
- **Section Titles (`.section-title`)**: Fluid `clamp(1.8rem, 4vw, 3rem)`, Weight: 900
- **Eyebrow Prefix (`.eyebrow-line`)**: `0.75rem`, `letter-spacing: 0.2em`, Uppercase, Magenta
- **Subtitles (`.section-sub`)**: `0.95rem`, Monospace, Opacity `0.65`, Max-width `60ch`
- **Body Text (`p`)**: `0.95rem`, Line Height: `1.8`, Opacity `0.85`
- **Stat Numbers (`.stat-box .num`)**: `1.8rem`, `Orbitron`, Cyan glow
- **Buttons (`.btn`)**: `0.82rem`, Monospace, Uppercase, `letter-spacing: 0.1em`

---

## 4. Optical Layering & Visual Effects (Z-Index Architecture)

The interface utilizes a 6-layer optical compositor:

```
[Z-INDEX 50]  .scanlines       -> CRT horizontal raster lines (multiply blend mode)
[Z-INDEX 49]  .noise-edge      -> Chromatic aberration RGB gradient edges
[Z-INDEX 40]  nav              -> Sticky frosted-glass header (backdrop-filter: blur(8px))
[Z-INDEX 10]  Content Elements -> Hero, About, Skills, Projects, Education, Contact
[Z-INDEX  0]  .sun             -> Blurred radial gradient ambient sun bloom
[Z-INDEX  0]  .grid-floor      -> 3D perspective wireframe ground plane (rotateX 60deg)
```

### Visual FX Implementations:
- **3D Grid Floor**:
  - `background-image`: Orthogonal linear gradients spaced at `40px 40px`.
  - `transform`: `perspective(500px) rotateX(60deg) translateY(-100px) scale(2)`.
  - `mask-image`: Alpha gradient fading from transparent horizon to solid center to transparent base.
- **Ambient Sun**:
  - `600px × 600px` circular element positioned at top-center (`top: -200px; left: 50%`).
  - `filter: blur(100px); opacity: 0.18;`
- **CRT Scanlines**:
  - Linear gradient alternating `transparent` and `rgba(0,0,0,0.25)` every `4px`.
  - `pointer-events: none` ensures zero click interference.

---

## 5. Component Design Specifications

### 5.1 Navigation (`<nav>`)
- Fixed at top (`top: 0; left: 0; right: 0`), height approx `60px`.
- Frosted glass background: `rgba(9, 0, 20, 0.7)` with `backdrop-filter: blur(8px)`.
- Active Link Indicator: Cyan text shadow and a 2px bottom underline with neon glow (`box-shadow: 0 0 6px var(--cyan)`).
- Mobile Drawer (`<= 800px`): Animated collapsible drawer toggled via `≡` button.

### 5.2 Skewed Action Buttons (`.btn`)
- Parallelogram shape via `transform: skewX(-12deg)`.
- Internal span counter-skews (`transform: skewX(12deg)`) so label text stays upright and readable.
- **Hover state**: Unskews to `skewX(0deg)`, expands with ambient neon box-shadow, and inverts background.

### 5.3 Terminal Typewriter Banner (`#bootLine`)
- Prefix: `> ` in electric cyan.
- Dynamic character typing at `28ms` cadence.
- Animated blinking cursor: `animation: blink 1s step-end infinite`.

### 5.4 Stat Boxes (`.stat-box`)
- Subtle border: `1px solid rgba(255, 0, 255, 0.3)`.
- Top highlight bar: `2px solid var(--cyan)`.
- Translucent backdrop blur surface: `rgba(26, 16, 60, 0.8)`.

### 5.5 Project Cards (`.project-card`)
- Styled like a sci-fi terminal / IDE window.
- Header bar: Window control dots (`d1: magenta`, `d2: cyan`, `d3: orange`) paired with an authentic UNIX terminal path (`~/projects/...`).
- Outer border: `2px solid var(--cyan)`.
- Elevation on hover: `transform: translateY(-6px)`.
- Visual flag for draft states: `.placeholder-flag` in warning amber.

### 5.6 Academic Table (`.edu-table`)
- Minimalist terminal data display.
- Header cells: Uppercase cyan text, `letter-spacing: 0.1em`.
- Row hover state: Smooth magenta glow wash (`rgba(255, 0, 255, 0.05)`).

---

## 6. Responsive Breakpoints

| Breakpoint | Target Devices | Adaptations |
|---|---|---|
| **> 800px** | Desktop & Tablet Landscape | Full horizontal navbar, 2-column about grid, 3-column skills matrix, 2-column achievements grid |
| **<= 800px** | Mobile & Tablet Portrait | Collapsible hamburger menu, stacked 1-column layouts, touch-friendly button targets (min 44px height), typography scaled via CSS `clamp()` |
