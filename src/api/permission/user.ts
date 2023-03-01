import request from "@/utils/request";
import type { IListParams, IUser, IUserPostData } from "../types/user";
import type { IFormData } from "@/types/element-plus";

export const getUsers = (params: IListParams) => {
  return request<{
    count: number;
    list: IUser[];
  }>({
    method: "GET",
    url: "/setting/admin",
    params,
  });
};

export const createUser = (data: IUserPostData) => {
  return request({
    method: "POST",
    url: "/setting/admin",
    data,
  });
};

export const updateUser = (id: number, data: IUserPostData) => {
  return request({
    method: "PUT",
    url: `/setting/admin/${id}`,
    data,
  });
};

export const deleteUser = (id: number) => {
  return request({
    method: "DELETE",
    url: `/setting/admin/${id}`,
  });
};

export const updateUserStatus = (id: number, status: number) => {
  return request({
    method: "PUT",
    url: `/setting/set_status/${id}/${status}`,
  });
};

export const getRoles = () => {
  return request<IFormData>({
    method: "GET",
    url: "/setting/admin/create",
  }).then((data) => {
    const roles = data.rules.find((item) => item.field === "roles");
    if (roles && roles.options) {
      return roles.options;
    }
    return [];
  });
};

export const getUser = (id: number) => {
  return request<IFormData>({
    method: "GET",
    url: `/setting/admin/${id}/edit`,
  }).then((data) => {
    const obj: Record<string, any> = {};
    data.rules.forEach((item) => {
      obj[item.field] = item.value;
    });
    return obj as {
      account: string;
      pwd: string;
      conf_pwd: string;
      real_name: string;
      roles: string[];
      status: 0 | 1;
    };
  });
};
