<template>
  <div class="w-full h-screen p-4 text-center">
    <div>
      <template v-if="response?.meals?.length">
        <ul v-for="meal in response?.meals" :key="meal.idMeal">
          <li>
            <img
              class="block w-48 h-48"
              :src="meal.strMealThumb"
              :alt="meal.strMeal"
              loading="lazy"
            />
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageFood",
};
</script>

<script lang="ts" setup>
const { data: response } = await useAsyncData<{
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}>(() => $fetch("/api/food"));
</script>
