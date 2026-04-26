# Jashedul Islam Shaun — Portfolio

<div align="center">

[![Live Site](https://img.shields.io/badge/Live%20Site-jashedulislamshaun.com-blue?style=for-the-badge&logo=vercel)](https://jashedulislamshaun.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

**Personal developer portfolio for Jashedul Islam Shaun — Full Stack Developer & E-commerce Specialist**

[🌐 Live Site](https://jashedulislamshaun.com/) · [📄 Resume](https://jashedulislamshaun.com/resume.pdf) · [💼 Fiverr](https://fiverr.com/jashedulislam) · [🔗 Upwork](https://www.upwork.com/freelancers/~01c75e88b6540d813f)

</div>

---

## ✨ Features

- **Developer-themed UI** — Syntax-highlighted sections, monospace typography, floating code snippets
- **Dark / Light mode** — Persistent toggle via React Context (no prop drilling)
- **Typewriter animation** — Live-typing hero tagline with blinking cursor
- **Scroll-triggered animations** — Framer Motion `whileInView` on every section
- **Animated CountUp stats** — Projects, clients, and years of experience count up on scroll
- **Skills with progress bars** — Animated fill bars for 16 technologies across 4 categories
- **Real project showcase** — 9 real projects from GitHub with live demos and source links
- **Formspree contact form** — Works without a backend; sends email on submission
- **Hire Me section** — Live Fiverr & Upwork profile cards with real stats
- **Fully SEO optimized** — Canonical URL, 4 JSON-LD schemas, Open Graph, Twitter Cards, sitemap, robots
- **Performance-first build** — Lazy-loaded sections, code-split chunks, LCP image preload

---

## 🚀 Performance (Core Web Vitals)

| Metric | Optimization |
|---|---|
| **LCP** | Profile image preloaded with `fetchpriority=high`; Hero & Header load eagerly |
| **CLS** | Explicit `width`/`height` on all images; no layout shift |
| **INP** | Removed global `* { transition }` that caused re-paint on every element |
| **Initial JS** | **6.5 kB gzip** (down from 105 kB) via lazy-loading + code splitting |
| **Caching** | Vendor chunks split: React, Framer Motion, Icons, Forms, CountUp |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Contact Form | Formspree |
| Counters | React CountUp |
| State | React Context (ThemeContext) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Profile_img.webp      # Hero profile photo (LCP element)
│   ├── resume.pdf            # Downloadable CV
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── sitemap.xml           # Full SEO sitemap
│   └── robots.txt            # Allow all + sitemap reference
├── src/
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context + useTheme() hook
│   ├── Components/
│   │   ├── Header.jsx        # Fixed nav, active section highlight, theme toggle
│   │   ├── Hero.jsx          # Typewriter, stats, social links, profile photo
│   │   ├── About.jsx         # Bio, education, highlights grid
│   │   ├── Skills.jsx        # Animated progress bars, 4 categories
│   │   ├── Projects.jsx      # Featured + grid cards from projects.json
│   │   ├── Freelance.jsx     # Fiverr & Upwork cards with live stats
│   │   ├── Contact.jsx       # Formspree form, contact info
│   │   └── Footer.jsx        # Social links, quick nav, contact info
│   ├── data/
│   │   └── projects.json     # Real project data (9 projects)
│   ├── App.jsx               # Root — ThemeProvider + lazy-loaded sections
│   ├── index.css             # Global styles, Tailwind layers, custom scrollbar
│   └── main.jsx              # React entry point
├── index.html                # SEO meta, JSON-LD schemas, resource hints
├── tailwind.config.js        # Custom color palette (dev.*, primary, secondary, accent)
├── vite.config.js            # Code splitting, es2020 target, esbuild minify
└── package.json
```

---

## 🏃 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm (included with Node.js)

### Installation

```bash
# Clone the repo
git clone https://github.com/shauncuier/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 🎨 Customization

### Personal Info
All personal data is in the component files. Key locations:

| Data | File |
|---|---|
| Projects | `src/data/projects.json` |
| Skills & levels | `src/Components/Skills.jsx` |
| Stats (500+ projects etc.) | `src/Components/Hero.jsx` |
| Social links | `src/Components/Hero.jsx` + `Footer.jsx` |
| Fiverr/Upwork URLs & stats | `src/Components/Freelance.jsx` |
| Contact info | `src/Components/Contact.jsx` |

### Theme Colors
Defined in `tailwind.config.js`:
- `primary` — Blue (actions, links)
- `secondary` — Green (success, availability)
- `accent` — Amber (highlights)
- `dev.*` — Dark theme syntax colors (background, surface, keywords, strings…)

### Adding a Project
Edit `src/data/projects.json`. Set `"featured": true` to show in the large 2-column grid (max 2 featured recommended).

---

## 🔍 SEO

| Feature | Status |
|---|---|
| Canonical URL | ✅ `https://jashedulislamshaun.com/` |
| Meta description | ✅ |
| Open Graph | ✅ Full (title, description, image, locale) |
| Twitter Card | ✅ `summary_large_image` |
| JSON-LD schemas | ✅ Person, WebSite, ProfessionalService, Organization |
| Geo meta tags | ✅ Chittagong, BD |
| Sitemap | ✅ All 6 sections |
| robots.txt | ✅ `Allow: /` + sitemap reference |
| `<link rel="canonical">` | ✅ |
| `theme-color` | ✅ Dark + Light |

---

## 📬 Contact

**Jashedul Islam Shaun**

- 📧 Email: [jashedulislamshaun@gmail.com](mailto:jashedulislamshaun@gmail.com)
- 💬 WhatsApp: [+880 1835-927634](https://wa.me/+8801835927634)
- 💼 LinkedIn: [jashedulislamshaun](https://linkedin.com/in/jashedulislamshaun)
- 🐙 GitHub: [shauncuier](https://github.com/shauncuier)
- 🌍 Portfolio: [jashedulislamshaun.com](https://jashedulislamshaun.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with ❤️ using React & Tailwind CSS
</div>
