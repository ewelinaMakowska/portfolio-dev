# Portfolio

Personal portfolio of Ewelina Makowska — full-stack developer.

Live: https://portfolio-dev-ewelinamakowskas-projects.vercel.app

## Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** alongside SCSS modules
- **react-hook-form** + **zod** for the contact form
- **Resend** for transactional email, behind a Next.js API route
- Bilingual (EN/PL) routing resolved in middleware, dictionaries loaded per request
- Docker images for local development and production

## Getting started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000) and redirects `/` to the default locale.

## Environment variables

The contact form needs these set (locally in `.env.local`, in production via the hosting provider):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM` | Verified sender address |
| `MAIL_TO` | Destination inbox for form submissions |

## Structure

```
app/
├── [lang]/          # locale-scoped routes: home + per-project pages
├── api/contact/     # contact form endpoint
├── components/      # section and UI components
├── locales/         # en.json, pl.json and the dictionary loader
└── styles/          # global styles
```

## Docker

```bash
docker compose up                                  # development
docker compose -f docker-compose.production.yml up # production build
```
