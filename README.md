# HB Studio Weddings

Production-grade marketing website for **HB Studio Weddings**, a wedding
photography and videography studio. Built with Next.js App Router,
TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real contact details
npm run dev
```

Open http://localhost:3000.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (subtle, deliberate motion only)
- React Hook Form + Zod (client + server validation)
- Yet Another React Lightbox (portfolio gallery)
- lucide-react (icons)

## Replacing placeholder content

Everything a client will eventually supply is centralized so it can be
edited without hunting through components:

| What                                   | Where                              |
| --------------------------------------- | ----------------------------------- |
| Business name, contact info, socials    | `src/data/site.ts` + `.env.local`   |
| Portfolio images & categories           | `src/data/gallery.ts`               |
| Services copy                           | `src/data/services.ts`              |
| Packages / pricing                      | `src/data/packages.ts`              |
| Featured wedding stories                | `src/data/stories.ts`               |
| Testimonials                            | `src/data/testimonials.ts`          |
| Team bios                               | `src/data/team.ts`                  |
| All photography (currently SVG stand-ins) | `public/images/**`                |

Every placeholder image, testimonial, and story is explicitly labeled
as a placeholder in the source data and, where user-visible, on the
page itself. Search the codebase for `PLACEHOLDER` before launch.

## Contact form

`src/app/api/contact/route.ts` validates and rate-limits submissions on
the server but does **not** send email or write to a database yet — no
provider has been configured. Wire up a real provider (e.g. Resend,
Postmark, or a CRM webhook) using server-only environment variables
before relying on it in production. See comments in that file.

## Deployment

Works out of the box on Vercel or Netlify. Set the environment
variables from `.env.example` in your hosting provider's dashboard —
never commit real secrets to the repository.

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm run start` – run the production build
- `npm run lint` – ESLint
- `npm run typecheck` – TypeScript project check with no output
