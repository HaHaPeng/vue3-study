import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "media",
  name: "media",
  component: () => import("@/views/media/Media.vue"),
  meta: {
    title: "媒体",
  },
};

export default routes;
