<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/homex/index" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to="/homex/ad" icon="edit">佛门资料</van-tabbar-item>
      <van-tabbar-item to="/homex/course" icon="records">佛门养生</van-tabbar-item>
      <van-tabbar-item to="/homex/mine" icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
li {
  position: relative !important;
}
</style>

