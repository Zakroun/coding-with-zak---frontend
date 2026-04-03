# CodingWithZak — Frontend

> React + Vite + Tailwind CSS frontend for a professional multilingual digital agency website.

---

## 🗂 Project Structure

```
frontend/
├── public/
│   ├── images/              # Language flag icons (ar.png, en.png, fr.png, uk.png)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── index.css        # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   # Top navigation + language switcher
│   │   │   └── Footer.jsx   # Site footer
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── TechStack.jsx
│   │   │   └── CTASection.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── LoadingScreen.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SectionReveal.jsx
│   │       ├── ServiceCard.jsx
│   │       └── WhatsAppButton.jsx
│   ├── data/
│   │   └── data.jsx         # Static app data (services, projects, tech stack...)
│   ├── hooks/
│   │   ├── useLang.jsx      # Custom hook for language management
│   │   └── useScrollAnimation.js
│   ├── i18n/
│   │   └── config.js        # i18n configuration (i18next setup)
│   ├── locales/
│   │   ├── ar.json          # Arabic translations
│   │   ├── en.json          # English translations
│   │   └── fr.json          # French translations
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Root component + routing
│   └── main.jsx             # Entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
# → http://localhost:5173
```

### Production Build

```bash
npm run build
# Output in /dist
```

### Preview Production Build

```bash
npm run preview
```

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [i18next](https://www.i18next.com/) | Internationalization |
| [react-i18next](https://react.i18next.com/) | React bindings for i18next |

---

## 🌍 Multilingual Support

The app supports **3 languages** switchable via the Navbar toggle:

| Language | Flag | File |
|----------|------|------|
| 🇫🇷 French | `fr.png` | `src/locales/fr.json` |
| 🇬🇧 English | `en.png` | `src/locales/en.json` |
| 🇸🇦 Arabic | `ar.png` | `src/locales/ar.json` |

### Adding a New Language

1. Create a new file in `src/locales/` (e.g., `es.json`)
2. Mirror the key structure from `en.json`
3. Add the language to `src/i18n/config.js`
4. Add a flag image in `public/images/`

---

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | `Home.jsx` | Landing page with Hero, Services preview, Tech stack & CTA |
| `/services` | `Services.jsx` | Full services listing |
| `/about` | `About.jsx` | Agency story, team & values |
| `/projects` | `Projects.jsx` | Portfolio / case studies |
| `/contact` | `Contact.jsx` | Contact form (submits to backend API) |

---

## 🧩 Key Components

### Layout
- **`Navbar.jsx`** — Sticky top navbar with language switcher, mobile menu
- **`Footer.jsx`** — Links, contact info, social media

### Sections (used in Home)
- **`HeroSection.jsx`** — Main headline + CTA
- **`ServicesPreview.jsx`** — Cards previewing the main services
- **`TechStack.jsx`** — Logos/icons of technologies used
- **`CTASection.jsx`** — Call-to-action banner

### UI Primitives
- **`Badge.jsx`** — Label/tag component
- **`ServiceCard.jsx`** — Card for a single service
- **`ProjectCard.jsx`** — Card for a portfolio project
- **`SectionReveal.jsx`** — Scroll-triggered reveal animation wrapper
- **`LoadingScreen.jsx`** — Initial page loading overlay
- **`WhatsAppButton.jsx`** — Floating WhatsApp CTA button

---

## 📡 API Integration

The Contact page (`/contact`) sends form submissions to the backend:

```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "...",
  "email": "...",
  "message": "..."
}
```

Make sure the backend is running before testing the contact form.

---

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to change brand colors, fonts, or breakpoints.

### Site Content & Data
All static content (services list, project cards, tech stack logos) is centralized in:
```
src/data/data.jsx
```
Edit this file to update what's displayed without touching individual components.

### Translations
Update `src/locales/*.json` to change any text visible on the site.

---

## 📞 Contact

- 📧 Email: codingwiithzak@gmail.com
- 📱 Phone: +212 625 702 587
- 💬 WhatsApp: https://wa.me/212625702587