<template>
  <el-container>
    <el-aside width="200px">
      <Sider />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sider from "./Sider.vue";
import AppHeader from "./Header.vue";
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// .el-aside {
//   background-color: #304156;
//   color: #333;
// }

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
