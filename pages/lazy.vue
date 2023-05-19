<template>
  <div>
    <h2>1.</h2>
    <el-internal />
    <hr />
    <h2>2.</h2>
    <el-jokes />
    <hr />
    <h2>3.</h2>
    <el-internal />
    <hr />
    <h2>4.</h2>
    <el-jokes />
    <hr />
  </div>
</template>

<script lang="ts">
export default {
  name: "PageLazy",
};
</script>

<script lang="ts" setup>
import ElJokes from "~/components/el/ElJokes.vue";

const ElInternal = defineAsyncComponent(
  () => import("~/components/el/ElInternal.vue")
);
</script>
