<template>
  <component :is="getIsCollapse" @click="setIsCollapse" />
</template>

<script lang="ts" setup>
import { useLayoutStore } from "@/stores/layout";

const { getIsCollapse, setIsCollapse } = useLayoutStore();
</script>

<style lang="scss" scoped></style>
