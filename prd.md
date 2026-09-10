# Product Requirements Document (PRD)

## Project: Piyush Padhan — Cyberpunk Developer Portfolio
**Author:** Piyush Padhan  
**Document Version:** 1.0.0  
**Target Delivery:** 2026  
**Status:** Active Development  

---

## 1. Executive Summary & Vision

The objective of this product is to create a distinctive, high-performance personal portfolio website for **Piyush Padhan**, a developer specializing in **Python** and **Android development**, currently pursuing a B.Tech degree (2nd Year, 3rd Semester).

Unlike cookie-cutter templates, this portfolio adopts a **Cyberpunk / Synthwave terminal aesthetic** that demonstrates strong frontend visual craft, attention to detail, and programming discipline. It serves as the primary gateway for technical recruiters, engineering hiring managers, and prospective collaborators.

---

## 2. Target Personas & User Journeys

### Persona A: Technical Recruiter / Talent Sourcer
- **Goal**: Quickly determine if Piyush meets basic hiring criteria for internships or junior software engineer roles.
- **Key Needs**: Instant visibility of core languages (Python, Java, Kotlin), current academic standing (B.Tech 2nd Year, 8.2 CGPA), internship history, and immediate contact mechanisms (Email, GitHub, Resume).
- **Time Constraint**: Evaluates within 15–30 seconds.

### Persona B: Engineering Hiring Manager / Team Lead
- **Goal**: Assess code authenticity, architecture instincts, and problem-solving capability.
- **Key Needs**: Direct links to public GitHub repositories, live demos, clear descriptions of problems solved, and tech stack tags.
- **Time Constraint**: Spends 2–5 minutes reviewing projects.

### Persona C: Peer Developer & Open-Source Collaborator
- **Goal**: Discover shared technical interests and connect for collaborative hackathons or projects.

---

## 3. Scope of Features & Functional Requirements

### 3.1 Global Header & Navigation (`<nav>`)
- **FR-1.1**: Sticky top navigation bar with frosted glass backdrop blur.
- **FR-1.2**: Stylized brand logo (`PP://`) acting as a home anchor.
- **FR-1.3**: Direct anchor links to each core section: `#about`, `#skills`, `#projects`, `#education`, `#achievements`, `#contact`.
- **FR-1.4**: Interactive Scrollspy highlighting the active link matching viewport position using `IntersectionObserver`.
- **FR-1.5**: Mobile navigation drawer toggled via accessible hamburger button (`≡`) for screen widths `<= 800px`.

### 3.2 Hero Showcase (`header.hero`)
- **FR-2.1**: Animated boot sequence typing effect (`typeBoot()`) displaying terminal boot status at 28ms/char.
- **FR-2.2**: High-impact fluid typography headline (`PIYUSH PADHAN`) with neon gradient text clip and drop-shadow glow.
- **FR-2.3**: Concise elevator pitch summarizing core technical focus (Python backend + native Android).
- **FR-2.4**: Dual call-to-action buttons (`View Projects` and `Get in Touch`) featuring parallelogram skew geometry and hover glow.

### 3.3 About Section (`#about`)
- **FR-3.1**: Narrative summary explaining engineering journey, internship experience, and current B.Tech studies.
- **FR-3.2**: Quick-stats matrix highlighting:
  - `8.2` CGPA (B.Tech Sem 2)
  - `81%` Intermediate score
  - `2+` Online internships completed

### 3.4 Skills Matrix (`#skills`)
- **FR-4.1**: Grouped classification of competencies:
  - *Languages*: Python, Java, Kotlin, JavaScript
  - *Android Dev*: Android Studio, XML Layouts, SQLite, Jetpack Basics
  - *Tools & Practices*: Git, GitHub, VS Code, Problem Solving, Self-Directed Learning
- **FR-4.2**: Dynamically rendered via JavaScript array for easy content updates.
- **FR-4.3**: Neon tag hover interactions with magenta glowing borders.

### 3.5 Featured Projects Showcase (`#projects`)
- **FR-5.1**: Card design styled like a retro IDE/terminal window with window control dots and file path indicator (`~/projects/...`).
- **FR-5.2**: Project summary, technology stack tags, Live Demo link, and GitHub repository source link.
- **FR-5.3**: Placeholder warning badge (`.placeholder-flag`) to alert developer during draft mode.

### 3.6 Academic History (`#education`)
- **FR-6.1**: Structured, accessible data table displaying educational milestones (B.Tech, Intermediate, Matriculation), institutions, and scores.
- **FR-6.2**: Interactive hover highlight on table rows for readability.

### 3.7 Achievements & Certifications (`#achievements`)
- **FR-7.1**: Card grid displaying verified internship completion certificates and competitive awards.
- **FR-7.2**: Issuer metadata and completion timestamps.

### 3.8 Contact & Call-to-Action (`#contact`)
- **FR-8.1**: Prominent contact card framed with double neon magenta border and ambient box-shadow.
- **FR-8.2**: Direct mailto link (`mailto:iampiyushpadhan@gmail.com`).
- **FR-8.3**: Direct GitHub profile link (`https://github.com/padhanpiyush`).

---

## 4. Non-Functional Requirements (NFRs)

| ID | Category | Requirement | Target Metric |
|---|---|---|---|
| **NFR-1** | Performance | Ultra-fast initial page load, zero bulky third-party JS libraries | Total bundle < 60 KB (excluding fonts); LCP < 1.0s |
| **NFR-2** | Responsiveness | Seamless layout adaptation across mobile, tablet, and desktop | Responsive from 320px to 2560px |
| **NFR-3** | Accessibility | Keyboard navigation, focus visible rings, clear font sizing | WCAG 2.1 Level AA compliance |
| **NFR-4** | Maintainability | Single-source data arrays for skills, projects, and achievements | No build step required; edit JS arrays directly |
| **NFR-5** | Reliability | Standalone static HTML file with zero server-side runtime dependency | 100% uptime on any static hosting (GitHub Pages, Vercel) |

---

## 5. Success Metrics & Key Performance Indicators (KPIs)

1. **Recruiter Engagement**: Average session duration > 45 seconds.
2. **Action Conversion**: Minimum 15% click-through rate on GitHub repository links or Email contact.
3. **Lighthouse Score Targets**:
   - Performance: `>= 98`
   - Accessibility: `>= 95`
   - Best Practices: `>= 100`
   - SEO: `>= 95`
