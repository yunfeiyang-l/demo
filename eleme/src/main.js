import Vue from 'vue'
import App from './App.vue'
import './elm.css'

import router from './router'
//全局引入
import axios from 'axios'
Vue.prototype.$axios = axios
//第三方组件
//搜索
import {
  Search
} from 'vant';
Vue.use(Search);
// 轮播
import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe).use(SwipeItem);
//宫格
import {
  Grid,
  GridItem
} from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(Grid).use(GridItem);

// 下拉菜单
import {
  DropdownMenu,
  DropdownItem
} from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
// 标签栏
import {
  Tabbar,
  TabbarItem
} from 'vant';
Vue.use(Tabbar).use(TabbarItem);
//列表
import {
  List
} from 'vant';
Vue.use(List);
import {
  Cell,
  CellGroup
} from 'vant';
Vue.use(Cell).use(CellGroup);
// 省市
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar).use(IndexAnchor);








Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')