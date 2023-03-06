<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="default"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <div class="login-placeholder"></div>
      </div>
      <el-form-item prop="account">
        <el-input v-model="user.account" placeholder="请输入用户名">
          <template #prefix>
            <i class="el-input__icon User" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="user.pwd" type="password" placeholder="请输入密码">
          <template #prefix>
            <i class="el-input__icon Lock" />
          </template>
        </el-input>
      </el-form-item>
      <!-- <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input v-model="user.imgcode" placeholder="请输入验证码">
            <template #prefix>
              <i class="el-input__icon Key" />
            </template>
          </el-input>
          <img
            @click="loadCaptcha"
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
          />
        </div>
      </el-form-item> -->
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
// import { getCaptcha, login } from "@/api/login";
import { useLogin } from "@/stores/user";
import { useRoute, useRouter } from "vue-router";
import type { IElForm, IFormItemRule } from "@/types/element-plus";

const route = useRoute();
const router = useRouter();

/*
 * 表单 *
 */
const user = reactive({
  account: "admin",
  pwd: "123456",
  // imgcode: "",
});
const form = ref<IElForm | null>(null);
const loading = ref(false);
const rules = ref<IFormItemRule>({
  account: [{ required: true, message: "请输入账号", trigger: "change" }],
  pwd: [{ required: true, message: "请输入密码", trigger: "change" }],
  // imgcode: [{ required: true, message: "请输入验证码", trigger: "change" }],
});
// 提交表单
const handleSubmit = async () => {
  // 表单验证
  const valid = await form.value?.validate();
  if (!valid) {
    return false;
  }

  // 验证通过，展示 loading
  loading.value = true;

  // 请求登录
  // const data = await login(user).finally(() => (loading.value = false));
  const data = await Promise.resolve({
    token: "123456",
    user_info: {
      account: "admin",
      head_pic: "",
      id: 16,
    },
  });

  // 存储登录用户信息
  const { setUserInfo, setToken } = useLogin();
  setToken(data.token);
  setUserInfo(data.user_info);

  // 跳转回原来页面
  let redirect = route.query.redirect || "/";
  if (typeof redirect !== "string") {
    redirect = "/";
  }
  router.replace(redirect);
};

/*
 * 验证码 *
 */
// const captchaSrc = ref("");
// const loadCaptcha = async () => {
//   const data = await getCaptcha();
//   captchaSrc.value = URL.createObjectURL(data);
// };

/*
 * 生命周期 *
 */
onMounted(() => {
  // loadCaptcha();
});
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
