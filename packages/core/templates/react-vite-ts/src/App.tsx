/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 14:16:53
 * @Description:
 */
import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';

const App = memo(() => {
  return (
    <div className="app">
      <header>header</header>
      <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
      <footer>footer</footer>
    </div>
  );
});

App.displayName = 'App';

export default App;
