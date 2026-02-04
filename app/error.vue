<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
    <div class="max-w-md w-full">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
        <p class="text-gray-600 mb-6">Something went wrong</p>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <details class="cursor-pointer">
          <summary class="font-semibold text-gray-700 hover:text-gray-900">Error Details</summary>
          <pre class="mt-3 text-xs text-gray-600 overflow-auto max-h-48 bg-gray-50 p-2 rounded">{{
            JSON.stringify(props, null, 2)
          }}</pre>
        </details>
      </div>

      <button
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        @click="handleError"
      >
        Return Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error?: unknown;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>
