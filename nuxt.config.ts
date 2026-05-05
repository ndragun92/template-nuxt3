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
    config: {},
  },

  css: ["~/assets/css/main.css"],

  sourcemap: process.env.NODE_ENV === "development",

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
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
          onwarn(warning, warn) {
            // With the update to nuxt 4.4.2 a ton of messages about missing sourcemaps started to appear, but sourcemaps
            // are disabled by default on nuxt and we do not want them, and thus there is no need to worry about the
            // warning, so just ignore these.
            if (warning.code === "SOURCEMAP_BROKEN") {
              return; // ignore
            }
            warn(warning);
          },
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
