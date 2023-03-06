import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Layout.vue";
const routes: RouteRecordRaw = {
  path: "/media",
  name: "media",
  component: Layout,
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/media/Media.vue"),
    },
  ],
  meta: {
    title: "媒体",
  },
};

export default routes;
