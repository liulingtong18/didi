<template>
  <div>
    <div class="header">
      <mt-header fixed title="修改密码">
        <router-link to="/mydidi" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="content">
      <inputdidi class="item" label="旧密码:" type="text" v-model="oldpwd"></inputdidi>
      <inputdidi class="item" label="新密码:" type="password" v-model="newpwd"></inputdidi>
      <inputdidi class="item" label="确认新密码:" type="password" v-model="newpwds"></inputdidi>
    </div>
    <div class="btn">
      <mt-button type="primary" size="large" class="logins" @click="change">确认修改</mt-button>
    </div>
  </div>
</template>

<script>
import inputdidi from '@/components/input-didi'
export default {
  name: 'changepwd',
  components: {
    inputdidi
  },
  data () {
    return {
      oldpwd: '',
      newpwd: '',
      newpwds: ''
    }
  },
  methods: {
    change () {
      if (this.newpwd === this.newpwds) {
        this.$axios.post('update', {pwd: this.oldpwd, newPwd: this.newpwd}).then(res => {
          console.log(res.data)
          if (res.ret) {
            alert('密码修改成功')
          }
        })
      } else {
        alert('两次密码不一致，请重新输入')
      }
    }
  },
  mounted () {
    this.$axios.get('login').then(res => {
      if (!res.ret) {
        this.$router.push({path: '/login'})
      } else {
        this.$router.push({path: '/changepwd'})
      }
    })
  }
}
</script>

<style scoped>
  .content{
    background: #fff;
    text-align: right;
  }
  .item{
    padding: 15px 10px ;
    border-bottom: 1px solid #e5e5e5;
  }
  .btn{
    margin-top: 10px;
    padding: 25px;
  }
  .btn .mint-button--primary{
    background-color: #006eb4;
  }
</style>
