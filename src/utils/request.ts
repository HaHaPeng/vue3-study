import axios, { type AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { useLogin } from "@/stores/user";

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
      const { clearSessionStore } = useLogin();
      ElMessage.error("登录过期，请重新登录！");
      clearSessionStore();
      isOutOfToken = true;

      return Promise.reject(response);
    } else {
      isOutOfToken = false;
    }

    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage.error(response.data.msg || "请求失败！");
    return Promise.reject(response.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => (res.data.data || res.data) as T);
};
