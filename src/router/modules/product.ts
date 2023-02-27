import { type RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw = {
  path: "product",
  name: "product",
  component: RouterView,
  children: [
    {
      path: "list",
      name: "product-list",
      component: () => import("@/views/product/List.vue"),
    },
    {
      path: "classify",
      name: "product-classify",
      component: () => import("@/views/product/Classify.vue"),
    },
    {
      path: "attribute",
      name: "product-attribute",
      component: () => import("@/views/product/Attribute.vue"),
    },
    {
      path: "evaluate",
      name: "product-evaluate",
      component: () => import("@/views/product/Evaluate.vue"),
    },
  ],
};

export default routes;
