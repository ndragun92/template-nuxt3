<template>
  <div class="p-8 text-center">
    <NuxtImg class="block mx-auto w-12" src="/favicon.png" />
    <h1 class="font-bold text-center mt-12">
      Welcome to Nuxt 3 Starter Template Kit
    </h1>
    <h2 class="font-semibold mt-10 mb-2">Included Modules:</h2>
    <ul class="flex flex-col gap-2">
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://pinia.vuejs.org/ssr/nuxt.html"
          target="_blank"
          >@pinia/nuxt</a
        >
      </li>
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://tailwindcss.nuxtjs.org"
          target="_blank"
        >
          @nuxtjs/tailwindcss
        </a>
      </li>
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/nuxt-modules/icon"
          target="_blank"
          >nuxt-icon</a
        >
      </li>
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://vueuse.org/guide/#nuxt"
          target="_blank"
          >@vueuse/nuxt</a
        >
      </li>
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/MorevM/vue-transitions"
          target="_blank"
          >@morev/vue-transitions/nuxt</a
        >
      </li>
      <li>
        <a
          class="text-blue-500 hover:underline"
          href="https://image.nuxt.com"
          target="_blank"
          >@nuxt/image</a
        >
      </li>
      <li class="mt-12">
        <a
          class="flex items-center gap-2 justify-center"
          href="https://github.com/ndragun92/template-nuxt3"
          target="_blank"
        >
          <Icon size="24" name="mdi:github" /> Click here to check GitHub
          Repository
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageHomepage",
};
</script>
