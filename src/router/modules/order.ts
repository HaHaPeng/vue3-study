import { type RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw = {
  path: "order",
  name: "order",
  component: RouterView,
  children: [
    {
      path: "list",
      name: "order-list",
      component: () => import("@/views/order/List.vue"),
    },
    {
      path: "offline",
      name: "order-offline",
      component: () => import("@/views/order/Offline.vue"),
    },
  ],
};

export default routes;
