// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: "2024-07-11",

  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: process.env.NODE_ENV === 'development',
    strict: process.env.NODE_ENV === 'development'
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetchedClass: "link--prefetched",
      },
    },
    asyncContext: true,
    appManifest: false,
    buildCache: false, // Build Cache
  },

  imports: {
    dirs: [
      // support deep nested composables
      "composables/**",
    ],
  },

  nitro: {
    // compressPublicAssets: true,
    routeRules: {
      // "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    }
  },

  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    }
  },

  eslint: {
    config: {
      // stylistic: {
      //   commaDangle: 'never',
      //   braceStyle: '1tbs'
      // }
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  pinia: {
    storesDirs: ["./app/store/**"],
  },

  modules: [
    'nuxt-security', // https://nuxt.com/modules/security
    "@nuxt/eslint",
    "@nuxt/fonts",
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    'nuxt-icon', // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
    '@vueuse/nuxt', // https://vueuse.org/guide/#nuxt
    '@nuxt/image' // https://image.nuxt.com
  ],

  image: {},

  hooks: {
    "build:before": () => {
      console.time("Nuxt Build Time");
    },
    "build:done": () => {
      console.timeEnd("Nuxt Build Time");
    },
  },
})
