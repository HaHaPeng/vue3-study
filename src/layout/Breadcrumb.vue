<template>
  <el-breadcrumb separator-class="ArrowRight">
    <el-breadcrumb-item v-for="item in routes" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

console.log(router.currentRoute.value.matched);

const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title);
});
</script>

<style lang="scss" scoped></style>
