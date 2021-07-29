import axios from 'axios';
import { createBrowserHistory } from 'history';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.request.use(
  async (config) => {
    const userToken = localStorage.getItem('@NeoWallet:token');
    config.headers.Authorization = `Bearer ${userToken}`;

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

const history = createBrowserHistory();

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('@NeoWallet:token');
      history.push('/');
    }

    return Promise.reject(error);
  }
);

export default api;
