
<!--登录-->
<template>
  <div>
    <div class="header">
      <mt-header fixed title="登录">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="wrapper">
      <div></div>
    </div>
    <div class="login" @click="show">
      <inputdidi class="login1" label="用户名:" type="text" v-model="userName"></inputdidi>
      <inputdidi class="login1 login2" label="密码:" type="password" v-model="passwords"></inputdidi>
    </div>
    <div class="btn">
      <mt-button type="primary" size="large" class="logins" @click="login">登录</mt-button>
      <mt-button type="default" size="large" class="reg" @click="reg">免费注册</mt-button>
    </div>
  </div>
</template>

<script>
import inputdidi from '@/components/input-didi.vue'
import bus from '../util/bus'
export default {
  name: 'register',
  components: {
    inputdidi
  },
  data () {
    return {
      userName: '18331563573',
      passwords: '123456',
      screenHeight1: '',
      hidshow: true
      // shows: false,
      // isshow: true
    }
  },
  methods: {
    login: function () {
      // // 定义一个ajex请求
      // // 第一步：新建一个ajex对象
      // var xhr = new XMLHttpRequest()
      // // 第二部创建一个新的HTTP请求
      // xhr.open('GET', 'http://didi.yaojunrong.com/api/user/isLogin')
      // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      // xhr.send()
      // xhr.onreadystatechange = () => {
      //   if (xhr.readyState === 4 && xhr.status === 200) {
      //     var res = xhr.response
      //     res = JSON.parse(res)
      //     console.log(xhr.responseText)
      //     console.log(res)
      //   }
      // }
      // ---------------------------------------
      // 第二种用axios 的方式
      // axios.get('http://didi.yaojunrong.com/api/user/isLogin').then(res => {
      //   console.log(res)
      //   if (!res.data.data.ret) {
      //     this.$router.push({path: '/register'})
      //   } else {
      //     console.log('是错的')
      //   }
      // })
      // -------------------
      // 第三种自己将axios封装起来
      this.$axios.post('logins', {phone: this.userName, pwd: this.passwords}).then(res => {
        if (res.ret) {
          this.$router.push({path: '/mydidi'})
        } else {
          alert('账号或密码不正确')
          this.$router.push({path: '/login'})
        }
      })
      // bus.$emit('good', this.isshow)
    },
    reg: function () {
      this.$router.push({path: '/register'})
    },
    show: function () {
      bus.$emit('goodCount', this.hidshow)
    }
  },
  mounted: function () {
    this.screenHeight1 = document.documentElement.clientHeight
    var that = this
    window.onresize = () => {
      return (() => {
        that.screenHeight = document.documentElement.clientHeight
      })()
    }
  },
  watch: {
    screenHeight: function (newval, oldval) {
      if (newval) {
        this.hidshow = false
      } else {
        this.hidshow = true
      }
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: 130px;
    line-height: 130px;
  }
  .wrapper>div{
    width: 90px;
    height: 90px;
    background-color: #fff;
    margin: 20px auto 0;
    border-radius: 50%;
  }
  .login{
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 8px;
    border: 1px solid #c5c5c5;
    background-color: #fff;

  }
  .login1{
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    font-weight: 700;
    padding-left: 14px;
  }
  .login2{
    border-top: 1px solid #c5c5c5;
  }
  .btn {
    margin: 20px 15px 0;
  }
  .logins{
    background-color: #006eb8;
  }
  .reg{
    margin-top: 20px;
    color: #006eb8;
  }
</style>
