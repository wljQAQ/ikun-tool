/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 11:40:53
 * @Description:
 */
import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));
const Test = lazy(() => import('@/views/Test'));

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/test',
    element: <Test />
  }
];

export default routes;
