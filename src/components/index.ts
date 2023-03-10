import type { App } from "vue";
import Pagination from "./Pagination.vue";
import Card from "./Card.vue";
import PageContainer from "./PageContainer.vue";
import DialogForm from "./DialogForm.vue";
import Draggable from "./Draggable.vue";
import TextEditor from "./TextEditor.vue";

export default {
  install(app: App) {
    app.component("SelfPagination", Pagination);
    app.component("SelfCard", Card);
    app.component("SelfPageContainer", PageContainer);
    app.component("SelfDialogForm", DialogForm);
    app.component("SelfDraggable", Draggable);
    app.component("SelfTextEditor", TextEditor);
  },
};
