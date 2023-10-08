/*
 * @Author: wlj
 * @Date: 2022-10-21 11:39:34
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 14:17:24
 * @Description:
 */
import { memo } from 'react';

const Test = memo(() => {
  return <div>你干嘛啊哈哈哎呦</div>;
});

Test.displayName = 'Test';

export default Test;
