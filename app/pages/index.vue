<template>
  <main class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
    <div class="max-w-4xl w-full">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <NuxtImg class="mx-auto w-16 h-16 mb-6 object-contain" src="/favicon.png" alt="Nuxt Logo" />
        <h1 class="text-4xl font-bold text-gray-900 mb-3">Welcome to Nuxt 4 Starter Template</h1>
        <p class="text-lg text-gray-600">
          A production-ready template with modern tools and best practices
        </p>
      </div>

      <!-- Modules Grid -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Icon name="mdi:package-variant" size="28" class="text-blue-600" />
          Included Modules
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            v-for="module in modules"
            :key="module.name"
            :href="module.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white"
          >
            <div class="flex items-start gap-3">
              <Icon
                name="mdi:checkbox-marked-circle"
                size="20"
                class="text-green-500 mt-0.5 shrink-0"
              />
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {{ module.name }}
                </h3>
                <p class="text-sm text-gray-600 mt-1">{{ module.description }}</p>
              </div>
              <Icon
                name="mdi:open-in-new"
                size="16"
                class="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0"
              />
            </div>
          </a>
        </div>
      </div>

      <!-- Actions Section -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="https://github.com/ndragun92/template-nuxt3"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
        >
          <Icon name="mdi:github" size="24" />
          View on GitHub
        </a>

        <a
          href="https://github.com/ndragun92/template-nuxt3/blob/main/DOCS.md"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
        >
          <Icon name="mdi:book-open-page-variant" size="24" />
          Documentation
        </a>
      </div>

      <!-- Quick Links -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-600 mb-3">Quick Start Guides</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/ndragun92/template-nuxt3/blob/main/START_HERE.md"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            START_HERE.md
          </a>
          <span class="text-gray-300">|</span>
          <a
            href="https://github.com/ndragun92/template-nuxt3/blob/main/QUICKSTART.md"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            QUICKSTART.md
          </a>
          <span class="text-gray-300">|</span>
          <a
            href="https://github.com/ndragun92/template-nuxt3/blob/main/DEVELOPMENT.md"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            DEVELOPMENT.md
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const modules = [
  {
    name: "nuxt-security",
    url: "https://nuxt.com/modules/security",
    description: "Security headers and best practices",
  },
  {
    name: "@pinia/nuxt",
    url: "https://pinia.vuejs.org/ssr/nuxt.html",
    description: "State management made easy",
  },
  {
    name: "tailwindcss",
    url: "https://tailwindcss.com",
    description: "Utility-first CSS framework",
  },
  {
    name: "@nuxt/icon",
    url: "https://nuxt.com/modules/icon",
    description: "Icon component with 100k+ icons",
  },
  {
    name: "@vueuse/nuxt",
    url: "https://vueuse.org/guide/#nuxt",
    description: "Collection of Vue composition utilities",
  },
  {
    name: "@nuxt/image",
    url: "https://image.nuxt.com",
    description: "Optimized images for Nuxt",
  },
  {
    name: "@nuxt/a11y",
    url: "https://nuxt.com/modules/a11y",
    description: "Accessibility features built-in",
  },
];
</script>