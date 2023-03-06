import { RouterView, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Layout.vue";
const routes: RouteRecordRaw = {
  path: "/order",
  name: "order",
  component: Layout,
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
      component: RouterView,
      meta: {
        title: "状态",
      },
      children: [
        {
          path: "test",
          name: "order-test",
          component: () => import("@/views/order/test.vue"),
          meta: {
            title: "test",
          },
        },
        {
          path: "status",
          name: "order-status",
          component: () => import("@/views/order/Offline.vue"),
          meta: {
            title: "status",
          },
        },
      ],
    },
  ],
  meta: {
    title: "订单",
  },
};

export default routes;
