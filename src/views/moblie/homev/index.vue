<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/moblie/homex" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to icon="edit">发布</van-tabbar-item>
      <van-tabbar-item to icon="records">课程</van-tabbar-item>
      <van-tabbar-item to icon="contact">我的</van-tabbar-item>
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
