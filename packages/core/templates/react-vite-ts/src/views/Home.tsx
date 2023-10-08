/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-27 10:23:04
 * @Description: 主页面
 */

import { querySongs } from '@/http/api/service';
import { memo } from 'react';

const Home = memo(() => {
  async function _querySongs() {
    const { code, result } = await querySongs({ keywords: 'test' });
    console.log(code, result);
  }
  return (
    <>
      <button onClick={() => _querySongs()}>搜索歌曲</button>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
