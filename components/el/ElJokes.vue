<template>
  <div>
    {{ response?.value }}
  </div>
</template>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{ value: string }>(() =>
  $fetch("https://api.chucknorris.io/jokes/random")
);
</script>
