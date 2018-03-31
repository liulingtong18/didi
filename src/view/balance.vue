<!--余额-->
<template>
    <div>
      <div class="header">
        <mt-header fixed title="账户余额">
          <router-link to="/mydidi" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="content">
        <span>￥15000<span>.00</span> </span>
      </div>
      <div class="btn">
        <mt-button type="primary" size="large" class="logins" @click="show">申请提现</mt-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'balance',
  data () {
    return {}
  },
  methods: {
    show () {
      this.$router.push({path: '/shenqing'})
    }
  },
  mounted () {
    this.$axios.get('login').then(res => {
      if (!res.data.ret) {
        this.$router.push({path: '/login'})
      } else {
        this.$router.push({path: '/balance'})
      }
    })
  }
}
</script>

<style scoped>
.content{
  background: #fff;
  height: 110px;
  text-align: center;
  line-height: 110px;
}
.content>span {
  font-size: 30px;
  color: #ef6e6e;
}
.content>span>span{
 font-size: 15px;
  padding-left: 5px;
}
.btn{
  margin-top: 10px;
  padding: 40px;
  background: #fff;
}
.btn .mint-button--primary{
  background-color: #006eb4;
}
</style>
