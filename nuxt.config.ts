// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === "development" },

  compatibilityDate: "2025-07-15",

  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: "build",
    strict: process.env.NODE_ENV === "development",
  },

  css: ["~/assets/css/main.css"],

  sourcemap: process.env.NODE_ENV === "development",

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    },
    plugins: [
      tailwindcss(),
      {
        apply: "build",
        name: "vite-plugin-ignore-sourcemap-warnings",
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn;
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (warning.code === "SOURCEMAP_BROKEN") {
              return;
            }
            originalOnWarn?.(warning, warn);
            if (!originalOnWarn) warn(warning);
          };
        },
      },
    ],
  },

  modules: [
    // https://nuxt.com/modules/security
    "nuxt-security",
    "@nuxt/eslint",
    "@nuxt/fonts", // https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt",
    "@nuxt/icon", // https://vueuse.org/guide/#nuxt
    "@vueuse/nuxt", // https://image.nuxt.com
    "@nuxt/image",
    "@nuxt/a11y",
  ],

  hooks: {
    "build:before": () => {
      console.time("Nuxt Build Time");
    },
    "build:done": () => {
      console.timeEnd("Nuxt Build Time");
    },
  },
});
