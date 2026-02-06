// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: "2025-07-15",

  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: "build",
    strict: process.env.NODE_ENV === "development",
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
    typedPages: true,
    headNext: true,
    inlineRouteRules: true,
    sharedPrerenderData: true,
    cookieStore: true,
    browserDevtoolsTiming: process.env.NODE_ENV === "development",
    lazyHydration: true, // This feature intelligently determines when to hydrate lazy components based on visibility, idle time, or other triggers, improving performance by deferring hydration of components until they're needed.
    purgeCachedData: true, // Nuxt will automatically purge cached data from `useAsyncData` and `nuxtApp.static.data`. This helps prevent memory leaks and ensures fresh data is loaded when needed, but it is possible to disable it.
    typescriptPlugin: true,
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
    },
  },

  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    },
  },

  eslint: {
    config: {
      // stylistic: {
      //   commaDangle: 'never',
      //   braceStyle: '1tbs'
      // }
    },
  },

  css: ["~/assets/css/main.css"],

  sourcemap: process.env.NODE_ENV === "development",

  vite: {
    plugins: [
      tailwindcss(),
      {
        apply: "build",
        name: "vite-plugin-ignore-sourcemap-warnings",
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn;
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === "SOURCEMAP_BROKEN" &&
              warning.plugin === "@tailwindcss/vite:generate:build"
            ) {
              return;
            }
            if (warning.code === "PLUGIN_WARNING" && warning.plugin === "vite:reporter") {
              return;
            }

            if (originalOnWarn) {
              originalOnWarn(warning, warn);
            } else {
              warn(warning);
            }
          };
        },
      },
    ],
    $client: {
      build: {
        rollupOptions: {
          output: {
            entryFileNames: "_nuxt/[name].[hash].js",
            chunkFileNames: "_nuxt/[name].[hash].js",
          },
        },
      },
    },
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

  image: {},

  hooks: {
    "build:before": () => {
      console.time("Nuxt Build Time");
    },
    "build:done": () => {
      console.timeEnd("Nuxt Build Time");
    },
  },
});
