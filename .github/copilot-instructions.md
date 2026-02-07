# Genesis-NG - AI Coding Agent Instructions

## Project Overview
Angular 19 multi-template landing page system with PrimeNG UI components, Tailwind CSS + PrimeUI plugin, and standalone components architecture. No traditional NgModules - everything uses standalone components.

## Architecture Patterns

### Page Structure (Critical)
Each page template follows a **component composition pattern** with this structure:
```
src/app/pages/{template-name}/
  ├── index.ts          # Page container component (imports & orchestrates child components)
  └── components/       # Page-specific section components (hero, features, testimonials, etc.)
```

**Example from** [startup/index.ts](../src/app/pages/startup/index.ts):
- Container component imports all section components
- Template is a simple list of child components: `<startup-hero />`, `<startup-analytics />`, etc.
- Each section is a self-contained standalone component
- Footer components from `@/layout/components` are reused across templates

### Path Aliases
Use `@/*` imports for all `src/app/*` paths (configured in [tsconfig.json](../tsconfig.json)):
```typescript
import { AppNavbar } from "@/layout/components/app.navbar";
import { LayoutService } from "@/layout/service/layout.service";
```

### Shared Layout Components
Reusable UI components in [src/app/layout/components/](../src/app/layout/components/):
- `app.navbar.ts` - Navigation with dropdown menus
- `app.footer.ts` / `app.footerwithcta.ts` - Footer variants
- `animatedcontainer.ts` - Wrapper for scroll animations (uses IntersectionObserver)
- Icon components in `icon/` subdirectory

### Component Naming Convention (ESLint Enforced)
- **Component class**: No suffix required (e.g., `Startup`, not `StartupComponent`)
- **Selector prefix**: Must start with `p-` for elements, `p` prefix for attributes
- **File naming**: Lowercase with hyphens if multi-word (e.g., `app.navbar.ts`)
- See [eslint.config.js](../eslint.config.js) for enforcement rules

### Styling Approach
1. **Tailwind utility classes** in templates (primary approach)
2. **Custom CSS properties** for theme colors/shadows via `--gradient-background`, `--card-shadow` etc.
3. **`twMerge()`** function for conditional/dynamic class merging (imported from `tailwind-merge`)
4. **PrimeNG components** styled via Tailwind (configured in [tailwind.config.js](../tailwind.config.js))

## State Management
**LayoutService** ([layout.service.ts](../src/app/layout/service/layout.service)) uses Angular signals:
- `isDarkTheme()` - Theme mode
- `isWide()` - Hero container display mode
- `isDesktop()` / `isMobile()` - Responsive breakpoint computed signals
- Usage: `inject(LayoutService)` in components, access via computed signals

## Development Workflow

### Commands
```bash
pnpm start             # Dev server on localhost:4200
pnpm build             # Production build to dist/
pnpm format            # Prettier formatting (configured in .cache)
pnpm test              # Karma + Jasmine unit tests
```

### Code Formatting
- **Prettier** enforced via `pnpm format`
- **ESLint padding rules**: Blank lines required before `return`, around blocks, and after imports
- Run format before commits to avoid CI failures

### Creating New Pages
1. Create directory: `src/app/pages/{template-name}/`
2. Add `index.ts` container component
3. Create `components/` subdirectory for sections
4. Import shared components from `@/layout/components` (navbar, footer, etc.)
5. Add route in [pages.routes.ts](../src/app/pages/pages.routes.ts)

## Key Dependencies
- **Angular 19** - Standalone components, signals
- **PrimeNG 19** - UI component library (`primeng`, `primeicons`, `@primeng/themes`)
- **Tailwind CSS** - Utility-first styling with PrimeUI plugin
- **Chart.js 4.4.2** - Data visualization
- **Embla Carousel 8.5.2** - Carousel implementation
- **Quill 2.0** - Rich text editor

## Testing Notes
- Uses Karma + Jasmine (default Angular setup)
- No E2E framework configured - add if needed
- Component selectors must follow `p-` prefix convention for tests

## Common Pitfalls
- ❌ Don't use `Component` suffix in class names (ESLint error)
- ❌ Don't forget `@/*` path aliases - avoid relative imports from deeply nested files
- ❌ Don't create NgModules - all components must be standalone
- ✅ Always import `CommonModule` when using `*ngFor`, `*ngIf`
- ✅ Use `LayoutService` signals for responsive/theme logic instead of direct DOM queries
