# Database Schema

PostgreSQL via Prisma. Schema: `prisma/schema.prisma`. Migrations: `prisma/migrations/`. Connection: `DATABASE_URL`.

Client: `import prisma from "@/prisma/client"`. It's a singleton cached on `globalThis` outside production so hot reload doesn't open new connections.

## NextAuth models (managed by `@auth/prisma-adapter`, don't rename fields)

| Model | Key | Notes |
|---|---|---|
| `User` | `id` (cuid) | `email` unique; has `accounts`, `sessions`, `Authenticator` |
| `Account` | `@@id([provider, providerAccountId])` | OAuth tokens; cascade-deletes with User |
| `Session` | `sessionToken` unique | Unused at runtime (JWT strategy) |
| `VerificationToken` | `@@id([identifier, token])` | Email sign-in (unused) |
| `Authenticator` | `@@id([userId, credentialID])` | WebAuthn (optional, unused) |

## App models

```prisma
model Social {
  email     String  @id @unique   // = WILL_EMAIL
  facebook  String?
  instagram String?
  github    String?
  linkedin  String?
  youtube   String?
  resume    String?
}

model Project {
  id    Int    @id @default(autoincrement())
  email String                    // owner, = WILL_EMAIL
  name  String
  url   String
}
```

Neither app model has a relation to `User`. Rows are linked to the admin by the `email` string.

## Static "database"

`app/static/database.ts` mirrors `Social` (plus a `diploma` field) and is what the site actually renders. If you add a social field, update the Prisma model, run a migration, **and** update the static object, the `icon` map in `Footer.tsx`, and/or `Greeting/Buttons`.

## Changing the schema

```bash
npx prisma migrate dev --name <descriptive_name>   # creates SQL in prisma/migrations and regenerates the client
```

Name your migrations (an existing one, `20250318191013_`, has an empty name).
