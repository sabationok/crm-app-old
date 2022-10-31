import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://635ec7b303d2d4d47af5fbcd.mockapi.io/',
});

export const token = {
  set(token) {
    marketApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    marketApi.defaults.headers.Authorization = ``;
  },
};

export default marketApi;
