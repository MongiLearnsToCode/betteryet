# Project Context for Qwen Code

This file provides essential context about the 'betteryet' project for Qwen Code to assist effectively with development tasks.

## Project Overview

This is a **Next.js 15** application, bootstrapped with `create-next-app`. The project uses the App Router and is configured with TypeScript. It integrates **Convex** as its backend for data storage and real-time features. UI components are built using **shadcn/ui**, which relies on **Tailwind CSS** for styling and **Radix UI** primitives. The project also uses **React Hook Form** for form handling and **Zod** for validation.

Key technologies:
- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui (Radix UI + Tailwind)
- **Backend**: Convex
- **State/Form Management**: React Hook Form, Zod
- **Deployment**: Vercel (standard Next.js deployment)

## Project Structure

- `src/`: Main source code directory.
- `src/app/`: Next.js App Router pages and layouts.
- `convex/`: Convex backend functions (queries, mutations).
- `public/`: Static assets.
- `components/`: (Likely, based on shadcn) Reusable UI components.
- `lib/`: (Likely, based on shadcn) Utility functions.
- Configuration files: `next.config.ts`, `tsconfig.json`, `tailwind.config.js` (likely), `components.json` (shadcn config).

## Building and Running

- **Development Server**: `pnpm dev` (uses Turbopack)
- **Build**: `pnpm build` (uses Turbopack)
- **Start (Production)**: `pnpm start`
- **Linting**: `pnpm lint`

*(Inferred from `package.json` scripts. The project uses `pnpm` as the package manager, evident from `pnpm-lock.yaml`.)*

## Development Conventions

- **TypeScript**: Strict mode is enabled (`tsconfig.json`).
- **Styling**: Tailwind CSS is the primary styling method. shadcn/ui components should be used for UI elements where appropriate.
- **Backend**: Convex is used for data persistence and real-time updates. Backend logic resides in the `convex/` directory.
- **Component Library**: shadcn/ui components are configured and should be the preferred way to build UI.
- **Routing**: Uses the Next.js App Router (`src/app` directory structure).
- **Fonts**: Uses `next/font` to optimize and load the Geist font family.