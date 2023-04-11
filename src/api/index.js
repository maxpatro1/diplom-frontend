import axios, { AxiosInstance } from 'axios';
import Cookie from 'js-cookie';
import store from '@/store';
import { REFRESH_COOKIE_NAME } from '@/constants/cookieNames';
import { REFRESH_URL } from './urls';
import { isTokenExpired } from './isTokenExpired';

const settings = {
  baseURL: '',
  withCredentials: true
};

function addInterceptors(instance) {
  // instance.interceptors.request.use(async (config) => {
  //   const { isAuthorized, token } = store.getters;
  //   if (config.url === REFRESH_URL) {
  //     const refresh = Cookie.get(REFRESH_COOKIE_NAME);
  //     // @ts-ignore
  //     config.headers['X-Refresh-Token'] = refresh;
  //     return config;
  //   }

  //   if (isAuthorized) {
  //     if (isTokenExpired(token.expires)) {
  //       const newToken = await store.dispatch('refreshToken');
  //       // @ts-ignore
  //       config.headers['X-Access-Token'] = newToken.access;
  //     } else {
  //       // @ts-ignore
  //       config.headers['X-Access-Token'] = token.access;
  //     }
  //   }

  //   return config;
  // });
}

const axiosInstance = axios.create(settings);

addInterceptors(axiosInstance);

export default axiosInstance;
