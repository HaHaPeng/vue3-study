import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
