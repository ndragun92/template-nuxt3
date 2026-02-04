# Quick Start Guide

## For New Developers

### First Time Setup (5 minutes)

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/template-nuxt3.git
cd template-nuxt3

# 2. Use correct Node version (if using nvm)
nvm use

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

→ Open http://localhost:3000 in your browser

### Essential Commands

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint:fix         # Fix linting & formatting issues
npm run typecheck        # Check TypeScript types
```

## Project Structure Overview

```
app/
  ├── components/        ← Reusable Vue components
  ├── pages/             ← Routes (pages auto-create routes!)
  ├── layouts/           ← Page layouts
  ├── store/             ← Pinia stores (state management)
  ├── plugins/           ← App initialization
  ├── assets/css/        ← Styles
  └── app.vue            ← Root component
```

## Common Tasks (2 minutes each)

### Add a New Page

Create `app/pages/about.vue`:
```vue
<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">About</h1>
  </div>
</template>
```

Now visit `/about` ✨

### Add a Reusable Component

Create `app/components/Greeting.vue`:
```vue
<template>
  <div class="text-lg font-bold">Hello {{ name }}!</div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
```

Use anywhere:
```vue
<Greeting name="World" />
```

### Use Global State (Pinia)

Create `app/store/counterStore.ts`:
```typescript
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
});
```

In components:
```typescript
const store = useCounterStore();
const { count } = storeToRefs(store);
store.increment();
```

## Code Standards

- ✅ Use TypeScript for new files
- ✅ Use Vue `<script setup lang="ts">` syntax
- ✅ Use TailwindCSS for styling
- ✅ Avoid `any` types - use proper types
- ✅ Run `npm run lint:fix` before committing

## Key Files to Know

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `CONTRIBUTING.md` | How to contribute |
| `DEVELOPMENT.md` | Detailed dev guide |
| `ARCHITECTURE.md` | Project architecture |
| `nuxt.config.ts` | Nuxt configuration |
| `.env.example` | Environment template |

## Getting Help

1. **Read first**: [DEVELOPMENT.md](./DEVELOPMENT.md) - detailed guide
2. **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md) - patterns & structure
3. **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md) - code standards
4. **Docs**: [Nuxt](https://nuxt.com/docs) | [Vue](https://vuejs.org/) | [TailwindCSS](https://tailwindcss.com/)

## Before Pushing Code

```bash
npm run lint:fix    # Fix formatting & linting
npm run typecheck   # Validate TypeScript
npm run build       # Ensure build works
```

---

**Questions?** See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed explanations and troubleshooting.
