export const getItem = <T>(key: string) => {
  const data = window.sessionStorage.getItem(key);
  if (!data) return null;
  if (!/{/g.test(data)) return data;
  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
};

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  window.sessionStorage.removeItem(key);
};

export const clearStore = () => {
  window.sessionStorage.clear();
};
