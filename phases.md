# Project Phases & Roadmap: Piyush Padhan Portfolio

This roadmap outlines the evolution of the portfolio from its current foundation into a production-ready, high-converting developer showcase.

---

## Roadmap Overview

```
Phase 1: Foundation & UI System   --> [COMPLETED]
Phase 2: Content & Asset Swap     --> [CURRENT FOCUS]
Phase 3: Interactivity & FX       --> [PLANNED]
Phase 4: Optimization & A11y      --> [PLANNED]
Phase 5: Deployment & CI/CD       --> [FINAL RELEASE]
```

---

## Phase 1: Core Foundation & Design System (Status: COMPLETED)
- [x] **Semantic HTML Architecture**: Built single-page document with `<nav>`, `<header class="hero">`, `<section>` blocks (About, Skills, Projects, Education, Achievements, Contact), and `<footer>`.
- [x] **Visual Design Tokens**: Created CSS custom properties (`--bg`, `--fg`, `--card`, `--magenta`, `--cyan`, `--orange`, `--border`).
- [x] **Outrun & Cyberpunk FX Pipeline**:
  - 3D perspective grid floor (`transform: perspective(500px) rotateX(60deg)`).
  - Ambient radial sun glow with backdrop blur.
  - Non-blocking CRT scanline overlay with multiply blend mode.
  - Edge chromatic noise gradient.
- [x] **Dynamic Component Logic**:
  - JavaScript typewriter animation on boot line (`typeBoot()`).
  - IntersectionObserver-driven scrollspy for navigation links.
  - Mobile responsive drawer menu with toggle button.
  - Dynamic JavaScript data rendering for skills, projects, and achievements.

---

## Phase 2: Content Personalization & Asset Integration (Status: IN PROGRESS)
*Objective: Replace all template placeholders with genuine projects, verified credentials, and real academic details.*

### Action Items:
1. **Projects Section**:
   - Swap `Project Title 1 — Python` for an actual Python automation/backend project (e.g., REST API, scraping engine, CLI tool, or AI script).
   - Swap `Project Title 2 — Android` for a real Android app (e.g., Jetpack Compose / XML app, SQLite/Room DB, API consumer).
   - Add accurate GitHub repository URLs and working live demos or APK download links.
   - Remove `.placeholder-flag` warnings once validated.
2. **Education Section**:
   - Update B.Tech institution name (`-` -> Actual University / College name).
   - Verify semester CGPA numbers and curriculum specialization.
3. **Achievements & Certifications**:
   - Insert actual internship certificate issuers (e.g., organization name, completion date, verification credential ID or link).
4. **Contact & Socials**:
   - Add LinkedIn profile button alongside GitHub and Email.
   - Add downloadable Resume/CV PDF button (`padhan_piyush_resume.pdf`).

---

## Phase 3: Interactive Polish & Rich Micro-Features (Status: UPCOMING)
*Objective: Elevate user engagement and recruiter retention with interactive retro features.*

### Action Items:
1. **Filterable Projects Matrix**:
   - Add tab filters: `[ALL]`, `[PYTHON]`, `[ANDROID]`, `[SYSTEMS]`.
   - Animated card transitions on filter selection.
2. **Interactive Terminal Drawer / Modal**:
   - Enable an interactive terminal prompt where recruiters can type commands like `help`, `skills`, `cat resume.txt`, `contact`.
3. **Audio Synthesizer FX (Optional Toggle)**:
   - Subtle 80s retro mechanical key clicks and hover beeps using Web Audio API (with default-muted switch).
4. **Project Preview Modals**:
   - Lightbox modal showcasing screenshots, architecture diagrams, and tech stack deep-dives for each featured project.

---

## Phase 4: Performance, SEO & Accessibility (Status: UPCOMING)
*Objective: Guarantee sub-second load times, search engine discoverability, and accessibility.*

### Action Items:
1. **SEO & Social Graph**:
   - Add Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card metadata.
   - Embed JSON-LD structured schema (`Person` schema for Piyush Padhan).
2. **Accessibility Audit (WCAG 2.1 AA)**:
   - Verify color contrast ratios for `--cyan` and `--magenta` on dark violet surfaces.
   - Audit keyboard navigation tab orders and focus rings (`:focus-visible`).
   - Add descriptive `aria-expanded` and `aria-controls` to the mobile navigation toggle.
3. **Asset Optimization**:
   - Preload Google Fonts (`Orbitron`, `Share Tech Mono`) with `display=swap`.
   - Ensure zero Cumulative Layout Shift (CLS).

---

## Phase 5: Deployment, Domain & CI/CD (Status: UPCOMING)
*Objective: Publish to production with automated deployment.*

### Action Items:
1. **Git Repository Setup**:
   - Initialize git repo (`git init`), add `.gitignore` (ignoring OS artifacts and logs).
   - Commit files (`index.html`, `architecture.md`, `design.md`, `prd.md`, `rules.md`, `phases.md`).
2. **Hosting Provider**:
   - Deploy to GitHub Pages (`padhanpiyush.github.io`), Vercel, or Netlify.
   - Configure custom domain (e.g., `piyushpadhan.dev` or `piyushpadhan.in`).
3. **Continuous Deployment**:
   - Connect GitHub repository for automated preview builds on push to `main`.
4. **Analytics & Contact Tracking**:
   - Integrate privacy-friendly analytics (e.g., Cloudflare Web Analytics or Plausible).
