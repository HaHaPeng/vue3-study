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
      meta: {
        title: "列表",
      },
    },
    {
      path: "offline",
      name: "order-offline",
      component: () => import("@/views/order/Offline.vue"),
      meta: {
        title: "状态",
      },
    },
  ],
  meta: {
    title: "订单",
  },
};

export default routes;
