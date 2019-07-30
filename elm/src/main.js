import Vue from 'vue'
import App from './App.vue'
import './elm.css'
// import './weul.css'
//全局引入
import axios from 'axios'
Vue.prototype.$axios = axios
//第三方组件

//首页
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


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')