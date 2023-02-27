import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "media",
  name: "media",
  component: () => import("@/views/media/Media.vue"),
};

export default routes;
