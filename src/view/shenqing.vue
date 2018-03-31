<template>
    <div>
      <div class="header">
        <mt-header fixed title="申请提现">
          <router-link to="/balance" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="content">
        <inputdidi class="item" label="资金余额:" type="text" v-model="cap"></inputdidi>
        <inputdidi class="item" label="提现金额:" type="text" v-model="dep"></inputdidi>
        <inputdidi class="item" label="户名:" type="text" v-model="usernames"></inputdidi>
        <inputdidi class="item" label="开户行:" type="text" v-model="opens"></inputdidi>
        <inputdidi class="item" label="银行账号:" type="text" v-model="bankacc"></inputdidi>
        <inputdidi class="item" label="开户行地址:" type="text" v-model="bankadd"></inputdidi>
      </div>
      <div class="btn">
        <mt-button type="primary" size="large" class="logins">申请提现</mt-button>
      </div>
    </div>
</template>
<script>
import inputdidi from '@/components/input-didi.vue'
export default {
  name: 'shenqing',
  components: {
    inputdidi
  },
  data () {
    return {
      cap: '5元',
      dep: '三毛',
      usernames: '不知道',
      opens: '中国',
      bankacc: '123',
      bankadd: '地球'
    }
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
