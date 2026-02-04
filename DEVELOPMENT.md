# Local Development Guide

## Prerequisites

- **Node.js**: Version 24.0.0 or higher (use `.nvmrc` with nvm)
- **npm**: Comes with Node.js

### Using NVM (Node Version Manager)

If you don't have NVM installed:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Then use the correct Node version:

```bash
nvm install
# or if already installed
nvm use
```

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/template-nuxt3.git
cd template-nuxt3

# Install dependencies
npm install
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the next available port if 3000 is busy).

### Code Quality

Before committing code, always run:

```bash
# Format code and fix linting issues
npm run lint:fix

# Validate TypeScript (without building)
npm run typecheck

# Full check (recommended before commit)
npm run lint:fix && npm run typecheck && npm run build
```

### Code Formatting

- **ESLint** for code quality and style
- **Prettier** for code formatting
- **TypeScript** for type safety

### File Organization

When creating new files:

- **Components** → `app/components/YourComponent.vue`
- **Pages** → `app/pages/your-page.vue` (auto-routed)
- **Store** → `app/store/yourStore.ts` (Pinia)
- **Composables** → `app/composables/useYourComposable.ts`
- **API Routes** → `server/routes/api/your-endpoint.ts`
- **Styles** → Use TailwindCSS utilities, avoid custom CSS when possible

## Common Tasks

### Creating a New Page

1. Create `app/pages/about.vue`:

```vue
<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">About Page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "About",
});
</script>
```

2. It's automatically routed to `/about`

### Creating a New Component

1. Create `app/components/MyComponent.vue`:

```vue
<template>
  <div class="flex items-center gap-2">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
}

defineProps<Props>();
</script>
```

2. Use it in any page/component:

```vue
<template>
  <MyComponent message="Hello!" />
</template>
```

### Creating an API Route

1. Create `server/routes/api/hello.ts`:

```typescript
export default defineEventHandler((event) => {
  return {
    message: "Hello from the server!",
  };
});
```

2. Access it at `GET /api/hello` from your components:

```typescript
const { data } = await useFetch("/api/hello");
```

### Creating a Pinia Store

1. Create `app/store/counterStore.ts`:

```typescript
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => count.value++;
  const decrement = () => count.value--;

  return { count, increment, decrement };
});
```

2. Use in components:

```typescript
const store = useCounterStore();
const { count } = storeToRefs(store);

store.increment();
```

## Debugging

### Browser DevTools

Enable Nuxt DevTools:

```typescript
// Already enabled in nuxt.config.ts in development
devtools: {
  enabled: true;
}
```

Press `Shift + Alt + D` in development to open the DevTools panel.

### TypeScript Issues

Get detailed TypeScript errors:

```bash
npm run typecheck
```

### Build Issues

Preview production build locally:

```bash
npm run build
npm run preview
```

## Environment Variables

1. Copy `.env.example` to `.env.local`
2. Add your environment-specific variables
3. Access them in code:

```typescript
const apiKey = useRuntimeConfig().public.apiKey;
```

For public variables, prefix with `NUXT_PUBLIC_`:

```bash
# .env.local
NUXT_PUBLIC_API_URL=https://api.example.com
```

## Performance Tips

- Use `defineAsyncComponent()` for large components
- Leverage NuxtImg for image optimization
- Keep CSS minimal (use TailwindCSS utilities)
- Use Pinia for complex state instead of prop drilling
- Profile with Nuxt DevTools

## Common Issues & Solutions

### Port 3000 Already in Use

No action needed - Nuxt automatically tries the next available port. Check console output for the actual port.

### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules .nuxt
npm install
```

### TypeScript Strict Mode Errors

Check the file has proper typing. If you need to bypass temporarily:

```typescript
// @ts-expect-error - TODO: Fix this
const value: any = something;
```

### Build Fails with CSS Errors

Clear cache:

```bash
rm -rf .nuxt .output node_modules/.cache
npm run build
```

## Further Reading

- [Nuxt Documentation](https://nuxt.com/docs)
- [Vue 3 Guide](https://vuejs.org/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project architecture guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
