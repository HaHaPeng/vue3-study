import request from "@/utils/request";
import type { ILoginInfo, ILoginResponse } from "./types/common";

export const getCaptcha = () => {
  return request<Blob>({
    method: "GET",
    url: "/captcha_pro",
    params: {
      stamp: Date.now(), // 避免图片缓存
    },
    responseType: "blob",
  });
};

export const login = (data: {
  account: string;
  pwd: string;
  imgcode: string;
}) => {
  return request<ILoginResponse>({
    method: "POST",
    url: "/login",
    data,
  });
};

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: "GET",
    url: "/login/info",
  });
};
