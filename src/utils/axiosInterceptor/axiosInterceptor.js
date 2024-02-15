import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://your-api-endpoint.com',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('your-token-key'); // Replace with your token storage mechanism
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }

        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {

        console.error('Response error:', error);
        return Promise.reject(error);
    }
);
