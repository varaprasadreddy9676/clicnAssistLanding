# ClinicAssist Demo Landing Page

This is a demo landing page for ClinicAssist, a healthcare consultation platform concept for hackathons.

## Project Overview

A modern, responsive landing page showcasing a healthcare consultation platform with interactive demonstrations, feature highlights, and team information.

## How to Run

### Prerequisites
- Node.js and npm installed

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will run on http://localhost:8080

## Tech Stack

- **Vite** - Build tool and development server
- **React 18** - UI framework with TypeScript
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Zod** - Schema validation
- **React Hook Form** - Form handling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── *.tsx           # Page sections (Hero, Features, etc.)
├── pages/              # Route components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── assets/             # Static assets (images, etc.)
└── main.tsx           # Application entry point
```

## Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.