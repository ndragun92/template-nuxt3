# Contributing Guide

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ndragun92/template-nuxt3.git
   cd template-nuxt3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript

- Always use TypeScript for new files
- Avoid `any` types - use proper type annotations
- Run `npm run typecheck` before committing

### Vue Components

- Use `<script setup lang="ts">` syntax for new components
- Use PascalCase for component names
- Add proper type annotations for props and emits

Example:

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {});
const message = computed(() => `Hello ${props.title}`);
</script>
```

### Styling

- Use TailwindCSS utility classes when possible
- Keep custom CSS minimal in `app/assets/css/main.css`
- Prefer composition over duplication

## Before Committing

Run the full quality check:

```bash
npm run lint:fix      # Fix linting and formatting
npm run typecheck     # Validate TypeScript
npm run build         # Ensure build succeeds
```

Or use the combined command:

```bash
npm run lint:fix && npm run typecheck && npm run build
```

## Commit Messages

Use clear, descriptive commit messages:

- ✅ `feat: add user profile component`
- ✅ `fix: resolve TypeScript error in store`
- ✅ `docs: update setup instructions`
- ❌ `update stuff`
- ❌ `fix bug`

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run all quality checks
4. Push to your fork
5. Open a Pull Request with a clear description

## Questions or Issues?

- Check existing [issues](https://github.com/ndragun92/template-nuxt3/issues)
- Review the [README](./README.md) for common issues
- Check [Nuxt documentation](https://nuxt.com/docs)
