/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-27 10:21:51
 * @Description: api
 */
import { JAxios } from '../index';

export const request = new JAxios({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
  timeout: 20 * 1000,
  interceptors: {
    reqSuccessInterceptor: config => {
      console.log('局部请求成功拦截');
      return config;
    },
    resSuccessInterceptor: res => {
      console.log(res, '局部响应成功拦截');
      return res;
    },
    resErrorInterceptor: err => {
      return Promise.reject(err);
    }
  }
});

interface data {
  keywords: string;
}

export const querySongs = function ({ keywords }: data) {
  return request.post('http://192.168.37.122:3000/search', { keywords });
};
