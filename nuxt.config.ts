// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  experimental: {
    emitRouteChunkError: "reload",
    typedPages: true,
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "",
    },
  },
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/css/utils/global.scss";`,
        },
      },
    },
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    // https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt",
    // https://tailwindcss.nuxt.dev/
    "@nuxtjs/tailwindcss",
    // https://v1.image.nuxtjs.org/get-started/
    "@nuxt/image-edge",
    // https://github.com/nuxt-modules/icon
    // https://icones.js.org/collection/all?s=github
    "nuxt-icon",
    // https://vueuse.org/guide/#nuxt
    "@vueuse/nuxt",
    // https://github.com/MorevM/vue-transitions
    "@morev/vue-transitions/nuxt",
    // https://v8.i18n.nuxtjs.org/getting-started/setup/
    "@nuxtjs/i18n",
  ],
  i18n: {
    legacy: false,
    baseUrl: "http://localhost:3000",
    defaultLocale: "en",
    fallbackLocale: "en",
    lazy: true,
    langDir: "lang",
    locales: [
      {
        code: "en",
        iso: "en-US",
        files: ["en.json"],
      },
      {
        code: "hr",
        iso: "hr",
        files: ["hr.json"],
      },
    ],
  },
});
