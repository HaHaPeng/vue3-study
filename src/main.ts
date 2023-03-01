import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "./plugins/element-plus";
import VxeTable from "./plugins/vxe-table";
import Component from "./components";

import "./styles/index.scss";

const app = createApp(App);

app.use(ElementPlus);
app.use(VxeTable);
app.use(Component);
app.use(createPinia());
app.use(router);

app.mount("#app");
