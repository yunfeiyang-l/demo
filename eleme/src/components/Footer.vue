<template>
  <div>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <!-- <van-tabbar-item icon="home-o" to="/"></van-tabbar-item> -->
      <!-- <van-tabbar-item icon="search" to="/about">注册</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>-->
      <!-- <van-tabbar-item icon="setting-o">标签</van-tabbar-item>  -->
      <van-tabbar-item 
      v-for="(k,index) in tabbarsItems" 
      :key="index"
      :icon="k.icon"
      v-text="k.title"
      :to="k.url"

      ></van-tabbar-item> 
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tabbarsItems:[{
        title:"首页",
        url:"/",
        icon:"home-o",
      },
      {
        title:"注册",
        url:"/about",
        icon:"search",
      },{
        title:"我的",
        url:"/mine",
        icon:"friends-o",
      },{
        title:"订单",
        url:"/order",
        icon:"setting-o",
      },]
    };
  }
};
</script>
