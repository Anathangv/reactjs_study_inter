import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@Inter:Token") || "";
  console.log("API/interceptor/token:", token);

  const configHeaders = config;
  configHeaders.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});
