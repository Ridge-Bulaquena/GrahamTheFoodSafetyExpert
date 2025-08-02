# Overview

This is a full-stack React application built with Express.js backend, featuring a modern tech stack designed for scalability and maintainability. The project appears to be a food safety consulting website for Graham Ponsaran, with sections for services, testimonials, and marketing materials. The application uses a monorepo structure with separate client and server directories, shared schema definitions, and modern tooling for development and deployment.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system tokens and CSS variables for consistent theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

## Backend Architecture  
- **Runtime**: Node.js with TypeScript and ESM modules
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schema definitions between client and server using Zod
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload with tsx for rapid development iteration

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through environment variables
- **ORM**: Drizzle ORM with migrations support for schema management
- **Backup Storage**: In-memory storage implementation for development/testing
- **Session Management**: PostgreSQL-based session store for user authentication

## Authentication & Authorization
- **Session-based**: PostgreSQL session storage for persistent user sessions
- **User Schema**: Basic user table with username/password authentication
- **Validation**: Zod schemas for input validation and type safety
- **Security**: Environment-based database credentials and secure session handling

## Development & Build Pipeline
- **Bundling**: Vite for frontend, esbuild for backend production builds
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Linting**: ESLint configuration for code quality and consistency
- **Database Migrations**: Drizzle Kit for schema migrations and database management

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection Pooling**: Built-in connection pooling through Neon's serverless driver

## UI & Styling Libraries
- **Radix UI**: Complete set of accessible React components for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Beautiful icon library with consistent styling

## Development Tools
- **Replit Integration**: Cartographer plugin for Replit development environment
- **Error Handling**: Runtime error overlay for development debugging
- **Build Tools**: Vite, esbuild, and PostCSS for optimized builds

## Utility Libraries
- **date-fns**: Modern date utility library for date manipulation
- **clsx & tailwind-merge**: Class name utilities for conditional styling
- **nanoid**: Secure URL-friendly unique ID generator
- **class-variance-authority**: Type-safe variant API for component styling

## Form & Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation