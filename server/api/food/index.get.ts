export default defineEventHandler(async () => {
  return await $fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
});
