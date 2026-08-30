# Your Portfolio

A personal portfolio site built with React, Vite, and React Router — matching Day 1
of your workshop (project setup, components, multiple pages, routing).

## Run it locally

```
cd portfolio
npm install
npm run dev
```

Then open the link it prints (usually http://localhost:5173) in your browser.

## Make it actually yours

Everything with placeholder text is meant to be edited:

- `src/components/Navbar.jsx` — change `yourname.dev` to your own name/logo text.
- `src/pages/Home.jsx` — your name, intro line, and current skills.
- `src/pages/About.jsx` — your real bio and quick facts.
- `src/pages/Academic.jsx` — your actual school/college history.
- `src/pages/Projects.jsx` — the Vehicle Service Management backend is already
  listed for you since you genuinely built it. Add more as you build them.
- `src/pages/Contact.jsx` — your real email, GitHub, and LinkedIn links.

## Folder structure

```
src/
  components/   → Navbar (shows on every page)
  pages/        → Home, About, Projects, Academic, Contact
  App.jsx       → wires the pages together with React Router
  index.css     → colors, fonts, and shared styles (the design system)
```
