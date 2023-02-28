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
      meta: {
        title: "列表",
      },
    },
    {
      path: "classify",
      name: "product-classify",
      component: () => import("@/views/product/Classify.vue"),
      meta: {
        title: "分类",
      },
    },
    {
      path: "attribute",
      name: "product-attribute",
      component: () => import("@/views/product/Attribute.vue"),
      meta: {
        title: "详情",
      },
    },
    {
      path: "evaluate",
      name: "product-evaluate",
      component: () => import("@/views/product/Evaluate.vue"),
      meta: {
        title: "评价",
      },
    },
  ],
  meta: {
    title: "产品",
  },
};

export default routes;
