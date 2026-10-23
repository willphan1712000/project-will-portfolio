# Authentication & Authorization

## Authentication (NextAuth v4)

- Config: `app/api/auth/authOptions.ts` (export `authOptions` and reuse it everywhere)
- Handler: `app/api/auth/[...nextauth]/route.ts` (`GET`/`POST`)
- Providers: Google (`GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`) and GitHub (`GITHUB_ID`/`GITHUB_SECRET`)
- Adapter: `PrismaAdapter(prisma)` persists `User` / `Account` rows (see [database.md](database.md))
- Session strategy: **JWT**, so the `Session` table isn't used for lookups
- `redirect` callback always sends the user back to `baseUrl`
- There is no sign-in button in the UI. Go to `/api/auth/signin` directly.

## Reading the session

- Client: `useSession()` from `next-auth/react` (the `SessionProvider` lives in `app/auth/AuthProvider.tsx`)
- Server / route handlers: `await getServerSession(authOptions)`

## Authorization: single admin

There are no roles. The only admin is the user whose email equals `process.env.WILL_EMAIL`.

Every mutating route handler must start with:

```ts
const session = await getServerSession(authOptions)
if (!session)
    return NextResponse.json({ error: "user not authenticated, deny access to resources" }, { status: 400 })
if (session.user?.email !== process.env.WILL_EMAIL)
    return NextResponse.json({ error: "Wrong user, deny access to resources" }, { status: 400 })
```

(The existing handlers return `400` here. `401`/`403` would be more correct. If you change one, change them all.)

UI gating: components show edit controls when `status === 'authenticated'`. That only hides UI for logged-out users. Any signed-in user sees the inputs, and the server rejects them.

## Known gaps

- `POST /api/avatar/upload` has **no auth check**, so anyone can upload to Vercel Blob.
- `GET /api/main/project` returns every user's projects, not just the admin's.
