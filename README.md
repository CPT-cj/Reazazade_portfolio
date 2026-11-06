# Mohammad Amin Rezazade — Portfolio

A bilingual personal portfolio (Persian RTL / English LTR) built with **Next.js 15, React 19, JavaScript, and Tailwind CSS 4**. The project uses the Next.js App Router and does not require a backend, database, or API keys.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000 
```


## Project structure

```text
src/
  app/
    (root)/         Root static entry page and its document layout
    (localized)/    Persian and English routes with locale-aware document layouts
    globals.css     Global styles, responsive rules, and animations
  components/
    layout/         Header, mobile navigation, footer, theme and language controls
    ui/             Reusable interface components and scroll reveal
    sections/       Hero and home-page sections
    home/           Shared homepage content for root and localized routes
    skills/         Skills presentation
    experience/     Education and experience timeline
    teaching/       Teaching section
    interests/      Interests section
    projects/       Project cards, details, and explorer
  data/             Centralized bilingual content and editable profile data
  lib/              Localization, SEO, route, and utility helpers
public/
  images/           Add the profile photo and project images here
  resume/           Add real résumé PDF files here when available
```