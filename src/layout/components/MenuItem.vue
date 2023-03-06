<template>
  <el-sub-menu :index="menu.path" v-if="isRoot">
    <template #title>
      <el-icon><component :is="menu.meta?.icon" /></el-icon>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <MenuItem
      :menu="route"
      :parent-path="rootPath"
      v-for="route in menu.children"
      :key="route.name"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="singlePath">
    <el-icon><component :is="menu.meta?.icon" /></el-icon>
    <span>{{ menu.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { computed, ref, type PropType } from "vue";
import type { RouteRecordRaw } from "vue-router";
const props = defineProps({
  parentPath: {
    type: String,
    default: "",
  },
  menu: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
});
const menu = ref(props.menu);

const hasChild = computed<Boolean>(() => Boolean(menu.value.children));
const isRoot = computed<Boolean>(() => {
  const arr = menu.value.children ?? [];
  const len = arr.length;
  return len > 1;
});

const rootPath = computed<string>(() =>
  props.parentPath === "/"
    ? menu.value.path
    : props.parentPath + "/" + menu.value.path
);
const singlePath = computed<string>(() => {
  if (hasChild.value && !isRoot.value) {
    return menu.value.path;
  } else {
    return rootPath.value;
  }
});
</script>

<style lang="scss" scoped></style>
