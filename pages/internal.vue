<template>
  <div class="w-full h-screen p-4 text-center">
    <div>
      <template v-if="response?.data?.length">
        <ul v-for="dog in response.data" :key="dog.id" class="">
          <li>
            <h2 class="text-blue-500">{{ dog.name }}</h2>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageInternal",
};
</script>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{ _id: string; tag: string[] }[]>(
  () => $fetch("/api/dogs")
);
</script>
