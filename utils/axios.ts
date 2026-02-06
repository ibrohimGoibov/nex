import axios from "axios";

export const SaveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const GetToken = () => {
  return localStorage.getItem("token");
};

export const axiosRequest = axios.create({
  baseURL: "http://157.180.29.248:5505/api",
});

axiosRequest.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = GetToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
