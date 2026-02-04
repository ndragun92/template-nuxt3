<script setup lang="ts"></script>
<template>
  <main class="p-8 text-center">
    <NuxtImg class="block mx-auto w-12" src="/favicon.png" alt="Favicon" />
    <h1 class="font-bold mt-12 text-center">Welcome to Nuxt 4 Starter Template Kit</h1>
    <h2 class="font-semibold mb-2 mt-10">Included Modules:</h2>
    <ul class="flex flex-col gap-2">
      <li>
        <a
          class="hover:underline text-blue-600"
          href="https://nuxt.com/modules/security"
          target="_blank"
          >nuxt-security</a
        >
      </li>
      <li>
        <a
          class="hover:underline text-blue-600"
          href="https://pinia.vuejs.org/ssr/nuxt.html"
          target="_blank"
          >@pinia/nuxt</a
        >
      </li>
      <li>
        <a class="hover:underline text-blue-600" href="https://tailwindcss.com" target="_blank">
          tailwindcss
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-600"
          href="https://nuxt.com/modules/icon"
          target="_blank"
          >@nuxt/icon</a
        >
      </li>
      <li>
        <a
          class="hover:underline text-blue-600"
          href="https://vueuse.org/guide/#nuxt"
          target="_blank"
          >@vueuse/nuxt</a
        >
      </li>
      <li>
        <a class="hover:underline text-blue-600" href="https://image.nuxt.com" target="_blank"
          >@nuxt/image</a
        >
      </li>
      <li>
        <a
          class="hover:underline text-blue-600"
          href="https://nuxt.com/modules/a11y"
          target="_blank"
          >@nuxt/a11y</a
        >
      </li>
      <li class="mt-12">
        <a
          class="flex gap-2 items-center justify-center"
          href="https://github.com/ndragun92/template-nuxt3"
          target="_blank"
        >
          <Icon size="24" name="mdi:github" /> Click here to check GitHub Repository
        </a>
      </li>
    </ul>
  </main>
</template>
