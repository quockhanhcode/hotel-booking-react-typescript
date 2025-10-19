import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
});

// Add a request interceptor
api.interceptors.request.use(
  function (config: any) {
    const userLocal: string | null = localStorage.getItem("user");
    const userPars = userLocal ? JSON.parse(userLocal) : null;
    const accessToken = userPars ? userPars.accessToken : null;
    return {
      ...config,
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MyIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc2OTA0MDAwMDAwMCIsIm5iZiI6MTc0MTg4ODgwMCwiZXhwIjoxNzY5MTkxMjAwfQ.kBKKhbMMH6Pqm5TdwA9DOp9z6srHiyc9KnYL_084PPo",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
