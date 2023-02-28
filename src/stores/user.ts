import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { IUserInfo } from "@/api/types/common";
import { getItem, setItem, clearStore } from "@/utils/storage";
import CONSTANTS from "@/utils/constants";

export const useLogin = defineStore("userInfo", () => {
  const tmpToken = getItem<string>(CONSTANTS.TOKEN);
  const token = ref(tmpToken);
  const tmpInfo = getItem<IUserInfo>(CONSTANTS.USER_INFO);
  const userInfo = ref(tmpInfo);

  const isLogin = computed(() => Boolean(token.value));

  function setUserInfo(data: IUserInfo) {
    userInfo.value = data;
    setItem(CONSTANTS.USER_INFO, data);
  }
  function setToken(data: string) {
    token.value = data;
    setItem(CONSTANTS.TOKEN, data);
  }
  function clearSessionStore() {
    clearStore();
  }

  return { setUserInfo, setToken, clearSessionStore, userInfo, token, isLogin };
});
