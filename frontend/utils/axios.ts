import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// const API_URL = process.env.API_URL;
// const API_URL = 'https://hts-backend-hgu5aotupq-as.a.run.app';
// const API_URL = 'http://localhost:5679';
// const API_URL = process.env.BACKEND_URL;
// console.log(API_URL);

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config: any) => {
    const token = localStorage.getItem('token');
    if (!token) return config;
    return {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${token}` },
    };
  },
  (err: AxiosError) => Promise.reject(err)
);

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    const status = err.response?.status;
    if (status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);
