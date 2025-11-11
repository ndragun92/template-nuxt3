// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2025-07-15',

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

  sourcemap: process.env.NODE_ENV === 'development',

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
            if (
              warning.code === "PLUGIN_WARNING" &&
              warning.plugin === "vite:reporter"
            ) {
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

  pinia: {
    storesDirs: ["./app/store/**"],
  },

  modules: [
    "nuxt-security", // https://nuxt.com/modules/security
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html
    '@nuxt/icon',
    "@vueuse/nuxt", // https://vueuse.org/guide/#nuxt
    "@nuxt/image", // https://image.nuxt.com
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
