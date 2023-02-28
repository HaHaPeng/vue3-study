import axios, { type AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    const { status } = response.data;

    // 请求成功
    if (!status || status === 200) {
      return response;
    }

    // 处理 Token 过期

    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage({
      type: "error",
      message: response.data.msg || "请求失败！",
      duration: 5 * 1000,
    });
    return Promise.reject(response.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => (res.data.data || res.data) as T);
};
