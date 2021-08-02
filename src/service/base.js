import axios from 'axios';
import store from '@/store/index';

export const api = axios.create({
  baseURL: 'https://originmedia2030.com/api/', // 域名
  // baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false, //跨域請求是否要帶上 cookie
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    _mode: process.env.VUE_APP_DEV_MODE,
    _domain: process.env.VUE_APP_DEV_DOMAIN,
    _device: 'mobile',
  },
  timeout: 10000,
});

// http request 欄截
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // store.commit("initial/SET_GLOBAL_LOADING", true);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor 異常處理
api.interceptors.response.use(
  function (response) {
    // Do something with response data
    // store.commit("initial/SET_GLOBAL_LOADING", true);
    // console.log("base response: ", response);
    return response;
  },
  function (error) {
    // Do something with response error
    if (error && error.response) {
      switch (error.response.status) {
        case 404:
          console.log('找不到該頁面');
          break;
        case 500:
          console.log('伺服器出錯');
          break;
        case 503:
          console.log('服務失效');
          break;
        default:
          console.log(`連接錯誤${err.response.status}`);
      }
    } else {
      console.log('連接到服務器失敗');
    }
    return Promise.reject(error.response);

    // store.commit("initial/SET_GLOBAL_LOADING", true);
    // return Promise.reject(error);
  }
);
