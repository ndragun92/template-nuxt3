# Architecture & Best Practices

## Project Organization

This starter template follows Nuxt best practices for organization and scalability.

### Directory Structure

```
app/
├── components/     # Reusable Vue components
├── composables/    # Reusable composable logic
├── layouts/        # Layout wrappers
├── pages/          # Route definitions
├── plugins/        # Nuxt plugins for initialization
├── store/          # Pinia store modules
└── assets/         # Static assets (CSS, images)
```

## Component Development

### Component Hierarchy

- **Pages**: Full page layouts, mounted to routes
- **Layouts**: Wrappers that pages use
- **Components**: Reusable UI components

### Composables

Place reusable logic in `app/composables/`. Example:

```typescript
// app/composables/useCounter.ts
export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue);

  const increment = () => count.value++;
  const decrement = () => count.value--;

  return { count, increment, decrement };
};
```

## State Management with Pinia

For complex state, use Pinia stores in `app/stores/`:

```typescript
// app/stores/userStore.ts
export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const isLoading = ref(false);

  const fetchUser = async (id: string) => {
    isLoading.value = true;
    try {
      user.value = await $fetch(`/api/users/${id}`);
    } finally {
      isLoading.value = false;
    }
  };

  return { user, isLoading, fetchUser };
});
```

Use in components:

```typescript
const userStore = useUserStore();
await userStore.fetchUser("123");
```

## Data Fetching

### useAsyncData

For fetching data in components:

```typescript
const { data: user } = await useFetch("/api/user");
```

### Server Routes

Create API routes in `server/routes/api/`:

```typescript
// server/routes/api/hello.ts
export default defineEventHandler(() => {
  return { message: "Hello World" };
});
```

## Styling

### TailwindCSS

This template uses TailwindCSS 4. Use utility classes for styling:

```vue
<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600"
  >
    <h1 class="text-4xl font-bold text-white">Welcome</h1>
  </div>
</template>
```

### Custom CSS

For custom styles, edit `app/assets/css/main.css`. Keep this minimal:

```css
@import "tailwindcss";

/* Custom theme variables if needed */
:root {
  --primary-color: #3b82f6;
}
```

## Performance Optimization

### Lazy Loading Components

```vue
<script setup lang="ts">
const HeavyComponent = defineAsyncComponent(() => import("~/components/Heavy.vue"));
</script>

<template>
  <Suspense>
    <template #default>
      <HeavyComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```

### Code Splitting

Nuxt automatically code-splits by route. For manual chunks, use dynamic imports.

### Image Optimization

Use NuxtImg for optimized images:

```vue
<NuxtImg src="/image.jpg" alt="Description" width="300" height="200" />
```

## Error Handling

### Error Page

The `app/error.vue` component handles runtime errors. It receives the error object:

```typescript
const props = defineProps<{
  error?: unknown;
}>();
```

### Error Boundaries

For component-level error handling, use try-catch in composables:

```typescript
const { data, error } = await useFetch("/api/data");

if (error.value) {
  // Handle error
}
```

## Type Safety

### TypeScript Setup

- Strict mode is enabled in development
- All new files should be `.ts` or `.vue` with `<script setup lang="ts">`
- Avoid `any` types - use proper interfaces/types

Example typed props:

```typescript
interface Props {
  title: string;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
});
```

## Testing Considerations

While no testing framework is included, consider adding:

- **Vitest** for unit tests
- **Nuxt Testing Library** for component tests
- **Playwright** for E2E tests

## Security

This template includes `nuxt-security` module which provides:

- CSP headers
- XSS protection
- CORS handling
- Security headers

Refer to [Nuxt Security documentation](https://nuxt.com/modules/security) for configuration.

## Accessibility

This template includes `@nuxt/a11y` for accessibility features:

- Route announcer for screen readers
- Keyboard navigation support
- ARIA attributes support

Always test with accessibility tools when adding new components.
