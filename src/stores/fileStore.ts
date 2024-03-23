import { atom } from "recoil";

export const fileState = atom({
  key: "fileState",
  default: {}
});

export const encoderState = atom({
  key: "encoderState",
  default: false
});
