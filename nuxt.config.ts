// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
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
    "@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html
    "@nuxtjs/tailwindcss", // https://tailwindcss.nuxtjs.org
    "nuxt-icon", // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
    "@vueuse/nuxt", // https://vueuse.org/guide/#nuxt
    "@nuxt/image", // https://image.nuxt.com
  ],
});
