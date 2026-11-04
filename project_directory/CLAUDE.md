# CLAUDE.md — Next.js Development Guidelines

These instructions define the coding standards, architectural principles, design conventions, documentation practices, and security requirements for this project.

## 1. Technology Stack

The primary technology stack is:

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Frontend:** React
- **Icons:** Lucide React (unless the project already uses another icon library)
- **Form Validation:** Zod where appropriate
- **Component Variants:** CVA (Class Variance Authority) where appropriate
- **Package Manager:** Follow the existing project lockfile and package manager.

Use the versions and configurations already established in the project. Do not upgrade major dependencies or change configurations without a valid reason.

---

## 2. General Development Principles

- Write clean, readable, modular, and maintainable code.
- Prioritize simplicity over unnecessary complexity.
- Follow DRY, KISS, and SOLID principles where applicable.
- Maintain separation of concerns.
- Avoid unnecessary abstractions and overengineering.
- Reuse existing components, hooks, utilities, and services.
- Follow established project conventions.
- Avoid duplicating business logic.
- Do not introduce dependencies when existing tools can achieve the same result.
- Consider maintainability, performance, accessibility, and security when implementing features.
- Ensure new implementations integrate properly with existing functionality.

## 3. Naming Conventions

Use descriptive and meaningful names throughout the project.

- Use `camelCase` for variables, functions, hooks, and object properties.
- Use `PascalCase` for React components, interfaces, classes, and types.
- Use `UPPER_SNAKE_CASE` for fixed global constants where appropriate.
- React component filenames should use PascalCase or follow the existing project convention.
- Custom hooks must start with `use`.
- Boolean variables should communicate a true/false condition.

Avoid vague names such as `data`, `temp`, `item`, `value`, or `result` when more descriptive alternatives are appropriate.

Examples:

```typescript
// Good
const userAccountDetails = await getUserAccount();
const isAuthenticated = true;

function calculateTotalPrice() {}

// Avoid
const d = await getUser();
const flag = true;

function calc() {}
```

## 4. Next.js Architecture and Best Practices

### App Router

- Use the Next.js App Router conventions.
- Organize routes using the `app` directory.
- Follow Next.js conventions for `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts`.
- Use route groups where they improve organization without affecting URL structures.
- Use dynamic routes appropriately.
- Keep layouts focused on shared page structure.
- Avoid unnecessarily duplicating layouts and page-level logic.

### Server Components and Client Components

**Server Components should be the default.**

- Prefer Server Components for pages, layouts, data fetching, and components that do not require browser interactivity.
- Use `"use client"` only when necessary.
- Client Components should be used for React state, event handlers, browser APIs, effects, and interactive functionality.
- Keep Client Components as small and focused as possible.
- Avoid unnecessarily converting entire pages or layouts into Client Components.
- Extract interactive sections into smaller Client Components when practical.
- Never import server-only modules into Client Components.
- Never expose secrets or privileged operations to client-side code.

### Data Fetching

- Prefer fetching data on the server when appropriate.
- Avoid unnecessary client-side fetching when server-side fetching provides a better solution.
- Avoid duplicate API requests and unnecessary waterfalls.
- Use parallel data fetching when independent requests can run concurrently.
- Use appropriate caching and revalidation strategies.
- Understand the caching behavior of the installed Next.js version before implementing caching.
- Do not assume that all fetch requests should be cached.
- Handle loading, empty, success, and error states appropriately.
- Avoid fetching the same data repeatedly across nested components when it can be shared efficiently.

### Server Actions and Route Handlers

- Use Server Actions for appropriate mutations initiated by application interfaces.
- Use Route Handlers when implementing HTTP endpoints or integrations that require them.
- Validate all incoming data on the server.
- Authenticate and authorize sensitive operations.
- Never assume that hiding a button or restricting a frontend route provides security.
- Return consistent response structures.
- Handle expected errors without exposing internal implementation details.
- Avoid putting unrelated business logic directly inside Server Actions or Route Handlers.

### Navigation

- Use `next/link` for internal navigation.
- Use `next/navigation` for App Router navigation utilities.
- Use redirects and navigation methods appropriately.
- Avoid unnecessary full-page reloads.
- Implement appropriate loading and navigation states.

## 5. TypeScript Standards

- Use TypeScript throughout the application.
- Prefer strong typing over loosely typed implementations.
- Avoid `any`. Use `unknown` when the type is genuinely unknown, followed by appropriate narrowing or validation.
- Define reusable interfaces and types for important data structures.
- Use appropriate types for component props, function parameters, and return values.
- Avoid unnecessary type assertions.
- Handle nullable and optional values explicitly.
- Use discriminated unions where they improve type safety.
- Keep API request and response types consistent.
- Avoid duplicating type definitions.
- Extract shared types into appropriate locations.
- Use `import type` for type-only imports where appropriate.
- Do not use TypeScript types as a substitute for runtime validation of external data.

## 6. UI Components and shadcn/ui

**shadcn/ui should be the primary foundation for the application's UI components.**

### Component Usage

- Before creating a UI component from scratch, check whether shadcn/ui already provides an appropriate component.
- Prefer existing shadcn/ui components for buttons, dialogs, dropdowns, forms, inputs, selects, tables, tabs, tooltips, alerts, sheets, and other common UI elements.
- Do not unnecessarily introduce another component library.
- Customize shadcn/ui components whenever necessary to match the project's design specifications.
- Customization should preserve accessibility, usability, and the underlying component behavior.
- Avoid using default shadcn/ui styling everywhere without considering the application's visual identity.
- Maintain consistent component styling across the application.

### Customizing Components

When customizing shadcn/ui components:

- Modify the relevant component in the project's `components/ui` directory when appropriate.
- Use Tailwind CSS for styling.
- Preserve existing functionality and accessibility.
- Use CVA for components that have multiple meaningful visual variants.
- Use shared design tokens rather than repeatedly hardcoding colors, spacing, and other design values.
- Avoid creating multiple slightly different versions of the same component.
- Prefer extending an existing component over duplicating it.
- Do not overwrite customized components with default shadcn/ui implementations when adding new components.

### Reusable Components

Organize components according to their responsibilities.

Suggested structure:

```text
components/
├── ui/                 # shadcn/ui and customized primitives
├── layout/             # Navbar, sidebar, footer, etc.
├── shared/             # Reusable application-wide components
└── features/           # Feature-specific components
```

Use this structure as a guideline, not a requirement. Adapt it to the project's existing architecture.

- Keep components focused on a single responsibility.
- Avoid excessively large components.
- Extract reusable UI logic when appropriate.
- Avoid creating components for trivial markup that is unlikely to be reused.
- Keep feature-specific components close to their relevant feature when appropriate.
- Avoid deeply nested component structures.

## 7. Tailwind CSS and Styling

Tailwind CSS should be the primary styling approach.

### General Styling Rules

- Use Tailwind utility classes for most styling.
- Avoid unnecessary custom CSS.
- Avoid inline styles unless dynamic styling genuinely requires them.
- Do not introduce CSS modules or additional styling systems without a clear reason.
- Keep styling consistent throughout the application.
- Use responsive utility classes to support different screen sizes.
- Avoid arbitrary values when existing design tokens or standard Tailwind utilities can achieve the same result.
- Avoid excessively long and unreadable class strings; extract reusable components or variants when appropriate.

### Design Consistency

- Establish consistent colors, typography, spacing, border radii, shadows, and layout patterns.
- Use CSS variables and design tokens for shared values.
- Avoid hardcoding the same colors repeatedly.
- Maintain consistency between related pages and components.
- Use the existing project's design system as the source of truth.
- Do not introduce random colors, gradients, shadows, or typography styles that conflict with the established visual identity.

### Responsive Design

Every user-facing interface should work properly across:

- Mobile devices.
- Tablets.
- Laptops.
- Desktop screens.

Requirements:

- Follow a mobile-first approach where appropriate.
- Avoid horizontal overflow.
- Ensure navigation works on smaller screens.
- Ensure dialogs, tables, forms, and other interactive elements remain usable on mobile.
- Use responsive layouts rather than simply shrinking desktop layouts.
- Test important layouts at different viewport sizes.

### Class Management

- Use the existing `cn()` utility for conditional and merged Tailwind classes when available.
- Use `clsx` and `tailwind-merge` through the existing utility where appropriate.
- Use CVA for reusable component variants.
- Avoid complicated conditional class expressions repeated across multiple components.

## 8. Design and User Experience

The interface should feel intentional, consistent, and professionally designed.

- Prioritize usability and clarity.
- Maintain visual hierarchy through typography, spacing, and layout.
- Use consistent alignment and spacing.
- Avoid unnecessary visual clutter.
- Avoid excessive animations and decorative effects.
- Use animations only when they improve the user experience.
- Provide clear hover, focus, active, disabled, and loading states.
- Ensure interactive elements communicate their purpose.
- Use appropriate empty states when there is no data.
- Provide meaningful feedback after successful or unsuccessful actions.
- Avoid generic placeholder interfaces when the project has established design specifications.
- Follow the supplied designs, screenshots, references, and product requirements closely.

### Forms

- Use appropriate form components from shadcn/ui.
- Use React Hook Form and Zod when form complexity justifies them or when they are already part of the project.
- Validate forms on both the client and server.
- Display clear field-level validation errors.
- Prevent duplicate submissions where appropriate.
- Provide loading and success states.
- Preserve user input when validation fails.
- Use appropriate input types and autocomplete attributes.

### Accessibility

- Use semantic HTML elements.
- Ensure keyboard navigation works.
- Provide accessible labels for form controls.
- Use appropriate ARIA attributes when necessary.
- Maintain visible focus indicators.
- Ensure sufficient color contrast.
- Do not rely exclusively on color to communicate information.
- Provide meaningful alternative text for informative images.
- Ensure dialogs, dropdowns, menus, and other interactive components are keyboard accessible.
- Prefer native semantic elements and accessible shadcn/ui primitives over custom implementations.

## 9. Code Comments and Documentation

Avoid unnecessary comments.

**Do not explain every line of code through comments.** Code should be self-explanatory through good naming, structure, and organization.

Document functions, methods, reusable utilities, and complex components appropriately.

Documentation should explain:

- Purpose: What the function or component does.
- Usage: How and when it should be used.
- Parameters: Parameter names, types, and descriptions.
- Returns: What it returns, including the return type or structure.
- Exceptions: Important errors it may throw, where applicable.

Use JSDoc for TypeScript documentation.

Example:

```typescript
/**
 * Retrieves a user's profile using their unique identifier.
 *
 * @param userId - The unique identifier of the user.
 * @returns The user profile if found, otherwise null.
 *
 * @example
 * const profile = await getUserProfile("user-123");
 */
async function getUserProfile(
  userId: string
): Promise<UserProfile | null> {
  // Implementation
}
```

For React components, document non-obvious props and important component behavior.

Use inline comments only when explaining:

- Complex business logic.
- Non-obvious implementation decisions.
- Important workarounds.
- Security-sensitive operations.
- Complex algorithms.

Avoid redundant comments that simply restate the code.

## 10. Project Organization

Maintain a logical and consistent directory structure.

A suggested structure:

```text
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── shared/
│   └── features/
│
├── hooks/
├── lib/
│   ├── utils.ts
│   ├── validations/
│   └── constants/
│
├── services/
├── types/
└── config/
```

Adapt the structure to the actual project. Do not force this structure onto an existing application that already has a sensible architecture.

Responsibilities:

- `app/`: Routes, layouts, pages, loading states, error boundaries, and route handlers.
- `components/ui/`: shadcn/ui primitives and customized UI components.
- `components/shared/`: Reusable application-wide components.
- `components/features/`: Feature-specific UI components.
- `hooks/`: Reusable custom React hooks.
- `lib/`: Utilities, helpers, and shared infrastructure.
- `services/`: Business operations and external service integrations.
- `types/`: Shared TypeScript types.
- `config/`: Application configuration.
- `validations/`: Reusable Zod schemas and validation logic.

Avoid unnecessary file fragmentation. Organize files according to actual responsibilities.

## 11. Security Best Practices

Security is a core requirement, not an optional improvement.

### Input Validation

- Validate all untrusted input on the server.
- Use Zod or an appropriate schema validation library.
- Never trust frontend validation alone.
- Validate query parameters, request bodies, URL parameters, uploaded files, and external API responses.
- Enforce appropriate input length and format restrictions.
- Prevent SQL injection using parameterized queries or safe ORM methods.
- Avoid unsafe HTML rendering.
- Sanitize user-generated content when it must be rendered as HTML.

### Authentication and Authorization

- Use established authentication libraries or providers.
- Never implement custom cryptographic authentication mechanisms.
- Never store passwords in plain text.
- Use secure password hashing such as Argon2id or bcrypt when managing passwords directly.
- Enforce authorization on the server for every protected operation.
- Do not rely on frontend route protection as an authorization mechanism.
- Apply role-based or permission-based access control where appropriate.
- Follow the principle of least privilege.
- Secure session management and cookie configuration.
- Apply rate limiting to sensitive authentication endpoints.

### Environment Variables and Secrets

- Never hardcode secrets or credentials.
- Use environment variables for sensitive configuration.
- Keep `.env` files out of version control.
- Maintain a `.env.example` containing placeholder values.
- Validate required environment variables during application initialization where appropriate.
- Never expose private environment variables through `NEXT_PUBLIC_` variables.
- Only use `NEXT_PUBLIC_` for values that are explicitly safe to expose to browsers.
- Never return secrets in API responses or log them.

### API and Server Security

- Authenticate and authorize protected operations.
- Apply rate limiting to sensitive endpoints.
- Configure CORS using explicitly trusted origins when needed.
- Implement CSRF protection where applicable.
- Avoid exposing stack traces and internal errors to users.
- Use secure HTTP headers.
- Set appropriate cookie security attributes.
- Validate file uploads by size, type, and actual content where appropriate.
- Set request timeouts for external service calls.
- Avoid unrestricted redirects using untrusted URLs.
- Protect against server-side request forgery (SSRF) when fetching user-supplied URLs.
- Never expose privileged server functionality through publicly accessible endpoints without authorization.

### React and Next.js Security

- Do not use `dangerouslySetInnerHTML` with untrusted content.
- Avoid unsafe URL handling.
- Do not expose server-only modules or secrets to Client Components.
- Use `server-only` to protect modules that must never enter the client bundle when appropriate.
- Treat Server Actions as publicly reachable entry points that require validation and authorization.
- Do not assume that Server Actions are secure simply because they execute on the server.
- Avoid leaking sensitive information through error messages, rendered props, or serialized data.
- Follow current Next.js security recommendations.

### Database Security

- Use parameterized queries.
- Apply appropriate database access permissions.
- Validate data before database operations.
- Use transactions for related operations that must succeed or fail together.
- Avoid returning sensitive database fields to clients.
- Apply appropriate constraints and indexes.
- Never expose database credentials to frontend code.

### Dependency Security

- Prefer trusted and actively maintained packages.
- Avoid unnecessary dependencies.
- Check for known vulnerabilities.
- Do not install suspicious or unverified packages.
- Keep dependencies updated when appropriate.
- Review dependency changes for breaking changes and security implications.

## 12. Performance Optimization

- Minimize unnecessary Client Components.
- Avoid unnecessary React state and effects.
- Prevent unnecessary component re-renders.
- Use appropriate memoization only when it provides a meaningful benefit.
- Use Next.js Image for image optimization where appropriate.
- Use Next.js Font optimization for local or supported remote fonts.
- Optimize large images and other assets.
- Use dynamic imports for expensive components when appropriate.
- Avoid unnecessary JavaScript sent to the browser.
- Use pagination for large datasets.
- Optimize database queries.
- Avoid repeated API requests.
- Use appropriate caching and revalidation.
- Avoid premature optimization.

## 13. SEO and Metadata

For public-facing pages:

- Implement appropriate page titles and descriptions.
- Use Next.js Metadata API.
- Add Open Graph and social sharing metadata where appropriate.
- Use semantic HTML.
- Ensure important page content is accessible to search engines.
- Use canonical URLs where necessary.
- Generate sitemap and robots files where applicable.
- Add structured data when relevant to the application's content.
- Use descriptive image alternative text.
- Avoid duplicate page metadata.

## 14. Error Handling and Application States

Implement appropriate states for all important user interactions.

- Loading states.
- Error states.
- Empty states.
- Success states.
- Disabled states.
- Validation states.

Use Next.js error boundaries and `error.tsx` where appropriate.

Additional requirements:

- Never silently swallow unexpected errors.
- Avoid exposing internal errors to users.
- Log meaningful diagnostic information on the server.
- Do not log passwords, tokens, or sensitive personal information.
- Provide understandable feedback to users.
- Handle network failures and external service errors gracefully.
- Maintain consistent error response structures.

## 15. Testing and Code Quality

- Write tests for important business logic.
- Test critical application functionality.
- Test authentication and authorization.
- Test important form validation and submission flows.
- Test edge cases and failure scenarios.
- Use the testing tools already established in the project.
- Prefer appropriate tools such as Vitest, Jest, React Testing Library, and Playwright depending on the testing requirements.
- Run linting, formatting, type checking, and relevant tests after changes.
- Fix existing failures caused by your modifications.
- Never remove tests simply to make a test suite pass.
- Do not claim tests have passed unless they were actually executed successfully.

## 16. Git and Version Control

- do not make any git commits. I will make them myself.

## 17. Instructions Before Implementing Features

Before implementing a new feature or modifying existing functionality:

1. Inspect the relevant project files.
2. Understand the existing architecture and conventions.
3. Identify existing components, utilities, hooks, and services that can be reused.
4. Check whether shadcn/ui already provides the required UI component.
5. Understand the feature requirements and expected user experience.
6. Consider security, validation, accessibility, and performance implications.
7. Implement the simplest maintainable solution.
8. Test the implementation.
9. Review the final changes for correctness, consistency, and unintended side effects.

### When Working With Existing Code

- Do not rewrite entire files when focused modifications are sufficient.
- Do not replace existing implementations without understanding their purpose.
- Do not introduce unnecessary architectural changes.
- Preserve existing functionality.
- Avoid changing unrelated files.
- Do not overwrite customized shadcn/ui components.
- Follow the existing project's design system.
- If requirements are unclear and materially affect implementation, ask for clarification rather than making risky assumptions.

## 18. Final Quality Checklist

Before considering a task complete, verify the following:

### Code Quality
- [ ] Code is clean, readable, and modular.
- [ ] Descriptive camelCase variable and function names are used.
- [ ] Functions are properly documented where appropriate.
- [ ] No unnecessary comments or duplicated logic.
- [ ] TypeScript types are properly defined.
- [ ] No unnecessary dependencies or abstractions.

### Next.js and React
- [ ] Server Components are used by default.
- [ ] Client Components are used only when necessary.
- [ ] Data fetching and caching are appropriate.
- [ ] Navigation follows Next.js conventions.
- [ ] Loading and error states are handled.

### UI and Styling
- [ ] Existing shadcn/ui components are reused where appropriate.
- [ ] Customized components follow the project's design system.
- [ ] Tailwind CSS is used consistently.
- [ ] Layouts are responsive.
- [ ] Accessibility requirements are considered.
- [ ] Interactive elements have appropriate states.

### Security
- [ ] External inputs are validated server-side.
- [ ] Authentication and authorization are enforced.
- [ ] Secrets are protected.
- [ ] API endpoints and Server Actions are secured.
- [ ] Sensitive data is not exposed.
- [ ] Database operations are safe.

### Testing
- [ ] Relevant tests have been executed.
- [ ] Type checking and linting have been performed.
- [ ] No unintended regressions have been introduced.

---

## Final Development Principle

Build applications that are not only functional but also professionally engineered.

Prioritize **clean architecture, maintainability, security, accessibility, performance, consistent design, and a good user experience.**

Write code that another developer can understand, maintain, debug, and extend without having to reverse-engineer your intentions.

Always understand the existing project before changing it. Implement only what is necessary, but implement it properly.

## 19. Supabase Authentication and Database Guidelines

Supabase is the application's primary backend infrastructure for authentication, PostgreSQL database operations, and related backend services.

Follow Supabase and Next.js integration best practices.

### 19.1 Supabase Client Configuration

- Use `@supabase/supabase-js` and `@supabase/ssr`.
- Follow the official Supabase SSR approach for Next.js App Router.
- Maintain separate Supabase client utilities for browser and server environments.
- Organize Supabase utilities in a dedicated directory, preferably `lib/supabase/`.
- Use `createBrowserClient` for Client Components.
- Use `createServerClient` for Server Components, Server Actions, and Route Handlers.
- Create server clients per request. Never share a user-scoped Supabase client globally across requests.
- Use the appropriate Next.js session-refresh mechanism (`proxy.ts` in Next.js 16+, or `middleware.ts` in earlier versions).
- Follow the official cookie handling implementation, including correct `getAll` and `setAll` behavior.
- Do not create multiple competing authentication or session-management implementations.
- Keep browser and server Supabase clients separate.

### 19.2 Authentication and Session Management

- Use Supabase Auth for authentication and session management.
- Use Supabase's supported authentication methods rather than implementing custom authentication mechanisms.
- Verify authenticated users on the server before granting access to protected resources.
- Use `supabase.auth.getClaims()` to verify JWT claims in server-side authentication checks.
- Use `supabase.auth.getUser()` when a fresh, server-confirmed user record is required.
- Do not rely on `supabase.auth.getSession()` alone to verify a user's identity in server-side authorization decisions.
- Never trust user IDs supplied by the frontend without verifying the authenticated identity.
- Implement appropriate login, registration, logout, password recovery, and email verification flows where required.
- Handle expired sessions and token refreshes correctly.
- Provide appropriate authentication loading and error states.
- Redirect unauthenticated users appropriately without exposing protected content.
- Ensure logout properly terminates the session.
- Never expose access tokens or refresh tokens unnecessarily.

### 19.3 Authorization and Row Level Security (RLS)

**Row Level Security is mandatory for tables exposed through the Supabase Data API.**

- Enable RLS on every application table exposed through the Data API.
- Never assume that authentication automatically provides authorization.
- Create explicit RLS policies for `SELECT`, `INSERT`, `UPDATE`, and `DELETE` operations as required.
- Apply policies based on the authenticated user and their permissions.
- Use `auth.uid()` to identify the authenticated user inside appropriate database policies.
- Ensure users can only access records they are authorized to access.
- Enforce ownership checks when users create, update, or delete their own records.
- Implement role-based permissions where necessary.
- Do not assume that hiding frontend buttons or protecting routes prevents unauthorized database access.
- Test RLS policies using different user identities and roles.
- Ensure related tables and database relationships do not introduce unintended data access.
- Review RLS policies whenever database schemas or application permissions change.

Never disable RLS simply to make an application feature work.

### 19.4 Database Design and Management

Follow sound PostgreSQL database design principles.

- Use appropriate data types.
- Define primary keys and foreign keys.
- Apply appropriate `NOT NULL`, `UNIQUE`, and `CHECK` constraints.
- Use indexes for frequently queried and filtered columns where justified.
- Avoid unnecessary indexes.
- Establish clear relationships between tables.
- Avoid unnecessary duplication of data.
- Use database constraints to protect data integrity.
- Use transactions for operations involving multiple related database changes.
- Use database functions or triggers only when they provide a clear benefit.
- Avoid placing excessive business logic inside database triggers.
- Use consistent naming conventions for tables, columns, functions, and policies.
- Use `snake_case` for PostgreSQL table and column names.
- Design queries to retrieve only the fields required.
- Avoid unnecessary database round trips and N+1 query patterns.

### 19.5 Database Migrations

- Manage database schema changes through version-controlled Supabase migrations.
- Never make undocumented production schema changes.
- Create migrations for new tables, columns, indexes, constraints, functions, triggers, and RLS policies.
- Ensure migrations are repeatable and properly ordered.
- Review migration SQL before applying it.
- Avoid destructive schema changes without understanding their impact.
- Preserve existing data when modifying schemas.
- Use seed files for development and test data where appropriate.
- Never put real production credentials or sensitive user data in migrations or seed files.
- Keep the database schema and TypeScript database types synchronized.

### 19.6 Type Safety and Database Types

- Generate TypeScript database types using the Supabase CLI.
- Store generated types in a dedicated location, such as `types/database.types.ts`.
- Use generated database types when initializing Supabase clients.
- Avoid manually duplicating database table definitions in TypeScript.
- Regenerate database types after relevant schema changes.
- Use appropriate `Row`, `Insert`, and `Update` types.
- Avoid unnecessary `any` and unsafe type assertions.
- Validate external input at runtime even when TypeScript types exist.

### 19.7 Supabase Data Access and Services

- Keep database access organized and reusable.
- Separate data access operations from UI components.
- Use service or repository modules for reusable database operations where appropriate.
- Avoid placing complex database queries directly inside UI components.
- Prefer server-side database access for sensitive operations.
- Use browser-side access only when appropriate and protected by RLS.
- Return consistent data structures from reusable service functions.
- Handle Supabase errors explicitly.
- Check both the returned data and error from Supabase operations.
- Avoid silently ignoring failed database operations.
- Use pagination for large datasets.
- Avoid fetching unnecessary columns or records.
- Never assume a database operation succeeded without checking its result.

### 19.8 Supabase Storage

When using Supabase Storage:

- Configure appropriate storage bucket policies.
- Keep private files in private buckets.
- Use signed URLs for temporary access to private files.
- Validate uploaded file types and sizes.
- Do not rely solely on filename extensions for file validation.
- Apply appropriate upload and download permissions.
- Restrict users to authorized file paths and records.
- Avoid publicly exposing sensitive documents.
- Never assume that a file is private simply because its URL is difficult to guess.

### 19.9 Supabase Realtime

When using Supabase Realtime:

- Subscribe only to the events and tables required.
- Ensure subscriptions respect authorization and RLS.
- Clean up subscriptions when components unmount.
- Avoid creating duplicate subscriptions.
- Handle connection failures and reconnections appropriately.
- Avoid sending sensitive information through unnecessarily broad subscriptions.
- Use Realtime only when the feature genuinely requires live updates.

### 19.10 Environment Variables and Keys

Use environment variables for Supabase configuration.

Typical configuration:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

# Server-side only, when privileged operations are required.
SUPABASE_SECRET_KEY=
```

Security requirements:

- The Supabase URL and publishable key may be exposed to the browser.
- Never expose secret keys or legacy service role keys to Client Components.
- Never prefix privileged secrets with `NEXT_PUBLIC_`.
- Use the publishable key for normal application access.
- Use secret or service-role credentials only for explicitly privileged server-side operations.
- Keep privileged clients isolated from normal user-scoped clients.
- Never use a privileged client to bypass RLS for ordinary user operations.
- Validate required environment variables.
- Never commit real environment variable values.

### 19.11 Administrative Operations

For operations requiring elevated database privileges:

- Use a separate server-only administrative Supabase client.
- Restrict administrative operations to trusted server-side code.
- Verify administrative permissions before executing privileged actions.
- Never allow frontend-controlled input alone to determine administrative privileges.
- Avoid exposing administrative database operations through unrestricted API endpoints.
- Log important administrative actions without recording sensitive credentials or tokens.
- Prefer narrowly scoped database permissions and operations.

### 19.12 Supabase Security Review

Before implementing or modifying Supabase functionality, verify:

- RLS is enabled where required.
- Appropriate policies exist for all relevant operations.
- User identity is verified server-side.
- Authorization is enforced independently of the frontend.
- Sensitive keys remain server-side.
- Database inputs are validated.
- Queries do not expose unauthorized records.
- Storage policies are configured appropriately.
- Database migrations are included when the schema changes.
- TypeScript database types are synchronized.
- Errors are handled without leaking sensitive information.

**Important:** Supabase RLS is a critical security boundary. Never treat frontend authentication, route protection, or hidden UI elements as substitutes for database authorization.