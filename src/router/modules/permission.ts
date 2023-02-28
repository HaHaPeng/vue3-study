import { type RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw = {
  path: "permission",
  name: "permission",
  component: RouterView,
  children: [
    {
      path: "menu",
      name: "permission-menu",
      component: () => import("@/views/permission/Menu.vue"),
      meta: {
        title: "菜单",
      },
    },
    {
      path: "role",
      name: "permission-role",
      component: () => import("@/views/permission/Role.vue"),
      meta: {
        title: "角色",
      },
    },
    {
      path: "user",
      name: "permission-user",
      component: () => import("@/views/permission/User.vue"),
      meta: {
        title: "用户",
      },
    },
  ],
  meta: {
    title: "系统管理",
  },
};

export default routes;
