import axios, { AxiosInstance } from "axios";

export const imgInstance: AxiosInstance = axios.create({
  baseURL: `https://picsum.photos/v2`,
  timeout: 10000
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000
});

export const flaskInstance = axios.create({
  baseURL: import.meta.env.VITE_API_FLASK_BASE_URL,
  timeout: 50000
});
