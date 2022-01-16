import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Client-ID ${process.env.REACT_APP_KEY}`;
  return config;
});
