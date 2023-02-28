<template>
  <el-menu
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    class="el-menu-vertical-demo"
    default-active="/order/list"
    router
  >
    <el-sub-menu index="/">
      <template #title>
        <el-icon><location /></el-icon>
        <span>product</span>
      </template>
      <el-menu-item index="/product/list">list</el-menu-item>
      <el-menu-item index="/product/classify">classify</el-menu-item>
      <el-menu-item index="/product/attribute">attribute</el-menu-item>
      <el-menu-item index="/product/evaluate">evaluate</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><location /></el-icon>
        <span>order</span>
      </template>
      <el-menu-item index="/order/list">list</el-menu-item>
      <el-menu-item index="/order/offline">offline</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><location /></el-icon>
        <span>permission</span>
      </template>
      <el-menu-item index="/permission/menu">menu</el-menu-item>
      <el-menu-item index="/permission/role">role</el-menu-item>
      <el-menu-item index="/permission/user">user</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><icon-menu /></el-icon>
      <span>media</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
