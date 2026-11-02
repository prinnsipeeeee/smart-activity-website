# Smart Activity Website (MVP)

Company profile website ng Smart Activity for Business Solutions.
Front end lang. Bilingual (English / Arabic) na may RTL support.

## Tech Stack

- React 19 + Vite
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Buksan ang link na lalabas sa terminal (usually http://localhost:5173).

Iba pang commands:

```bash
npm run build     # production build
npm run preview   # i-preview ang build
npm run lint      # oxlint
```

## Folder Structure

```
public/
  logo.png              # company logo (ginagamit sa Navbar)
  partners/             # (optional) partner logos
src/
  index.css             # Tailwind import, theme colors, Cairo font
  App.jsx               # pinagsasama ang lahat ng sections + EN/AR state
  content.js            # LAHAT ng text (EN + AR) at listahan ng partners
  components/
    Section.jsx         # shared wrapper (title + spacing)
    Navbar.jsx          # sticky menu + language toggle
    Hero.jsx
    About.jsx           # About, Vision, Mission
    Values.jsx
    Services.jsx
    Sectors.jsx
    WhyUs.jsx
    Partners.jsx
    Contact.jsx         # contact info + footer
```

## Paano Mag-edit

- **Palitan ang text:** `src/content.js` (may `en` at `ar` na bersyon).
- **Palitan ang colors:** `@theme` block sa `src/index.css`
  - `navy`, `navy-dark`, `brand-blue`, `brand-orange`
- **Dagdag / bawas na section:** i-add o i-remove ang component sa `App.jsx`.
  Siguraduhing may `id` ang section para gumana ang nav link.
- **Partner logos:** ilagay ang images sa `public/partners/`, tapos sa
  `Partners.jsx` palitan ang text ng `<img src="/partners/filename.png" />`.

## Notes / To-Do

- [ ] Palitan ang description ng **Project Management** sa `content.js`
      (placeholder lang ito, wala sa company profile PDF).
- [ ] Ilagay ang totoong partner logos.
- [ ] Ilagay ang hero image (optional).
- [ ] Contact form (optional, wala pa sa MVP).
- [ ] I-check ang Arabic text sa native speaker / client bago i-launch.

## Deployment

```bash
npm run build
```

I-upload ang laman ng `dist/` sa hosting (Hostinger, Netlify, Vercel, etc.).