<template>
  <nav>
    <ul class="flex items-center gap-4">
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
  </nav>
  <slot />
</template>

<script lang="ts">
export default {
  name: "LayoutDefault",
};
</script>
