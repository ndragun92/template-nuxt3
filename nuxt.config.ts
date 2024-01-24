// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: process.env.NODE_ENV === 'development'
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    }
  },
  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/utils/global.scss";'
        }
      }
    }
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    'nuxt-security', // https://nuxt.com/modules/security
    '@nuxtjs/eslint-module', // https://nuxt.com/modules/eslint | https://eslint.vuejs.org
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org
    'nuxt-icon', // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
    '@vueuse/nuxt', // https://vueuse.org/guide/#nuxt
    '@nuxt/image' // https://image.nuxt.com
  ],
  image: {}
})
