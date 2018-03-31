<template>
    <div>
      <div class="header">
        <mt-header fixed title="个人信息">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="head"></div>
          <p class="title">渣渣辉</p>
          <mt-button type="primary" size="normal" class="logins" @click="login">退出登录</mt-button>
        </div>
        <div class="content">
            <router-link class="item1" to="/clientserver">
              <i class="iconfont icon-weibiaoti1"></i><span>我的客户</span>
            </router-link>
            <router-link class="item1" to="/balance">
              <i class="iconfont icon-meiyuan8"></i><span>我的余额</span>
            </router-link>
            <router-link class="item1" to="/clientreg">
              <i class="iconfont icon-zhuce"></i><span>注册客户</span>
            </router-link>
            <router-link class="item1" to="/changepwd">
              <i class="iconfont icon-yuechi"></i><span>修改密码</span>
            </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'message',
  methods: {
    login () {
      this.$axios.post('logout', {code: 200, data: 'success', msg: 'success'}).then(res => {
        if (!res.data.ret) {
          this.$router.push({path: '/login'})
        }
      })
    },
    getdata () {
      this.$axios.get('login').then(res => {
        if (!res.data.ret) {
          this.$router.push({path: '/login'})
        } else {
          this.$router.push({path: '/mydidi'})
        }
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  text-align: center;
  background-image: url('../../static/img/11.png');
  background-size: 100%;
  padding-top: 10px;
}
.wrapper .head{
  height: 80px;
  width: 80px;
  margin: 0 auto;
  border: 1px solid #888888;
  border-radius: 50%;
  background: #fff;
}
.wrapper .title{
  padding: 10px;
  font-size: 16px;
}
.wrapper .mint-button{
  background-color: #006db8;
}
.content{
  padding: 12px;
}
.item1{
  display: block;
  line-height: 42px;
  height: 42px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin-bottom: 12px;
}
.item1 i{
  color: #ff6700;
  padding: 0 10px;
}
.item1 span{
  color: #888888;
}

</style>
