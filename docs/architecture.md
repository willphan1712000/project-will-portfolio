# Architecture

## Overview

A mostly static, client-rendered Next.js 15 App Router site. A small set of route handlers backed by Prisma/PostgreSQL let the admin edit links. Assets come from Google Drive (via `lh3.googleusercontent.com`) and Vercel Blob.

```
Browser ──> Next.js pages (mostly 'use client')
               │  content from app/static/*.ts (hardcoded)
               │  admin edits via axios ──> app/api/main/* ──> Prisma ──> PostgreSQL
               │  sign-in ──> app/api/auth/[...nextauth] (Google / GitHub, JWT session)
               └─ avatar upload ──> app/api/avatar/upload ──> Vercel Blob
```

## Routes

| Path | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home: Greeting → Intro → BigTitle → TechStack → InfoStream |
| `/blog` | `app/blog/page.tsx` | Journey stream (`blog/pictureContent.ts`) |
| `/travel` | `app/travel/page.tsx` | Travel gallery by state (`travel/pictureContent.ts`) |
| `/upload` | `app/upload/page.tsx` | Upload a file to Vercel Blob |
| `/w` | `app/w/page.tsx` | "Will Library" landing page (shared `app/w/layout.tsx`, dark theme) |
| `/w/ui` | `app/w/ui/page.tsx` | Live demos of `@willphan1712000/frontend` components, with code samples |
| `/w/api`, `/w/async`, `/w/u` | `app/w/*/page.tsx` | API / async-state / utility showcases |

## Folder layout

- `app/api/`: route handlers (see [api.md](api.md))
- `app/auth/AuthProvider.tsx`: client root provider: `QueryClientProvider` → `SessionProvider` → `MyContext.Provider` → Navbar / children / Footer
- `app/components/`: shared components, one folder per component with a `*.module.css` next to it
- `app/context/Context.tsx`: `MyContext` + `useMyContext()` (throws if used outside the provider)
- `app/components/Store.ts`: Zustand store (holds the Intro section ref so Greeting can scroll to it)
- `app/static/`: hardcoded content and config (`config.ts`, `home.ts`, `homePictureContent.ts`, `database.ts`)
- `app/utilities/`: small helpers (`getGoogleImage`, `getScrollVar`)
- `app/w/_components/`: components used only inside `/w` (the `_` prefix keeps them out of routing)
- `prisma/`: schema, migrations, client singleton

## Data flow

- **Content** is static TS objects (`Object.freeze({...})`) imported directly by components.
- **Social links**: `app/layout.tsx` reads `app/static/database.ts` (a "fake database") and passes it into `AuthProvider` → `MyContext`. Footer and Greeting Buttons read it through `useMyContext()`. The DB-backed `GET /api/main` exists but the UI doesn't call it.
- **Admin editing**: `EditLink` shows an input when `useSession().status === 'authenticated'` and sends `PUT` to `/api/main/<field>` with axios.

## Deployment

Vercel. CI only checks that `npm run build` passes on pushes to `change`. `eslint.ignoreDuringBuilds` is on and `reactStrictMode` is off.
