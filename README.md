# SJONWORLD

A production-ready, intentionally simple coming-soon website for SJONWORLD. It
collects launch-notification emails through a validated API endpoint and stores
them in Sanity for administrators to view in a standalone Sanity Studio.

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript and Tailwind CSS v4
- Sanity CMS and Sanity Studio
- React Hook Form and Zod
- Sonner notifications
- ESLint and Prettier
- Bun

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) 1.2 or newer
- A Sanity project with a dataset

Install dependencies:

```bash
bun install
```

Copy the environment template:

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`, then run the website:

```bash
bun dev
```

The site is available at `http://localhost:3000`.

Run Sanity Studio in a second terminal:

```bash
bun studio
```

The Studio is available at `http://localhost:3333`.

## Environment variables

| Variable                        | Required | Description                                                   |
| ------------------------------- | -------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes      | Sanity project ID                                             |
| `NEXT_PUBLIC_SANITY_DATASET`    | Yes      | Dataset name, usually `production`                            |
| `SANITY_API_TOKEN`              | Yes      | Server-only token with document write access                  |
| `SANITY_API_VERSION`            | Yes      | Pinned Sanity API date, for example `2026-07-29`              |
| `NEXT_PUBLIC_SITE_URL`          | No       | Canonical production URL; defaults to `https://sjonworld.com` |

Never expose `SANITY_API_TOKEN` to the browser or commit `.env.local`.

## Sanity setup

1. Create a project and dataset at [sanity.io/manage](https://www.sanity.io/manage).
2. Create an API token with Editor permissions and add it as
   `SANITY_API_TOKEN`.
3. Add `http://localhost:3000` and your Vercel production URL to the project's
   CORS origins.
4. Start Studio with `bun studio`, sign in, and use the **Subscribers** view.

Subscriber documents are read-only in Studio and can only be created through
the API. Emails are trimmed and lowercased before storage. The API performs a
case-insensitive lookup and uses an email-derived document ID as an atomic
second guard against concurrent duplicate submissions.

## Available commands

```bash
bun dev             # Start Next.js locally
bun run build       # Create a production build
bun start           # Run the production build
bun run lint        # Run ESLint
bun run format      # Format files
bun run format:check
bun studio          # Start Sanity Studio
bun run studio:build
```

## Deploying to Vercel

1. Import the repository into Vercel.
2. Select Bun as the package manager (the `packageManager` field is configured).
3. Add all required environment variables to the Vercel project.
4. Deploy using the default Next.js build settings.
5. Add the production URL to the Sanity project's CORS origins.

Sanity Studio is a standalone app. It can be run locally for a small team or
built with `bun run studio:build` and deployed separately with Sanity's hosting
or another static host.

## Folder structure

```text
src/
├── app/                  # Pages, metadata routes, and subscription API
├── components/           # Reusable server and client UI components
├── lib/                  # Validation and shared utilities
└── sanity/               # Server client, environment helpers, and queries
studio/
├── schemaTypes/          # Subscriber content model
├── sanity.config.ts      # Studio configuration
├── sanity.cli.ts         # Sanity CLI configuration
└── structure.ts          # Administrator desk structure
```
