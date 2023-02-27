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
    },
    {
      path: "role",
      name: "permission-role",
      component: () => import("@/views/permission/Role.vue"),
    },
    {
      path: "user",
      name: "permission-user",
      component: () => import("@/views/permission/User.vue"),
    },
  ],
};

export default routes;
