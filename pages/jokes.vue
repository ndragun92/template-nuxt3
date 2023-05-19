<template>
  <div class="w-full h-screen p-4 flex items-center justify-center text-center">
    <div>
      {{ response?.value }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageJokes",
};
</script>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{ value: string }>(() =>
  $fetch("https://api.chucknorris.io/jokes/random")
);
</script>
