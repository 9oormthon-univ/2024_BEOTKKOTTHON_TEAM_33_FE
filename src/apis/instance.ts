import axios, { AxiosInstance } from "axios";

export const imgInstance: AxiosInstance = axios.create({
  baseURL: `https://picsum.photos/v2`,
  timeout: 5000
});
