# SPASCLE — Frontend

Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · Tailwind CSS v4 · TypeScript.
Design rules come from `../project_documentation/ui_specification.md`.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
app/
  layout.tsx            Root layout: fonts, metadata, theme script
  globals.css           Tailwind import + @theme token mapping (the "tailwind config")
  (marketing)/          Public landing page (SCR-001)
  learn/python/         Learning area: course home, [moduleSlug]/[lessonSlug] lessons, labs placeholder
components/
  ui/                   Design-system primitives (Button, IconButton, Container, …)
  layout/               Site header/footer, learning-area shell
  theme/                ThemeScript, ThemeSync, ThemeToggle
  landing/              Landing-page sections
  learning/             code-editor/ (Monaco + Pyodide "Try it hands-on"), context/ (field
                        selectors), lesson/ (blocks, knowledge check), navigation/ (sidebar)
  shared/               Reusable app-wide pieces (CodeWindow, EmptyState, context icons)
hooks/                  Client hooks (use-theme)
lib/
  constants/            routes, site config, scientific contexts
  theme.ts              Theme preference store
  utils.ts              cn() class merger
types/                  Content types mirroring database_design.md
data/                   Static course outline and lesson content (modules 1-4) until the API exists
public/workers/         Pyodide Web Worker that runs learner code
styles/tokens.css       Raw design tokens for light and dark themes
public/images/          Static images
```

## Design tokens

Tokens live in `styles/tokens.css` (`--tk-*`, one set per theme) and are exposed as
Tailwind utilities in `app/globals.css`. **Use the utilities; don't hard-code hex values.**

| Purpose | Utilities |
|---|---|
| Surfaces | `bg-background` `bg-surface` `bg-surface-secondary` `bg-surface-elevated` |
| Text | `text-foreground` `text-foreground-secondary` `text-foreground-muted` |
| Lines | `border-border` (default) `border-border-strong` `divide-divider` |
| Primary plum | `bg-primary` + `text-on-primary`, `hover:bg-primary-hover`, `text-primary-emphasis` (links), `bg-primary-subtle` |
| Secondary gold | `bg-secondary` + `text-on-secondary` (dark text only), `text-secondary-emphasis`, `bg-secondary-subtle` |
| Status | `{success,error,warning,info}`: `-emphasis` (text), `-subtle` (bg), `-border` |
| Code | `bg-code-surface` `text-code-foreground` `border-code-border` `bg-code-inline` |
| Type scale | `text-display` `text-h1`…`text-h4` `text-body-lg` `text-body` `text-body-sm` `text-label` `text-caption` `text-code` |
| Radius | `rounded-sm` 4 · `rounded-md` 8 · `rounded-lg` 12 · `rounded-xl` 16 · `rounded-full` |
| Shadows | `shadow-xs` `shadow-sm` `shadow-md` `shadow-lg` (theme-aware) |
| Layout | `max-w-page` `max-w-reading` `h-header` `w-sidebar` |

Spacing uses Tailwind's 4px scale, which matches the spec:
XS `1` · SM `2` · MD `3` · LG `4` · XL `6` · 2XL `8` · 3XL `12` · 4XL `16` · 5XL `20`.
Breakpoints are Tailwind defaults (`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280).

**Contrast rules:** the brand plum (`#580A50`) is fine as text in light mode, but it is too dark
for dark surfaces (1.33:1), so dark mode uses a lighter plum (`#A3399A`) for fills and `#E8A6DF`
for text. Always use `text-primary-emphasis` for plum text. Never put white text on gold.

## Theming

`<html data-theme="light|dark">` controls the theme. An inline script sets it before first paint
from `localStorage["spascle-theme"]`, or from the OS preference when nothing is saved. `dark:`
variants follow the attribute. Use `<ThemeToggle />` or `useTheme()` to change it.

## Routes

Always link via `ROUTES` in `lib/constants/routes.ts`.

| Route | Page |
|---|---|
| `/` | Landing page |
| `/learn/python` | Course overview |
| `/learn/python/[moduleSlug]/[lessonSlug]` | Lesson. All 24 are prerendered; modules 5-7 show "being written" |
| `/learn/python/labs` | Guided labs: coming soon |

## Running Python in the browser

There is no backend yet. Code runs in the learner's browser with Pyodide in a module Web Worker
(`public/workers/python-worker.js`, driven by `lib/python-runner.ts`). Runs stop after 10 seconds.
Lesson content lives in `data/lessons/`. See `EXTERNAL_TOOLS.txt` for every external package and CDN.
