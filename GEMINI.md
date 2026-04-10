# Will-Portfolio (Portfolio of Thanh Nha (Will) Phan)

A personal portfolio and interactive library website built using Next.js, TypeScript, and Prisma. This project showcases professional experience, tech skills, personal blogs, and travel experiences.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), and Custom CSS
- **Storage:** [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- **State Management:** [TanStack React Query](https://tanstack.com/query/latest)
- **Icons:** [FontAwesome](https://fontawesome.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **Libraries:** `@willphan1712000/frontend`, `@willphan1712000/w`, `Axios`, `PrismJS` (for code highlighting)

## 📁 Project Structure

- `app/`: Main application logic using Next.js App Router.
  - `api/`: Backend API routes for authentication, main data, and avatar uploads.
  - `auth/`: AuthProvider for wrapping the app with session context.
  - `blog/`: Personal blog pages and content.
  - `components/`: Reusable UI components (Logo, Navbar, Footer, etc.).
  - `context/`: Application context for state management.
  - `css/`: Global and page-specific CSS styles.
  - `static/`: Static configuration and constant data.
  - `travel/`: Travel collection gallery and components.
  - `upload/`: Page for uploading avatars to Vercel Blob.
  - `w/`: "Will Library" - an interactive showcase of UI components, API, and skills.
- `prisma/`: Database schema and migration files.
- `public/`: Static assets (images, icons, etc.).

## 🏗 Key Components & Features

### Home Page
Displays introductory content, professional experience, and full-stack journey.

### Will Library (`/w`)
An interactive section sharing TypeScript projects with examples of:
- UI components
- API handling
- Async State Management
- Usability functions

### Blog Page
A space for sharing personal stories and professional insights.

### Travel Collection
A gallery of travel experiences organized by location (GA, IL, NC, TN).

### Avatar Upload
A feature for uploading files directly to Vercel Blob via `/api/avatar/upload`.

## 🛠 Database Schema

The Prisma schema includes standard NextAuth models (`User`, `Account`, `Session`, `VerificationToken`, `Authenticator`) and custom portfolio models:
- **Social:** Stores social media links (Facebook, Instagram, GitHub, LinkedIn, YouTube, Resume).
- **Project:** Stores project details (ID, Email, Name, URL).

## 🔧 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality.

## 📝 Configuration

- `next.config.ts`: Next.js specific configuration.
- `tailwind.config.ts`: Tailwind CSS theme and plugin setup.
- `tsconfig.json`: TypeScript compiler options.
- `app/static/config.ts`: Global application constants like primary/secondary colors.
