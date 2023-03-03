import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useLogin } from "@/stores/user";

import Layout from "@/layout/Layout.vue";
import mediaRoute from "./modules/media";
import orderRoute from "./modules/order";
import permissionRoute from "./modules/permission";

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

// const allowRoutes = ["login"];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 进度条的配置
// nprogress.configure({});

router.beforeEach((to, from, next) => {
  nprogress.start();

  const { isLogin } = useLogin();
  if (to.name !== "login" && !isLogin)
    next({ path: "/login", query: { redirect: to.fullPath } });
  else {
    if (to.name === "login" && isLogin) next({ name: "home" });
    else next();
  }
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
