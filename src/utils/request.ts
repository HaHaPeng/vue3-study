import axios, { type AxiosRequestConfig } from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { useLogin } from "@/stores/user";
import router from "@/router/index";

/*
 * .env.development
 * .env.production
 * env.d.ts // 类型定义
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

request.interceptors.request.use(
  function (config) {
    const { token } = useLogin();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 登录过期的锁，避免多个弹窗
let isOutOfToken: Boolean = false;

request.interceptors.response.use(
  function (response) {
    const { status } = response.data;

    // 请求成功
    if (!status || status === 200) {
      return response;
    }

    // 处理 Token 过期
    if (status === 410000) {
      if (isOutOfToken) return Promise.reject(response);
      isOutOfToken = true;
      ElMessageBox.confirm("您的登录已过期，确认重新登录", "登录过期", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          // 清除本地过期的登录状态
          const { clearSessionStore } = useLogin();
          clearSessionStore();

          // 跳转登录
          router.push({
            name: "login",
            query: {
              redirect: router.currentRoute.value.fullPath,
            },
          });

          // 抛出异常
        })
        .finally(() => {
          isOutOfToken = false;
        });

      return Promise.reject(response);
    }

    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage.error(response.data.msg || "请求失败！");
    return Promise.reject(response.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

/*
 * res.data.data // 常规数据 有data
 * res.data // 流数据 比如：图片/excel
 */
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => (res.data.data || res.data) as T);
};
