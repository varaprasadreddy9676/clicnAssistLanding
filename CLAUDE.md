# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application built with Vite, shadcn/ui components, and Tailwind CSS. It's a landing page for ClinicAssist, a healthcare consultation platform.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture & Structure

### Tech Stack
- **Vite** - Build tool and development server
- **React 18** - UI framework with TypeScript
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Zod** - Schema validation
- **React Hook Form** - Form handling

### Project Structure
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

### Key Configuration
- **Path alias**: `@` maps to `./src` for clean imports
- **TypeScript**: Configured with relaxed strictness settings
- **Development server**: Runs on port 8080 with host binding to `::`
- **Lovable integration**: Component tagging enabled in development mode

### Component Architecture
The landing page is composed of modular sections:
- **Hero** - Main hero section with CTA
- **Problem** - Problem statement
- **Solution** - Solution overview  
- **Features** - Key features showcase
- **InteractiveDemo** - Interactive demonstration
- **Impact** - Impact metrics and testimonials
- **Roadmap** - Development roadmap
- **Team** - Team information
- **FAQ** - Frequently asked questions
- **Footer** - Site footer

### Routing
Single-page application with React Router:
- `/` - Main landing page
- `*` - 404 catch-all route

Add new routes above the catch-all route in `App.tsx`.