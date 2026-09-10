# Development Rules & Coding Guidelines

This document establishes the architectural rules, coding standards, and design invariants for the **Piyush Padhan Portfolio** codebase.

---

## 1. Architectural Principles

1. **Zero-Dependency Core**:
   - The application must remain a standalone, single-file or lightweight static build using vanilla HTML5, CSS3, and standard ES6+ JavaScript.
   - Do NOT introduce heavy runtime libraries or frameworks (e.g., React, Vue, jQuery, Bootstrap) unless explicitly mandated.
2. **Portability & Zero-Build Capability**:
   - The portfolio must be immediately runnable by opening `index.html` directly in any modern browser (`file:///` protocol) or serving via any static web server (`python -m http.server`, GitHub Pages, Vercel).
3. **Data-Driven Dynamic Rendering**:
   - All repeating content (Skills, Projects, Achievements) must live inside designated JavaScript data arrays (`skills`, `projects`, `achievements`) rather than hardcoded DOM markup. This ensures instant updates without HTML restructuring.

---

## 2. CSS & Styling Standards

1. **Strict Design Token Usage**:
   - All colors must reference CSS custom properties defined on `:root`:
     - `--bg`: Canvas background
     - `--fg`: Text color
     - `--card`: Card backgrounds
     - `--cyan`: Primary interactive accents
     - `--magenta`: Secondary highlights
     - `--orange`: Warnings and metadata
     - `--border`: Structural edges
   - **Never hardcode raw hex values** inside component styles when a theme token exists.
2. **Z-Index Layer Hierarchy**:
   - Background layers (`.grid-floor`, `.sun`) -> `z-index: 0`
   - Content containers (`<section>`, `<header>`, `<footer>`) -> `z-index: 10`
   - Sticky Navigation (`<nav>`) -> `z-index: 40`
   - Noise overlay (`.noise-edge`) -> `z-index: 49`
   - CRT Scanlines (`.scanlines`) -> `z-index: 50`
   - **Rule**: All visual overlay layers (`.scanlines`, `.noise-edge`, `.grid-floor`, `.sun`) MUST have `pointer-events: none` to prevent blocking user clicks.
3. **Fluid Typography & Units**:
   - Use `clamp()` for headings and titles to ensure seamless scaling across mobile and 4K displays without media query bloat.
   - Standardize spacing using `rem` and percentage/viewport units (`vw`) for container gutters.
4. **No Horizontal Scroll**:
   - Keep `overflow-x: hidden` on `body` and enforce `box-sizing: border-box` globally on all elements.

---

## 3. JavaScript & Performance Rules

1. **Lightweight Execution**:
   - Do NOT run heavy synchronous loops or unthrottled scroll listeners.
   - Use `IntersectionObserver` for scroll-triggered events (such as the Scrollspy) rather than window scroll listeners.
2. **Animation Discipline**:
   - CSS transitions must only target hardware-accelerated properties (`transform`, `opacity`, `filter`, `box-shadow`).
   - Avoid animating layout-triggering properties (`width`, `height`, `margin`, `top`, `left`).
3. **Typing Effect Memory Safety**:
   - Ensure the terminal typing animation (`typeBoot()`) stops cleanly once the text string completes.
4. **Data Sanitization**:
   - When injecting template literals into `.innerHTML`, ensure content does not contain unescaped user inputs.

---

## 4. Accessibility (A11y) & UX Conventions

1. **Visible Focus Rings**:
   - Keyboard navigation must always remain fully supported. Keep the custom `:focus-visible` rule:
     ```css
     a:focus-visible, button:focus-visible {
       outline: 2px solid var(--cyan);
       outline-offset: 3px;
     }
     ```
2. **Semantic Structure**:
   - Use proper HTML5 semantic landmarks: `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`.
   - Maintain a single `<h1>` tag on the page for SEO and screen reader hierarchy.
3. **External Link Safety**:
   - All links opening in a new tab (`target="_blank"`) MUST include `rel="noopener"`.
4. **Touch Target Sizing**:
   - Buttons and mobile navigation links must provide a minimum touch target area of `44px × 44px`.

---

## 5. Content & Publishing Invariants

1. **Placeholder Flag Compliance**:
   - Any draft project or unverified credential must display the `.placeholder-flag` badge until real repository links and live URLs are verified.
2. **Production Readiness Checklist**:
   - [ ] All email links point to active, monitored inbox (`iampiyushpadhan@gmail.com`).
   - [ ] GitHub profile URL is correct (`https://github.com/padhanpiyush`).
   - [ ] Project URLs point to real, functional repositories.
   - [ ] CGPA and academic marks reflect authentic transcripts.
