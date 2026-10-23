# APIs

All handlers live under `app/api/` and return `NextResponse.json(...)`. Request bodies are validated with **zod** `safeParse`, and failures return `400` with `validation.error.errors`. Admin check: see [auth.md](auth.md).

| Method | Path | Auth | Body | Returns |
|---|---|---|---|---|
| GET/POST | `/api/auth/*` | — | NextAuth | NextAuth (signin, signout, callback, session) |
| GET | `/api/main` | public | — | `Social` row for `WILL_EMAIL` (or `null`) |
| PUT | `/api/main/[socialtype]` | admin | `{ url: string (url) }` | updated `Social` row |
| GET | `/api/main/project` | public | — | `Project[]` (all rows) |
| PUT | `/api/main/project` | admin | `{ urlObj: { name: string, url: string (url) }[] }` | `{ count }` from `createMany` |
| POST | `/api/avatar/upload?filename=<name>` | **none** | raw file body | Vercel Blob `PutBlobResult` (`access: 'public'`) |

## Notes

- `[socialtype]` is typed as `keyof Social` but isn't validated at runtime. Valid values: `facebook`, `instagram`, `github`, `linkedin`, `youtube`, `resume`. The handler 404s if the admin `User` row doesn't exist yet (sign in once first), and it creates the `Social` row if it's missing.
- `PUT /api/main/project` **replaces** everything: it deletes all of the admin's projects, then `createMany`. It isn't wrapped in a transaction.
- Dynamic `params` is a `Promise` in Next 15: `const { socialtype } = await params`.
- Clients call these with `axios` (see `app/components/EditLink.tsx`). `/upload` uses `fetch`.
- Export request types from the route file next to the schema (e.g. `SchemaType`, `ProjectSchameType`).

## Adding a route

1. Create `app/api/<path>/route.ts` and export named `GET`/`POST`/`PUT`/`DELETE` functions.
2. For a mutation, add the admin check first, then zod validation, then the Prisma call through `@/prisma/client`.
3. Add a row to the table above.
