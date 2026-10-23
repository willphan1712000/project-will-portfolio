# CLAUDE.md

Will Phan's personal portfolio: Next.js 15 (App Router) + TypeScript + Prisma/PostgreSQL + NextAuth v4, deployed on Vercel.

## Commands

- `npm run dev`: dev server
- `npm run build`: production build. **Run this to verify changes.** There are no tests, and CI (`.github/workflows/build-on-change.yml`) only builds on pushes to `change`.
- `npm run lint`: ESLint (lint errors are ignored during `build`, see `next.config.ts`)
- `npx prisma migrate dev --name <name>` / `npx prisma generate`: after editing `prisma/schema.prisma`

## Branches

Work on `change`; `main` is production. Commits use `Feat:`, `Style:`, `Refactor:` prefixes, and release commits say `Ready for production - version x.y.z` (bump `package.json` `version` to match).

## Docs (read the relevant one before changing that area)

- [Architecture](docs/architecture.md): routes, folder layout, data flow, providers
- [Authentication & Authorization](docs/auth.md): NextAuth setup, the single-admin model
- [APIs](docs/api.md): every route handler, its auth, and its payload
- [Database Schema](docs/database.md): Prisma models and migrations
- [Patterns & Coding Style](docs/patterns.md): components, styling, state, conventions

## Rules that are easy to get wrong

- **Social links are read from `app/static/database.ts`, not the DB.** `app/layout.tsx` passes that static object into context. `PUT /api/main/[socialtype]` still writes to the DB, but those writes never show up on the site.
- Admin = `session.user.email === process.env.WILL_EMAIL`. Protected handlers must check both the session and that email (copy the pattern in `app/api/main/project/route.ts`).
- Import Prisma only through `@/prisma/client` (singleton). Never `new PrismaClient()`.
- Use `@willphan1712000/frontend` components (`ModernButton`, `DropdownSelect`, …) before building new UI. `/w/ui` is a live demo of that library, so keep its code samples in sync with the real usage.
- Brand colors and max width come from `app/static/config.ts` and are passed to CSS Modules as CSS variables (`--primary-color`, `--second-color`). Don't hardcode them.
- Page copy and image lists live in `app/static/*.ts` and `*/pictureContent.ts`. Edit content there, not in the components.
- Remote images must match `images.remotePatterns` in `next.config.ts` (Google Drive / googleusercontent). Use `app/utilities/getGoogleImage.ts` for Drive IDs.

## Env vars

`DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_ID`, `GITHUB_SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `WILL_EMAIL`, `BLOB_READ_WRITE_TOKEN`. Never commit `.env*`.

## Keeping this file useful

When Claude makes the same mistake twice in this repo, add a one-line rule under "Rules that are easy to get wrong". Keep this file short and put the details in `docs/`.
