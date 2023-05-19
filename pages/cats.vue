<template>
  <div class="w-full h-screen p-4 text-center">
    <div>
      <template v-if="response?.length">
        <ul v-for="cat in response" :key="cat._id" class="">
          <li>
            <h2 class="text-blue-500">{{ cat._id }}</h2>
            <template v-if="cat?.tags?.length">
              <ul v-for="tag in cat.tags" :key="`${tag}--${_id}}`">
                <li>
                  {{ tag }}
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageCats",
};
</script>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{ _id: string; tag: string[] }[]>(
  () => $fetch("https://cataas.com/api/cats?tags=cute")
);
</script>
