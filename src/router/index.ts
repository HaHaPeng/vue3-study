import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import Layout from "@/layout/Layout.vue";
import mediaRoute from "./modules/media";
import orderRoute from "./modules/order";
import permissionRoute from "./modules/permission";
import productRoute from "./modules/product";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/Home.vue"),
        meta: {
          title: "首页",
        },
      },
      mediaRoute,
      orderRoute,
      permissionRoute,
      productRoute,
    ],
    meta: {
      title: "",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 进度条的配置
// nprogress.configure({});

router.beforeEach((to, from) => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
