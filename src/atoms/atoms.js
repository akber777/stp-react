import { atom } from "recoil";

export const settingsState = atom({
  key: "settingsState",
  default: null,
});

export const searchResultState = atom({
  key: "searchResultState",
  default: null,
});

export const myLang = atom({
  key: "myLang",
  default: localStorage.getItem("i18nextLng"),
});

export const helmetState = atom({
  key: "helmetState",
  default: {},
});
