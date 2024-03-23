import { atom } from "recoil";

export const diaryState = atom({
  key: "diaryState",
  default: {
    diaryType: "",
    emotion: "",
    voiceText: ""
  }
});
