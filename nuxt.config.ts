// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // '/': { prerender: true }, // Once per build (via builder)
      // '/blog/*': { static: true }, // Once on-demand per build (via lambda)
      // '/stats/*': { swr: '10 min' }, // Once on-demand each 10 minutes (via lambda)
      // '/admin/*': { ssr: false }, // Client-Side rendered
      // '/react/*': { redirect: '/vue' }, // Redirect Rules
      // "/*": { cors: true }, // Enable CORS
      // "/": { swr: 10 }, // Once on-demand each 10 minutes (via lambda)
      // "/_nuxt/**": { headers: { "cache-control": "s-maxage=0" } },
      // "/@docs/**": { prerender: true },
      "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "",
    },
  },
  vite: {
    plugins: [
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/css/utils/global.scss";`,
        },
      },
    },
  },
  css: ["~/assets/css/main.scss"],
  // alias: {
  //   pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  // },
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
    "@morev/vue-transitions/nuxt"
  ],
});
