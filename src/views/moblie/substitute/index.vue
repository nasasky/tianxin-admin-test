<template>
  <div class="ban">
    <van-row>
      <van-col span="24">
        <div class="admin">
          <div class="touxiang">
            <van-icon name="manager"/>
            <h6 class="touxiang-h6">寺庙管理员</h6>
          </div>
        </div>
      </van-col>
    </van-row>

    <van-row gutter="20" style="margin-top:20px;">
      <router-link :to="{name:'moblie/publish',params:{id:'1'}}">
        <van-col span="6">
          <van-icon name="shop-o"/>
          <h6>新增寺庙</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/sengren',params:{}}">
        <van-col span="6">
          <van-icon name="user-o"/>
          <h6>新增僧人</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/fabunews',params:{}}">
        <van-col span="6">
          <van-icon name="edit"/>
          <h6>发布资讯</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/fabushangpin',params:{}}">
        <van-col span="6">
          <van-icon name="balance-pay"/>
          <h6>发布商品</h6>
        </van-col>
      </router-link>
    </van-row>

    <van-row gutter="20">
      <router-link :to="{name:'moblie/course',params:{}}">
        <van-col span="6">
          <van-icon name="hotel-o"/>
          <h6>寺庙列表</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/renlie',params:{}}">
        <van-col span="6">
          <van-icon name="user-circle-o"/>
          <h6>僧人列表</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/newslie',params:{}}">
        <van-col span="6">
          <van-icon name="notes-o"/>
          <h6>资讯列表</h6>
        </van-col>
      </router-link>

      <router-link :to="{name:'moblie/shanglie',params:{}}">
        <van-col span="6">
          <van-icon name="bag-o"/>
          <h6>商品列表</h6>
        </van-col>
      </router-link>
    </van-row>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.van-icon-shop-o {
  color: #0092ff;
  font-size: 35px;
}

.van-icon-user-o {
  color: #fb7600;
  font-size: 35px;
}

.van-icon-edit {
  color: #4bcf3a;
  font-size: 35px;
}
.van-icon-balance-pay {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-user-circle-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-notes-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-bag-o {
  color: #fb5f00;
  font-size: 35px;
}

.van-icon-hotel-o {
  color: #4bcf3a;
  font-size: 35px;
}

.van-icon-manager {
  color: white;
  font-size: 50px;
}
.touxiang h6 {
  font-size: 16px;
  color: white;
  margin-top: 10px;
}

.admin {
  position: relative;
  width: 100%;
  height: 180px;
  background: #0082fe;
}

.touxiang {
  position: absolute;
  margin: auto;
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;
  top: 40px;
  text-align: center;
}
.touxiang-h6 {
  float: left;
  width: 100%;
}
.ban {
  margin-top: 0px;
}
.van-col--6 {
  text-align: center;
}
.van-col--6 h6 {
  color: black;
}
.van-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
h6 {
  margin-top: 10px;
}
</style>
