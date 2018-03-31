<template>
 <div>
   <div class="header">
     <mt-header fixed title="注册客户">
       <router-link to="/mydidi" slot="left">
         <mt-button icon="back"></mt-button>
       </router-link>
     </mt-header>
   </div>
   <div class="content">
     <inputdidi class="item" label="客户姓名:" type="text" v-model="name"></inputdidi>
     <inputdidi class="item" label="手机号码:" type="tel" v-model="phone"></inputdidi>
     <inputdidi class="item" label="身份证号:" type="text" v-model="idNum"></inputdidi>
     <div class="item">
       <span>客户类型:</span>
       <select  class="sel" name="type" v-model="level">
         <option value="0">钻石会员</option>
         <option value="1">黄金会员</option>
         <option value="2">白银会员</option>
       </select>
     </div>
     <div class="item">
       <span>员工类型:</span>
       <select class="sel" name="usertype" v-model="status">
         <option value="正式客户">正式客户</option>
         <option value="三流客户">三流客户</option>
       </select>
     </div>
   </div>
   <div class="btn">
     <mt-button type="primary" size="large" class="logins" @click="add">完成注册</mt-button>
   </div>
 </div>
</template>

<script>
import inputdidi from '@/components/input-didi'
export default {
  name: 'clientreg',
  components: {
    inputdidi
  },
  data () {
    return {
      name: '',
      phone: '',
      idNum: '',
      level: '0',
      status: '正式客户'
    }
  },
  methods: {
    add () {
      this.$axios.post('add', {
        username: this.name,
        phone: this.phone,
        idNum: this.idNum,
        status: this.status,
        level: this.level
      }).then(res => {
        if (res.ret) {
          alert('注册成功')
        }
      })
    }
  },
  mounted () {
    this.$axios.get('login').then(res => {
      if (!res.ret) {
        this.$router.push({path: '/login'})
      } else {
        this.$router.push({path: '/clientreg'})
      }
    })
  }
}
</script>

<style scoped>
  .item{
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
  }
  .btn {
    margin: 20px;
  }
  .sel{
    margin-left: 10px;
  }
  .sel{
    border-style: none;
    margin-left: 40px;
  }
  .btn .mint-button--primary{
    background-color: #006eb4;
  }
</style>
