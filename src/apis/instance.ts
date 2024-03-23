import axios, { AxiosInstance } from "axios";

export const imgInstance: AxiosInstance = axios.create({
  baseURL: `https://picsum.photos/v2`,
  timeout: 5000
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000
});
