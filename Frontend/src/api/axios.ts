import axios from "axios";
import { config, promise } from "zod";


export const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    timeout: 1000 * 5,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } return config
    }, (err: any) => {
        return Promise.reject(err);
    }
);

api.interceptors.response.use(
    (response) => response,
    (err: any) => {
        if (err.response?.status === 403) {
            localStorage.removeItem('accessToken');
            window.location.href = '/auth'
        }return Promise.reject(err);
    }
)


