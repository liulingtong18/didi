<template>
  <div>
    <div class="header">
      <mt-header fixed title="快速注册">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="content">
      <inputdidi class="login1" label="客户姓名:" type="text" v-model="name"></inputdidi>
      <inputdidi class="login1" label="手机号码:" type="tel" v-model="phone" name="phone"></inputdidi>
      <inputdidi class="login1" label="密码:" type="password" v-model="pwd" name="pwd"></inputdidi>
      <inputdidi class="login1" label="身份证号:" type="text" v-model="idNum" name="idNum"></inputdidi>
      <div class="login1">
        <span>客户类型:</span>
        <select  class="sel" name="type" v-model="type">
          <option value="0">钻石会员</option>
          <option value="1">黄金会员</option>
          <option value="2">白银会员</option>
        </select>
      </div>
      <div class="login1">
        <span>员工类型:</span>
        <select class="sel" name="usertype" v-model="usertype">
          <option value="0">员工</option>
          <option value="1">客户</option>
        </select>
      </div>
      <p class="login1"><span>性别:</span>
        <input class="sex1"  type="radio" name="sex" v-model="sex" value="1">男
        <input class="sex2" type="radio" name="sex" v-model="sex" value="0">女
      </p>
      <inputdidi class="login1" label="Email:" type="text" v-model="email" name="email"></inputdidi>
      <inputdidi class="login1" label="联系地址:" type="text" v-model="address" name="address"></inputdidi>
      <!--<p><input type="checkbox">我已同意一下条款 <a href="#">《用户使用协议》</a></p>-->
      <div class="btn">
        <mt-button type="primary" size="large" class="logins" @click="post">申请注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import inputdidi from '@/components/input-didi.vue'
export default {
  name: 'login',
  components: {
    inputdidi
  },
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      idNum: '',
      type: '0',
      sex: '',
      email: '',
      pwd: '',
      usertype: '0'
    }
  },
  methods: {
    post () {
      var data = {
        username: this.name,
        phone: this.phone,
        address: this.address,
        idNum: this.idNum,
        type: this.type,
        sex: this.sex,
        email: this.email,
        pwd: this.pwd,
        userType: this.usertype
      }
      this.$axios.post('register', data).then(res =>{
        if (res.data.ret) {
          alert('注册成功')
          this.$router.push({path: '/login'})
        }
      })
    }
  }
}
</script>

<style scoped>
.login1{
  padding: 15px;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
}
.btn {
  margin: 20px;
}
.sex1,.sel{
margin-left: 10px;
}
.sel{
  border-style: none;
  margin-left: 40px;
}
.btn .mint-button{
  background-color: #006db8;
}
</style>
