<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userInfo?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="onLoginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useLogin } from "@/stores/user";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const { userInfo, clearSessionStore } = useLogin();
const router = useRouter();

const onLoginOut = () => {
  ElMessageBox.confirm("确认退出？", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    clearSessionStore();
    ElMessage({
      type: "success",
      message: "退出成功",
    });
    router.push({ name: "login" });
  });
};
</script>

<style lang="scss" scoped></style>
