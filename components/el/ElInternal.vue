<template>
  <div>
    <template v-if="response?.data?.length">
      <ul v-for="dog in response.data" :key="dog.id" class="">
        <li>
          <h2 class="text-blue-500">{{ dog.name }}</h2>
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{ _id: string; tag: string[] }[]>(
  () => $fetch("/api/dogs")
);
</script>
