# University of Swat Website (Frontend Only)

A production-quality, frontend-only website for the University of Swat (Pakistan), designed to closely replicate the layout, spacing, typography, navigation behaviour and animations of the Hamad Bin Khalifa University website (https://www.hbku.edu.qa/en), filled with real University of Swat content from https://uswat.edu.pk.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations, mega-menu, counters)
- lucide-react (icons) + custom SVG brand icons
- Static data in `/src/data/*.ts` (no backend, no CMS, no database)

## Setup & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

> **Note for Windows / platforms without native Turbopack bindings:** the `dev` and `build` scripts use `--webpack` by default (this is already set in `package.json`). If you are on a platform where Turbopack works, you may remove the `--webpack` flag.

Other commands:

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Project Structure

```
src/
  app/                 # All pages (home + inner pages)
  components/
    layout/            # Header, MegaMenu, Footer, InnerPageLayout
    sections/          # Hero, Programs, Research, Stats, Events, News, VC, Tabs, Life, About, QuickAccess, Ranking
    ui/                # Button, Card, Counter, social icons
  data/                # ALL editable content (see below)
    images.ts          # Central image map
    navigation.ts      # Top bar + mega-menu structure
    home.ts            # Home page content, news, events, VC, footer, etc.
    faculties.ts       # Faculties, departments, department detail data
  lib/utils.ts         # cn() helper
```

## Editing Content

All text, links, images and data live in `/src/data/*.ts`. To change any image, edit only `src/data/images.ts` or the relevant data file, and replace the URL with your own path. Remote hostnames must be listed in `next.config.ts` under `images.remotePatterns`.

## Design System

- **Brand colour:** `#003366` (deep navy, taken from the University of Swat logo), with `#00244d` hover.
- **Text:** charcoal `#1a1a1a`, light-grey backgrounds.
- **Font:** Inter (Google Fonts), large thin headings (`font-light`), thin body text.
- **Components:** rounded buttons/cards, subtle shadows, zoom-on-hover images, fade-up scroll reveals, animated number counters, sticky shrinking header, full-width hover mega-menu with promo card, high-contrast toggle, dark navy footer.

## Sitemap

Home, About, Vice Chancellor's Message, Campuses, Faculties & Departments, Departments list, Department detail (`/department/[slug]`), Programs, Admissions, News + article, Events + detail, Careers, Tenders, Downloads, Contact, Alumni, Library, Search.

## Image Sources (replace freely)

All images are centralised in `src/data/images.ts` and in the content data files. Sources used:

### From uswat.edu.pk (official university site)
- Logo: `https://uswat.edu.pk/wp-content/uploads/2026/08/776305345_1732553001344124_3192293907725027352_n-65x65.png`
- Hero slider images: `https://uswat.edu.pk/wp-content/uploads/2026/11/1.jpg` through `8.jpg`
- VC portrait: `https://uswat.edu.pk/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-05-at-10.42.00.jpeg`
- News thumbnails: `https://uswat.edu.pk/wp-content/uploads/2026/08/logo-uswat1.png`
- Conference banner: `https://uswat.edu.pk/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-14.57.18-1024x341.jpeg`
- Quick access tiles: `admin-*.jpg`, `exam-*.jpg`, `HEDRankingsAnnounced-*.jpeg`, `ORIC-*.jpeg`, main campus `WhatsApp-Image-2021-11-05-at-10.51.45-AM-*.jpeg`, `WC-01-*.jpg` (all under `https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/`)

### From Pexels (free licence, https://www.pexels.com) — academic / people / campus / landscape
- `669623` — science/lab (Physics, Chemistry, Research/ORIC)
- `574071` — computer/code lab (Computer & Software Technology)
- `3754756` — students/lecture (English, Urdu, Life)
- `5673953` — academic/Islamic studies
- `1181397` — law/documents (Law & Shariah)
- `1181677` — lab/QEC (Mathematics, Allied Health)
- `97799` — mountains/nature (Geology, Environment, Swat Valley)
- `4332341` — people/meeting (Economics, Administration, Sports)
- `1571460` — heritage/archaeology (Archaeology, Pakistan Studies)
- `261102` — tourism/travel (Tourism & Hospitality)
- `6328347` — media studio (Media & Communication Studies)
- `3184296` — students/social (Social & Gender Studies, Life)
- `3184285` — research meeting (Research Projects)
- `450035` — art/culture (Hunerkada, Life)
- `3184290` — management/business (Management & Commerce)
- `5946614` — library/books (SUJRIS Journal)

All Pexels URLs follow the form `https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=800`.

### Hero video
- Pexels free stock: `https://images.pexels.com/videos/853449/mountain-lake-landscape-nature-853449.mp4` with Swat hero image as poster/fallback.

> All third-party images are used as visual placeholders only and should be replaced with the university's own licensed photography before launch where required.

# University-website
