import Vue from 'vue'
//定义组件
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//首页
import Home from './views/Home.vue' 
//登录
import Sign from './views/Sign.vue'
//注册 
import About from './views/About.vue'
//详情页
import Detall from './views/Detall.vue'
//订单
import Order from './views/Order.vue'
//我的
import Mine from './views/Mine.vue'


const routes = [{
    //首页
    path: '/',
    name: 'home',
    component: Home
  },
  {//注册
    path: '/about',
    name: 'about',
    component: About
  },
  {//详情页
    path: '/detall/:id',
    name: 'detall',
    component:Detall
  },
  {//登录
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {//订单
    path: '/order',
    name: 'order',
    component: Order
  },
  {//我的
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new VueRouter({
  // 你默认是哈希模式，改为H5 history模式
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
//全局守卫
router.beforeEach((to, from, next) => {
  let issign = 0;
  if(issign || to.path === '/' || to.path === '/sign'||to.name === 'detall'){
    next();
  }else{
    router.push({
      name:"sign"
    })
  }
})

export default router