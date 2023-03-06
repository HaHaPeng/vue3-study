<template>
  <!-- background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0" -->
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultRoute"
    router
    unique-opened
  >
    <menu-item
      :menu="routes"
      :parent-path="'/'"
      v-for="routes in permissionRoutes"
      :key="routes.name"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import { permissionRoutes } from "@/router/index";
import MenuItem from "./components/MenuItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const defaultRoute = computed(() => route.fullPath);
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
