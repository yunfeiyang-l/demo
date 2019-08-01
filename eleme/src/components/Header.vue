<template>

  <div>
    <div class="dingwei" @click='bool'>定位</div>
    <div :class="{box}">地址</div>
    <van-search placeholder="请输入搜索关键词" 
    background='#0085ff' v-model="value"
    :class="{grabble}"
     />

    <!-- 轮播 -->
    <van-swipe indicator-color="white" >
      <van-swipe-item>
        <van-grid>
          <van-grid-item v-for="(k,index) in entriesComputed" :key="index" :icon="k.image_hash" :text="k.name" :to="`/detall/${index}`" />
        </van-grid>

      </van-swipe-item>
      <van-swipe-item>
        <van-grid>
          <van-grid-item v-for="(k,index) in entriesComputed1" :key="index" :icon="k.image_hash" :text="k.name" />
        </van-grid>
      </van-swipe-item>

    </van-swipe>

    <!-- 品质套餐 -->
    <div class="index-3xB2N_0">
      <div class="index-Q3GS5_0 index-1xT5J_0">
        <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
        <div class="index-2W67h_0">搭配齐全吃得好</div>
        <div class="index-1DFa7_0">
          <!---->立即抢购 &gt;
        </div><img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"></div>
      <!---->
    </div>
    <!-- 推荐商家分界线 -->
    <div id="shoplist-title" class="shoplist-title" style="">推荐商家</div>
    <!-- 下拉菜单 -->
    <van-dropdown-menu :class="{menFixed}">
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value2" :options="option1" />
      <van-dropdown-item v-model="value3" :options="option1" />
      <van-dropdown-item v-model="value4" :options="option1" />
    </van-dropdown-menu>
    <!-- 内容 -->

    <van-list style="margin-bottom:50px" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlistHas">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div class="index-shopInfo_1RRTZ0d" style="margin-bottom:20px" v-for="(t,index) in listHas" :key="index">
        <div class="logo-container_XoH2Vit_0">
          <div class="logo-main_21aInWJ_0">
            <img alt="潮汕肥肥油炸(大德路店)" class="logo-logo_3S1eSkn_0" :src="t.picUrl">
          </div>
          <div class="logo-newShop_PI2TWde_0">
            <span>新店</span>
          </div>
        </div>
        <div class="index-main_N3FfcSz">
          <section class="index-line_2-iYR1A">
            <h3 class="index-shopname_39Y7e3U">
              <span v-text="t.shopName"></span>
            </h3>
            <ul class="index-supportWrap_2lTcxr2">
              <span class="index-omit_1q3Tw0_"></span>
            </ul>
          </section>
          <section class="index-line_2-iYR1A">
            <div class="index-rateWrap_39dWx_g">
              <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                <div class="Rating-gray_1kpffd5_0"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"></div>
                <div class="Rating-actived_GBtiHkB_0" style="width: 92%;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="></div>
              </div>
              <span class="index-rate_WsK58g8">4.6</span>
              <span>月售1441单</span>
            </div>

          </section>
          <section class="index-line_2-iYR1A">
            <div class="index-moneylimit_2fCq9W5">
              <span>¥20起送</span>
              <span>夜间配送费¥2</span>

            </div>
            <div class="index-timedistanceWrap_2Dp_kzY">
              <span class="index-distanceWrap_1EPAlti">1.70km</span>
              <span>39分钟</span>
            </div>
          </section>
        </div>
      </div>
    </van-list>
    <!-- 底部 -->

  </div>

</template>
<script>
export default {
  data() {
    return {
      value: "",
      entries: [],
      menu: [],
      listHas: [],
      value1: 0,
      value2: 0,
      value3: 1,
      value4: 2,
      option1: [
        { text: "距离最近", value: 0 },
        { text: "品质联盟", value: 1 },
        { text: "帅选", value: 2 }
      ],
      list: [],
      loading: false,
      finished: false,
      menFixed:false,
      grabble:false,
      box:true,
    };
  },
  methods: {
    async getlistHas() {
      // 列表页
      let listHas = await this.$axios.post(
        "https://www.easy-mock.com/mock/5d403ed2447df940a974ad35/has_next/polist"
      );
      this.listHas = [...this.listHas, ...listHas.data.data.shopList];
      this.loading = false;
      if (this.listHas.length >= 60) {
        this.finished = true;
      }
    },
    bool(){
      this.box=!this.box
    }
  },
  computed: {
    entriesComputed() {
      return this.entries.slice(0, 8);
    },
    entriesComputed1() {
      return this.entries.slice(9, 14);
    }
  },
  async created() {
    //   宫格
    let entries = await this.$axios(
      "https://www.easy-mock.com/mock/5d4003874dd8bf2c109edfe5/list/entries"
    );
    this.entries = entries.data.entries;
    // 下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d4003874dd8bf2c109edfe5/list/batch_filter"
    );
    this.menu = menu.data.outside.inside_sort_filter;

    //进来调用一次axios请求
    this.getlistHas();
  },
  mounted() {
    window.onscroll = () => {
      // console.log(window.scrollY);
      if( window.scrollY >= 380 ){
        this.menFixed = true;
      }else{
        this.menFixed = false;
      }
      if(window.scrollY>=54){
        this.grabble=true
      }else{
        this.grabble=false
      }
    };
  },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((ele, index) => {
        ele.text = ele.name;
        ele.value = index;
        newMenu.push(ele);
      });
      return newMenu;
    }
  }
};
</script>

<style>
.van-ellipsis {
  font-size: 12px;
}
.menFixed{
  position: fixed;
  width: 100%;
  top: 54px;
  z-index: 10;
}
.dingwei{
  width: 100%;
  height: 54px;
  background: rgb(0, 133, 255);
}
.grabble{
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
}
.box{
  display: none;

}

</style>






