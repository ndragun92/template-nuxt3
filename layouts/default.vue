<template>
  <nav class="flex justify-between gap-4 px-8 bg-neutral-900 text-white py-6">
    <div>
      <ul class="flex items-center gap-4">
        <li>Normal links:</li>
        <li>
          <nuxt-link to="/">Homepage</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cats">Cats</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/jokes">Jokes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/internal">Internal</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/lazy">Lazy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/food">Food</nuxt-link>
        </li>
      </ul>
      <ul class="flex items-center gap-4">
        <li>Translated links:</li>
        <li>
          <nuxt-link :to="localePath('/')">Homepage</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/cats')">Cats</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/jokes')">Jokes</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/internal')">Internal</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/lazy')">Lazy</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/food')">Food</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-4">
      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.code }}</NuxtLink
      >
    </div>
  </nav>
  <h1 class="bg-neutral-800 py-2 px-8 text-white">{{ $t("test.hello") }}</h1>
  <slot />
</template>

<script lang="ts">
export default {
  name: "LayoutDefault",
};
</script>

<script lang="ts" setup>
const { locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
