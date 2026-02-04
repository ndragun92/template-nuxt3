# Nuxt 4 Starter Template

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Live preview version [Template](https://template-nuxt3-ndragun92.vercel.app)

## What does this starter template contain?

- Nuxt a11y module
- Nuxt security module
- ESLint module
- Strict typeCheck (enabled in development)
- Pinia
- TailwindCSS
- Nuxt Icons
- Vue Use
- Nuxt Image
- Loaded a main scss entry file
- Injected scss utils which are globally available
- Works with Node 20.x

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure

```
app/
├── assets/        # Static assets (CSS, images, fonts)
│   └── css/
│       └── main.css      # Main stylesheet with Tailwind imports
├── components/    # Reusable Vue components
├── layouts/       # Layout components
│   ├── default.vue
│   └── error.vue
├── pages/         # Route pages (auto-generated routes)
│   └── index.vue
├── plugins/       # Nuxt plugins
│   └── init.ts    # App initialization plugin
├── store/         # Pinia stores
│   └── exampleStore.ts
├── app.vue        # Root component
└── error.vue      # Error handling component

public/           # Static files served as-is (favicon, etc.)
server/           # Server-side code and API routes
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
# Cache settings (optional)
# VITE_CACHE_ENABLED=true
```

### TypeScript Configuration

The project uses strict type checking in development mode. TypeScript files are validated during:

- Development (active checking)
- Build time (enforced checking)

To disable strict checking, modify `nuxt.config.ts`:

```typescript
typescript: {
  typeCheck: "build",
  strict: false, // Disable strict mode
}
```

### ESLint & Prettier

Format and lint your code:

```bash
# Check for linting issues
npm run lint

# Fix linting issues
npm run eslint:fix

# Check formatting
npm run lint:prettier

# Fix formatting
npm run prettier:fix

# Fix all issues at once
npm run lint:fix
```

## Development Tips

### Creating Components

Place reusable components in `app/components/`:

```vue
<template>
  <div>Your component</div>
</template>

<script setup lang="ts">
// Component logic here
</script>
```

Components are automatically imported when referenced.

### Creating Store

Create new stores in `app/store/`:

```typescript
import { defineStore } from "pinia";

export const useMyStore = defineStore("my-store", () => {
  const state = ref("");

  const setState = (value: string) => {
    state.value = value;
  };

  return { state, setState };
});
```

Use in components:

```typescript
const store = useMyStore();
```

### Creating Pages

Add new pages in `app/pages/`:

- `index.vue` → `/`
- `about.vue` → `/about`
- `users/[id].vue` → `/users/:id`

Pages are automatically routed based on file structure.

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Nuxt will automatically try the next available port.

### TypeScript Errors

Run `npm run typecheck` to validate all TypeScript files without building.

### ESLint Warnings

Some rules are intentionally relaxed for flexibility. To adjust:

1. Edit `eslint.config.mjs`
2. Run `npm run eslint:fix` to apply changes

## Performance Features

This template includes several performance optimizations:

- Lazy hydration for non-critical components
- Automatic route prefetching
- Static data prerendering
- Build caching
- Image optimization with Nuxt Image

## Browser Support

See [Baseline Browser Mapping](https://github.com/web-platform-dx/baseline-browser-mapping) for browser support details.
