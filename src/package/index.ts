/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-09 09:33:32
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-09 10:05:14
 */
import bar from '@/package/bar';
import { App, DefineComponent } from 'vue';

const component: Array<DefineComponent | any> = [bar];
const version = '0.0.1';

const install = (app: App) => {
  component.map((item) => {
    app.use(item);
  });
};

export default {
  install,
  version,
};
