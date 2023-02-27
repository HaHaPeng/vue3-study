import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () => {
  const isCollapse = ref(true);
  const getIsCollapse = computed(() => (isCollapse.value ? "Fold" : "Expand"));

  function setIsCollapse() {
    isCollapse.value = !isCollapse.value;
  }

  return { isCollapse, getIsCollapse, setIsCollapse };
});
