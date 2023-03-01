import type { App } from "vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

export default {
  install(app: App) {
    app.use(VXETable);
  },
};
