# Patterns & Coding Style

## Components

- One folder per shared component: `app/components/Foo/Foo.tsx` + `Foo.module.css` (PascalCase or camelCase module name, so match the folder you're in). Sub-components nest inside it (`Greeting/Avatar/Avatar.tsx`).
- Route-private components go in `_components/` next to the route (`app/w/_components`, `app/travel/_components`).
- Arrow-function components with a default export: `const Foo = (...) => {...}; export default Foo`. Inline prop types or a local `interface Props`.
- Pages are mostly `'use client'`. Add the directive to any file that uses hooks, context, or browser APIs.
- Imports: `@/` alias for cross-area imports (`@/app/static/config`, `@/prisma/client`). Relative paths are fine within a component folder.

## Styling

- CSS Modules for component styles, Tailwind utility classes for layout (heavily used in `/w`). `app/globals.css` + `app/css/universal.css` are global.
- Theme values come from `app/static/config.ts` and are passed as CSS variables:
  ```tsx
  <div className={styles.wrapper} style={{
    "--primary-color": config.primaryColor,
    "--second-color": config.secondColor
  } as React.CSSProperties}>
  ```
- Global CSS vars: `--dark-color`, `--slightly-dark-color` (Tailwind: `bg-[--dark-color]`).
- Font: Google Sans (from `globals.css`). Icons: FontAwesome kit `<i className="fa-brands fa-...">` (loaded in `layout.tsx`), `react-icons`, `@fortawesome/react-fontawesome`.

## UI library

`@willphan1712000/frontend` is the author's own component library (`ModernButton`, `DropdownSelect`, `MultiSelect`, sliders, `InputGoogle`, `DynamicList`, …). Use it first. Each `/w/ui/_components/*Component.tsx` renders a live demo plus a code string shown through `Code` / PrismJS. Register new demos in `TableOfContents.tsx` (`tableList`).

## State & data

- Static content: `Object.freeze({...})` default exports in `app/static/` and `pictureContent.ts` files.
- Cross-component UI state: Zustand (`app/components/Store.ts`).
- App data: `MyContext` / `useMyContext()`.
- HTTP: axios on the client. React Query is provided but mostly unused.
- Validation: zod schemas in the route file, with `z.infer` types exported for the client.

## Conventions

- TypeScript `strict`. Prefer types from `@prisma/client` (`Social`, `Project`) over redeclaring shapes.
- Short `//` comments explaining intent above blocks (see the route handlers).
- Remote images: Google Drive IDs → `getGoogleImage(id)`. New hosts must be added to `next.config.ts` `images.remotePatterns`.
